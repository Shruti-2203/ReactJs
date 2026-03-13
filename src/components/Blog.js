

import { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

class Blog extends Component {


    state = {
        posts: [],
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then( (response) =>{
            this.setState({
                posts: response.data
            })
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
            // always executed
        });

    }

    render () {


        const posts = this.state.posts;
        const allpost = posts.map( (post, index ) => {
            return ( 
                <div className="col-md-4 my-4" key={index}>
                    <div className="card">
                        <div className="card-header">
                            <strong>{post.id}</strong>
                        </div>
                        <div className="card-body">
                            <h2>{post.title}</h2>
                        </div>
                        <div className="card-footer">
                            <p>{post.body}</p>
                        </div>
                    </div>
                </div>
            )
        })

        return (
            <div  className="container">
                <div className="row">
                    <div className="col-md-9">
                        <div className="row">
                            {allpost}
                        </div>
                    </div>
                    <div className="col-md-3">
                        <Link to="/formPost" className="btn btn-primary text-white "> Add Post</Link>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Blog 

