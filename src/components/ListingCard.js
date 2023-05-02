import React, { useState } from "react";

function ListingCard({ item, onHandleDelete }) {
  const [isFavorite, setIsFavorite] = useState(false);

  function favClick() {
    setIsFavorite(!isFavorite);
  }

  function deleteCard() {
    fetch(`http://localhost:6001/listings/${item.id}`, {
    method: "DELETE"
      }) 
    .then(resp => resp.json())
    .then(() => onHandleDelete(item))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={item.image} alt={item.description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button onClick={favClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={favClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{item.description}</strong>
        <span> · {item.location}</span>
        <button onClick={deleteCard} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;