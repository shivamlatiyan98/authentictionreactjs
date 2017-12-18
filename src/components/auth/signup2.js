
import React,{Component} from 'react';
import { reduxForm,Field} from 'redux-form';
import {erroruser, signinuser} from "../../actions";
import {connect} from "react-redux";

class Signup extends  Component {


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
        console.log(values.email,values.password, values.passwordconf);



        this.props.validate(values);

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
        return '';

    }



    render(){

        const{ handleSubmit }  =this.props;

        // console.log(this.props);

        return(
            <form onSubmit={handleSubmit(this.handleFormSubmit)} name="signin">

                <fieldset className="form-group">

                    <label>email</label>
                    <Field  className="form-control"  name="email" component={this.renderfield}>>



                    </Field>



                    <label>password</label>

                    <Field className="form-control" name="password" component={this.renderfield} type="password">


                    </Field>


                    <label>passwordconf</label>
                    <Field className="form-control" name="passwordconf" component={this.renderfield} type="password">

                    </Field>




                    {this.alerterror()};
                    <button className="btn btn-primary" action="submit">
                        signup

                    </button>






                </fieldset>


            </form>


        )






    }






}



function mapstatetoprops(state) {

    // console.log(state);



// auth having the error property mainly i this category
    return{

        errormessage:state.auth.error

    };

}

function validate(formprops) {

    const error={};

  console.log('ggggg',formprops);

if(formprops.password!=formprops.passwordconf){
    error.password="password must match";

}


    return error;
}






export default reduxForm({
    form: 'signin',
     validate
})
(connect(mapstatetoprops, {signinuser,erroruser})(Signup));



























