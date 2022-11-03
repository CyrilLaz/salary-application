export default class Blocks {
  constructor(selectors) {
    this.form = document.querySelector(selectors.form);
    this.profile = document.querySelector(selectors.profile);
    this.loadingIcon = document.querySelector(selectors.loadingIcon);
    this.error = document.querySelector(selectors.error);
  }

  showProfile() {
    this.form.classList.add('initial-view_invisible');
    this.profile.classList.remove('profile-view_invisible');
  }

  showLoading() {
    this.loadingIcon.classList.toggle('form-container__loading_visible');
  }

  showError() {
    this.error.classList.toggle('form-container__error_visible');
  }

  hideProfile() {
    this.form.classList.remove('initial-view_invisible');
    this.profile.classList.add('profile-view_invisible');
  }
}
