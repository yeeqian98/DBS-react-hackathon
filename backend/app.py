from flask import Flask, Blueprint, request
from flask_login.utils import login_user
from flask import Flask, render_template, jsonify, make_response
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin, LoginManager
import json

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'

db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key = True) 
    username = db.Column(db.String(20), unique=True, nullable=False) 
    password = db.Column(db.String(60), nullable=False)
    first_name = db.Column(db.String(20))
    last_name = db.Column(db.String(20))
    postal_code = db.Column(db.Integer)
    gender = db.Column(db.String(20))
    created_at = db.Column(db.DateTime)

    def check_password(self, password):
        """Check hashed password."""
        return check_password_hash(self.password, password)

    def set_password(self,password):
        self.password = generate_password_hash(password)

    def __repr__(self):
        return f"User('{self.username}')"

class Product(db.Model):
    id = db.Column(db.Integer, primary_key = True) 
    title = db.Column(db.String(120))
    price = db.Column(db.Integer)
    description = db.Column(db.String(120))
    category_id = db.Column(db.String(120))
    image = db.Column(db.String(120))
    qty = db.Column(db.Integer)

    @property
    def serialize(self):
        return {
            'id': self.id,
            'title': self.title,
            'price': self.price,
            'description': self.description,
            'category_id': self.category_id,
            'image': self.image,
            'qty': self.qty
        }

class Category(db.Model):
    id = db.Column(db.Integer, primary_key = True) 
    name = db.Column(db.String(20))
    description = db.Column(db.String(20))
    image = db.Column(db.String(20))

    @property
    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'image': self.image,
        }    

@app.route("/api/login", methods=['POST'])
def login():
    if request.method == 'POST':
        username = json.loads(request.data)['username']
        password =json.loads(request.data)['password']
        print(json.loads(request.data)['username'])
        print(password)
        user = User.query.filter_by(username = username).first()
        print(check_password_hash(user.password, password))
        if user:
            if user.username == username and user.password == password:
                return{
                    'statusCode': 200,
                    'message' : username
                }
        else:
            return{
                'statusCode': 500,
                'message' : 'Invalid username/password'
            }

        
@app.route("/api/members",methods=['GET', 'POST'])
def members():
    return {'members': ["1","2","3"]}

# @app.route('/', methods=['GET', 'POST'])
# def index():
#     pass
#     pass
#     return render_template('index.html')

@app.route("/api/products",methods=['GET'])
def products():
    data = Product.query.all()

    return jsonify(json_list = [i.serialize for i in data])

@app.route("/api/products/<int:productid>",methods=['GET'])
def product(productid):
    data = Product.query.filter_by(id=productid).all()

    return jsonify(json_list = [i.serialize for i in data])


if __name__ == '__main__':
    app.run(debug=True)