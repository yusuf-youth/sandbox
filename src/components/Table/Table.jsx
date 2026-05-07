import React, { useState } from "react";
import ItemCell from "../ItemCell/ItemCell";
import ItemCellField from "../ItemCellField";
import AmountCellField from "../AmountCellField/AmountCellField";
import AmountCell from "../AmountCell/AmountCell";
import ActionsCell from "../ActionsCell/ActionsCell";
import useDocumentContext from "../../hooks/useDocumentContext";
import NameField from "../NameField";
import AmountField from "../AmountField";

function Table({
  items,
  setItems,
  showPlaceholder,
  editMode,
  newItem,
  setNewItem,
}) {
  return (
    <table className="document__table table">
      <tbody className="table__body">
        {items.map((item) => {
          if (editMode) {
            return (
              <tr className="table__row" key={item.id}>
                <ItemCellField
                  id={item.id}
                  name={item.name}
                  setItems={setItems}
                />
                <AmountCellField
                  id={item.id}
                  amount={item.amount}
                  setItems={setItems}
                />
                <ActionsCell
                  id={item.id}
                  editMode={editMode}
                  setItems={setItems}
                />
              </tr>
            );
          } else {
            return (
              <tr className="table__row" key={item.id}>
                <ItemCell id={item.id} name={item.name} setItems={setItems} />
                <AmountCell amount={item.amount} />
                <ActionsCell />
              </tr>
            );
          }
        })}
        {/* <tr className="table__row">
          {isModifyingDocument ? <ItemCellField /> : <ItemCell />}
          {isModifyingDocument ? <AmountCellField /> : <AmountCell />}
          <ActionsCell />
        </tr> */}
        {/* <tr className="table__row">
          <td className="table__cell table__cell--item">Cacao</td>
          <td className="table__cell table__cell--amount">200</td>
          <td className="table__cell table__cell--actions"></td>
        </tr>
        <tr className="table__row">
          <td className="table__cell table__cell--item">Supplement</td>
          <td className="table__cell table__cell--amount">600</td>
          <td className="table__cell table__cell--actions"></td>
        </tr>
        <tr className="table__row">
          <td className="table__cell table__cell--item">Taxi</td>
          <td className="table__cell table__cell--amount">250</td>
          <td className="table__cell table__cell--actions"></td>
        </tr> */}
        {showPlaceholder && (
          <tr className="table__row">
            <NameField newItem={newItem} setNewItem={setNewItem} />
            <AmountField newItem={newItem} setNewItem={setNewItem} />
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default Table;
