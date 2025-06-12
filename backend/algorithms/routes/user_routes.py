from flask import Blueprint, jsonify, request
from database.user_db import add_user_to_db, get_user_by_id, add_expense_by_user, get_user_list_expenses

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
    
@user_bp.route('/users/add-expense', methods=['POST'])
def add_expense():
    data = request.get_json()
    user_id = data.get('user_id')
    category = data.get('category')
    date_time = data.get('date_time')
    amount = data.get('amount')
    
    if not category or not date_time or not amount:
        return jsonify({'error': 'All fields are required'}), 400
    
    add_expense_by_user(user_id, category, date_time, amount)
    return jsonify({'status': 'Expense added successfully'}), 201

@user_bp.route('/users/<int:user_id>/expenses', methods=['GET'])
def get_expenses(user_id):
    try:
        data = get_user_list_expenses(user_id)
        return jsonify(data), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
    if __name__ == "__main__":
        app.run(debug=True)
    