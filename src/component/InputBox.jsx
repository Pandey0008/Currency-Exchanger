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
  const amountInputId = useId();

  return (
    <div className={`bg-white p-4 rounded-lg text-sm flex flex-col sm:flex-row gap-4 ${className}`}>
      {/* Amount Input Section */}
      <div className="sm:w-1/2 w-full">
        <label
          htmlFor={amountInputId}
          className="text-black mb-2 inline-block font-medium"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-gray-50 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 transition-all"
          type="number"
          placeholder="Enter Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(e.target.value ? Number(e.target.value) : "")}
          aria-label="Amount input field"
        />
      </div>

      {/* Currency Selector Section */}
      <div className="sm:w-1/2 w-full">
        <label className="text-black mb-2 inline-block font-medium">
          Currency Type
        </label>
        <select
          className="rounded-lg px-3 py-2 bg-gray-100 cursor-pointer outline-none border border-gray-300 focus:ring-2 focus:ring-blue-500 w-full sm:w-auto transition-all"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
          aria-label="Currency selection dropdown"
          tabIndex={0}
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
