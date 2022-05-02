import React from "react";

const Droplist = (props) => {
  const { list } = props;
  return (
    <div className={`${props.className} flex-col space-y-3 bg-white shadow-md rounded px-6 py-4 my-4`}>
      {list.map((item, index) => (
        <a href={item.link} className="hover:bg-inherit hover:text-gray-900  text-xs shrink-0 flex items-center hover:bg-gray-200" key={index}>
          {item.icon && <img src={item.icon} className="mr-4" alt="icon" /> }
          <span className="flex-shrink-0">{item.name}</span>
        </a>
      ))}
    </div>
  );
};

export default Droplist;
