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
        <p>By {author.full_name}</p>
        <Field name="Created At" value={props.created_at} />
        <Field name="Updated At" value={props.updated_at} />
      </div>
    </div>
  );
}


export {AuctionDetails};



//
