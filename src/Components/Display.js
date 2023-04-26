import './Display.css';

import { Textfit } from "react-textfit";
import React from 'react';




const Display = ({ value }) => {
    return (
      <Textfit className="Display" mode="single" max={70}>
        {value}
      </Textfit>
    );
  };
  
  export default Display;
    