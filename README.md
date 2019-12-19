## Lab 4. Server
This is a server side of client-server web-application. The server is developed using express.js.
### Requirements
* Node.js 6+
* PostgreSQL 11+
##How to start
Before first start you have to use two commands:
```$xslt
npm i
sequelize db:migrate
```
To start server you need to use only one command:
```$xslt
npm run dev
```
To check how it works, you have to use either client app, which is located in this repo,
either Postman or any other app to check endpoints.
###Endpoints
**GET** http://*hostname*/api/v1/favorites - get all favorites from database \
**POST** http://*hostname*/api/v1/favorites - creates new favorite in database
(body with "name" parameter required) \
**DELETE** http://*hostname*/api/v1/favorites - deletes favorite from database
(body with "id" parameter required) \
**GET** http://*hostname*/api/v1/weather?cityName=*cityName* - get weather by cityName
(replace curved cityName with your city) \
**GET** http://*hostname*/api/v1/weather/coordinates?lat=*lat*&lon=*lon* - 
get weather by latitude and longitude (replace curved lat and lon with your latitude and longitude)