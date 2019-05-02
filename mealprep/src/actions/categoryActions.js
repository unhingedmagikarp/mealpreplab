import { FETCH_CATEGORIES, NEW_CATEGORY } from "./types";
import axios from "axios";

export const fetchCategories = () => dispatch => {
  console.log("here");
  axios
    .get("http://localhost:3004/signups")
    .then(res => dispatch({ type: FETCH_CATEGORIES, payload: res }))
    .catch(err => console.log(err));
};
