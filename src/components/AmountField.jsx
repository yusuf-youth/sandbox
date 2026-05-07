import React, { useState } from "react";

function AmountField({ newItem, setNewItem }) {
  const [value, setValue] = useState("");

  function onChange(e) {
    setValue(e.target.value);

    setNewItem((item) => {
      return { ...item, amount: +e.target.value };
    });
  }

  return (
    <td className="table__cell table__cell--amount">
      <input
        type="number"
        className={`table__cell-field table__cell-field--number has-focus reset-input`}
        placeholder="Amount"
        value={newItem.amount}
        onChange={onChange}
        min={0}
      />
    </td>
  );
}

export default AmountField;
