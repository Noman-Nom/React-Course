import React , {useId} from 'react'
import './inputbox.css'

const InputBox = ({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrrency  ,
    amountDisable = false,
    currencyDisable = false,
}) => {

    const amountInputId = useId()
  return (
 
      <div className="container__fields">
       

        <label htmlFor={amountInputId}>{label}</label>

        <div className="container__fields-inputbox">
          <input 
        
          id={amountInputId}
          placeholder='Amount'
          disabled={amountDisable}
          value={amount}
          onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
          
          type="number" />

          <select 
          value={selectCurrrency }
          onChange={(e)=>  onCurrencyChange && onCurrencyChange(e.target.value)}

          disabled={currencyDisable}
          >
          {currencyOptions.map((currency)=>(
            <option key={currency} value={currency}>
            {currency}
         </option>
          ))}
          </select>
        </div>
      </div>
   
  )
}

export default InputBox;
