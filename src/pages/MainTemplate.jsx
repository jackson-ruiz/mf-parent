import React from "react";
import PropTypes from "prop-types";

const MainTemplate = (props) => {
  return (
    <>
      <div data-testid="left-side">LeftSide Page</div>
      <div data-testid="content-side">Content Side</div>
    </>
  );
};

MainTemplate.propTypes = {};

export default MainTemplate;
