import sqlite3
import os

def add_user_to_db(name, income, goal):
    conn = sqlite3.connect("db.sqlite3")
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO users (name, income, goal) VALUES (?,?,?)",
        (name, income, goal)
    )
    user_id = cursor.lastrowid
    conn.commit()
    conn.close()
    return user_id

def get_user_by_id(user_id):
    conn = sqlite3.connect("db.sqlite3")
    conn.row_factory = sqlite3.Row #returns the fetched data in dictionary instead of tuples
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM users WHERE id = ?", (user_id,))
    user = cursor.fetchone()
    print(user)
    conn.close()
    return user

def add_expense_by_user(user_id, category, date, amount):
    conn = sqlite3.connect("db.sqlite3")
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO expenses (user_id, category, date_time, amount) VALUES (?,?,?,?)", (user_id, category, date, amount)
    )
    conn.commit()
    conn.close()
    
def get_user_list_expenses(user_id):
    conn = sqlite3.connect("db.sqlite3")
    conn.row_factory = sqlite3.Row 
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM expenses WHERE user_id = ?", (user_id,))
    expenses = cursor.fetchall()
    conn.close()
    return [dict(expense) for expense in expenses]