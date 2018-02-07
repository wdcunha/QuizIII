import React from 'react';
import {Field} from './Field';

function AuctionDetails (props = {}) {
  const {author = {}} = props;
  const containerStyle = {
  paddingLeft: "10px"
}

  return (
    <div className="AuctionDetails">
      <h2> {props.title} </h2>
      <div style={containerStyle}>
        <p>{props.details}</p>
        <p>{props.ends_on}</p>
        <p>$ {props.reserve_price}</p>
      </div>
    </div>
  );
}


export {AuctionDetails};



//
