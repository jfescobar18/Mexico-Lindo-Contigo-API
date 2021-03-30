# MLC API

[![Generic badge](https://img.shields.io/badge/build-passing-<COLOR>.svg)](#) [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](#)

### Installation

MLC API requires [Docker](https://www.docker.com/) v8.0.21+ to run.
Add your docker-compose.override file, this is an example:

```sh
services: 
  node:
    environment:
      #General
      - NODE_ENV=development
      - PORT=3000    
      #Stripe
      - STRIPE_PUBLIC=pk_test_0000
      - STRIPE_PRIVATE=sk_test_0000
      #SMPT Config
      - HOST_SMTP=smtp.gmail.com
      - USER_SMTP=email@gmail.com
      - PASSWORD_SMTP=password
    command: npx nodemon --legacy-watch server.js
  mysql:
    ports: 
      - 3001:3306
```

Finally run the `$ docker-compose up --build -d` command

### Auto-generate Models

If you want to auto-generate your table models run this command

```sh
$ sequelize-auto -o "./Sequelize/DataModels" -d MLC_Db -h localhost -u root -p 3306 -x password -e mysql
```

### Todos

 - Write Tests
 - Add More Useful methods

License
----

All rights are reserved
