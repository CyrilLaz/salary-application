export default class Section {
  constructor(dateId, profileId, container) {
    this.dateContainer = document.querySelector('.info-box__list');
    this.dateElements = dateId.map((el) => document.getElementById(el));
    this.container = document.querySelector(container);
    this.profileElements = profileId.map((el) => document.getElementById(el));
  }

  addItems(items) {
    items.forEach((element) => {
      this.container.prepend(element);
    });
  }

  setDate(data) {
    this.dateContainer.innerHTML = data.reduce((prev, el) => {
      const dateFrom = new Date(el.period.from);
      const dateTo = new Date(el.period.till);
      const date = `${dateFrom.getDate()}.${
        dateFrom.getMonth() + 1
      }.${dateFrom.getFullYear()} - ${dateTo.getDate()}.${
        dateTo.getMonth() + 1
      }.${dateTo.getFullYear()}`;

      const hyperText = `<li class="info-box__item">
      <h3 class="info-box__department">${el.name}</h3>
      <span class="info-box__date">${date}</span>
      </li>`;
      // console.log(prev);
      return prev+=hyperText;
    },''); // временная заглушка
  }

  setProfile(data) {
    this.profileElements.forEach((el) => (el.textContent = data[el.id]));
  }

  resetProfile() {
    this.container.innerHTML = '';
    this.profileElements.forEach((el) => (el.textContent = ''));
  }
}
