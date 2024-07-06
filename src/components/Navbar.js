import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import{Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';


function NavigationBar () {
  const [searchQuery, setSearchQuery]=useState('');
  const navigate= useNavigate();

  const handlesearch=(event) =>{
    event.preventDefault();
    if(searchQuery.trim()){
      navigate(`/search/${searchQuery}`);
    }
  };
  return (
    <Navbar className="navbar navbar-expand-lg" expand="lg">
        <Navbar.Brand className="text-dark" as={Link} to="/">MovieDB</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-primary'/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link  className="text-white" as={Link} to="/">Popular</Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/top-rated">Top Rated</Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/upcoming">Upcoming</Nav.Link>
            </Nav>
            <Form className="d-flex ml-auto" onSubmit={handlesearch}>
              <FormControl
              type="text"
              placeholder="Search"
              className="mr-2 flex-grow-1"
              value={searchQuery}
              onChange={(e)=>setSearchQuery(e.target.value)}/>
              <Button className="searchbutton" type="submit">Search Movie</Button>
            </Form>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;