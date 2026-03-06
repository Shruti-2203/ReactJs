import { Component } from "react";

class ArrayList extends Component {
    render () {

        const students = [
            {id:1 , name:'Shruti' , age: 22},
            {id:2 , name:'Raju' , age: 25},
            {id:3 , name:'Arjun' , age: 21},
            {id:4 , name:'Satyarth' , age: 23}
        ]

        const studentList = students.map((student) =>{
            return <li key={student.id}>id : {student.id} - name: {student.name} - age: {student.age}</li>
        })



        return (
            <div>
                <h1>Array List Component </h1>
                {studentList}
            </div>
        )
    }
}

export default ArrayList 