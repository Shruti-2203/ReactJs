import { Component } from "react";


class MultipleInput extends Component{

    state = {
        username : 'car' ,
        email : 'mail' ,
        phone : 'phone' 
    }


    multiInput = (multiEvent) => {
        let myusername = multiEvent.target.name //user name 
        let value = multiEvent.target.value
        this.setState({
            [myusername] : value 
        })
    }    

    render(){
        return(
            <div>
                <h1>Multiple Input {this.state.username} </h1>
                <h1>Multiple Input {this.state.email} </h1>
                <h1>Multiple Input {this.state.phone} </h1>
                <input type="text" name="username" onChange={this.multiInput}/> <br/>
                <input type="text" name="email" onChange={this.multiInput}/> <br/>
                <input type="text" name="phone" onChange={this.multiInput}/> <br/>
            </div>
        )
    }
}



export default MultipleInput;

