import React, { useState } from "react";
import useDocumentContext from "../../hooks/useDocumentContext";

function ItemLabelField({ label, setLabel }) {
  const [value, setValue] = useState(label)

  function onChange(e) {
    setValue(e.target.value)
    setLabel(e.target.value)
  }

  return (
    <input
      type="text"
      className={`document__item-label-field has-focus reset-input h6`}
      placeholder={'Label'}
      value={value}
      onChange={onChange}
    />
  );
}

export default ItemLabelField;
