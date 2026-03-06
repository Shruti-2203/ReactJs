import { Component } from "react";

class List extends Component {

    render () {

        const names = ['Shruti ' , 'Raju ' , 'Arjun' ,'Satyarth' ];
        const ListItems = names.map((name,index ) =>{
            return <li key={index}>{index}  -  {name}</li>
        });

        return (
            <div>
                <h1>List Component </h1>
                {ListItems}
            </div>
        )
    }
}


export default List 
