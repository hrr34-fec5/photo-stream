# Project Name

> Project description

## Related Projects

  - https://github.com/hrr34-fec5/photo-stream2
  - https://github.com/hrr34-fec5/grounded-n-grits-calendar-component
  - https://github.com/hrr34-fec5/reviews-service
  - https://github.com/hrr34-fec5/house-description-service


## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

1. Ensure that Mongo is running actively (e.g., on a Mac, open a terminal and run `$ mongod`).
2. Start the server with script: `npm run web`

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

### Seeding Database
For testing and development purposes, it may be useful to seed the database.

A script has been included for this purpose.

After installing dependencies and proceeding through the usage steps, run the following script: `npm run db-init`