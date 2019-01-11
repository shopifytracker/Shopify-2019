import React from "react";
import { ReactComponent as StarIcon } from "./Star.svg";
import "./WasteItem.scss";

const WasteItem = props => {
  const { id, title, body, favourited, favoriteItem } = props;
  return (
    <tr>
      <td className="star">
        <button
          className={favourited ? "favButton favourited" : "favButton"}
          onClick={() => favoriteItem(id)}
        >
          <StarIcon />
          <span className="visually-hidden">
            {favourited ? "Remove from Favourites" : "Add to Favourites"}
          </span>
        </button>
      </td>
      <td className="title">{title}</td>
      <td className="body" dangerouslySetInnerHTML={{ __html: body }} />
    </tr>
  );
};

export default WasteItem;