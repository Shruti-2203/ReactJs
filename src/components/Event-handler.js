import { Component } from "react";

class Event extends Component {
  

    Hello = ()=>{
        alert ('click-successfully')
    }

    


    render (){
        return  <button onClick={this.Hello}>click</button>                        
           
    }
}

export default Event 