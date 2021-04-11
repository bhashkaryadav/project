import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Auth0Provider} from '@auth0/auth0-react'

const domain ="dev-jfd2h6b0.us.auth0.com";
const clientId ="BA8rKVZKlW1fVoxQlDVYuwK4VftlZWHg";

ReactDOM.render(
  <Auth0Provider
  domain={domain}
  clientId={clientId}
  redirectUri="https://project-445.herokuapp.com/signin">
   
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);


