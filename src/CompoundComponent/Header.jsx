import React, { useContext } from "react";
import { CompoundComponentContext } from "./CompoundComponent";

const Header = ({ children }) => {
  const { isExpand, handleShowDescription } = useContext(
    CompoundComponentContext
  );
  return (
    <div className="text-4xl flex space-x-20">
      <div>{children}</div>
      <button
        onClick={handleShowDescription}
        className="bg-violet-600 text-2xl text-white rounded-lg p-2"
      >
        {`Click to ${isExpand ? `Collaps !!` : `Expand !!`} `}
      </button>
    </div>
  );
};

export default Header;
