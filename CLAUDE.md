# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Super Effective is a Vue 2 PWA (Progressive Web App) that helps users find Pokemon type effectiveness and weaknesses. The app allows users to select Pokemon types and displays what types are super effective, resistant, or have no effect against them.

## Key Commands

### Development
```bash
npm run serve          # Start development server
npm run build          # Build for production
npm run lint           # Run ESLint
```

### Testing
```bash
npm run test:unit           # Run unit tests with Jest
npm run test:e2e            # Run e2e tests with Cypress (GUI)
npm run test:e2e:headless   # Run e2e tests headless
```

### Code Formatting
```bash
npm run prettier:check        # Check formatting
npm run prettier:format-all   # Format all files
```

### Firebase
```bash
npm run firebase:deploy:ci    # Deploy to Firebase (CI)
```

## Architecture

### Core Technologies
- **Vue 2.6** with Vue Router and Vuex
- **Vuetify 2.4** for UI components
- **Firebase** for authentication and Firestore database
- **Vue CLI** for build tooling
- **Jest** for unit testing, **Cypress** for e2e testing

### Directory Structure

**`src/components/`** - Vue components
- `SuperEffective.vue` - Main type effectiveness calculator component
- `TypeIcon.vue` - Reusable Pokemon type icon component
- `SearchPokemon.vue` - Pokemon search functionality
- `NavBar.vue` - Application navigation

**`src/views/`** - Route-level components
- `Home.vue` - Home page
- `About.vue` - About page

**`src/utils/`** - Business logic utilities
- `effectiveness.js` - Core type effectiveness calculation engine. Contains `typeTable` with all Pokemon type matchups and `getEffectiveness(type1, type2)` function that returns structured effectiveness data (max, super, notVery, maxNotVery, noEffect)
- `pokedex.js` - Pokemon data and lookups
- `languageUtils.js` - Internationalization helpers
- `scraper/jsonScraper.js` - Data scraping utilities

**`src/store/`** - Vuex state management
- Modular Vuex store with `app` module
- Each module has: `state`, `mutations`, `actions`, `getters`

**`src/firebase/`** - Firebase integration
- `init.js` - Firebase initialization and config
- `authentication.js` - Auth helpers
- `generic-db.js` - Generic Firestore CRUD operations
- `users-db.js`, `user-products-db.js` - Specific collections
- `async-firestore.js` - Async Firestore utilities

**`src/misc/`** - PWA and browser utilities
- `register-service-worker.js` - Service worker registration
- `handle-network-status.js` - Online/offline detection
- `handle-apple-install-prompt.js` - iOS install prompt handling

**`vue-config/`** - Environment-specific Vue CLI configurations
- `config.default.js` - Base configuration
- `config.development.js` - Development overrides
- `config.production.js` - Production overrides (includes prerendering, bundle analysis)

### State Management

Vuex store is organized into modules (currently only `app`). Access via `this.$store` in components.

### Routing

Vue Router configured with history mode. Routes defined in `src/router/index.js`. Catch-all route redirects to home page.

### Type Effectiveness Logic

The core Pokemon type effectiveness calculation is in `src/utils/effectiveness.js`:
- `typeTable` object contains all type matchups (0 = no effect, 0.5 = not very effective, 2 = super effective)
- `getEffectiveness(type1, type2)` calculates combined effectiveness for dual-type Pokemon by multiplying modifiers
- Returns structured object with effectiveness categories: `max` (4x), `super` (2x), `notVery` (0.5x), `maxNotVery` (0.25x), `noEffect` (0x)

### Path Aliases

`@` is aliased to `src/` directory (configured via Jest and Vue CLI).

## Testing

### Unit Tests
- Located in `tests/unit/`
- Use Vue Test Utils + Jest
- Setup file: `tests/unit/setup.js`
- Module path mapping: `@/` → `<rootDir>/src/`

### E2E Tests
- Located in `tests/e2e/`
- Use Cypress
- Run with GUI via `test:e2e` or headless via `test:e2e:headless`

## Build Configuration

Vue CLI configuration is split across environment files in `vue-config/`. The `vue.config.js` merges the default config with environment-specific configs based on `NODE_ENV`.
