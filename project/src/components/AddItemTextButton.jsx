import React from 'react'

function AddItemTextButton({ showPlaceholder, setShowPlaceholder }) {
  function onClick() {
    setShowPlaceholder((showPlaceholder) => !showPlaceholder);
  }

  return (
    <button
      className="document__add-item-text-button reset-button"
      aria-label={showPlaceholder ? "Close" : "Add row"}
      title={showPlaceholder ? "Close" : "Add row"}
      onClick={onClick}
    >
      {showPlaceholder ? (
        <span>Close</span>
      ) : (
        <>Add Item</>
      )}
    </button>
  );
}

export default AddItemTextButton