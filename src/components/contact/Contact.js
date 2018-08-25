import React, { Component } from 'react';
import * as types from '../../constants';

class Contact extends Component {

    render() {
        return (
            <main id="contact">
                <h1 className="lg-heading">
                    Contact
                <span className="text-secondary">Me</span>
                </h1>
                <h2 className="sm-heading">
                    This is how you can reach me...
                </h2>
                <div className="boxes">
                    <div>
                        <span className="text-secondary">Email: </span> {types.CONTACT_EMAIL}
                    </div>
                    <div>
                        <span className="text-secondary">Phone: </span> {types.CONTACT_NO}
                    </div>
                    <div>
                        <span className="text-secondary">Address: </span> {types.CONTACT_ADDRESS}
                    </div>
                </div>
            </main>
        );
    }
}

export default Contact;
