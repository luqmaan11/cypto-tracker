import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from  'react-bootstrap/Modal';
import Buy from './Buy'


function SellModal(props) {
    return (
      <Modal className="buymodal"
        {...props}
        //size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Sell
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Buy/>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button onClick={props.onHide}>Close</Button> */}
        </Modal.Footer>
      </Modal>
    );
  }
  
export default SellModal