# Forkify Project

A modern JavaScript application for searching, viewing, and bookmarking recipes. Built as a learning project, it demonstrates concepts such as modular JavaScript, API interaction, state management, and modern UI/UX patterns.

## Features

- Search for recipes from the Forkify API
- View detailed recipe information
- Adjust servings and ingredients
- Bookmark favorite recipes (persists in local storage)
- Add new recipes via a modal form
- Responsive and modern UI built with SCSS

## Project Structure

```
forkify-project/
│
├── index.html                # Main HTML file
├── package.json              # Project dependencies and scripts
├── .gitignore                # Files and folders to ignore in git
├── .prettierrc               # Prettier code formatting configuration
├── README.md                 # Project documentation
│
├── src/
│   ├── js/
│   │   ├── controller.js     # Main application logic and event handlers
│   │   ├── model.js          # Application state and data fetching logic
│   │   ├── config.js         # Configuration constants
│   │   ├── helpers.js        # Helper functions for AJAX and utilities
│   │   └── view/
│   │       ├── View.js
│   │       ├── addRecipeView.js
│   │       ├── bookmarksView.js
│   │       ├── paginationView.js
│   │       ├── previewView.js
│   │       ├── recipeView.js
│   │       ├── resultsView.js
│   │       └── searchView.js
│   │
│   ├── sass/
│   │   ├── main.scss         # Main SCSS entry point
│   │   ├── _base.scss        # Base styles and variables
│   │   ├── _components.scss  # UI components (buttons, spinners, etc.)
│   │   ├── _header.scss      # Header and navigation styles
│   │   ├── _preview.scss     # Preview card styles
│   │   ├── _recipe.scss      # Recipe details styles
│   │   ├── _searchResults.scss # Search results and pagination styles
│   │   └── _upload.scss      # Add recipe modal styles
│   │
│   ├── json/
│   │   ├── data-item.json    # Example single recipe data
│   │   ├── data-items.json   # Example multiple recipes data
│   │   └── mock-data.json    # Mock search results data
│   │
│   └── img/
│       ├── icons.svg         # SVG icons for UI
│       ├── logo.png          # Project logo
│       └── favicon.png       # Favicon
│
├── .parcel-cache/            # Parcel build cache (ignored by git)
└── node_modules/             # Node.js dependencies (ignored by git)
```

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Run the development server:**
   ```sh
   npm start
   ```

3. **Build for production:**
   ```sh
   npm run build
   ```

## Credits

- Based on the Forkify course by Jonas Schmedtmann.
- Icons and images from the Forkify API and project assets.

---
**Note:** This project is for learning and portfolio purposes only.