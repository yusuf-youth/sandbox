import React from "react";

function AmountCell({amount}) {
  return <td className="table__cell table__cell--amount">{amount.toLocaleString("fr-FR")}</td>;
}

export default AmountCell;
