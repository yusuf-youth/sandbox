import React from "react";

function TotalCard({ items }) {
  const totalAmount = items.reduce((total, item) => total + item.amount, 0);

  return (
    <div className="total-card">
      <span className="total-card__label">Total</span>
      <h3 className="total-card__amount">
        {totalAmount.toLocaleString("fr-FR")}
      </h3>
    </div>
  );
}

export default TotalCard;
