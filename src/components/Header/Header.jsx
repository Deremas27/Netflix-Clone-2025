import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import NetflixLogo from "../../assets/images/NetflixLogo.svg";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "../../assets/css/bootstrap.css";
import "./Header.css";

function Header() {
  return (
    <>
      <Navbar expand="md" className="bg-dark sticky-top navbar-dark py-2 px-3">
        <Container>
          {/* Netflix Logo */}
          <Navbar.Brand href="#">
            <img src={NetflixLogo} alt="Netflix Logo" className="netflixLogo" />
          </Navbar.Brand>

          {/* Mobile Toggle Button */}
          <Navbar.Toggle aria-controls="navbar-nav" />

          {/* Collapsible Navbar */}
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home/">Home</Nav.Link>
              <Nav.Link href="#">TV Shows</Nav.Link>
              <Nav.Link href="#">Movies</Nav.Link>
              <Nav.Link href="#">Latest</Nav.Link>
              <Nav.Link href="#">My List</Nav.Link>
              <Nav.Link href="#">Browse by Languages</Nav.Link>
            </Nav>

            {/* Right-Side Icons */}
            <Nav>
              <Nav.Link href="#">
                <SearchIcon />
              </Nav.Link>
              <Nav.Link href="/search/">
                <NotificationsNoneIcon />
              </Nav.Link>
              <Nav.Link href="/cart/">
                <AccountBoxIcon />
              </Nav.Link>

              {/* Dropdown for User Profile */}
              <NavDropdown title={<ArrowDropDownIcon />} id="user-dropdown">
                <NavDropdown.Item href="/profile/">Profile</NavDropdown.Item>
                <NavDropdown.Item href="/settings/">Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/logout/">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
