import React, { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
   const context = useContext(ThemeContext);
   if (!context) {
	  throw new Error("useTheme must be used within a ThemeProvider");
   }
   return context;
};

export const ThemeProvider = ({ children }) => {
   const [isLightMode, setIsLightMode] = useState(true);
   
   const toggleMode = () => {
	  setIsLightMode(!isLightMode);
   };
   
   return (
	   <ThemeContext.Provider value={{ isLightMode, toggleMode }}>
		  {children}
	   </ThemeContext.Provider>
   );
};
