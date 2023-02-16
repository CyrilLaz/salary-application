export default class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  _checkResponce() {
    return (res) => {
      if (res.ok) {
        return res.json().then(({data})=>data);
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    };
  }

  getDates() {
    return fetch(this.baseUrl + '/dates').then(this._checkResponce());
  }

  getName() {
    return fetch(this.baseUrl + '/user', {
      credentials : 'include',
      headers: {
        ...this.headers,
      },
    }).then(this._checkResponce());
  }

  getInitialData() {
    return fetch(this.baseUrl + '/spots', {
      credentials : 'include',
      headers: {
        ...this.headers,
      },
    }).then(this._checkResponce());
  }

  login(data) {
    return fetch(this.baseUrl + '/signin', {
      method: 'POST',
      body: JSON.stringify(data),
      credentials : 'include',
      headers: {
        ...this.headers,
      },
    }).then(this._checkResponce());
  }

  getProfileByName(data) {
    return fetch(this.baseUrl + '/worker', {
      method: 'POST',
      body: JSON.stringify(data),
      credentials : 'include',
      headers: {
        ...this.headers,
      },
    }).then(this._checkResponce());
  }
}
