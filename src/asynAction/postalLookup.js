import React from "react";


import { useDispatch } from 'react-redux';


import { getPostalInfo } from "../store/postalReducer";

export const fetchPostal = () => {
  return function (dispatch) {
    fetch(`https://api.zippopotam.us/us/99501`)
      .then(response => response.json())
      .then(json => dispatch(getPostalInfo(json)))
  }
}
