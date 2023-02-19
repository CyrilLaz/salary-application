const form = document.querySelector('#form');
const inputs = form.querySelectorAll('.form__input');
const closeProfileButton = document.querySelector('.profile-close');

import Blocks from './components/Blocks.js';
import Api from './components/Api.js';
import Section from './components/Section.js';
// import workerObj from '../constants/worker.js';
import './index.css';
import Profile from './components/Profile.js';
// ---------------------
import connectServer from './constants/connectServer.js';

const api = new Api(connectServer);

api
  .getDates()
  .then((res) => {
    infoContainer.setDate(res);
  })
  .catch(console.log);

Promise.all([api.getName(), api.getInitialData()])
  .then(([name, data]) => {
    if (name && data) {
      const profile = new Profile(
        { ...name, ...data },
        {
          main: '#templateDetail',
          inner: '#templateDetailInfo',
        }
      );
      infoContainer.addItems(profile.getDetailCards());
      infoContainer.setProfile(profile.getProfileInfo());
      blocks.showProfile();
    }
  })
  .catch(console.log);

const infoContainer = new Section(
  ['canned', 'smoked', 'land', 'liver'],
  ['name', 'totalSalary', 'totalHour'],
  '.details__list'
);

const blocks = new Blocks({
  form: '.initial-view',
  profile: '.profile-view',
  error: '.form-container__error',
  loadingIcon: '.form-container__loading',
});

closeProfileButton.addEventListener('click', () => {
  return api.logout().then(() => {
    blocks.hideProfile();
    form.reset();
    infoContainer.resetProfile();
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  blocks.toggleLoading();
  const user = Array.from(inputs).reduce((initial, el) => {
    initial[el.name] = el.value;
    return initial;
  }, {});

  api
    .login(user)
    .then((user) => {
      if (!user) throw e;

      api.getInitialData().then((data) => {
        const profile = new Profile(
          { ...data, user },
          {
            main: '#templateDetail',
            inner: '#templateDetailInfo',
          }
        );
        infoContainer.addItems(profile.getDetailCards());
        infoContainer.setProfile(profile.getProfileInfo());
        blocks.showProfile();
        blocks.toggleLoading();
      });
    })
    .catch((err) => {
      if (err.status === 401) {
        blocks.toggleError('Не правильный логин или пароль');
      } else {
        blocks.toggleError('Что-то пошло не так');
      }
      blocks.toggleLoading();
      setTimeout(() => blocks.toggleError(), 4000);
    });
});
