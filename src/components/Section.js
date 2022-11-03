export default class Section {
  constructor(dateId,profileId, container) {   
    this.dateElements = dateId.map(el=>document.getElementById(el));
    this.container = document.querySelector(container);
    this.profileElements = profileId.map(el=>document.getElementById(el));
  }

  addItems(items) {
    items.forEach(element => {
      this.container.prepend(element);
    });
  }

  setDate(data) {
    const res = {}
    for (let key in data) {
        const dateFrom = new Date(Date.parse(data[key][0]));
        const dateTo = new Date(Date.parse(data[key][1]));
        res[key] = `${dateFrom.getDate()}.${dateFrom.getMonth()+1}.${dateFrom.getFullYear()} - ${dateTo.getDate()}.${dateTo.getMonth()+1}.${dateTo.getFullYear()}`;
    }

      this.dateElements.forEach(el=>el.textContent = res[el.id])
  }

  setProfile(data) {
    this.profileElements.forEach(el=>el.textContent = (data[el.id]))
  }

  resetProfile() {
    this.container.innerHTML = '';
    this.profileElements.forEach(el=>el.textContent = '')
  }
}
