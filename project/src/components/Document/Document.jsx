import React, { useEffect, useState } from "react";
import TitleField from "../TitleField/TitleField";
import Title from "../Title/Title";
import DescriptionField from "../DescriptionField/DescriptionField";
import Description from "../Description/Description";
import EditDocumentButton from "../EditDocumentButton/EditDocumentButton";
import TotalCard from "../TotalCard/TotalCard";
import ItemLabel from "../ItemLabel/ItemLabel";
import ItemLabelField from "../ItemLabelField/ItemLabelField";
import AddItemButton from "../AddItemButton/AddItemButton";
import Table from "../Table/Table";
import useDocumentContext from "../../hooks/useDocumentContext";
import Form from "../Form";
import AddItemTextButton from "../AddItemTextButton";

function Document({ id, name, hasInitialData, isEditMode }) {
  let document;
  const savedDocument = localStorage.getItem(id);

  if (savedDocument) {
    document = JSON.parse(savedDocument);
  } else if (hasInitialData) {
    document = hasInitialData;

    console.log(hasInitialData.label)

    localStorage.setItem(id, JSON.stringify(document));
  } else {
    document = {
      name,
      description: "",
      items: document.items || [],
      label: "Items"
    };

    localStorage.setItem(id, JSON.stringify(document));
  }

  const [title, setTitle] = useState(document.name || name);
  const [description, setDescription] = useState(document.description || "");
  const [label, setLabel] = useState(document.label || "Items");
  const [items, setItems] = useState(isEditMode ? [] : document.items || []);
  const [editMode, setEditMode] = useState(isEditMode);
  const [showPlaceholder, setShowPlaceholder] = useState(false);
  const [newItem, setNewItem] = useState({
    id: null,
    name: "",
    amount: 0,
  });

  useEffect(() => {
    document = {
      name: title,
      description,
      items,
      label
    };

    localStorage.setItem(id, JSON.stringify(document));
  }, [title, description, items, label]);

  return (
    <div className="document">
      <header className="document__header">
        {editMode ? (
          <>
            <TitleField title={title} setTitle={setTitle} />
            <DescriptionField
              description={description}
              setDescription={setDescription}
            />
          </>
        ) : (
          <>
            <Title title={title} />
            <Description description={description} />
          </>
        )}

        <EditDocumentButton editMode={editMode} setEditMode={setEditMode} />
      </header>

      <div className="document__body">
        <TotalCard items={items} />

        <div className="document__nav">
          {editMode ? (
            <ItemLabelField label={label} setLabel={setLabel} />
          ) : (
            <ItemLabel label={label} />
          )}

          <AddItemButton
            showPlaceholder={showPlaceholder}
            setShowPlaceholder={setShowPlaceholder}
          />

          <AddItemTextButton
            showPlaceholder={showPlaceholder}
            setShowPlaceholder={setShowPlaceholder}
          />
        </div>

        <Form
          showPlaceholder={setShowPlaceholder}
          setShowPlaceholder={setShowPlaceholder}
          setItems={setItems}
          newItem={newItem}
          setNewItem={setNewItem}
          editMode={editMode}
        >
          <Table
            items={items}
            setItems={setItems}
            showPlaceholder={showPlaceholder}
            editMode={editMode}
            newItem={newItem}
            setNewItem={setNewItem}
          />
        </Form>
      </div>
    </div>
  );
}

export default Document;
