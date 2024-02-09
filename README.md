## Project launch

### Installing Dependencies
```
npm install - set dependencies
```
### running server + frontend project in development mode

```
npm run start:dev   
npm run start:dev:vite - 
```

----

## Scripts

- `npm run start` - Launch the frontend project on the webpack dev server
- `npm run start:vite` -  Launch the frontend project on Vite
- `npm run start:dev` -  Launch the frontend project on the webpack dev server + backend
- `npm run start:dev:vite` -  Launch the frontend project on Vite + backend
- `npm run start:dev:server` - Launch the backend server
- `npm run build:prod` - Build in production mode
- `npm run build:dev` - Build in development mode (not minimized)
- `npm run lint:ts` -  Check TypeScript files with linters
- `npm run lint:ts:fix` -  Fix TypeScript files with linters
- `npm run lint:scss` - Check SCSS files with style linters
- `npm run lint:scss:fix` - Fix SCSS files with style linters
- `npm run prepare` - Pre-commit hooks

----

## Project Architecture

The project follows the Feature Sliced Design methodology.

Documentation link - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Working with Translations

The project uses the i18next library for handling translations. 
Translation files are stored in public/locales.

i18next documentation - [https://react.i18next.com/](https://react.i18next.com/)

----


## Linting

The project uses ESLint for checking TypeScript code and Stylelint for checking style files.


##### Running Linters
- `npm run lint:ts` - Check TypeScript files with linters
- `npm run lint:ts:fix` - Fix TypeScript files with linters
- `npm run lint:scss` -  Check SCSS files with style linters
- `npm run lint:scss:fix` - Fix SCSS files with style linters

----

## Project Configuration

For development, the project contains two configurations:
1. Webpack - ./config/build
2. vite - vite.config.ts

Both builders are adapted to the main features of the application.

All configuration is stored in /config
- /config/babel - babel
- /config/build - Webpack configuration

----

## Pre-commit Hooks
In pre-commit hooks, the project is checked with linters. The configuration is in /.husky.

----

### Data Handling

Interaction with data is done using Redux Toolkit. 
Whenever possible, reusable entities should be normalized using the EntityAdapter.

Server requests are sent using [RTK query](/src/shared/api/rtkApi.ts)


## Authorization data

Authorization data for the user:

```json
[
  {
    "username": "user1",
 "password": "123"
  },
  {
    "username": "user2",
 "password": "123"
  },
  {
    "username": "manager",
    "password": "123"
  },
  {
    "username": "testuser",
    "password": "123"
  }
]
