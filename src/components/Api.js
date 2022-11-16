export default class Api {
  constructor({ baseUrl, headers, mode }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
    this.mode = mode;
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
    return fetch(this.baseUrl + '/dates',{mode: this.mode,}).then(this._checkResponce());
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

  getProfile(data) {

    const workerObj = JSON.parse();
    return fetch(this.baseUrl + '/user', {
      method: 'POST',
      mode: this.mode,
      body: JSON.stringify(data),
      headers: {
        ...this.headers,
      },
    }).then(this._checkResponce());
  }

  getProfileByName(data) {
    return fetch(this.baseUrl + '/worker', {
      method: 'POST',
      mode: this.mode,
      body: JSON.stringify(data),
      headers: {
        ...this.headers,
      },
    }).then(this._checkResponce());
  }
}
