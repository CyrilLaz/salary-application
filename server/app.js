const express = require('express');
// создаем объект приложения
const app = express();
const path = require('path');

const urlencodedParser = express.urlencoded({ extended: false });
// определяем обработчик для маршрута "/"

/*
app.get('/', function (request, response) {
  response.sendFile(path.resolve('../') + '/index.html');
  // response.sendFile(__dirname + '/script.js');
});*/
app.get('/',function (request, response) {
  
  response.sendFile(path.resolve('../') + '/index.html');
  //response.sendFile(path.resolve('../') + '/script.js');
 // response.sendFile(__dirname + '/script.js');
});

app.use('/',function (request, response) {
  response.sendFile(path.resolve('../') + '/script.js');
 console.log(' отправили profile.html');
});

const jsonParser = express.json();
  
app.post("/user", jsonParser, function (request, response) {
    console.log(request.body);
    if(!request.body) return response.sendStatus(400);
     
    response.json(request.body); // отправляем пришедший ответ обратно
});


app.use("/home/foo/bar",function (request, response) {
  response.status(404).send(`Ресурс не найден`);
});
 
// начинаем прослушивать подключения на 3000 порту
app.listen(3000, () => console.log('запустился сервер на порту 3000'));
