import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

import "./App.css";
import Button from "./components/Button";
import SwapButton from "./components/SwapButton";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const [convertedAmount, setConvertedAmount] = useState(0);
 

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
    
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div>

       <h1 className="heading">
          React <br />
          <span>Currency Calculator</span>
        </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
      >

        
          <InputBox
           className="inp1"
          
          label="From"
          amount={amount}
          currencyOptions={options}
          onCurrencyChange={(currency)=>
          setFrom(currency)
          }
          onAmountChange={(amount)=>
            setAmount(amount)}
            selectCurrency ={from}

          />

              <div  className="sbtn">
              <SwapButton 
       
        swap={swap}
        />
              </div>
       

      


          <InputBox
          
          label="To"
          amount={convertedAmount}
          currencyOptions={options}
          onCurrencyChange={(currency)=>
          setTo(currency)
          }
          onAmountChange={(amount)=>
            setConvertedAmount(amount)}
            selectCurrency ={to}

          />
          <Button from={from} to={to}/>



       

      

       


      </form>
    </div>
  );
}

export default App;
