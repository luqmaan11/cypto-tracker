import React, {useState} from 'react'
import Button from 'react-bootstrap/esm/Button';

export const Input = () => {
    const [iatprice, setiatprice] = useState(0);
    const [ino_coins, setino_coins] = useState(0);
    const [ivalue, setivalue] = useState(0);

    const atprice = event => {
        setiatprice(event.target.value);

    }
    const no_coins = event => {
        setino_coins(event.target.value);

    }
    const value = event => {
        setivalue(event.target.value);
        

    }

    const save =() => {
    }

    return (

        <div>
        <form onsubmit = {save}>

            <input type = 'text' inputmode='decimal' placeholder = 'at price' onsubmit = {atprice}/>
            <input type = 'text' inputmode='decimal' placeholder = 'no. of coins' onsubmit = {no_coins}/>
            <input type = 'text' inputmode='decimal' placeholder = 'value' onsubmit = {value}/>
            <button type="submit">Submit</button>

            </form>
        </div>
    )
}



export default Input