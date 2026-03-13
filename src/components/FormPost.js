import { Component } from "react";
import Form from 'react-bootstrap/Form';
import axios from "axios";

class FormPost extends Component {

    state = {
        title: '' , 
        body: '' ,
    }

    FormSubmit = (event) => {
        event.preventDefault();
        
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: this.state.title,
            body: this.state.body,
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
        
    }

    render() {
        return (
            <div >
                <div className="container bg-danger text-white my-3 p-3 col-md-4">
                    <Form onSubmit={this.FormSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Title {this.state.title} </Form.Label>
                            <Form.Control type="text" placeholder="Enter title" name="title" 
                            onChange={(event) => {this.setState({ title: event.target.value})}}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Body {this.state.body} </Form.Label>
                            <Form.Control as="textarea" rows={3} name="body" 
                            onChange={(event) => {this.setState({ body: event.target.value})}}/>
                        </Form.Group>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </Form>
                    
                </div>
            </div>
        )
    }
}

export default FormPost
