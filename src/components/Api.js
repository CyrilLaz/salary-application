const url = 'https://jsonplaceholder.typicode.com/posts';
const method = 'POST';

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
    const date = {
      canned: ['2022-09-30T14:00:00.000Z', '2022-10-16T14:00:00.000Z'],
      smoked: ['2022-09-30T14:00:00.000Z', '2022-10-16T14:00:00.000Z'],
      land: ['2022-09-30T14:00:00.000Z', '2022-10-16T14:00:00.000Z'],
      liver: ['2022-09-30T14:00:00.000Z', '2022-10-16T14:00:00.000Z'],
    };

    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(date),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(this._checkResponce());
  }

  sendRespond (data) {
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(this._checkResponce());
  }


  getProfile() {
    const workerObj = JSON.parse(`{
      "name": "Финченко Олеся Александровна",
      "login": "Финченко",
      "details": [
        {
          "brigade": 2,
          "department": "Консервное производство",
          "period": ["2022-09-30T14:00:00.000Z", "2022-10-17T14:00:00.000Z"],
          "spots": [
            {
              "spot": "ОТК (русские)",
              "ktu": 1,
              "hours": 12,
              "accrual": 1344.27,
              "bonus": 4265.19,
              "fine": 0
            },
            {
              "spot": "ОТКddd (русские)",
              "ktu": 1,
              "hours": 12,
              "accrual": 1344.27,
              "bonus": 42650.19,
              "fine": 1222
            }
          ]
        },
        {
          "brigade": 3,
          "department": "Консервное производство",
          "period": ["2022-09-30T14:00:00.000Z", "2022-10-17T14:00:00.000Z"],
          "spots": [
            {
              "spot": "ОТК (морская капуста)",
              "ktu": 1,
              "hours": 12,
              "accrual": 1917.01,
              "bonus": 1378.08,
              "fine": 0
            }
          ]
        }
      ]
    }`)
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(workerObj),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(this._checkResponce());
  }
}

//
