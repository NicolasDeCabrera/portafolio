export const SET_MENU_PAGE = "SET_MENU_PAGE";
export const SET_IMG_ZOOM = "SET_IMG_ZOOM";


 export function setMenuPage(element,value) {
  return { type: "SET_MENU_PAGE", payload:{element,value}};
 }
 export function setImgZoom(src) {
    return { type: "SET_IMG_ZOOM", payload:src}
   }