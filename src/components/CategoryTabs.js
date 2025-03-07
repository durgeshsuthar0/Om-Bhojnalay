// src/components/CategoryTabs.js
import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';

const CategoryTabs = ({ categories, activeCategory, onSelectCategory }) => {
  return (
    <Tabs
      id="category-tabs"
      activeKey={activeCategory}
      onSelect={(k) => onSelectCategory(k)}
      className="category-tabs mb-3"
      variant="pills" // Optional: To give it a pill-shaped appearance
    >
      {categories.map((category) => (
        <Tab
          eventKey={category}
          title={category.charAt(0).toUpperCase() + category.slice(1)}
          key={category}
        >
          {/* Tab content will be handled by the Menu component */}
        </Tab>
      ))}
    </Tabs>
  );
};

export default CategoryTabs;
