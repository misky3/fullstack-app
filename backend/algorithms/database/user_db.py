import sqlite3
import os

def add_user_to_db(name, income, goal):
    conn = sqlite3.connect("db.sqlite3")
    cursor = conn.cursor()
    print("name ", name)
    print("income ", income)
    cursor.execute(
        "INSERT INTO users (name, income, goal) VALUES (?,?,?)",
        (name, income, goal)
    )
    user_id = cursor.lastrowid
    conn.commit()
    conn.close()
    return user_id

def get_user_by_id(user_id):
    print(user_id)
    conn = sqlite3.connect("db.sqlite3")
    conn.row_factory = sqlite3.Row #returns the fetched data in dictionary instead of tuples
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM users WHERE id = ?", (user_id,))
    user = cursor.fetchone()
    print(user)
    conn.close()
    return user