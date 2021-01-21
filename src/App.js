import {
  BrowserRouter as Router,
  Switch,
  Route, Link, HashRouter,
} from "react-router-dom";
import React, {useState, useEffect} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import LightBoxModal from './components/lightbox-modal';
import fileObject from './components/imageCount.json';
import FooterComp from './components/FooterComp';
import Container from 'react-bootstrap/Container';


function App() {
  const [show, setShow] = useState({show:false, index:0});
  const [firstScreen, setFirst] = useState(true);

  useEffect(() => {

  }, []);

  const onShowChange = (bool, index) => {
      setShow({show:bool,index:index});
  }

  const imageURLs = fileObject.images;

  const flicker = async () => {
    const img = document.querySelector('.firstScreenImage');
    let blend = 'hue';
    document.querySelector('.firstScreenClose').style.display = 'block';

    

    function toggleLights() {
      //toggle hue to hard-light;
      if (blend === 'hue') {
        blend = 'hard-light';
        img.style.mixBlendMode = 'hard-light'
        console.log('hard-light');
      } else {
        blend = 'hue';
        img.style.mixBlendMode = 'hue'
        console.log('hue');
      }
    }
    

    
    let toggle1 = setInterval(toggleLights, 300);
    await setTimeout(()=>{
      clearInterval(toggle1);
      img.style.mixBlendMode = 'hue';
      img.style.mixBlendMode = 'unset';
      console.log('oh right');
    }, 3000);
    let toggle2 = setInterval(toggleLights, 100);
    await setTimeout(()=>{
      clearInterval(toggle2);
      img.style.mixBlendMode = 'hue';
      img.style.mixBlendMode = 'unset';
    }, 600);
    let toggle3 = setInterval(toggleLights, 50);
    await setTimeout(()=>{
      clearInterval(toggle3);
      img.style.mixBlendMode = 'hue';
      img.style.mixBlendMode = 'unset';
    }, 600);
    await setTimeout(()=>{
      document.querySelector('.firstScreenLogo').style.display = 'block';
    }, 4000);

  
    
    
      
     
  }

  return (
    <Router>
      <div className="App">
        <Container className='sideNav'>
          

            
              <Link className='navbarBrand' to="/"><img src="./images/jack-signature.png" alt="" /></Link>
            

            
                <button type="button" className='navLink'>About</button>
                <button type="button" className='navLink'>Contact</button>
              
            

        
        </Container>
        

        <Switch>

          <Route path='/jacks-site/enter' exact>

            <div className='App-Body'>
              {imageURLs.map((image, index) => 
                <>
                  <img
                    className='imageThumbnail'
                    src={'./images/'+image}
                    alt=''
                    activeindex={index+1} 
                    onClick={()=>{onShowChange(true,index)}}
                  />
                </>
              )}
            </div>

              <LightBoxModal 
                images={imageURLs.map(url => ({
                  src:'./images/'+url,
                  alt:'',description:'',
                  title:''
                }))} 
                show={show} 
                onShowChange={onShowChange}
              />

          </Route>
          <Route path="/jacks-site/">
            <div className="firstScreen">
              <div className="cont">
                <img src="./images/jack-signature.png" className="firstScreenLogo fade-in" alt="" />
                <img onLoad={flicker} className="firstScreenImage" src="./images/jack-poppleton-untitled-2.jpg" alt=""/>
              </div>
              
              <Link className="firstScreenClose" href="/jacks-site/enter">Enter Site</Link>
            </div>
          </Route>

        </Switch>
        <FooterComp/>
      </div>
    </Router>
    
  );
}

export default App;
