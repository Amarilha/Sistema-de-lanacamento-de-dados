import mysql.connector
from dotenv import load_dotenv

# Carregar variáveis de ambiente do .env
load_dotenv()

# Configurações de conexão
config = {
    'user': 'admin' ,           # Nome de usuário do MySQL
    'password': 'Admin_segura11',  # Senha do MySQL
    'host': 'localhost',      # Endereço do servidor (localhost se for local)
    'database': 'SLD',  # Nome do banco de dados
    'raise_on_warnings': True
}

# Conectar ao banco de dados
try:
    conexao = mysql.connector.connect(**config)
    print("Conexão ao MySQL realizada com sucesso!")

    # Criar um cursor para executar comandos SQL
    cursor = conexao.cursor()

    # Exemplo: Executar uma consulta
    cursor.execute("SELECT * FROM users")
    resultados = cursor.fetchall()

    # Exibir os resultados
    for linha in resultados:
        print(linha)

except mysql.connector.Error as err:
    print(f"Erro ao conectar ao MySQL: {err}")

finally:
    # Fechar a conexão
    if conexao.is_connected():
        cursor.close()
        conexao.close()
        print("Conexão ao MySQL encerrada.")