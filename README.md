# :rocket: Challenge #6 DB and file upload with Node.js
This repository its part of my web studies with Rocketseat bootcamp (GoStack).

## :pushpin: The task ##
This challenge its related with the previous
[First Node.js project](https://github.com/gustavo-candido/Desafio-05-Primeiro-projeto-Node.js.git).
Now I've include a feature to delete, upload csv files and use Postgres to storage data.



## :wrench: Instalation ##
**You need to install [Node.js](https://nodejs.org/en/download/) 
and [Yarn](https://yarnpkg.com/) first, then in order to clone the project via HTTPS, run this command:**

```git clone https://github.com/gustavo-candido/Desafio-06-Banco-de-dados-e-upload-de-arquivos-no-Node.js.git```


**Install dependencies:**

```yarn```


**Setup a database**

- Install [Postgres](https://www.postgresql.org/) or
[Docker](https://www.docker.com/) and Postgres container in your machine and create a Database.

- Edit the `ormconfig.json` file and change `"database"` value to be the name of database you have created.

- To create all tables necessaries, access the project in your terminal and run `yarn typeorm migration:run`

## :arrow_forward: Running ##

Just type `yarn dev:server`



## :baby_bottle: Get started ##
In order to test the project in your own machine I recommend you to download 
[Insomnia](https://insomnia.rest/download/) or [Postman](https://www.postman.com/downloads/) to run routes that require
other `HTTP` methods besides [![GET](https://img.shields.io/badge/-GET-purple?style=flat-square)]().

#### Create transaction ####
[![POST](https://img.shields.io/badge/-POST-green?style=flat-square)]() http://localhost:3333/transactions

Body:
```javascript
{
  "title": "www.example2.com",
  "value": 1000.00,
  "type": "income",
  "category": "Web jobs"
}
```

#### List transactions ####
[![GET](https://img.shields.io/badge/-GET-purple?style=flat-square)]() http://localhost:3333/transactions

Output:
```javascript
{
  "transactions": [
    {
      "id": "a43ce375-0548-4875-a61c-714f538e01cd",
      "title": "www.example2.com",
      "type": "income",
      "value": "1000",
      "category_id": "a6c6e8a5-4a09-41e1-bcf4-1666c7023e33",
      "created_at": "2020-05-21T16:08:58.701Z",
      "updated_at": "2020-05-21T16:08:58.701Z",
      "category": {
        "id": "a6c6e8a5-4a09-41e1-bcf4-1666c7023e33",
        "title": "Web jobs",
        "created_at": "2020-05-21T16:08:58.606Z",
        "updated_at": "2020-05-21T16:08:58.606Z"
      }
    }
  ],
  "balance": {
    "income": 1000,
    "outcome": 0,
    "total": 1000
  }
}
```

#### Delete transaction ####
[![DELETE](https://img.shields.io/badge/-DELETE-red?style=flat-square)]() http://localhost:3333/transactions/:id

<p align="right" >
 <em> Obs: change ':id' for your repository id  </em>
</p>


#### Import a file with transactions ####
[![POST](https://img.shields.io/badge/-POST-green?style=flat-square)]() http://localhost:3333/transactions/import

Send a Multipart form with a .csv file like this

```
title, type, value, category
Loan, income, 1500, Others
Website Hosting, outcome, 50, Others
Ice cream, outcome, 3, Food
```
