import { Component } from "react";

class Cloth extends Component{
    state = {
        gucci:[
            {name:'shirt',color:'brown',price:49000},
            {name:'cardigan',color:'black',price:105000},
            {name:'dress',color:'blue',price:240000},
        ]
    }
    render (){
        return (
            <div>
                <div>
                    <h1>gucci {this.state.gucci[0].name} too much costly , and it's price is {this.state.gucci[0].price} and it looks {this.state.gucci[0].color} in color</h1>

                    <h3>gucci {this.state.gucci[1].name} too much costly , and it's price is {this.state.gucci[1].price} and it looks {this.state.gucci[1].color} in color</h3>

                    <h1>gucci {this.state.gucci[2].name} too much costly , and it's price is {this.state.gucci[2].price} and it looks {this.state.gucci[2].color} in color</h1>

                </div>
                <div>
                    <h2>gucci {this.state.gucci[2].name} too much costly , and it's price is {this.state.gucci[2].price} and it looks {this.state.gucci[2].color} in color</h2>
                </div>
            </div>
        )
    }
}

export default Cloth

