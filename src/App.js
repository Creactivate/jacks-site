import {
  BrowserRouter as Router,
  Switch,
  Route, Link, HashRouter,
} from "react-router-dom";
import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import LightBoxModal from './components/lightbox-modal';
import fileObject from './components/imageCount.json';
import FooterComp from './components/FooterComp';


function App() {
  const [show, setShow] = useState({show:false, index:0});

  const onShowChange = (bool, index) => {
      setShow({show:bool,index:index});
  }

  const imageURLs = fileObject.images;

  return (
    <Router>
      <div className="App">

        <Navbar fixed='top' expand='lg' bg="dark" variant="dark"> 

          <Navbar.Brand>
            <Link className='navbar-brand' to="/">Jack Poppleton Art</Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Link className='nav-link' to="/home">About</Link>
              <Link className='nav-link' to="/features">Gallery</Link>
              <Link className='nav-link' to="/pricing">Contact</Link>
            </Nav>
          </Navbar.Collapse>

        </Navbar>

        <Switch>

          <Route path='/jacks-site/' exact>
            <div className='App-Body'>
              {imageURLs.map((image, index) => 
                <>
                  <img
                    className='imageThumbnail'
                    src={'/images/'+image}
                    alt=''
                    activeindex={index+1} 
                    onClick={()=>{onShowChange(true,index)}}
                  />
                </>
              )}
            </div>

              <LightBoxModal 
                images={imageURLs.map(url => ({
                  src:'/images/'+url,
                  alt:'',description:'',
                  title:''
                }))} 
                show={show} 
                onShowChange={onShowChange}
              />

          </Route>

        </Switch>
        <FooterComp/>
      </div>
    </Router>
    
  );
}

export default App;
