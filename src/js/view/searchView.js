import View from './View';

class SearchView {
  _parentEl = document.querySelector('.search');

  _sidebarLeft = document.querySelector('.sidebar-left');
  _sidebarRight = document.querySelector('.sidebar-right');
  _headingSearch = document.querySelector('.heading-search');
  _results = document.querySelector('.search-results');
  _pagination = document.querySelector('.pagination');
  _copyRight = document.querySelector('.copyright');

  getQuery() {
    const query = this._parentEl.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parentEl.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', e => {
      e.preventDefault();

      this._results.classList.add('active');
      this._headingSearch.classList.remove('hidden');

      document
        .querySelectorAll('.search-results .preview__data')
        .forEach(el => el.classList.remove('hidden'));

      this._sidebarRight.classList.add('hidden');
      this._sidebarLeft.classList.remove('hidden');

      this._pagination.classList.remove('hidden-on-mobile');
      this._copyRight.classList.add('show-on-mobile');

      handler();
    });
  }

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');

      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }
}

export default new SearchView();
