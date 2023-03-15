import { LOGIN_SUCCESS } from '../../types';
import { LoginInterface, LoginActionTypes } from '../../types';
  
interface LoginState  {
    login: LoginInterface | null ;
}

const initialState: LoginState = {
    login: null,
};


export const LoginReducer = (state: LoginState = initialState, action: LoginActionTypes): LoginState => {
    switch (action.type) {
        case LOGIN_SUCCESS: {
            return {
                ...state,
                login: action.payload,
            };
        }
        default:
            return state;
    }
};
  