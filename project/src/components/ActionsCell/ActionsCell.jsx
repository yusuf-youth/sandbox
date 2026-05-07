import React from "react";
import TrashButton from "../TrashButton";

function ActionsCell({ id, editMode, setItems }) {
  function onClick() {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  return (
    <td className="table__cell table__cell--actions">
      <TrashButton id={id} editMode={editMode} setItems={setItems} />

      <button
        className="table__cell-delete-button visible-mobile visible-mobile reset-button"
        style={{ display: editMode ? "inline-flex" : "none" }}
        onClick={onClick}
      >
        Delete
      </button>
    </td>
  );
}

export default ActionsCell;
