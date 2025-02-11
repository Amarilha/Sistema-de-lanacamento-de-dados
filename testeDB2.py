import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv

# Carregar variáveis de ambiente do .env
load_dotenv()

app = Flask(__name__)

# Configuração segura da conexão com o MySQL
DB_USER = os.getenv("DB_USER")
DB_PASSWORD = os.getenv("DB_PASSWORD")
DB_HOST = os.getenv("DB_HOST")
DB_NAME = os.getenv("DB_NAME")

if not all([DB_USER, DB_PASSWORD, DB_HOST, DB_NAME]):
    raise ValueError("Credenciais do banco de dados não foram carregadas corretamente!")

# String de conexão segura
app.config["SQLALCHEMY_DATABASE_URI"] = f"mysql+pymysql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}/{DB_NAME}"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# Inicializa o banco de dados
db = SQLAlchemy(app)

# Testa a conexão ao banco de dados
def testar_conexao():
    with app.app_context():
        try:
            db.engine.connect()
            print("✅ Conexão bem-sucedida ao banco de dados!")
        except Exception as e:
            print(f"❌ Erro ao conectar ao banco de dados: {e}")

if __name__ == "__main__":
    testar_conexao()
