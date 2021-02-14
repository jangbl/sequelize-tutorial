# Sequelize Tutorial with Sequelize migrations, seed data and Postgres

This tutorial demonstrates how to connect to a [Postgres](https://www.postgresql.org) database with [Sequelize](https://sequelize.org/master/).

It also demonstrates how to use the [Sequelize CLI](https://sequelize.org/master/manual/migrations.html) to perform database migration and it also covers how to create seed data.

<h3 align="center">Please help this repo with a ⭐️ if you find it useful! 😁</h3>

This repository is contains the code for the [Node Sequelize tutorial](http://youtube.com/watch?v=Eu-h3iUk45o)

[![Node Sequelize tutorial tutorial](images/sequelize-node-postgres-tutorial.png)](http://youtube.com/watch?v=Eu-h3iUk45o)

Please also check out my website at [jangoebel.com](https://jangoebel.com)

# How to run this application

This application needs a local [Postgres](https://www.postgresql.org) instance.

## Installing Postgres

On macOS you can install [Postgres](https://www.postgresql.org) with [Homebrew](https://brew.sh/).

```
brew install postgresql
```

and start it with

```
brew services start postgres
```

You can stop [Postgres](https://www.postgresql.org) with:

```
brew services stop postgres
```

For other operating systems, please check the [Postgres website](https://www.postgresql.org/download/).

### Database setup

Make sure to update the configuration app with your database credentials in the `../db/knexfile.js` file.
There you need to specify the `user`, `password` (per default no `password` required) and the `database` you want to connect to.

The default database we try to connect to is called `sequelize_tutorial`. Please make sure it exists in your local [Postgres](https://www.postgresql.org) instance. You can either use a UI like [PgAdmin](https://www.pgadmin.org) to create the database or you can do so with `psql`

```
psql -h localhost -U <your-username> postgres
```

When installing locally, [Postgres](https://www.postgresql.org) creates a database user with your operation system's username.
You can run

```
whoami
```

on any `Unix-like` operating system to find out your user

Then you can create a new database with:

```
create database sequelize_tutorial;
```

## Running the application

Once you have installed [Postgres](https://www.postgresql.org) and updated the credentials in the `./db/knexfile.js`, you can

```
npm run dev
```

This will:

1. execute all existing database migrations located in `./db/migrations`
2. execute all seed files located in `./db/seed` so you have some initial data
3. start your server on port `8080` with `nodemon` to provide hot reload functionality

# Additional Scripts

- `npm run down`: undo last migration. Since we only have one migration at the moment this is equivalent to deleting all tables
- `npm run migrate`: executes all migrations in `./db/migrations`
- `npm run make-seed`: create a new seed file
- `npm run seed`: execute all seed files to pre-populate database
