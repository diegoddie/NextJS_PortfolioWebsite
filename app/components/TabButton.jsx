import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-[#595d60] dark:text-white border-b-2 border-blue-500 dark:border-purple-500" : "text-slate-400 dark:text-[#c3cacf]";

  return (
    <button onClick={selectTab}>
      <p className={`text-xl md:text-2xl mt-3 font-semibold hover:text-[#595d60] dark:hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;