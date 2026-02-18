import { Component } from "react";

class StateManipulating extends Component {
    state = {
        makeup : [
            {name:'lakme',price:1000,product:'blush'},
            {name:'nykaa',price:1200,product:'blush'},
        ]
    }

    ChangeMakeup = () => {
        this.setState({
            makeup : [
                {name:'Sugar',price:900,product:'blush'},
                {name:'Elf',price:800,product:'blush'},
            ]
        })        
    }
    



    render(){
        return (
            <div>
                <h1> {this.state.makeup[0].name} is the Indian Brand , and very affordable {this.state.makeup[0].price} and specially it's {this.state.makeup[0].product} </h1>
                <h1> {this.state.makeup[1].name} is the Indian Brand , and very affordable {this.state.makeup[1].price} and specially it's {this.state.makeup[1].product} </h1>

                <button onClick={this.ChangeMakeup}>change Brand</button>

            </div>
        )
    }
}

export default StateManipulating 