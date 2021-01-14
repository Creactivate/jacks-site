import React, {useState, useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';

function LightBoxModal(props) {
  

  useEffect(() => {
    if (props.show.show) {
      let fired = false;
    let hover = false;

    let next = document.querySelector('.carousel-control-next');
    let prev = document.querySelector('.carousel-control-prev');


    next.addEventListener('mouseleave', (event) => {event.target.firstChild.style.display = 'none'});
    next.addEventListener('mouseenter', (event) => {event.target.firstChild.style.display = 'block'});
    prev.addEventListener('mouseleave', (event) => {event.target.firstChild.style.display = 'none'});
    prev.addEventListener('mouseenter', (event) => {event.target.firstChild.style.display = 'block'});

    }
    

    



  });
    
  const handleClose = () => props.onShowChange(false);


  return (
    <Modal show={props.show.show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Image Title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <Carousel controls={true}   slide={false} indicators={false} interval={null} defaultActiveIndex={props.show.index}>
            {props.images.map((image, index) =>
              <Carousel.Item key={index}>
                <img
                  className={`carouselImage${index} imageCarousel`}
                  src={image.src}
                  alt={image.alt}
                />
                <Carousel.Caption>
                  <h3>{image.title}</h3>
                  <p>{image.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            )}
          </Carousel>
        </div>
        
      </Modal.Body>
    </Modal>
    );
  }

  export default LightBoxModal;