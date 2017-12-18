import {Auth_error, Auth_user, UnAuth_user} from "../actions/types";


export default function (state={},action) {



    switch (action.type){



        case Auth_user:
           console.log(state);

            return { ...state, error: '', authenticated: true };


        case UnAuth_user:

            return { ...state, authenticated: false };

        case Auth_error:
             console.log("caught an error");

            return {...state,error:action.payload};






    }



     return state




}