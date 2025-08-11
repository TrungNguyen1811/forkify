class errorView {
  _parentElement = document.querySelector('.error-message');
  _errorMessage = 'An error occurred. Please try again later.';
  _successMessage = '';

  renderError() {
    this._clear();
    const markup = `<div class="error">${message}</div>`;
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}

export default new errorView();
