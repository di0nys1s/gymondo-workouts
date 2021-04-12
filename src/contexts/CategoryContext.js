import { useState, createContext } from "react";

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  return (
    <CategoryContext.Provider
      value={[selectedCategories, setSelectedCategories]}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryContext;
