<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://cyber-cty-comics.herokuapp.com">
    <img src="client/src/images/header.png" alt="logo">
  </a>
</p>

Demo: https://cyber-cty-comics.herokuapp.com

Full Stack web application that displays and navigates through xkcd web comic strips.

## Motivation

To showcase my full-stack web development skills, via the MERN stack.

## Features

- **Navigation Buttons**: buttons to navigate to the previous and next comic strip.
- **Comic Display**: one comic strip displayed per page.
- **Comic Info**: information like date created, view count, and number are all displayed on top of the comic.
- **Navigation Field**: navigate to a specific comic strip by including a comic # in the URL ("https://cyber-cty-comics.herokuapp.com/614") or by using the search bar in the corner.
- **Parsed Transcript**: transcript from API is parsed into a more readable format & displayed under the comic.

## Extra Features

- **Responsive Design**: created a responsive design using vanilla CSS to accommodate devices with various screen sizes.
- **Random Navigation**: button that navigates to a random comic strip.
- **View Count**: Each comic page has a view count that displays the amount of times that specific comic strip has viewed on my site. Only counts **unique** visitors, so refreshing the page will not increase the view count.

## Built With

This project was built using the MERN stack, which includes:

- [MongoDB](https://www.mongodb.com/)
- [Express.js](https://expressjs.com/)
- [React](https://reactjs.org/)
- [Nodejs](https://nodejs.org/en/)

**React** was used for Front-End Development (client-side).\
**Express.js**,**MongoDB**, and **Nodejs** were used to implement the RESTful API (server-side).\

## Installation

```bash
# get the project
$ git clone https://github.com/shivamp08/cyber-city-comics

# install dependencies
$ npm install

# run start (using react-scripts - default port: 5000)
$ npm start

```

## Screenshot

![dashboard](client/screenshots/dashboard.png)
