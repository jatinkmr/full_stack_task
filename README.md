using node version :- 16.17.1

modules using:
1) Express
2) Body-Parser
3) nodemon
4) express-handlebars
5) mysql2
6) sequelize
7) Joi

to run the followin project :-
step 1) Install dependencies using "npm i"
step 2) run the following command :- "npm run dev"
step 3) to access the UI or home page hit the "http://localhost:8023/" url

postman API request sample :-
API URL :- localhost:8023/api/create
req.body = {
    "firstname": "abc",
    "lastname": "def",
    "email": "abc.def1997@gmail.com",
    "country": 1,
    "state": 4,
    "city": 6,
    "gender": 2,
    "dob": "1996-04-25 17:47:0",
    "age": 6.7
}
