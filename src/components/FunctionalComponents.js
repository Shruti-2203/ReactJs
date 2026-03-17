import  { useState } from 'react'

function Car() {

    var [carName, setCarName] = useState("Tata Safari")

    function changeCarName() {
        setCarName("Ferrari")
    }

    return (
        <div>
            <h1>{carName}</h1>
            <button onClick={changeCarName}>Change Car Name</button>
        </div>
    )
}

export default Car