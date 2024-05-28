import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //const [stock, setStock] = useState('');
  //const [amount, setAmount] = useState(0);
  const [calculations, setCalculations] = useState(null);

  function calculateStockAmount() {
    // call Fynch API
    /**
     * Returns {
     * symbol: 'abc',
     * price: 1.00,
     * amountToPurchase: 50
     * }
     */

  }

  return (
    <>
      <h1>Fynch</h1>
      {/* <form action=""></form> */}
      <div>
        <span>Stock</span>
        <br />
        <input type="text" />
      </div>
      <br />
      <div>
        <span>Amount</span>
        <br />
        <input type="text" />
      </div>
      <br />
      <div>
        <button onClick={calculateStockAmount}>Calculate</button>
      </div>
      {calculations ?
        (<>
          <br />
          <br />
          <div>
            <h4>Stock Name</h4>
            <div>
              <div>stock value($)</div>
              <div>amount to purchase (#)</div>
            </div>
          </div>
        </>) : null}
    </>
  )
}

export default App
