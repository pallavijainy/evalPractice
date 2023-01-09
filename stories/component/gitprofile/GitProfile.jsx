import React from 'react'
import PropTypes from "prop-types";


const GitProfile = ({DefaultProfile,username,name,avatarUrl,company,email,bio,profileUrl}) => {
  return (
    <div>
   <h1>{DefaultProfile}</h1>
   <h1>{username}</h1>
   <img src={avatarUrl} alt="err" />
   <h1>{name}</h1>
   <h3>{company}</h3>
   <h3>{email}</h3>
   <h3>{bio}</h3>
   <img src={profileUrl} alt="pal"/>
  
    </div>
  )
}

export default GitProfile


GitProfile.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  DefaultProfile: PropTypes.string,
  /**
   * What background color to use
   */
  username: PropTypes.string,
  name: PropTypes.string,
  /**
   * How large should the button be?
   */
  
  /**
   * Button contents
   */
 
};

GitProfile.defaultProps = {
  DefaultProfile:"pal"
  
};
