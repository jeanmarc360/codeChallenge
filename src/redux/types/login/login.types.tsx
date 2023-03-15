export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export interface LoginInterface{
    email : String;
    password : String;
    token : String;
}

interface LoginAction {
    type: typeof LOGIN_SUCCESS;
    payload: LoginInterface;
}

export type LoginActionTypes = LoginAction;