const { Component } = require("react");

class OneLineData extends Component {

    state = {
        userid : 'Shruti' ,
        password : '12345' 
    }

    // userinput = (event) => {
    //    let userid = event.target.name 
    //    let value = event.target.value 
    //    this.setState({[userid]: value})
    // }




    render() {
        return (
            <div>
                <h1>Login Form</h1>
                <h1>{this.state.userid}</h1>
                <h1>{this.state.password}</h1>


                <form>
                    <input type="text" name="userid" onChange={(event) => this.setState({userid: event.target.value})} >
                    </input><br></br>
                    <input type="text" name="password" onChange={(event) => this.setState({password: event.target.value})}></input><br/>
                    <button type="submit">LogIn</button>
                </form>
                
            </div>
        )
    }
}

export default OneLineData





