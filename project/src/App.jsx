import { useState } from "react";
import Document from "./components/Document/Document";
import Title from "./components/Title/Title";
import TitleField from "./components/TitleField/TitleField";
import Description from "./components/Description/Description";
import DescriptionField from "./components/DescriptionField/DescriptionField";
import { PenIcon } from "./assets/Icons";
import EditDocumentButton from "./components/EditDocumentButton/EditDocumentButton";
import { debts } from "./data/debts";
import { spendings } from "./data/spendings";

function App() {
  return (
    <>
      {/* <div className="repayment-plan">
        <h3 className="repayment-plan__heading h5">Repayment Plan</h3>

        <header className="repayment-plan__header">
          <h4 className="repayment-plan__title h6">Credit Card</h4>
        </header>

        <div className="repayment-plan__body">
          <form className="document__form">
            <table className="document__table table">
              <tbody className="table__body">
                <tr className="table__row">
                  <td className="table__cell table__cell--item">Debt</td>
                  <td className="table__cell table__cell--amount">1450</td>
                </tr>
                <tr className="table__row">
                  <td className="table__cell table__cell--item">Monthly Payments</td>
                  <td className="table__cell table__cell--amount">1450</td>
                </tr>
                <tr className="table__row">
                  <td className="table__cell table__cell--item">Start</td>
                  <td className="table__cell table__cell--item">June</td>
                </tr>
                <tr className="table__row">
                  <td className="table__cell table__cell--item">Months Left</td>
                  <td className="table__cell table__cell--item">June</td>
                </tr>
              </tbody>
            </table>

            <button type="submit" style={{ display: "none" }}>
              Submit
            </button>
          </form>
        </div>
      </div> */}

      {/* <Document
        id={0}
        name="Debts"
        hasInitialData={debts}
      /> */}
      {/* <Document
        id={1}
        name="Credits"
        hasInitialData={false}
        isEditMode={true}
      /> */}
      <Document
        id={2}
        name="Monthly Spendings"
        hasInitialData={spendings}
        isEditMode={false}
      />
    </>
  );
}

export default App;
