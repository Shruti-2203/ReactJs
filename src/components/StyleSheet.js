import { Component } from "react";
import style from './Style.css'; 

class Card extends Component {


    StyleSheet = {
        background: 'rgb(255, 0, 0)',
        border: '2px solid black',
        borderRadius: '10px',
        color: 'black',
    }


    render(){
        return (
            <div className="card">
                <div className="card-body" >
                    <h1 style={this.StyleSheet} >Card heading </h1>
                    <p> Data binding in React connects input elements with component state. When a user types in an input field, the onChange event updates the state using setState. React automatically re-renders the UI, showing the updated value instantly, keeping the interface synchronized with user actions continuously ensuring consistency across the application interface. </p>
                </div>
            </div>
        )
    } 
}



export default Card