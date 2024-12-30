import React, { useId } from "react";

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
  const amountInputId = useId("");

  return (
    <div
      className={`bg-white p-3 rounded-lg text-sm flex flex-col sm:flex-row gap-4 sm:gap-0 ${className}`}
    >
      {/* Amount Input Section */}
      <div className="sm:w-1/2 w-full">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>

      {/* Currency Selector Section */}
      <div className="sm:w-1/2 w-full flex flex-wrap sm:justify-end sm:text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-3 py-1 bg-gray-100 cursor-pointer outline-none border border-gray-300 focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
