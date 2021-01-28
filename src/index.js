import './style/index.scss';
import {routes} from './routeur.js';
require("regenerator-runtime");

const setRoute = () => {
  const path = window.location.hash.substring(1).split("/");
  const pageArgument = path[1] || "";
  routes[path[0]](pageArgument);
  return true;
};

window.addEventListener("hashchange", () => setRoute());
window.addEventListener("DOMContentLoaded", () => setRoute());
