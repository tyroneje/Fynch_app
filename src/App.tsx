import { useState } from 'react';
import { useForm } from "react-hook-form";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';

function App() {
  //const [stock, setStock] = useState('');
  //const [amount, setAmount] = useState(0);
  const [calculations, setCalculations] = useState(null);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit =  (data:any) => {console.log(data);}

  console.log(watch("example"));
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <span>Stock</span>
          <br />
          <input type="text" {...register("example")} />
        </div>
        <br />
        <div>
          <span>Amount</span>
          <br />
          <input type="text" {...register("exampleRequired", { required: true })} />
        </div>
        <br />
        <div>
          <input type='submit'/>
        </div>
        {errors.exampleRequired && <span>This field is required</span>}
      </form>
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
