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

  toggleLoading() {
    this.loadingIcon.classList.toggle('form-container__loading_visible');
  }

  toggleError(text) {
    this.error.classList.toggle('form-container__error_visible');
    this.error.querySelector('.form-container__text-error').textContent = text;
  }

  hideProfile() {
    this.form.classList.remove('initial-view_invisible');
    this.profile.classList.add('profile-view_invisible');
  }
}
