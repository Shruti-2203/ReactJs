import { Component } from "react";

class InputForm extends Component{
    render(){
        return (
            <div>
                <h1>hello Aim Destiny </h1>
                <form>
                    <label>User Name</label><br/>
                    <input type='text' name="username"></input><br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }

}

export default InputForm
