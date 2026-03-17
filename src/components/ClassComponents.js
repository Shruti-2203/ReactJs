import { Component } from "react";


class Car2 extends Component {

    state = {
        carName : "BMW",
    }

    ChangeCarName = () => {
        this.setState(
            {carName : "Audi"}
    )};


    render () {
        return (
            <div>
                <h1>Car = {this.state.carName} </h1>
                <button onClick={this.ChangeCarName}>Change Car name</button>
            </div>
        )
    }
}
export default Car2 