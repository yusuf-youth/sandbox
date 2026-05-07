import React from "react";
import { PenIcon } from "../../assets/Icons";

function EditDocumentButton({ editMode, setEditMode }) {
  function onClick() {
    setEditMode((editMode) => !editMode);
  }

  return (
    <button
      className="document__edit-document-button reset-button"
      type="button"
      aria-label={editMode ? "" : "Edit document"}
      title={editMode ? "" : "Edit document"}
      onClick={onClick}
    >
      {editMode ? (
        <span>Done</span>
      ) : (
        <PenIcon className="document__icon-pen" />
      )}
    </button>
  );
}

export default EditDocumentButton;
