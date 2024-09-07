import { Languages } from "lucide-react";
import React, { createContext, ReactNode } from "react";
import { useState } from "react";

export const Context = createContext(null);

interface ContextProviderProps {
  children: ReactNode;
}

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState("FR");

  const contextValue = {
    language,
    setLanguage,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

// Export the provider component as the default export
export default ContextProvider;
