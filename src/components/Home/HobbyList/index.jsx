import React from "react";
import PropTypes from "prop-types";

function HobbyList(props) {
  const { hobbylist, activeId, onHobbyClick } = props;
  const handleClick = (hobby) => {
    if (onHobbyClick) {
      onHobbyClick(hobby);
    }
  };
  console.log(hobbylist);
  return (
    <div>
      {hobbylist.map((item) => (
        <p
          key={item.id}
          className={item.id === activeId ? "active " : ""}
          onClick={() => handleClick(item)}
        >
          {item.title}
        </p>
      ))}
    </div>
  );
}

HobbyList.propTypes = {};

export default HobbyList;
