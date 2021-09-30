from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy

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

class Category(db.Model):
    id = db.Column(db.Integer, primary_key = True) 
    name = db.Column(db.String(20))
    description = db.Column(db.String(20))
    image = db.Column(db.String(20))



# @app.route('/', methods=['GET', 'POST'])
# def index():
#     pass
#     pass
#     return render_template('index.html')

@app.route("/api/members")
def members():
    return {'members': ["1","2","3"]}

# @app.route*"/api/login")

if __name__ == '__main__':
    app.run(debug=True)