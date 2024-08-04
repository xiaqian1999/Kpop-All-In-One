# Pantry Tracker

This page allows kpop community to trade, sell, buy, or join GO for interested merches

## Tool in Use

React JS, HTML/CSS, MongoDB, Tailwind CSS
Depencies in use: axios, express, stripe

## Features include inside this app

### Frontend

- User able to filter the post by the category
- User able to filter the post by kpop group
- User able to save the post they are interested
-

### Backend

### API

- Expected to grab the post content from the instagram post and filter by the hashtag

#### Initial Set Up for dependencies frontend

- npm install
- npm install react-router-dom

#### Tailwind

- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p
- Install VScode extension: Tailwind css IntelliSense for autocomplete for the tailwind
- In index.css, need to include @tailwind base; @tailwind components; @tailwind utilities;
- In tailwind.config.js, able to initialize page's main theme color, font family, screen size

#### Font Awesome

- npm i --save @fortawesome/fontawesome-svg-core
  These are the free icons
- npm i --save @fortawesome/free-solid-svg-icons
- npm i --save @fortawesome/free-regular-svg-icons
- npm i --save @fortawesome/free-brands-svg-icons
  Then install the Font Awesome React Component
- npm i --save @fortawesome/react-fontawesome@latest
- Then

### New Things Learn

#### Search Bar

- Array.prototype.some: This method is used to test whether at least one element in the array passes the test implemented by the provided function. It returns True if the condition is met for any element.
  - But .some() only works for arrays, therefore need to be carefully looking whether the data type is array

#### When want to apply multiple color for different data (ex: there's multiple scammer type, want to highlighted by color)

- npm install classnames
- Then import classNames from 'classnames';
