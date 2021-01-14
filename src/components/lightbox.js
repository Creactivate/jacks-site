import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import LightBoxModal from './lightbox-modal';

function LightBoxItem(props) {
  
    return (
      <>
        <Button variant="primary" onclick={console.log('click')}>
          Launch demo modal
        </Button>
      </>
    );
  }

  export default LightBoxItem;