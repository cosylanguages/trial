// This component will contain the freestyle mode of the application.
// Users will be able to freely explore and interact with the language content.

import React, { useState, useEffect } from 'react';
import CategoryList from './CategoryList';
import Category from './Category';
import categories from './categories.json';

function Freestyle() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    // In a real application, you would fetch this data from an API.
    setCategoryList(categories);
  }, []);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <h2>Freestyle Mode</h2>
      {selectedCategory ? (
        <Category category={selectedCategory} />
      ) : (
        <CategoryList categories={categoryList} onSelectCategory={handleSelectCategory} />
      )}
    </div>
  );
}

export default Freestyle;
