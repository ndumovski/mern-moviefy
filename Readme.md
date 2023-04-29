[![Logo](/img/uklo-logo.png)](https://uklo.edu.mk/)[![Logo](/img/fict-logo.png)](https://fikt.uklo.edu.mk/) 
# **Факултет за Информатички и Комуникациски Технологии**


# Проектна задача по предметот Веб Програмирање
Мојот избор за изработка на оваа проектна задача е веб технологијата MERN (MongoDB, Express, ReactJS, NodeJS), додека темата која што ја избрав е едноставна веб-апликација за складирање на режисери и нивните филмови и ја нареков Moviefy.

# Што користев за да ја развијам оваа веб-апликација?

**Front-end:**

[![ReactJS](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://www.npmjs.com/package/react)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://www.w3schools.com/html/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3schools.com/css/)
[![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://www.w3schools.com/js/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)](https://blog.getbootstrap.com/2022/11/22/bootstrap-5-2-3/)

**Back-end:**

[![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en)
[![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://www.npmjs.com/package/express)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)

**Развојна околина:**

[![Visual Studio Code](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)](https://code.visualstudio.com/)
[![Postman](https://img.shields.io/badge/Postman-100000?style=for-the-badge&logo=Postman&logoColor=white&labelColor=D04C0A&color=D04C0A)](https://www.postman.com/)
[![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/)
[![Github](https://img.shields.io/badge/Github-100000?style=for-the-badge&logo=Github&logoColor=white&labelColor=black&color=black)](https://github.com/)

## Fullstack MERN веб апликација:

- *MongoDB*: Одговорна за складирање на податоците за веб-апликацијата
- *Express*: Рамка која ја олеснува работата со HTTP барања и одговори и ја прави интеграцијата со другите модули на Node.js едноставна
- *ReactJS*: Библиотека која помага во градењето на корисничкиот интерфејс, и им овозможува на корисниците интеракција со веб-апликацијата
- *NodeJS*: Обработува барања и управува со податоците.

## Начин на развивање:

- *MVC*: **Model-View-Controller**
- *CRUD*: **Create, Read, Update, Delete**
- *REST API*: Methods (**GET, POST, PUT, DELETE**)

## Опис на целосниот REST API (може да се тестира со Postman)

### Directors:

```http
  GET http://localhost:5000/directors
```
```http
  GET http://localhost:5000/directors/:slug
```
```http
  POST http://localhost:5000/directors/add
```
```http
  PUT http://localhost:5000/directors/:slug/edit
```
```http
  DELETE http://localhost:5000/directors/:slug
```

|    Кey    |   Value  | Description                |
| :-------- | :------- | :------------------------- |
| `slug` | `martin-scorsese` | Slug е url на кое што еден режисер е сместен, тоа се генерира при самото додавање на нов режисер, од неговото име. |

### Movies:

```http
  GET http://localhost:5000/movies
```
```http
  GET http://localhost:5000/movies/:slug
```
```http
  POST http://localhost:5000/movies/add
```
```http
  PUT http://localhost:5000/movies/:slug/edit
```
```http
  DELETE http://localhost:5000/movies/:slug
```

|    Key   |   Value  | Description                |
| :-------- | :------- | :------------------------- |
| `slug` | `goodfellas` | Slug е url на кое што едeн филм е сместен, тоа се генерира при самото додавање на нов филм, од неговиот наслов. |

### Почетна страна  -  Recently added:

```http
  GET http://localhost:5000/
```
| Description                |
| :------------------------- |
| Тука се прикажуваат само филмовите на сличен начин како што се прикажуваат во /movies, но по опаѓачки редослед. |


## Краток приказ на веб-апликацијата преку слики

![Moviefy](/img/screenshots/home.png)
![GET Directors](/img/screenshots/directors.png)
![POST a Director](/img/screenshots/post-director.png)
![GET Movies](/img/screenshots/movies.png)
![POST a Movie](/img/screenshots/post-movie.png)
![GET a Movie](/img/screenshots/show-movie.png)

## Како да го стартувате локално овој проект?

Најпрво клонирајте го:

```bash
  git clone https://github.com/ndumovski/mern-moviefy.git
```

Потоа навигирајте се до проектот (cmd, bash, powershell, ваш избор..):

```bash
  cd my-location/mern-moviefy
```

Прво инсталирајте ги потребните dependencies за back-end:

```bash
  npm install
```
Потоа навигирајте се до frontend (cmd, bash, powershell, ваш избор..):

```bash
  cd my-location/mern-moviefy/frontend
```
Инсталирајте ги потребните dependencies за front-end:

```bash
  npm install
```

Серверскиот дел можете да го стартувате со следнава команда:

```bash
  npm run server
```

Клиентскиот дел можете да го стартувате со следнава команда:

```bash
  npm start
```
- - -
## Изработил - [Наум Думовски ИНКИ718](https://www.w3profile.com/INKI718)
- - -

























