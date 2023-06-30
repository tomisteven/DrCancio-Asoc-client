import React from "react";
import './Sample-box.scss'

const SampleBox = ({bkColor,iconColor,color,title,bColor,icon}) => {
  return (
    <div className="box" style={{backgroundColor:bkColor}} >
      <div className="box-title" style={{color}} >
        <div className="icon-container" style={{backgroundColor:iconColor}} >
            <img src={icon} alt="search"/>
        </div>
        <h3>{title}</h3>
      </div>
      
      <p style={{color,borderColor:bColor}}>
        Choose your meals from our di- verse weeklt menu. Find glutten or dairy
        free, low card & veggie options.
      </p>
    </div>
  );
};

export default SampleBox;
