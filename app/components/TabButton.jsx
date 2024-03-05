import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-white border-b-2 border-purple-500" : "text-[#c3cacf]";

  return (
    <button onClick={selectTab}>
      <p className={`text-xl md:text-2xl mt-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;