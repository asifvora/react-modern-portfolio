import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";

class Header extends Component {
    render() {
        let { location: { pathname } } = this.props;
        return (
            <header>
                <div className="menu-btn">
                    <div className="btn-line"></div>
                    <div className="btn-line"></div>
                    <div className="btn-line"></div>
                </div>
                <nav className="menu">
                    <div className="menu-branding">
                        <div className="portrait"></div>
                    </div>
                    <ul className="menu-nav">
                        <li className={pathname === '/' || pathname === '/home' ? `nav-item current` : `nav-item`}>
                            <Link to="/home" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className={pathname === '/about' ? `nav-item current` : `nav-item`}>
                            <Link to="/about" className="nav-link">
                                About Me
                            </Link>
                        </li>
                        <li className={pathname === '/work' ? `nav-item current` : `nav-item`}>
                            <Link to="/work" className="nav-link">
                                My Work
                            </Link>
                        </li>
                        <li className={pathname === '/contact' ? `nav-item current` : `nav-item`}>
                            <Link to="/contact" className="nav-link">
                                How To Reach Me
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}
export default withRouter(Header);
