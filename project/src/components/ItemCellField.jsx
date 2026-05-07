import React, { useState } from "react";

function ItemCellField({ id, name, setItems }) {
  const [value, setValue] = useState(name);

  function onChange(e) {
    setValue(e.target.value);

    setItems((items) => {
      return items.map((item) => {
        if (item.id === id) {
          return { ...item, name: e.target.value };
        }

        return item;
      });
    });
  }

  return (
    <td className="table__cell table__cell--item">
      <input
        type="text"
        className={`table__cell-field has-focus reset-input`}
        placeholder="Item"
        value={value}
        onChange={onChange}
      />
    </td>
  );
}

export default ItemCellField;
