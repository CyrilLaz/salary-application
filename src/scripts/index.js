const form = document.querySelector('#form');
const inputs = form.querySelectorAll('.form__input');
const closeProfileButton = document.querySelector('.profile-close');

import Blocks from '../components/Blocks.js';
import Api from '../components/Api.js';
import Section from '../components/Section.js';
// import workerObj from '../constants/worker.js';

import Profile from '../components/Profile.js';
// ---------------------
import { makeProfilePage } from './profile.js';

const api = new Api({
  baseUrl: 'https://jsonplaceholder.typicode.com/posts',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.getDates().then(res=>dateContainer.setDate(res));

const dateContainer = new Section(
  ['canned','smoked','land','liver'],
  ['name','totalSalary','totalHour'],
  '.details__list'
);

const blocks = new Blocks(
  {form:'.initial-view',
  profile:'.profile-view',
error:'.form-container__error',
loadingIcon:'.form-container__loading'}
)

closeProfileButton.addEventListener('click',()=>{
  blocks.hideProfile();
  form.reset();
  dateContainer.resetProfile();
})

// const profile = new Profile(workerObj,{
//   main:'#templateDetail',
//   inner:'#templateDetailInfo'
// })

// console.log(profile.getProfileInfo());

// profile.getDetailCards();
// console.log(profile.getDetailCards());

form.addEventListener('submit', (e) => {
  e.preventDefault();
  blocks.showLoading();
  const user = Array.from(inputs).reduce((initial, el) => {
    initial[el.name] = el.value;
    return initial;
  }, {});

  // console.log(inputs.);
  api.getProfile().then(res=>{

    const profile = new Profile(res,{
      main:'#templateDetail',
      inner:'#templateDetailInfo'
    });
    dateContainer.addItems(profile.getDetailCards())
    dateContainer.setProfile(profile.getProfileInfo());
    blocks.showProfile()
    blocks.showLoading();
  }).catch(err=>{
    blocks.showError();
    console.log(err);})

    
  // askServer(user).then(res=>res.json()).then(res=>{

  //   makeProfilePage(res);
  //   console.log(res);
  // });
});

// /*
// Купаев
// 47ba8*/

// function askServer(data) {
//   return fetch('/user', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: data
//   }).catch(err=>console.log(err))
// }
