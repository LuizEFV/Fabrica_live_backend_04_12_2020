const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());

const port = 3000;


app.get('/hello', (req, res) => {
  res.send('Hello World');
})

/*
Lista de endpoints na aplicação
CRUD: Create, Read (Single & All), Update and Delete
- [GET] /mensagens - Retorna a lista de mensagens
- [POST] /mensagens - Cria uma nova mensagem
- [PUT] /mensagens/{id} - Atualiza uma mensagem pelo ID
- [DELETE] /mensagens/{id} - Remover uma mensagem pelo ID 
*/

const mensagens = [
    "Essa é a primeira mensagem",
    "Essa é a segunda mensagem"
];

/* - [GET] /mensagens - Retorna a lista de mensagens */

app.get('/mensagens', (req, res) => {
    res.send(mensagens);
})

/* - [GET] /mensagens - Retorna a lista de mensagens */

app.get('/mensagens/:id', (req, res) => {
        const id = req.params.id - 1;
        const mensagem = mensagens[id];
        res.send(mensagem);
});

/* [POST] /mensagens - Cria uma nova mensagem */
app.post('/mensagens', (req, res) => {
    const mensagem = req.body.mensagem;

    mensagens.push(mensagem);

    res.send(`Mensagem criada com sucesso: '${mensagem}'.`);
});

/* - [PUT] /mensagens/{id} - Atualiza uma mensagem pelo ID */

app.put('/mensagens/:id', (req, res) =>{
    const id = req.params.id - 1;

    const mensagem = req.body.mensagem;

    mensagens[id] = mensagem;

    res.send(`Mensagem atualizada com sucesso: '${mensagem}'.`);
})

app.listen(port, () => {
    console.info(`App rodando em http://localhost:${port}` );
});

