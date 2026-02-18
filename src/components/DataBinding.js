import { Component } from "react";

class DataBinding extends Component {

    state =  {
        name: ''
    }

    changeData = (event) => {
        this.setState ({
            name:event.target.value
        });
    }
    
    render (){
        return (
            <div>
                <h1>{this.state.name}Data Binding on change</h1>
                <input type="text" onChange={this.changeData}></input>
            </div>
        )
    }
}


export default DataBinding 
