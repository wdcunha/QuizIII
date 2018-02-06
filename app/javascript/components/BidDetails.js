import React from 'react';
import {Field} from './Field';

function BidDetails (props = {}) {
  const {onDeleteClick = () => {}} = props;
  return (
    // JSX tags are translated into React.createElement() function
    // calls which output React elements.

    <div className="BidDetails">
      <p>{props.body}</p>
      <p>By {props.author_full_name}</p>
      <Field name="Created At" value={props.created_at} />
      <button
        onClick={() => onDeleteClick(props.id)}
      >Delete</button>
    </div>
  );
}




export {BidDetails};
