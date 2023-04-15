import React from "react";
import { Nav, NavLink, NavMenu } from "./navbar";

const Navbar = () => {

    return (
        <Nav>
            <NavMenu>
                <NavLink to="/home" activeStyle>
                    Home
                </NavLink>
                <NavLink to="/universities" activeStyle>
                    Universities
                </NavLink>
                <NavLink to="/postalLookup" activeStyle>
                    Postal Lookup
                </NavLink>
            </NavMenu>
        </Nav>
    );
};

export default Navbar; 