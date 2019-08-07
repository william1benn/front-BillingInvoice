import React, {useReducer} from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken';
import axios from 'axios';
import{
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS
} from '../types';


const AuthState = props =>{
    const initalState ={
        token: localStorage.getItem('token'),
        isAuthenticated:null,
        loading:true,
        error:null,
        user:null,
    }


const [state,dispatch] = useReducer(authReducer,initalState);

//Load User

const loadUser = async () => {
    //load token header globally
    if(localStorage.token){
        setAuthToken(localStorage.token);
    }

try{
const res = await axios.get("http://localhost:5000/auth/authR");
dispatch({
    type: USER_LOADED,
    payload:res.data,
})
}catch (err) {
dispatch({type:AUTH_ERROR});
}
};

//Register User
const register = async formData =>{
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
    try{
const res = await axios.post('http://localhost:5000/users/register',formData,config);

dispatch({
    type: REGISTER_SUCCESS,
    payload:res.data,
});
//Load User Token
    loadUser();

    }catch (error){

        dispatch({
            type: REGISTER_FAIL,
            payload:error.response.data.msg,
        });
    }
}
//Login User
const login = async formData =>{
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
    try{

const res = await axios.post('http://localhost:5000/auth/loginhere',formData,config);

dispatch({
    type: LOGIN_SUCCESS,
    payload:res.data,
});

loadUser();
    }catch (error){
        dispatch({
            type:LOGIN_FAIL,
            payload:error.response.data.msg,
        })
    }
}

//Logout

const logout = () => dispatch({type: LOGOUT})

//Clear Errors

const clearErrors = () => dispatch({type:CLEAR_ERRORS});

    return (
        <AuthContext.Provider
        value={{
            token:state.token,
            isAuthenticated:state.isAuthenticated,
            loading:state.loading,
            error:state.error,
            user:state.user,
            clearErrors,
            register,
            login,
            logout,
            loadUser,
        }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};


export default AuthState;
