from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Usuário e senha fictícios para autenticação
USERS = {
    "admin": "1234",
    "user": "senha"
}

@app.route('/')
def login_page():
    return render_template('login.html')

@app.route('/auth', methods=['POST'])
def auth():
    username = request.form.get('username')
    password = request.form.get('password')
    
    if username in USERS and USERS[username] == password:
        return redirect(url_for('admin_dashboard'))
    else:
        return "Usuário ou senha inválidos", 401

@app.route('/admin_dashboard')
def admin_dashboard():
    return render_template('admin_dashboard.html')

if __name__ == '__main__':
    app.run(debug=True)
