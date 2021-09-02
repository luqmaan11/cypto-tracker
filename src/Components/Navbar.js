import React,{useEffect,useState} from 'react'
import BuyModal from './BuyModal';
import TransferModal from './TransferModal';
import SellModal from './SellModal';
import Button from 'react-bootstrap/Button';
import './Navbar.css';
import Modal from 'react-bootstrap/Modal';


// const [tracker, setTracker] = useState([{
//     symbol: ' ',
//     coin: [],
//     TotalValue: []
// }]);

const Navbar = () => {
    const [smodalShow, setsModalShow] = React.useState(false);
    const [bmodalShow, setbModalShow] = React.useState(false);
    const [selector, setSelector] = useState(' ');
    const [ino_coins, setino_coins] = useState(0);
    const [ivalue, setivalue] = useState(0);
    const [tmodalShow, settModalShow] = React.useState(false);

    const [tracker, setTracker] = useState([{
        symbol: ' ',
        coin: [],
        TotalValue: []
    }]);

    const no_coins = event => {
        setino_coins(event.target.value);

    }
    const value = event => {
        setivalue(event.target.value);
    }
    const selectCoin = event => {
        setSelector(event.target.value);

    }

    useEffect(() => {
        setTracker([...tracker, {
            symbol: selector,
            coin: ino_coins,
            TotalValue: ivalue
        }

        ]);
    }, [selector, ino_coins, ivalue])

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
                                    <Button className="bst" variant="dark" onClick={() => setbModalShow(true)}>
                                        Buy
                                    </Button>



                                    <Modal className="buymodal"
                                        show={bmodalShow}
                                        onHide={() => setbModalShow(false)}
                                        //{...props}
                                        //size="lg"
                                        aria-labelledby="contained-modal-title-vcenter"
                                        centered
                                    >
                                        <Modal.Header closeButton>
                                            <Modal.Title id="contained-modal-title-vcenter">
                                                Buy
                                            </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <form>

                                                <input type='text' inputmode='decimal' placeholder='no. of coins' onChange={no_coins} />
                                                <input type='text' inputmode='decimal' placeholder='value' onChange={value} />
                                                <input type='text'  placeholder='symbol' onChange={selectCoin} />
                                                <button type="submit">Submit</button>
                                                {tracker.map((data) => <p> {data.symbol} </p>)}
                                            </form>

                                        </Modal.Body>
                                        <Modal.Footer>
                                            {/* <Button onClick={props.onHide}>Close</Button> */}
                                        </Modal.Footer>

                                    </Modal>
                                    {/* <BuyModal
                                        // show={modalShow}
                                        // onHide={() => setModalShow(false)}
                                    /> */}
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className='Modal'>
                                    <Button className="bst" variant="dark" onClick={() => settModalShow(true)}>
                                        Transfer
                                    </Button>

                                    <TransferModal
                                        show={tmodalShow}
                                        onHide={() => settModalShow(false)}
                                    />
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className='Modal'>
                                    <Button className="bst" variant="dark" onClick={() => setsModalShow(true)}>
                                        Sell
                                    </Button>

                                    <SellModal
                                        show={smodalShow}
                                        onHide={() => setsModalShow(false)}
                                    />
                                </div>
                            </li>
                            <li className="nav-item">
                                <Button className="bst" variant="dark">
                                    Activity
                                </Button>
                            </li>


                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar


const allocatedata = () => {



}