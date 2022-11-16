export default class Profile {
  constructor(data, selectors) {
    this.data = data;
    this.selectors = selectors;
    this.template = document.querySelector(this.selectors.main).content;
    this.detail = this.template.querySelector('.detail');
    this.innerTemplate = this.detail.querySelector(this.selectors.inner);
    this.detailInfo = this.innerTemplate.content.querySelector('.detail__info');
  }

  getProfileInfo() {
    const total = this._countTotal();
    return {
      name: this.data.name,
      totalHour: total.totalHour,
      totalSalary: total.totalSalary,
    };
  }

  _countTotal() {
    let totalSalary = 0,
      totalHour = 0;
    this.data.details.forEach((el) => {
      el.spots.forEach((spot) => {
        totalHour = totalHour + spot.hours;
        totalSalary = totalSalary + spot.accrual + spot.bonus - spot.fine;
      });
    });
    totalSalary = Math.floor(totalSalary);

    return { totalSalary, totalHour };
  }

  getDetailCards() {
    const cards = this.data.details.map((element) => this._createCard(element));
    return cards;
  }

  _createCard(element) {
    const card = this.detail.cloneNode(true);
    card.removeChild(card.querySelector(this.selectors.inner));
    const cardHeader = card.querySelector('.detail__header');
    const dateHeader = card.querySelector('.detail__date');
    cardHeader.textContent = `${element.department}, бригада ${element.brigade}`;

    dateHeader.textContent = this._createDate(element.period);

    element.spots.forEach((spot) => card.append(this._createSpotInfo(spot)));
    return card;
  }

  _createSpotInfo(element) {
    const spot = this.detailInfo.cloneNode(true);
    const spotTitle = spot.querySelector('.detail__title');
    const detailHour = spot.querySelector('#detailHour');
    const detailKtu = spot.querySelector('#detailKtu');
    const detailTotal = spot.querySelector('#detailTotal');
    const detailAccrual = spot.querySelector('#detailAccrual');
    const detailFine = spot.querySelector('#detailFine');
    const detailBonus = spot.querySelector('#detailBonus');

    spotTitle.textContent = element.spot;
    detailHour.textContent = element.hours;
    detailKtu.textContent = element.ktu;
    detailTotal.textContent = Math.floor(
      element.accrual + element.bonus - element.fine
    );
    detailAccrual.textContent = element.accrual;
    detailFine.textContent = element.fine;
    detailBonus.textContent = element.bonus;

    return spot;
  }

  _createDate(element) {
    const dateFrom = new Date(Date.parse(element[0]));
    const dateTo = new Date(Date.parse(element[1]));
    return `${dateFrom.getDate()}.${
      dateFrom.getMonth() + 1
    }.${dateFrom.getFullYear()} - ${dateTo.getDate()}.${
      dateTo.getMonth() + 1
    }.${dateTo.getFullYear()}`;
  }
}
