import { useState } from "react"



const Bike = () =>{
    const [bikeState,setBikeState] = useState({
        vehicle : [
            {name:'ktm'},
            {name:'royal enfield'},
            {name:'harley davidson'},
        ]
    });

    const bikeChange = () => {
        setBikeState ({ 
            vehicle : [
                {name:'yamaha'},
                {name:'bajaj'},
                {name:'hero'},
            ]

        })
    }

    return (
        <div>
            <button onClick={bikeChange}>bike change</button>
            <h1>{bikeState.vehicle[0].name} best sport bike company</h1>
            <h1>{bikeState.vehicle[1].name} company is the best commercial </h1>
            <h1>{bikeState.vehicle[2].name} company is the best for us</h1>
        </div>
    )
} 

export default Bike