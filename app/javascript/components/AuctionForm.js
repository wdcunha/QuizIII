import React from 'react';

function AuctionForm (props) {
  const {
    auction = {},
    onSubmit = () => {},
    onChange = () => {},
    errors = []
  } = props;

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit();

  };

  const handleChange = name => event => {
    onChange(
      {[name]: event.currentTarget.value});
  };

  const renderError = () => errors.length > 0 ? (
    <ul>{
      errors
        .filter(e => e.field === 'auction')
        .map(e => <li>{e.message}</li>)
    }</ul>
  ) : (
    null
  );

  return (
    <form
      className="AuctionForm"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="title">Title</label> <br />
        <input
          onChange={handleChange("title")}
          value={auction.title}
          name="title"
          id="title"
        />
      </div>

     <div>
       <label htmlFor="details">Details</label> <br />
       <textarea
         onChange={handleChange("details")}
         value={auction.details}
         name="details"
         id="details"
       />
     </div>

     <div>
       <label htmlFor="ends_on">Ends On</label> <br />
       <input
         onChange={handleChange("ends_on")}
         value={auction.ends_on}
         name="ends_on"
         id="ends_on"
       />
     </div>

     <div>
       <label htmlFor="reserve_price">Reserve Price</label> <br />
       <input
         onChange={handleChange("reserve_price")}
         value={auction.reserve_price}
         name="reserve_price"
         id="reserve_price"
       />
     </div>

      { renderError() }

      <div>
        <input type="submit" value="Save"/>
      </div>
    </form>
  );
}

export {AuctionForm};
