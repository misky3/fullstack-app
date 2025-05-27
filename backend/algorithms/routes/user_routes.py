from flask import Blueprint, jsonify, request
from database.user_db import add_user_to_db

user_bp = Blueprint('user', __name__)

@user_bp.route('/add-user', methods=['POST'])
def add_user():
    data = request.get_json()
    name = data.get('name')
    income = data.get('income')
    goal = data.get('goal')
    
    if not name or not income or not goal:
        return jsonify({'error': 'All fields are required'}), 400
    
    add_user_to_db(name, income, goal)
    return jsonify({'status': 'User added successfully'}), 201
    