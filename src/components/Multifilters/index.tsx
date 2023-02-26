import React, { useEffect, useState } from "react";
import { Item, Filter } from "./types";
import { items } from "./items";
import "./style.css";

const MultiFilters = () => {
  const [selectedFilters, setSelectedFilters] = useState<Filter[]>([]);
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);

  const filters: Filter[] = ["Bags", "Watches", "Sports", "Sunglasses"];

  const handleFilterButtonClick = (selectedCategory: Filter) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  const handleSelectAllClick = () => {
    if (selectedFilters.length === filters.length) {
      setSelectedFilters([]);
    } else {
      setSelectedFilters(filters);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.flatMap((selectedCategory) => {
        let temp = items.filter((item) => item.category === selectedCategory);
        return temp;
      });
      setFilteredItems(tempItems);
    } else {
      setFilteredItems([]);
    }
  };
  const isAllSelected = selectedFilters.length === filters.length;

  return (
    <div>
      <div className="buttons-container">
        <button
          onClick={handleSelectAllClick}
          className={`button select-all-button ${
            isAllSelected ? "active" : ""
          }`}
        >
          {isAllSelected ? "Deselect All" : "Select All"}
        </button>
        {filters.map((category, idx) => (
          <button
            onClick={() => handleFilterButtonClick(category)}
            className={`button ${
              selectedFilters?.includes(category) ? "active" : ""
            }`}
            key={`filters-${idx}`}
          >
            {category}
          </button>
        ))}
      </div>
      {filteredItems.length > 0 ? (
        <div className="items-container">
          {filteredItems.map((item, idx) => (
            <div key={`items-${idx}`} className="item">
              <p>{item.name}</p>
              <p className="category">{item.category}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-items-message">
          Please select at least one category to display items.
        </p>
      )}
    </div>
  );
};

export default MultiFilters;
