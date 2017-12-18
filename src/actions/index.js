import  axios from 'axios';

import {browserHistory} from 'react-router'
import {Auth_error, Auth_user, UnAuth_user} from "./types";
const Root_url="http://localhost:7090";





export  function signinuser(email,password) {



return function (dispatch) {

// so we can mainy we acyncroise work mainly

// data mainly to be sent mainly
const request=axios.post(`${Root_url}/signin`,{
    email,password
}).then(

    (request)=>{

    browserHistory.push('/feature');

     // console.log(request);

       dispatch({
           type:Auth_user,
           payload:request

        });

// localstorage is unique to the browser maoinly and do ndot share the resources with another domain
     localStorage.setItem('token',request.data.token);


    }

).catch(()=> {


    dispatch(erroruser('bad login kuta harmay pagal'))


})


}

}



export  function erroruser(error) {


    // console.log("called error");
    return {
        type:Auth_error,
        payload:error
    }







}





export  function signoutf() {

 return {
    type:UnAuth_user,
     payload:false
 }

 localStorage.removeItem('token');






}




