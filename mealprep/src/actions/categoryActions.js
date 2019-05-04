import { FETCH_CATEGORIES, NEW_CATEGORY } from "./types";
import axios from "axios";

export const fetchCategories = () => dispatch => {
  return axios
    .get("http://localhost:3004/categories")
    .then(res => {
      return dispatch({ type: FETCH_CATEGORIES, payload: res.data });
    })
    .catch(err => console.log(err));
};
