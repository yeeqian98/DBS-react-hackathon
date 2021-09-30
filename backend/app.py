from flask import Flask, Blueprint, request
from flask_login.utils import login_user
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin, LoginManager

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
    gender = db.Column(db.String(6))
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
    title = db.Column(db.String(20))
    price = db.Column(db.Integer)
    description = db.Column(db.String(20))
    category_id = db.Column(db.String(20))
    image = db.Column(db.String(20))
    qty = db.Column(db.Integer)

class Category(db.Model):
    id = db.Column(db.Integer, primary_key = True) 
    name = db.Column(db.String(20))
    description = db.Column(db.String(20))
    image = db.Column(db.String(20))


@app.route("/api/members")
def members():
    return {'members': ["1","2","3"]}

@auth.route("/api/login", methods=['POST'])
def login():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        user = User.query.filter_by(username = username).first()
        if not user or not check_password_hash(user.password, password):
            return{
                'statusCode': 400,
                'message' : 'Invalid Login'
            }

        login_user(user)
        return{
                'statusCode': 200,
                'message' : username
            }

if __name__ == '__main__':
    app.run(debug=True)