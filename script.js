const form = document.querySelector('#form');
const inputs = form.querySelectorAll('.form__input');

// ---------------------
import {makeProfilePage} from "./profile.js"


form.addEventListener('submit', (e) => {
  e.preventDefault();

  const { firstName, secondName } = Array.from(inputs).reduce((initial, el) => {
    initial[el.name] = el.value;
    return initial;
  }, {});
  let user = JSON.stringify({ firstName: firstName, secondName: secondName });
  askServer(user).then(res=>res.json()).then(res=>{
    
    makeProfilePage(res);
    console.log(res);
  });
});

/*
Купаев
47ba8*/

function askServer(data) {
  return fetch('/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data
  }).catch(err=>console.log(err))
}


