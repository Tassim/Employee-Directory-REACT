import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function NavBar({ handleSearchChange }) {
  return (
    <Navbar className="navbar navbar-expand navbar-light bg-danger" sticky='top'>
      <Navbar.Brand>Employee Directory</Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Form inline>
          <Form.Control
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => handleSearchChange(e)}
          />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
