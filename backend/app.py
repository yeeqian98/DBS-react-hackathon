from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'

db = SQLAlchemy(app) 

class User(db.Model):
    id = db.Column(db.Integer, primary_key = True) 
    username = db.Column(db.String(20), unique=True, nullable=False) 
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(60), nullable=False)

    def __repr__(self):
        return f"User('{self.username}', '{self.email}')"

@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')

@app.route("/api/members")
def members():
    return {'members': ["1","2","3"]}


if __name__ == '__main__':
    app.run(debug=True)