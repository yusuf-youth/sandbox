import React from "react";

function Form({
  showPlaceholder,
  setShowPlaceholder,
  setItems,
  newItem,
  setNewItem,
  editMode,
  children,
}) {
  function onSubmit(e) {
    e.preventDefault();

    if (newItem.name && newItem.amount) {
      setItems((items) => {
        return [...items, { ...newItem, id: Date.now() }];
      });

      setNewItem({
        name: "",
        amount: 0,
      });

      setShowPlaceholder(false);
    }
  }

  function onFocus() {}

  function onKeyDown(e) {
    if (e.key === "Escape") {
      if (showPlaceholder) {
        setShowPlaceholder(false);
      }
    }

    if (e.key === "Enter" && editMode) {
      if (newItem.name && newItem.amount) {
        setItems((items) => {
          return [...items, { ...newItem, id: Date.now() }];
        });

        setNewItem({
          name: "",
          amount: 0,
        });
      }

      e.preventDefault();
    }
  }

  return (
    <form className="document__form" onSubmit={onSubmit} onKeyDown={onKeyDown}>
      {children}
      <button type="submit" style={{ display: "none" }}>
        Submit
      </button>
    </form>
  );
}

export default Form;
