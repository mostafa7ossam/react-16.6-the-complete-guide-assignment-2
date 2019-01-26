import React from 'react';
import './Char.css'


const char = (props) =>{
  return(
    <div className="charComponent" onClick={props.func}>
      {props.c}
    </div>
  );
}

export default char
