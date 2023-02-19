
## Step 1: Installation

```
npm Install 
```
## Step 2: Database

create table in your database mysql

## Step 3: .env

```
node ace configure @adonisjs/lucid
```
next choose MYSQL / MariaDB with press space and enter
```diff
> Select the database driver you want to use ...  Press <SPACE> to select
( ) SQLite
(*) MySQL / MariaDB
( ) PostgreSQL
( ) OracleDB
( ) Microsoft SQL Server
```
next choose In the terminal and enter
```
> Select where to display instructions ...  Press <ENTER> to select
  In the browser
> In the terminal
```

the result is as below,
then change database **name password** and **table**
```dotenv
PORT=3333
HOST=0.0.0.0
NODE_ENV=development
APP_KEY=JIsNCkaa-s_LoqaAKTZVjYXqy6XIIXf2
DRIVE_DISK=local
DB_CONNECTION=mysql
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=lucid ##change this
MYSQL_PASSWORD= ##change this
MYSQL_DB_NAME=lucid ##change this
```
## Step 4: Migration Database
```
npm run migrate
npm run seed
```

## Running Project
```
npm run dev
```

## Unit Test
```
npm run test
```
