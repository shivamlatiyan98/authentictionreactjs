import  React,{Component} from 'react';

import {connect} from  'react-redux';

import {Link } from 'react-router';

class Header extends Component
{



    rendertext(){
        console.log('i am rendering mainly');
        if(this.props.authenticated){

            return(


                <li className="nav-item" key={811}>

                    <Link className="nav-link"  to='/'>

                        signout

                    </Link>

                </li>



            )



        }

        else{

            return(
                [
                    <li className="nav-item"  key={5555}>


                        <Link className="nav-link"  to='/signin'>

                            signin

                        </Link>

                    </li>,

                    <li className="nav-item"  key={5555222}>


                        <Link className="nav-link"  to='/signup'>

                            signup

                        </Link>

                    </li>


        ]

            )



        }




    }






    render(){

        return(

        <nav className="navbar ">

            <Link activeClassName="navbar-brand" to='/'>redux auth</Link>

            <ul className="nav navbar-nav">


                    {this.rendertext()}








            </ul>






        </nav>

        );


    }







}



function mapstatetoprops(state) {

   return {

      authenticated:state.auth.authenticated
    };


}









export default connect(mapstatetoprops) (Header);