import React from "react";
import PropTypes from "prop-types";
import WasteItem from "../WasteItem/WasteItem";
import "./SearchResults.scss";

const SearchResults = props => {
  const { items, caption, favoriteItem } = props;
  const results = [];
  if (items) {
    Object.keys(items).forEach(element => {
      const item = items[element];
      results.push(
        <WasteItem
          key={item.id}
          id={item.id}
          title={item.title}
          body={item.body}
          favourited={item.favourited}
          favoriteItem={favoriteItem}
        />
      );
    });
  }
  return (
    <table>
      <caption>{caption}</caption>
      <thead>
        <tr>
          <th scope="col">Favourite</th>
          <th scope="col">Waste</th>
          <th scope="col">Instructions</th>
        </tr>
      </thead>
      <tbody>{results}</tbody>
    </table>
  );
};

SearchResults.propTypes = {
  items: PropTypes.object.isRequired,
  caption: PropTypes.string,
  favoriteItem: PropTypes.func
};

SearchResults.defaultProps = {
  caption: "Search Results",
  favoriteItem: null
};

export default SearchResults;
