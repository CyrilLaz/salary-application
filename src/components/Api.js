export default class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  _checkResponce() {
    return (res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    };
  }

  getDates() {
    return fetch(this.baseUrl + '/dates').then(this._checkResponce());
  }

  sendRespond(data) {
    return fetch(url, {
      method: 'POST',
      mode: this.mode,
      body: JSON.stringify(data),
      headers: {
        ...this.headers,
      },
    }).then(this._checkResponce());
  }

  login(data) {
    return fetch(this.baseUrl + '/signin', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        ...this.headers,
      },
    }).then(this._checkResponce());
  }

  getProfileByName(data) {
    return fetch(this.baseUrl + '/worker', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        ...this.headers,
      },
    }).then(this._checkResponce());
  }
}
