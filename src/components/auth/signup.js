import React,{Component} from 'react';



import  {connect} from 'react-redux';

import {reduxForm} from 'redux-form';

import  {signup} from '../../actions/'



class  Signup extends Component {


    handf(values){

        console.log(values,'om');




    }






    render(){


        const { handleSubmit, fields: { email, password, passwordconf }} = this.props;



         console.log(this.props);
        console.log(email,password,passwordconf);

        return(


        <form onSubmit={handleSubmit(this.handf.bind(this))}>




            <fieldset className="form-group">

                    <label>
                    email:

                </label>

                <input className="form-control" {...email} />


            </fieldset>


            <fieldset className="form-group">

                <label >
                    password:

                </label>
                <input className="form-control"    {...password} />



            </fieldset>


            <fieldset className="form-group">

                <label >
                    passwordconf

                </label>
                <input className="form-control" type="password"     {...passwordconf} />



            </fieldset>



            <button className="btn btn-primary" action="submit">
                signup!

            </button>






        </form>











       )









    }












}



export default reduxForm({
    form: 'signup',
    fields: ['email', 'password', 'passwordconf']
})(Signup)













