import React, { createContext, useState } from "react";
import Description from "./Description";
import Header from "./Header";

export const CompoundComponentContext = createContext();
const { Provider } = CompoundComponentContext;

const CompoundComponent = ({ children }) => {
  const [isExpand, setIsExpand] = useState(false);
  const handleShowDescription = () => setIsExpand((prev) => !prev);
  const values = { isExpand, handleShowDescription };

  return <Provider value={values}>{children}</Provider>;
};

CompoundComponent.header = Header;
CompoundComponent.description = Description;

export default CompoundComponent;
