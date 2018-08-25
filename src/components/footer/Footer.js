import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer id="main-footer">
                Copyright &copy; {new Date().getFullYear()}
            </footer>
        );
    }
}
export default Footer;
