import View from './View.js';
import previewView from './previewView.js';
class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = "We couldn't find that recipe. Please try another one!";
  _message = '';

  _sidebarLeft = document.querySelector('.sidebar-left');
  _sidebarRight = document.querySelector('.sidebar-right');
  _headingSearch = document.querySelector('.heading-search');
  _results = document.querySelector('.search-results');
  _pagination = document.querySelector('.pagination');
  _copyRight = document.querySelector('.copyright');

  _generateMarkup() {
    const sidebarClosed = this._sidebarLeft.classList.contains('hidden');
    return this._data
      .map(result => previewView.render({ ...result, sidebarClosed }, false))
      .join('');
  }

  handlerClickSidebarLeft() {
    this._sidebarLeft.addEventListener('click', e => {
      e.preventDefault();
      // Đóng panel
      this._results.classList.remove('active');
      // Ẩn heading search
      this._headingSearch.classList.add('hidden');
      // Ẩn tất cả preview__data
      document
        .querySelectorAll('.search-results .preview__data')
        .forEach(el => el.classList.add('hidden'));
      // Đổi icon
      this._sidebarLeft.classList.add('hidden');
      this._sidebarRight.classList.remove('hidden');

      this._pagination.classList.add('hidden-on-mobile');
      this._pagination.classList.remove('show-on-mobile');
      this._copyRight.classList.add('hidden-on-mobile');
      this._copyRight.classList.remove('show-on-mobile');
    });
  }

  handlerClickSidebarRight() {
    this._sidebarRight.addEventListener('click', e => {
      e.preventDefault();
      // Mở panel
      this._results.classList.add('active');
      // Hiện heading search
      this._headingSearch.classList.remove('hidden');
      // Hiện tất cả preview__data
      document
        .querySelectorAll('.search-results .preview__data')
        .forEach(el => el.classList.remove('hidden'));
      // Đổi icon
      this._sidebarRight.classList.add('hidden');
      this._sidebarLeft.classList.remove('hidden');

      this._pagination.classList.add('show-on-mobile');
      this._copyRight.classList.add('show-on-mobile');
    });
  }

  handlerClickPreviewLinks() {
    this._parentElement.addEventListener('click', e => {
      if (!e.target.closest('.search-results')) return;

      const link = e.target.closest('.preview__link');
      if (!link) return;

      e.preventDefault();

      const id = link.getAttribute('href').replace(/^#/, '');

      if (this._sidebarLeft.classList.contains('hidden')) {
        this._results.classList.add('active');
        this._headingSearch.classList.remove('hidden');
        document
          .querySelectorAll('.search-results .preview__data')
          .forEach(el => el.classList.remove('hidden'));
        this._sidebarRight.classList.add('hidden');
        this._sidebarLeft.classList.remove('hidden');
        this._pagination.classList.add('show-on-mobile');
        this._copyRight.classList.add('show-on-mobile');
      }

      window.location.hash = id;
    });
  }

  initSidebarHandlers() {
    this.handlerClickSidebarLeft();
    this.handlerClickSidebarRight();
    this.handlerClickPreviewLinks();
  }
}

export default new ResultsView();
