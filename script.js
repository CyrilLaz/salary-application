const form = document.querySelector('#form');
const inputs = form.querySelectorAll('.form__input');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const { firstName, secondName } = Array.from(inputs).reduce((initial, el) => {
    initial[el.name] = el.value;
    return initial;
  }, {});
  let user = JSON.stringify({ firstName: firstName, secondName: secondName });
  console.log(user);
  let request = new XMLHttpRequest();
  //посылаем запрос на адрес "/user"
  request.open('POST', '/user', true);
  request.setRequestHeader('Content-Type', 'application/json');
  request.addEventListener('load', function () {
    // получаем и парсим ответ сервера
    let receivedUser = JSON.parse(request.response);
    console.log(receivedUser); // смотрим ответ сервера
  });
  request.send(user);
});
