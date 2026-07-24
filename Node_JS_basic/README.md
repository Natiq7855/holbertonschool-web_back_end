# NodeJS Basics

This directory contains my solutions for the Holberton School project
**"NodeJS Basics"**.

The goal of this project is to learn Node.js basics, including running
JavaScript with Node.js, using Node.js modules, reading files, accessing
command line arguments and the environment via the `process` API, creating
HTTP servers with Node's HTTP module and with Express, creating advanced
routes with Express, using ES6 with Babel-node, and using Nodemon for faster
development.

## Learning Objectives

- Run JavaScript using NodeJS
- Use NodeJS modules
- Use specific Node JS module to read files
- Use `process` to access command line arguments and the environment
- Create a small HTTP server using Node JS
- Create a small HTTP server using Express JS
- Create advanced routes with Express JS
- Use ES6 with Node JS with Babel-node
- Use Nodemon to develop faster

## Requirements

- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All files will be interpreted/compiled on Ubuntu 20.04 LTS using Node.js (version 20.x.x)
- All files must end with a new line
- A `README.md` file at the root of this project folder is mandatory
- Code must use the `.js` extension
- Code will be tested using Jest and the command `npm run test`
- Code will be verified against lint using ESLint
- Code needs to pass all the tests and lint (`npm run full-test`)
- All functions/classes must be exported using `module.exports = myFunction;`
- Required files: `package.json`, `babel.config.js`, `.eslintrc.js`, and `database.csv`

## Setup

Install Node.js 20.x.x and the project dependencies:

```bash
npm install
```

The project includes the following configuration files:

- `package.json` — scripts and dependencies (express, chai, mocha, sinon, nodemon, eslint, babel)
- `babel.config.js` — Babel preset configuration
- `.eslintrc.js` — ESLint rules (airbnb-base + jest)
- `database.csv` — Sample data file used by HTTP server tasks

## Files

- `0-console.js` — `displayMessage` prints a string to STDOUT.
- `1-stdin.js` — Reads input from stdin and displays it.
- `2-read_file_sync.js` — Reads a file synchronously and counts students by field.
- `3-read_file_async.js` — Reads a file asynchronously and counts students by field.
- `4-http.js` — Small HTTP server using Node's HTTP module.
- `5-http.js` — More complex HTTP server using Node's HTTP module with JSON responses.
- `6-http_express.js` — Small HTTP server using Express.
- `7-http_express.js` — More complex HTTP server using Express with JSON responses.
- `8-full_server.js` — Organized HTTP server using Express with controllers and routes.

## Usage

Example:

```bash
node 0-main.js
```

Run the dev server with Nodemon:

```bash
npm run dev
```

Run tests:

```bash
npm run test
```

## Author

Aliyyiakbar Shirinli
