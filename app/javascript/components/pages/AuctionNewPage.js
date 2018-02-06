import React, {Component} from 'react';
import {BidForm} from '../BidForm';
import {Auction} from '../../requests/auctions';

class AuctionNewPage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      newAuction: {
        title: "",
        body: ""
      },
      validationErrors: []
    };

    this.createAuction = this.createAuction.bind(this);
    this.updateNewAuction = this.updateNewAuction.bind(this);
  }

  updateNewAuction (data) {
    const {newAuction} = this.state;

    this.setState({
      newAuction: {...newAuction, ...data}
    });
  }

  createAuction () {
    const {history} = this.props;
    const {newAuction} = this.state;
    Auction
      .create(newAuction)
      // .then(({id}) => {
      //   history.push(`/auctions/${id}`)
      // });
      .then(data => {
        if (data.errors) {
          this.setState({
            validationErrors: data
              .errors
              .filter(e => e.type === 'ActiveRecord::RecordInvalid')
          });
        } else {
          history.push(`/auctions/${data.id}`)
        }
      });
  }

  render () {
    // const {newAuction} = this.state;
    const {newAuction, validationErrors} = this.state;

    return (
      <main
        className="AuctionNewPage"
        style={{padding: '0  20px'}}
      >
        <h2>Auctions</h2>
        <BidForm
          errors={validationErrors}
          auction={newAuction}
          onChange={this.updateNewAuction}
          onSubmit={this.createAuction}
        />

      </main>
    );
  }
}

export {AuctionNewPage};
