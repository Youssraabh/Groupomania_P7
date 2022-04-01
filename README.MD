### PROJET 7 Créez un réseau social d'entreprise


## Dossier Backend

- Serveur **Node.js**
- Framework **Express.js**
- Base de données **MySQL**
- ORM **Sequelize**
- **Api RESET**
- sécurité **RGPD et OWASP**

### Installation

- Accédez sur https://nodejs.org/en/ pour télécharger puis installer `Node.js` sur votre machine
- Les dependances a installer 
**Configuration de la base de données :**

Toujours dans le terminal du dossier `backend`

- Installez `mysql2`: `npm install mysql2`
- Pour installer `Sequelize` et `Sequelize CLI`, exécutez les commandes: `npm install sequelize`, `npm install --save sequelize-cli` puis ` npx sequelize init`. Cela créera les dossiers `config`, `models` et `migrations`.
  Le dossier `config` contient le fichier de configuration, qui indique à sequelize comment se connecter à la base de données. Vous devez remplir ce fichier comme suit:

  "username": "Nom de L'utilisateur de la base de données MySQL",

  "password": "mot de passe de l'utilisateur de la base de données MySQL",

  "database": "nom de la base de données MySQL",

  "host": "lien de la base de données MySQL",

  "dialect": "mysql"

-Une fois que vous avez correctement configuré le fichier de configuration, créez les modèles `User`, `Post` et `Comment` comme suit :

`npx sequelize model:generate --name User --attributes "firstName:string,lastName:string,email:string,password:string,imageUrl:string,isAdmin:boolean"` ,

`npx sequelize model:generate --name Post --attributes "userId:integer,imageUrl:string,content:string"`,

`npx sequelize model:generate --name Comment --attributes "userId:integer,postId:integer,imageUrl:string,content:string"`

- Jusqu'à cette étape, nous n'avons rien inséré dans la base de données. Maintenant, pour créer réellement une base de données et ses tables, vous devez :


- Pour creer une base de données dans MySql: exécutez la commande : `DROP DATABASE IF EXISTS groupomania;` `CREATE DATABASE groupomania CHARACTER SET 'utf8'; `

      Puis revenez au terminal du dossier `Backend` pour créer les tables avec la commande: `npx sequelidb:migrate`(cette commande permet de Créer au niveau de la base de données des tables appelées Users Posts et Comments avec toutes les colonnes comme spécifié dans les fichiers de migration.);

- Créer un fichier à la racine du dossier `Backend` avec la commande : touch .env 
   Dans le fichier .env : mettre le secret_token, les données utiles à la connexion à votre base SQL   




## Frontend


- Framework **Vue.js** avec l'utilisation de **Vue CLI**
- **Axios**
- **Bootstrap**
- **WCAG**

### Installation

- Ouvrez un terminal dans le dossier central `GROUPOMANIA`:
  - Installez **Vue CLI** : `npm install -g @vue/cli` (Pour plus d'information je vous conseille de lire la documentation vue-cli https://cli.vuejs.org/guide/ )
  - Puis créez le projet `vue create frontend`
  - Puis cd frontend :
    - Exécuter la commande `npm install` pour installer tous les modules nécessaires au fonctionnement de l'application.
    - Installez **Axios** : `npm install axios`
    - Installez **Bootstrap** : `npm install vue bootstrap bootstrap-vue`
    - Lancez la commande `npm run serve`
- Le serveur est accessible en local via le port 8080: http://localhost:8080/