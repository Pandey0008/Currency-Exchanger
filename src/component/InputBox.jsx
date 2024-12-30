import React, { useId } from "react";

// InputBox component to handle input fields for amount and currency selection
function InputBox({
  label,
  amount = "",
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  // Generating a unique ID for the amount input field
  const amountInputId = useId("");

  return (
    <div
      className={`bg-white p-3 rounded-lg text-sm flex flex-col sm:flex-row gap-4 sm:gap-0 ${className}`}
    >
      {/* Amount Input Section */}
      <div className="sm:w-1/2 w-full">
        <label
          htmlFor={amountInputId} // Linking the label to the amount input
          className="text-black mb-2 inline-block"
        >
          {label} {/* Displaying the label */}
        </label>
        <input
          id={amountInputId} // Unique ID for the input
          className="outline-none w-full bg-transparent py-1.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          type="number"
          placeholder="Amount" // Placeholder text for the input
          disabled={amountDisable} // Disabling the input if amountDisable is true
          value={amount} // Binding the input value to the state (amount)
          onChange={(e) =>
            // Handling change in the input and calling onAmountChange if provided
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>

      {/* Currency Selector Section */}
      <div className="sm:w-1/2 w-full flex flex-wrap sm:justify-end sm:text-right">
        <p className="text-black mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-3 py-1 bg-gray-100 cursor-pointer outline-none border border-gray-300 focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
          value={selectCurrency} // Binding selected currency to state (selectCurrency)
          onChange={(e) =>
            // Handling change in the selected currency and calling onCurrencyChange if provided
            onCurrencyChange && onCurrencyChange(e.target.value)
          }
          disabled={currencyDisable} // Disabling the select input if currencyDisable is true
        >
          {/* Mapping over the currency options and displaying them as options */}
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency} {/* Displaying each currency in the dropdown */}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
