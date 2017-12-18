
import React,{Component} from 'react';
 import * as actions from '../../actions';
// import * as actions from '../../actions';
// with redux form
import  {connect} from 'react-redux';
import {signoutf} from "../../actions";




class Signout extends Component{



    componentWillMount(){

        this.props.signoutf();


    }



    render(){


       return(
           <div>
            "sorry going user

           </div>



       )



    }





}




export  default connect(null,{ signoutf})(Signout);