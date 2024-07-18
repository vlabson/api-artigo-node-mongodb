-----------------------------------------------------------
API ARTIGO
-----------------------------------------------------------

Projeto desenvolvido com linguagem Node.js, nele utilizo algumas ferramentas segue:
Express para fazer o gerenciamento das requisições, rotas e urls, entre outras funcionalidades. 
Banco de Dados MongoDB e Mongoose que fornece uma solução mais direta para modelar os dados.


-----------------------------------------------------------
PASSOS INICIAIS
-----------------------------------------------------------
//Criar o arquivo package
npm init

// Gerenciar as requisições, rotas e urls, entre outras funcionalidades
npm install express

// Instalando ferramenta para reiniciar automaticamente servidor node
npm install -D nodemon


-----------------------------------------------------------
PROJETO UTILIZA BANCO MONGO DB 
requisito ter o mogo instalado no computador
-----------------------------------------------------------

//instalar a dependecia do MongoDB
npm install --save mongodb

//Instalar o Mongoose - traduz os dados do banco de dados para objetos JavaScript para que possam ser utilizados por sua aplicação.
npm install --save mongoose


-----------------------------------------------------------
COMO RODAR PROJETO BAIXADO 
-----------------------------------------------------------
OBS: após baixar o projeto.

// Instalar todas as dependencias indicadas pelo package.json com o comando:
npm install

//Rodar o projeto usando o nodemon
nodemon app.js ou nomedoarquivo.js

-----------------------------------------------------------
 ROTA LISTAR
-----------------------------------------------------------

GET http://localhost:8080/

-----------------------------------------------------------
 ROTA DELETAR
-----------------------------------------------------------

DELETE http://localhost:8080/id

-----------------------------------------------------------
 ROTA EDITAR
-----------------------------------------------------------

PUT http://localhost:8080/id
    
  BODY / JSON
    {
      titulo: req.body.titulo,
      conteudo: req.body.conteudo,
    }

-----------------------------------------------------------
 ROTA CADASTRA
-----------------------------------------------------------

POST http://localhost:8080/artigo
    
     BODY / JSON
    {
      titulo: req.body.titulo,
      conteudo: req.body.conteudo,
    }
