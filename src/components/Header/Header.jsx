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
      {/* <div className="nav-wrapper">
        <div className="container-fluid">
          <nav className="navbar navbar-toggleable-sm navbar-expand-md">
            <a className="navbar-brand mx-auto" href="#">
              <img className="netflixLogo" src={NetflixLogo} />
            </a>
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              ☰
            </button>

            <div className="navbar-collapse collapse">
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/home/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#">
                    TV Shows
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#">
                    Movies
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#">
                    Latest
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#">
                    My List
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#">
                    Browse by Languages
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#">
                    <SearchIcon />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/search/">
                    <NotificationsNoneIcon />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/cart/">
                    <AccountBoxIcon />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/cart/">
                    <ArrowDropDownIcon />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div> */}
      <Navbar expand="md" className="bg-dark navbar-dark py-2">
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
