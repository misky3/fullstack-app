from flask import Flask
from routes.user_routes import user_bp

app = Flask(__name__)
# CORS(app)

# def get_db_connection():
#     conn = sqlite3.connect("db.sqlite3")
#     conn.row_factory = sqlite3.Row
#     return conn

# @app.route("/api/items", methods=["GET"])
# def get_items():
#     conn = get_db_connection()
#     items = conn.execute("SELECT * FROM items").fetchall()
#     conn.close()
#     return jsonify([dict(row) for row in items])

# @app.route("/api/items", methods=["POST"])
# def create_items():
#     data = request.get_json()
#     print("Receaived from frontend: ", data)
#     conn = get_db_connection()
#     conn.execute("INSERT INTO items (name) VALUES (?)", (data["name"],))
#     conn.commit()
#     conn.close()
#     return {"status": "Item added"}, 201

app.register_blueprint(user_bp, url_prefix='/api')

if __name__=="__main__":
    app.run(debug=True)