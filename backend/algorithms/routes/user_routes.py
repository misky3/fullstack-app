from flask import Blueprint, jsonify, request
from database.user_db import add_user_to_db, get_user_by_id

user_bp = Blueprint('user', __name__)

@user_bp.route('/add-user', methods=['POST'])
def add_user():
    data = request.get_json()
    name = data.get('name')
    income = data.get('income')
    goal = data.get('goal')
    
    if not name or not income or not goal:
        return jsonify({'error': 'All fields are required'}), 400
    
    user_id = add_user_to_db(name, income, goal)
    return jsonify({'status': 'User added successfully', 'userId': user_id}), 201

@user_bp.route('/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = get_user_by_id(user_id)
    if user is None:
        return jsonify({'error': 'User not Found'}), 404
    
    return jsonify({
        'id':user['id'],
        'name': user['name'],
        'income': user['income'],
        'goal': user['goal']
    })