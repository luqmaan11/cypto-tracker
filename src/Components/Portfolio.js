import React from 'react'
import './Portfolio.css'
import Chart from "react-google-charts";

export const Portfolio = (props) => {

    <allocatedata/>

    return (
        <div className='userdata'>
        <div className="pf">
            <div className="pl">
                <h1>current holdings </h1>
                <h2>sum</h2>
                <h3>day P/L(g/R):value(%)</h3>
                <h3>total P/L(g/R):value(%)</h3>



            </div>
            <div className="graph">
                <Chart
                    width={'300px'}
                    height={'300px'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Task', 'Hours per Day'],
                        ['Work', 11],
                        ['Eat', 20],
                        ['Commute', 2],
                        ['Watch TV', 2],
                        ['Sleep', 7],
                    ]}
                    options={{
                        title: 'My Daily Activities',
                        // Just add this option
                        pieHole: 0.4,
                    }}
                    rootProps={{ 'data-testid': '3' }}
                />

            </div>
        </div>
        <div className='holdings'>
        <h2>Wallet</h2>
        <table >
            <tr >
              <td><b>Name</b></td>
              <td><b>Symbol</b></td>
              <td><b>Price(INR)</b></td>
              <td><b>Quantity</b></td>
              <td><b>Total Holding</b></td>
              <td><b>Chg(24H)</b></td>

            </tr>




          </table>

            </div>
            </div>
    )
}

export default Portfolio