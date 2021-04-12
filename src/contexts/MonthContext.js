import { useState, createContext } from "react";

export const MonthContext = createContext();

export const MonthProvider = ({ children }) => {
  const [selectedMonth, setSelectedMonth] = useState("");

  return (
    <MonthContext.Provider value={[selectedMonth, setSelectedMonth]}>
      {children}
    </MonthContext.Provider>
  );
};

export default MonthContext;
