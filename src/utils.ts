import moment from "moment";
export function getDate() {
  return moment().format("MMMM Do YYYY, h:mm:ss a");
}

 