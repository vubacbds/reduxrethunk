import React from "react";
import PropType from "prop-types";

// HobbyList.propTypes = {
//   hobbyList: PropType.array,
// };
// HobbyList.defaultProps = {
//   hobbyList: [],
// };

function HobbyList(props) {
  const { hobbyList } = props;
  return (
    <ul>
      {hobbyList.map((hobby, index) => (
        <li key={index}>{hobby.title}</li>
      ))}
    </ul>
  );
}
export default HobbyList;
