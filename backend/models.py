from datetime import datetime
from __main__ import db

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key = True) 
    username = db.Column(db.String(20), unique=True, nullable=False) 
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(60), nullable=False)
    cashier = db.Column(db.Integer, nullable=False)
    contactno = db.Column(db.Integer)
    dateofbirth = db.Column(db.Integer)
    photo = db.Column(db.String)
    address = db.Column(db.String)