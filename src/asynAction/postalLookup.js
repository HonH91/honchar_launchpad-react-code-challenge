import React from "react";
import "./styles/style.css";


import {addManyPostalAction} from "../store/postalReducer";

export const fetchPostal = () => {
  return function (dispatch) {
    fetch (`https://api.zippopotam.us/us/99501`)
    .then (response => response.json())
    .then (json => dispatch(addManyPostalAction(json)))
  }
}


function load() {
let apiUrl = `https://api.zippopotam.us/us/99501`;
}
if (loaded) {
   
      <div>
    </div>

    
  } else {
    load();

    return null;
  }