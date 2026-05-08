import React from "react";
import { PlusIcon } from "../../assets/Icons";
import useDocumentContext from "../../hooks/useAppContext";

function AddItemButton({ showPlaceholder, setShowPlaceholder }) {
  function onClick() {
    setShowPlaceholder((showPlaceholder) => !showPlaceholder);
  }

  return (
    <button
      className="document__add-item-button reset-button"
      aria-label={showPlaceholder ? "Close" : "Add row"}
      title={showPlaceholder ? "Close" : "Add row"}
      onClick={onClick}
    >
      {showPlaceholder ? (
        <span>&times;</span>
      ) : (
        <PlusIcon className="document__icon-plus" />
      )}
    </button>
  );
}

export default AddItemButton;
