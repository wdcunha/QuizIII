import React from 'react';

function BidForm (props) {
  const {
    bid = {
      price: 0
    },
    onSubmit = () => {},
    onChange = () => {},
    errors = []
  } = props;

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit();

  };

  const handleChange = name => event => {
    onChange({[name]: event.currentTarget.value});
  };

  const renderError = () => errors.length > 0 ? (
    <ul>{
      errors
        .filter(e => e.field === 'bid')
        .map(e => <li>{e.message}</li>)
    }</ul>
  ) : (
    null
  );

  return (
    <form
      className="BidForm"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="bid">Bid</label> <br />
        <input
          onChange={handleChange("bid")}
          value={bid.bid}
          name="bid"
          id="bid"
        />
      </div>
      { renderError() }

      <div>
        <input type="submit" value="Bid"/>
      </div>
    </form>
  );
}

export {BidForm};
