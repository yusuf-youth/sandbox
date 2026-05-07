import React from "react";
import { TrashIcon } from "../assets/Icons";

function TrashButton({ id, editMode, setItems }) {

  function onClick() {
    setItems(items => items.filter(item => item.id !== id))
  }

  return (
    <button
      className={`table__trash-button reset-button ${editMode ? "is-visible" : ""} hidden-mobile`}
      aria-label="Delete row"
      title="Delete row"
      onClick={onClick}
    >
      <TrashIcon />
    </button>
  );
}

export default TrashButton;
