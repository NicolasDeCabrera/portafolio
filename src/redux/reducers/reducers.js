import {
  SET_IMG_ZOOM,
SET_MENU_PAGE
} from "../actions/actions";

const initialState = {
menuPage:{
  home:true,
  about:false,
  skill:false,
  portfolio: false,
  timeline:false,
  contact:false,
  menuContact:false,
},
imgZoom:""

};

function rootReducer(state = initialState, action) {
  switch (action.type) {
      case SET_MENU_PAGE:
        if(!action.payload.value){
          return {
              menuPage: {
                home:false,
                about:false,
                skill:false,
                portfolio: false,
                timeline:false,
                contact:false,
                menuContact:false,
                [action.payload.element]:true
              },
            }
        }
        else{
          return {
            menuPage: {
             ...state.menuPage,
              [action.payload.element]:!state.menuPage.menuContact
            },
        }
      };
      case SET_IMG_ZOOM:
          return {
            ...state,
            imgZoom: action.payload
          };
    default:
      return state;
  }
}

export default rootReducer;
