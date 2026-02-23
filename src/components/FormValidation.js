import { Component } from "react";

class Formvalidation extends Component{

    state = {
        useremail: '',
        userpassword: '',
        emailerror: '',
        passworderror: ''
    }

    validate() {
        if (!this.state.useremail>0 && !this.state.userpassword>0) {    
            this.setState({emailerror: 'Email and Password is required'})
        }else if (!this.state.useremail>0){
            this.setState({emailerror: 'Email is required'})
        }else if (!this.state.userpassword>0){
            this.setState({passworderror: 'Password is required'})
        }else {
            return true 
        }
    }


    FormSubmit = (event) => {
        event.preventDefault();
        if (this.validate()){
            alert ('Form Submitted Successfully!');
        }
    }


    render (){
        return( 
            <div style={{ background: '#f7aa79' }}>
                
                <h1>hello form validation</h1>
                <h3> {this.state.useremail}  </h3>
                <h3> {this.state.userpassword} </h3>

                <form onSubmit={this.FormSubmit}>
                    <label style={{ fontSize: '20px' }}>User Email:</label><br/>
                    <input type="email" name="useremail" onChange={(event)=> this.setState({useremail: event.target.value})}/><br/>
                    <strong style={{ color: 'red' , fontSize: '15px' }}>{this.state.emailerror}</strong><br/>
                    
                    <label style={{ fontSize: '20px' }} >User Password:</label> <br/>
                    <input type="password" name="userpassword" onChange={(event)=> this.setState({userpassword: event.target.value})}/><br/>
                    <strong style={{ color: 'red' , fontSize: '15px' } }>{this.state.passworderror}</strong><br/>

                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}


export default Formvalidation 

