from flask import Flask, render_template, jsonify, make_response
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'

db = SQLAlchemy(app) 

class Customers(db.Model):
    id = db.Column(db.Integer, primary_key = True) 
    username = db.Column(db.String(20), unique=True, nullable=False) 
    password = db.Column(db.String(60), nullable=False)
    first_name = db.Column(db.String(20))
    last_name = db.Column(db.String(20))
    postal_code = db.Column(db.Integer)
    gender = db.Column(db.String(20))
    created_at = db.Column(db.DateTime)

    def __repr__(self):
        return f"User('{self.username}', '{self.email}')"

class Product(db.Model):
    id = db.Column(db.Integer, primary_key = True) 
    title = db.Column(db.String(20))
    price = db.Column(db.Integer)
    description = db.Column(db.String(20))
    category_id = db.Column(db.String(20))
    image = db.Column(db.String(20))
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

@app.route("/api/members")
def members():
    return {'members': ["1","2","3"]}

# @app.route('/', methods=['GET', 'POST'])
# def index():
#     pass
#     pass
#     return render_template('index.html')

@app.route("/api/home")
def home():
    data = Product.query.all()

    return jsonify(json_list = [i.serialize for i in data])

if __name__ == '__main__':
    app.run(debug=True)