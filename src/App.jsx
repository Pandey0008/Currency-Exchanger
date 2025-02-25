// Importing required modules and components
import { useState } from 'react';
import { InputBox } from './component';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  // State hooks for managing input values, currencies, and conversion results
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState();

  // Fetching currency conversion info based on the "from" currency
  const currencyInfo = useCurrencyInfo(from);

  // Extracting available currency options
  const options = Object.keys(currencyInfo);

  // Function to swap the "from" and "to" currencies
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  // Function to convert the entered amount to the target currency
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full min-h-screen flex flex-col justify-center items-center bg-cover bg-no-repeat px-4 sm:px-8"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/545064/pexels-photo-545064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
    >
      <div className="w-full max-w-lg border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/10 shadow-lg sm:p-8 md:max-w-md lg:max-w-lg">
        {/* Form for handling currency conversion */}
        <form
          onSubmit={(e) => {
            e.preventDefault(); // Preventing default form submission
            convert(); // Calling the conversion function
          }}
          className="flex flex-col"
        >
          {/* Input box for the amount and source currency */}
          <div className="w-full mb-5">
            <InputBox
              type="number"
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setAmount(amount)}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
            />
          </div>

        {/* Swap button to switch between "from" and "to" currencies */}
<div className="relative flex justify-center items-center w-full mb-3">
  <button
    type="button"
    className="border-2 border-white rounded-md bg-blue-600 text-white p-2 hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-400"
    onClick={swap}
    aria-label="Swap currencies"
  >
    Swap🔄
  </button>
</div>


          {/* Input box for the converted amount and target currency */}
          <div className="w-full mt-5">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(amount) => setTo(amount)}
              selectCurrency={to}
              amountDisable
            />
          </div>

          {/* Submit button to trigger the conversion */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg mt-4 text-sm sm:text-base hover:bg-blue-700 transition duration-300"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
