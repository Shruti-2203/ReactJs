import { Component } from "react";

class SelectOption extends Component {

    state = {
        country : 'Raju'
    }




    render () {
        return (
            <div>
                <h1> select option component {this.state.country} </h1>
                <select name="country" onChange={(event)=> {this.setState({country:event.target.value})}} >
                    <option disabled selected>Select Country</option>
                    <option value="india">India</option>
                    <option value="pakistan">Pakistan</option>
                    <option value="germany">Germany</option>
                    <option value="norway">Norway</option>
                    <option value="combodia">Combodia</option>
                </select>
            </div>
        )
    }
}


export default SelectOption 