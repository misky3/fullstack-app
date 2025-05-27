import sqlite3

def add_user_to_db(name, income, goal):
    conn = sqlite3.connect("db.sqlite3")
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO users (name, income, goal) VALUES (?,?,?)",
        (name, income, goal)
    )
    conn.commit()
    conn.close()