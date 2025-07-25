// This component will display a list of vocabulary categories.

import React from 'react';

function CategoryList({ categories, onSelectCategory }) {
  return (
    <div className="category-list">
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id} onClick={() => onSelectCategory(category)}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
