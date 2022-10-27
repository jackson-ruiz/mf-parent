import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const { buttonContent, buttonAcction, buttonClassName } = props;
  const basicClassName =
    "flex w-full mt-2 mb-5 px-4 py-2 text-sm text-cyan-50 rounded-sm hover:bg-cyan-100 hover:text-cyan-800 hover:border-0 focus:outline-none focus:bg-white focus:text-cyan-800";
  return (
    <button
      className={`${basicClassName} ${buttonClassName}`}
      onClick={buttonAcction}
    >
      {buttonContent}
    </button>
  );
};

Button.propTypes = {
  buttonContent: PropTypes.object.isRequired,
  buttonAcction: PropTypes.func,
  buttonClassName: PropTypes.string,
};

export default Button;
