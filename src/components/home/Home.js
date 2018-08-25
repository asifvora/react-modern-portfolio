import React, { Component } from 'react';
import { API } from "../../utils/API";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            movies: []
        }
    }

    componentDidMount() {
        // this.getDetails();
    }

    getDetails() {
        API.getDetails().then((res) => {
            let { collection } = res;
            this.setState({
                isLoading: false,
                movies: collection
            })
        }).catch((err) => {
            console.log('err', err)
        });
    }

    render() {
        return (
            <main id="home">
                <h1 className="lg-heading">
                    Asif
                <span className="text-secondary"> Vora</span>
                </h1>
                <h2 className="sm-heading">
                    Web Developer, Programmer, Designer & Entrepreneur
                    </h2>
                <div className="icons">
                    <a href="#!">
                        <i className="fab fa-twitter fa-2x"></i>
                    </a>
                    <a href="#!">
                        <i className="fab fa-facebook fa-2x"></i>
                    </a>
                    <a href="#!">
                        <i className="fab fa-linkedin fa-2x"></i>
                    </a>
                    <a href="#!">
                        <i className="fab fa-github fa-2x"></i>
                    </a>
                </div>
            </main>
        );
    }
}

export default Home;
