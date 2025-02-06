# Usa uma imagem base do Python
FROM python:3.9-slim

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos de dependências
COPY requirements.txt .

# Instala as dependências
RUN pip install --no-cache-dir -r requirements.txt

# Copia o restante do código para o contêiner
COPY . .

# Expõe a porta 5000 (porta padrão do Flask)
EXPOSE 5000

# Comando para rodar a aplicação
CMD ["python", "app.py"]