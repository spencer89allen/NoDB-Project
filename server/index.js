var express = require('express');
//var cors = require('cors');// TODO: INSTALL CORS
var bodyParser = require('body-parser');

var jc = require('./controllers/joke_controller')


var app = express();

// app.use(cors());
app.use(bodyParser.json())

//endpoints

// app.post('/api/teams/:color/members')
// app.put('/api/teams/:color/members/:index')

app.post('/api/jokes', jc.create)
app.delete('/api/jokes/:index', jc.delete)
app.get('/api/jokes/list', jc.get)
app.put('/api/jokes/:index', jc.edit)

//dummy endpoints
// app.get('/get/names', (request, response) => {
//     let names = ['Spencer', 'Anne', 'Kevin']
//     response.send(names)
// })

var port = 4001
app.listen(port, () => { console.log(`Server is listening on port: ${port}`) } )
