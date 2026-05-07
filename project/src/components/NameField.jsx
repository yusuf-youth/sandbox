import React, { useState } from "react";

function NameField({ newItem, setNewItem }) {
  const [value, setValue] = useState("");

  function onChange(e) {
    setValue(e.target.value);
    
    setNewItem((item) => {
      return { ...item, name: e.target.value };
    });

    // setValue('');
  }

  return (
    <td className="table__cell table__cell--item">
      <input
        // autoFocus
        type="text"
        className={`table__cell-field has-focus reset-input`}
        placeholder="Item"
        value={newItem.name}
        onChange={onChange}
      />
    </td>
  );
}

export default NameField;
