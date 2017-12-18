
import React,{Component} from 'react';
import { reduxForm,Field} from 'redux-form';
// import * as actions from '../../actions';
// import * as actions from '../../actions';
// with redux form
import  {connect} from 'react-redux';


import {signinuser,erroruser} from "../../actions";

class Signin extends  Component {


    constructor(props){
        super(props);

        this.handleFormSubmit=this.handleFormSubmit.bind(this);

        // this.state="fff";




    }





    renderfield (field) {
// to input we need the props and to give props we need to have field

        const {meta: {touched, error}} = field

        const className = `form-group ${touched && error ? "has-danger" : ""}`;
        // const { meta }=field


        // const


        return (
            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control" type="text" {...field.input} />
                <div className="text-help">
                    {touched ? error : ""}
                </div>
            </div>
        );


    }


        handleFormSubmit(values) {
        // Need to do something to log user in

        console.log(values);
        console.log(values.email,values.password);

        this.props.signinuser(values.email,values.password);

        // this.props.signinUser({ email, password });
    }


  alerterror(){

        if(this.props.errormessage){
            return (
                <div className="alert alert-danger">
                    <strong>oops!{this.props.errormessage}</strong>
                </div>
            )
        }
      return (

          <div>  'chuchu'</div>
  )

  }



    render(){

    const{ handleSubmit }  =this.props;

        console.log(this.props);

      return(
          <form onSubmit={handleSubmit(this.handleFormSubmit)} name="signin">

         <fieldset className="form-group">

             <label>email</label>
             <Field  className="form-control"  name="email" component={this.renderfield}>>



             </Field>



             <label>password</label>

             <Field className="form-control" name="password" component={this.renderfield} type="password">

             </Field>

             {this.alerterror()};
             <button className="btn btn-primary" action="submit">
                 signin

             </button>






         </fieldset>


          </form>


      )






    }






}



function mapstatetoprops(state) {

 console.log(state);



// auth having the error property mainly i this category
    return{

       errormessage:state.auth.error
    };

}








 export default reduxForm({
    form: 'signin',

})
 (connect(mapstatetoprops, {signinuser,erroruser})(Signin));












