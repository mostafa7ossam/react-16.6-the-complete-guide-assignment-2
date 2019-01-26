import React from 'react';


const validator = (props) =>{
  return(
    <div>
      {props.length > 5?
       <p>Text too long</p>
      :<p>Text too short</p>}
    </div>
  );
}

export default validator
