const { Component } = require("react");

class TextArea extends Component {


    state = {
        message : 'Shruti'
    }


    render () {
        return (
            <div>
                <h1>Text Area component {this.state.message}</h1>
                <textarea name="message" onChange={(event) => {this.setState({message: event.target.value})}} ></textarea> 
            </div>
        )
    }
}

export default TextArea 

