> 12 - Dec - 2022


# Server Site Dependencies...

|No| Package Installs        | Use for                                       |
|--|-------------------------|-----------------------------------------------|
|1 | yarn add `body-parser`  | enabling POST request                         |
|2 | yarn add `cors`         | enabling Cors origin request                  |
|3 | yarn add `express`      | creating routing for application              |
|4 | yarn add `mongoose`     | creating DB modals for POST-ing data          |
|5 | yarn add `nodemon`      | changing happen, server restart automatically |
|6 | yarn add `dotenv`       | hide the confidential data from public        |
|7 | yarn add `helmet`       | help secure Express/Connect apps with various HTTP headers|
|8 | yarn add `morgan`       | HTTP request logger middleware for node.js    |


<br/>

# File / Folder short info...
|No| File / Folder | Usage of...                                           |
|--|---------------|-------------------------------------------------------|
|1 | index         | all basic configurations                              |
|2 | routes        | user requesting url path for api calling...           |
|3 | controller    | url end point, logical function run upon database...  |
|4 | models        | database schema for formatted way store data into database...|
|5 | connections   | mongodb database connections...                       |


<br/>

**.env**

```js
MONGODB_URI = mongodb+srv://dbUser:dbPass@cluster0.z9kin.mongodb.net/DB_NAME?retryWrites=true&w=majority

PORT = 5995
```

<br/>


## File & Folder hierarchy 
```
🟨
server
├── connection                          🟨 Database Connections 🟨
|   └── mongoDB.js
|
├── controllers                         🟨 Database Query Functions 🟨
|   ├── client
|   |   ├── getCustomers.js
|   |   ├── getGeography.js
|   |   ├── getProducts.js
|   |   └── getTransactions.js
|   |
|   ├── general
|   |   ├── getDashboardStats.js
|   |   └── getUser.js
|   |
|   ├── management
|   |   ├── getAdmins.js
|   |   └── getUserPerformance.js
|   |
|   ├── sales
|   |   └── getSales.js
|   |   
|   └──welcomeMessage.js    
|  
├── data
|   ├── product.js
|   ├── statAffiliate.js
|   ├── statOverall.js
|   ├── statProduct.js
|   ├── transaction.js
|   └── users.js  
|      
├── models                              🟨 Database Schema 🟨  
|   ├── AffiliateStat.js
|   ├── OverallStat.js
|   ├── Product.js
|   ├── ProductStat.js
|   ├── Transaction.js
|   └── User.js
|
├── public
|   ├── appDeployment.png
|   ├── backendDataFlow.png
|   ├── dataTableRelation.png
|   ├── fav.ico
|   └── server.png
|
├── routes                              🟨 REST API, URL Route for accessing data 🟨  
|   ├── client.js
|   ├── general.js
|   ├── management.js
|   └── sales.js
|
├── .env
├── index.js                            🟨 Main Server File 🟨  
├── package.json
├── README.md
└── yarn.lock
🟨
```

<br/>

# NodeJs | Backend Basic Data Flow...
<img src="./public/backendDataFlow.png" />

<br/>

# Entity Relationship Diagram for Data Model || Database Table Relationship...
<img src="./public/dataTableRelation.png" />