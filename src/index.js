import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import img1 from './assets/img1.png'
import ballislife from './assets/ballislife.png'

ReactDOM.render(
  <React.StrictMode>
    <App img={img1} heading="Courts" btnText="Our Courts"/>
    <App img={ballislife} heading="Products" btnText="Shop Now"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
