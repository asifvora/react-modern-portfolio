import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NotFound extends Component {
    render() {
        return (
            <main id="home">
                <h1 className="lg-heading">
                    Upps! Page not found
                </h1>
                <Link to="/"><h1 className="text-secondary">Goto Home</h1></Link>
            </main>
        );
    }
}

export default NotFound;
