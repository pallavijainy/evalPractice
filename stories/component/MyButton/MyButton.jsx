import React from 'react'
import PropTypes from "prop-types";

const MyButton = ({disabled=false,onClick}) => {
  return (
    <div>
      <button disabled={disabled} onClick={onClick}>Button</button>

    </div>
  )
}

export default MyButton


MyButton.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  disabled:PropTypes.bool,
  /**
   * What background color to use
   */
  
   
  onClick: PropTypes.func,
};

MyButton.defaultProps = {
 disabled: true,
  onClick: undefined,
};