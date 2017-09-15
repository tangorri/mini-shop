# mini-shop

Un mini magasin en _Angular4_ pour le Front et _NodeJS_ _express/sequelize/mysql2_ pour le Backend

## entités

### Utilisateurs -> `users`

```JSON
{
  "id": 3,
  "email": "jean@email.com",
  "password": "jean",
  "createdAt": "2017-09-14T18:16:50.000Z",
  "updatedAt": "2017-09-14T18:16:50.000Z"
}·
```

### Produit -> `products`



```JSON
{
  "id": 1,
  "name": "Aspirateur",
  "description": "Dyson",
  "price": 300,
  "createdAt": "2017-09-14T18:16:50.000Z",
  "updatedAt": "2017-09-14T18:16:50.000Z"
}
```
## Backend

Service Web disponibles

- Liste des users : `/users`
- Liste des produtuis : `/products`

Editez le fichier _[back/config/config.js]()_ 

*par exemple :*

```JavaScript
...
 {
    "development": {
      "username": "root",
      "password": "",
      "database": "minishop",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "test": {
      "username": "root",
      "password": null,
      "database": "database_test",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "production": {
      "username": "root",
      "password": null,
      "database": "database_production",
      "host": "127.0.0.1",
      "dialect": "mysql"
    }
  }
...
```

### Installer les dépendance et initialiser la base de données

```bash
cd back
npm install

node_modules/.bin/sequelize db:migrate
node_modules/.bin/sequelize db:seed:all
```
### Back end Authentification 
  Base mongo DB
  il faut spécifier le nom de la base dans le fichier 'db/mongoConfig.js'

```Javascript
  module.exports = {
  'secret': 'longobnoxiouspassphrase',
  'database': 'mongodb://localhost/saas-tutorial'
};
```