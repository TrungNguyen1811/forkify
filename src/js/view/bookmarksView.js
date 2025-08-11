import View from './View.js';
import previewView from './previewView.js';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it :)';
  _message = '';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  addHandlerDeleteAllBookmarks(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--delete-all-bookmarks');
      if (!btn) return;
      handler();
    });
  }

  _generateMarkup() {
    if (this._data.length === 0) {
      return `<div class="message">${this._errorMessage}</div>`;
    }

    return `
    <div class=" btn--delete-all-bookmarks">
      <p>Clear all bookmarks
      </p>
    </div>
      ${this._data
        .map(bookmark => previewView.render(bookmark, false))
        .join('')}
    `;
  }
}

export default new BookmarksView();
