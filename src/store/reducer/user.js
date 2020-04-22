import * as actionTypes from '../action/actionTypes';

const intialState = {
    user: null
}

const reducer = (state = intialState, action) => {
    switch(action.type) {
      case actionTypes.USER_DETAILS:
        let userState = {
          ...this.state,
          user: action.user
        }
        return userState;
      default:
        return state;
    }
}

export default reducer;