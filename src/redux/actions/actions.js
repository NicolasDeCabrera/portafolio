import axios from "axios";
export const SET_MENU_PAGE = "SET_MENU_PAGE";
export const SET_IMG_ZOOM = "SET_IMG_ZOOM";
export const SEND_MAIL = "SEND_MAIL";


 export function setMenuPage(element,value) {
  return { type: "SET_MENU_PAGE", payload:{element,value}};
 }
 export function setImgZoom(src) {
    return { type: "SET_IMG_ZOOM", payload:src}
}

export function sendMail(data) {
  return function (dispatch) {
    return axios.post(`https://api-mail-contact.herokuapp.com/sendMail`,data)
      .then((response) => {
        dispatch({ type: "SEND_MAIL"})
      })
  };
}