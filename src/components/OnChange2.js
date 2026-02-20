import { Component } from "react";

class OnChange2 extends Component {

    state = {
        username: ''
    }    
    
    inputChange = (event) => {
        let name = event.target.name; // username
        let value =  event.target.value; // whatever user is typing in the input field
        this.setState({[name]: value}) // {username: 'whatever user is typing in the input field'}

    }


    render() {        
        return (
            <div>
                <h1>hello bro {this.state.username}</h1>
                <form>
                    <label>User Name</label><br/>
                    <input type='text' name="username" onChange={this.inputChange}></input><br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default OnChange2


