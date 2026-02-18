

import { Component } from "react";

class OnChangeForm extends Component{
    
    state = {
        name:''
    }


    userChange = (event) => {
        let value = event.target.value;
        this.setState  ({name:value}) ;
    }


    render(){
        return (
            <div>
                <h1>hi {this.state.name}</h1>
                <form>
                    <label>User Name</label><br/>
                    <input type='text' name="username" onChange={this.userChange}></input><br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }


}

export default OnChangeForm

