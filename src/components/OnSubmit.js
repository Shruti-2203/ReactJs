import { Component } from "react";


class OnSubmit extends Component {
    
     state = {
        username: ''
    }    
    
    inputChange = (event) => {
        let name = event.target.name; // username
        let value =  event.target.value; // whatever user is typing in the input field
        this.setState({[name]: value}) // {username: 'whatever user is typing in the input field'}

    }

    formSubmit = (event) => {
        event.preventDefault(); // to prevent the default behaviour of form submit which is to refresh the page
        alert(this.state.username);
        // console.log(this.state.username);
    }

    render() {
        return (
            <div>
                <h1>on submit  {this.state.username}</h1>
                <form onSubmit={this.formSubmit}>
                    <label>User Name</label><br/>
                    <input type='text' name="username" onChange={this.inputChange}></input><br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }


}

export default OnSubmit

