import React, { useState, useEffect } from 'react';
import axios from 'axios';   //api call
import './App.css';
import Coin from './Components/Coin'
//import Portfolio from './Components/Portfolio'
// import Buy from './Components/Buy'
// import Navbar from './Components/Navbar';
// import MyVerticallyCenteredModal from './Components/BuyModal';
import Button from 'react-bootstrap/Button';
import Portfolio from './Components/Portfolio';
//Navbar imports
// import TransferModal from 'Components/TransferModal';
// import SellModal from 'Components/SellModal';
import Modal from 'react-bootstrap/Modal';

function App(props) {
  const [coins, setcoins] = useState([]);
  const [search, setSearch] = useState('');
  //const [total, setTotal] = useState(0);
  //const [modalShow, setModalShow] = React.useState(false);


  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false")
      .then(response => {
        setcoins(response.data);
        console.log(coins);
      })
      .catch(error => {
        console.log(error.message);
      })
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase()) || coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  console.log(filteredCoins);

  const listItems = filteredCoins.map((coin) =>
    <Coin key={coin.id}
      name={coin.name}
      symbol={coin.symbol}
      image={coin.image}
      price={coin.current_price}
      volume={coin.total_volume}
      market_cap={coin.market_cap}
      Chg={coin.price_change_percentage_24h} />
  );

  //Navbar vars
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

  const handleBuy = () =>{
    setTracker([...tracker, {
      symbol: selector,
      coin: ino_coins,
      TotalValue: ivalue
    }

    ]);
    console.log(tracker);
    setbModalShow(false);
  }



  // useEffect(() => {
  //   setTracker([...tracker, {
  //     symbol: selector,
  //     coin: ino_coins,
  //     TotalValue: ivalue
  //   }

  //   ]);
  // }, [selector, ino_coins, ivalue])



  return (
    <div className="App">

      {/* <div className="Portfolio">
        <Input/>

      </div> */}


      <div>
        {/* Navbar */}
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
                      {...props}
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
                          <input type='text' placeholder='symbol' onChange={selectCoin} />
                          <button type="button" onClick={handleBuy}>Submit</button>
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

                    <Modal className="buymodal"
                    show={tmodalShow}
                    onHide={() => settModalShow(false)}
                      {...props}
                      //size="lg"
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                    >
                      <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                          Transfer
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        form
                      </Modal.Body>
                      <Modal.Footer>
                        {/* <Button onClick={props.onHide}>Close</Button> */}
                      </Modal.Footer>
                    </Modal>
                  </div>
                </li>
                <li className="nav-item">
                  <div className='Modal'>
                    <Button className="bst" variant="dark" onClick={() => setsModalShow(true)}>
                      Sell
                    </Button>

                    <Modal className="buymodal"
                    show={smodalShow}
                    onHide={() => setsModalShow(false)}
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
                        form
                      </Modal.Body>
                      <Modal.Footer>
                        {/* <Button onClick={props.onHide}>Close</Button> */}
                      </Modal.Footer>
                    </Modal>
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
      {/* {tracker.map((data)=><p>{data.symbol}{data.TotalValue}{data.coin}</p>)} */}
      <div className='body'>
        <div><Portfolio /></div>
        <div className='header'>
          <h2>CryptoCurrency Market's Top 100</h2>
          <div className="coins-search">
            <form>
              <input type="text" placeholder="search" onChange={handleChange} className="coins-input" />
            </form>
          </div>
          <br />
        </div>
        <div className="res">
          <table >
            <tr >
              <td><b>Name</b></td>
              <td><b>Symbol</b></td>
              <td><b>Price(INR)</b></td>
              <td><b>Volume</b></td>
              <td><b>Market cap</b></td>
              <td><b>Chg(24H)</b></td>

            </tr>




            {listItems}
          </table>
        </div>







      </div>
    </div>
  );
}

export default App;