import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom';
import {logo} from './assets/img/tip.png'
import './assets/main.css';
import App from './App'
import Start from './components/start';
import About from './components/About';
import Error  from './components/Error';

const rootElement = document.querySelector(".root")


ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>,

rootElement)