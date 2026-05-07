import React, { useState } from "react";

function AmountCellField({ id, amount, setItems }) {
  const [value, setValue] = useState(amount);

  function onChange(e) {
    setValue(e.target.value);

    setItems((items) => {
      return items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            amount: +e.target.value,
          };
        }

        return item;
      });
    });
  }

  return (
    <td className="table__cell table__cell--amount">
      <input
        type="number"
        className={`table__cell-field table__cell-field--number has-focus reset-input`}
        placeholder="Amount"
        value={value}
        onChange={onChange}
      />
    </td>
  );
}

export default AmountCellField;
