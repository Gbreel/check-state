import React, { Children } from 'react';
import PropTypes from 'prop-types';


const Profile = ({children,FullName,bio,profession,handleName}) => {
    
    return (
       
        <div>
          {children}
            <h1>{FullName}</h1>
            <h2>{bio}</h2>
            <h2>{profession}</h2>
           
        </div>
    )
}

export default Profile
Profile.defaultProps={
    Children: "introuvable",
    FullName: "inconnue",
};
Profile.propTypes = {
    FullName:PropTypes.string,
    bio:PropTypes.string,
};