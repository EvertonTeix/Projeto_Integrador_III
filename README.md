# Projeto Integrador III

# Passo a Passo para Rodar o Projeto
## Clone o Repositório:
     git clone https://github.com/larissatx11/PI3
     cd seu-repositorio
## Configure a String de Conexão no arquivo appsettings.json (coloque as informações do seu banco):
    "ConnectionStrings": {
       "DefaultConnection": "Server=localhost;Database=fast_route_BD;User=root;Password=SUA-SENHA;"
     }
## Navegue até a pasta do backend e instale os pacotes:
     cd fast_route_backend
     dotnet restore
## Aplique as Migrations para configurar o banco de dados:
     dotnet ef database update
## Rodar o Backend
     dotnet run
## Navegue até a pasta do frontend e instale os pacotes:
     cd ../fast_route
     npm install
     npm install lucide-react
     npm run dev
