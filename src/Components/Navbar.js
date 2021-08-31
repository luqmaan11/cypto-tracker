import React from 'react'
import MyVerticallyCenteredModal from './BuyModal';
import Button from 'react-bootstrap/Button';
import './Navbar.css';

const Navbar = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (

        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <Button className="bst" variant="dark">
                                        Home 
                                    </Button>
                            </li>
                            <li className="nav-item">
                                <Button className="bst" variant="dark" >
                                        About 
                                    </Button>
                            </li>
                            <li className="nav-item">
                                <div className='Modal'>
                                    <Button className="bst" variant="dark" onClick={() => setModalShow(true)}>
                                        Buy 
                                    </Button>

                                    <MyVerticallyCenteredModal
                                        show={modalShow}
                                        onHide={() => setModalShow(false)}
                                    />
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className='Modal'>
                                    <Button className="bst" variant="dark" onClick={() => setModalShow(true)}>
                                        Transfer 
                                    </Button>

                                    <MyVerticallyCenteredModal
                                        show={modalShow}
                                        onHide={() => setModalShow(false)}
                                    />
                                </div>
                            </li>
                            <li className="nav-item">
                            <div className='Modal'>
                                    <Button className="bst" variant="dark" onClick={() => setModalShow(true)}>
                                        Sell 
                                    </Button>

                                    <MyVerticallyCenteredModal
                                        show={modalShow}
                                        onHide={() => setModalShow(false)}
                                    />
                                </div>
                            </li>


                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar