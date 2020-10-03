# Name-counter-api
![Heroku](https://heroku-badge.herokuapp.com/?app=name-counter-api)

Simple node/typescript app providing an API for counting occurrences names in a large text file: [name-counter-api.herokuapp.com](https://name-counter-api.herokuapp.com).

Implementing similar functionality to the command line version [github.com/sauntimo/name-counter](https://github.com/sauntimo/name-counter), this API takes a name and returns it, title-cased, with a count of how many times it occurs in the text of [Oliver Twist](https://en.wikipedia.org/wiki/Oliver_Twist). It is based heavily on [express-generator-typescript](https://www.npmjs.com/package/express-generator-typescript) and makes sparing changes. The text search is handled by the [streamsearch](https://www.npmjs.com/package/streamsearch) npm package which implements the [Boyer–Moore–Horspool algorithm](https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore%E2%80%93Horspool_algorithm).

### Setup

- clone the repo

```
$ git clone git@github.com:sauntimo/name-counter-api.git name-counter-api
```

- initialise

```
$ cd name-counter-api && npm i && npm run start:dev
```

![image](https://user-images.githubusercontent.com/2720466/94990865-fd5de100-0576-11eb-9f8a-de06e98a2b74.png)

### Local Usage

- make a request to the API - json pretty printing with python assumes you have python installed.
```
$ curl -s 'localhost:3000/name-counter/Oliver'| python -m json.tool
```

![image](https://user-images.githubusercontent.com/2720466/94990884-136ba180-0577-11eb-909f-4289c9ffe519.png)

- use the local frontend - [localhost:3000/](http://localhost:3000/)

![image](https://user-images.githubusercontent.com/2720466/94990770-93453c00-0576-11eb-954b-e4a237e423f6.png)

### Hosted Usage

- the app is deployed on heroku so you can call the API there
```
$ curl -s 'https://name-counter-api.herokuapp.com/name-counter/oliver'| python -m json.tool
```

![image](https://user-images.githubusercontent.com/2720466/94990955-a99fc780-0577-11eb-967a-4648052d624e.png)

- a similar frontend is also available at [name-counter-api.herokuapp.com](https://name-counter-api.herokuapp.com).




