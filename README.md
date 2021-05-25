# Getting Started with Rockstars Music

## Install

First, navigate to the root directory of the project directory.
Then use the following commmands in descending order:

### `npm install`

Installs all node_modules essential to the project

### `npm install -g json-server`

Installs JSON-server globally (we're gonna need this for our data!).

## Running the application

In order two run the application, and it's data resource, we need to open 2 terminals in the root directory of the project.
Then, run the following commands in descending order.

### `npx json-server --watch data/db.json --port 4000`

Runs the JSON-Server with the db.json file as resource

### `npm run start`

Runs the application locally. You're all set!
