import React, { useContext } from "react";
import { CompoundComponentContext } from "./CompoundComponent";

const Description = ({ children }) => {
  const { isExpand } = useContext(CompoundComponentContext);
  return isExpand ? (
    <div className="mt-20 p-8 border-2 border-violet-400">{children}</div>
  ) : null;
};

export default Description;
