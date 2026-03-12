
import { Component } from "react";
import MyImage from '../img/logo512.png';

class Home extends Component {
    render () {
        return (
            <div>
                <h1>Home Us Page</h1>
                <img src={MyImage} alt="" />
            </div>
        )
    }
}


export default Home 

