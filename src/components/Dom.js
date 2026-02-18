import { Component } from "react";

class Dom extends Component {
    state = {
        greeting : [
            {name:'Shruti'},
            {name:'Raju'},
            {name:'Vipul'},
        ]
    }

    StateManupulation = () => {
        this.setState ({
                greeting : [
                {name:'ram'},
                {name:'shyam'},
                {name:'aam'},
            ]
        })
    }

    render () {
        return (
            <div>
                <button onClick={this.StateManupulation}>click</button>
                <h1>hello everyone i m {this.state.greeting[0].name}</h1>
                <h1>good morning {this.state.greeting[1].name} this side</h1>
                <h1>good morning {this.state.greeting[2].name} this side</h1>
            </div>
        )
    }
}
export default Dom