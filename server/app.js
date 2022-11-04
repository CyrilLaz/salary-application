const express = require('express');
// создаем объект приложения
const bd = require('../src/components/getObjFromBD');
const app = express();
const path = require('path');

// console.log(path.resolve(''));
// bd('Купаев', '47ba8').then(data=>console.log(data))
// const urlencodedParser = express.urlencoded({ extended: false });
// определяем обработчик для маршрута "/"

// app.get('/', function (request, response) {
//   response.sendFile(path.resolve('') + '/index.html');

// });

//app.use('/', express.static(path.resolve('')));


const jsonParser = express.json();
app.post('/user', jsonParser, function (request, response) {

  console.log(request.body);
  if (!request.body) return response.sendStatus(400);
  if (request.body.firstName && request.body.secondName) {
    const objBD = bd(request.body.firstName, request.body.secondName, response);
    objBD
      .then((data) => {
        const worker = {name:data.name, details:data.details};
        response.send(worker);
        // console.log(data);
      })
      .catch((err) => console.log(err));
    //   response.send(data)})
    // const worker = {objBD.brigade,}
    // if(worker){response.send()}
    // response.send({"recieved":"sdsds"});
  }

  // response.sendStatus(200); // response.json(request.body); // отправляем пришедший ответ обратно
});

app.use('/dates',function (request, response) {
     response.send({
      canned: ['2022-09-30T14:00:00.000Z', '2022-10-16T14:00:00.000Z'],
      smoked: ['2022-09-30T14:00:00.000Z', '2022-10-16T14:00:00.000Z'],
      land: ['2022-09-30T14:00:00.000Z', '2022-10-16T14:00:00.000Z'],
      liver: ['2022-09-30T14:00:00.000Z', '2022-10-16T14:00:00.000Z'],
    })});


app.use('/home/foo/bar', function (request, response) {
  response.status(404).send(`Ресурс не найден`);
});

// начинаем прослушивать подключения на 3000 порту
app.listen(3000, () => console.log('запустился сервер на порту 3000'));
