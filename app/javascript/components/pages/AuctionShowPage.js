import React, {Component} from 'react';
import {AuctionDetails} from '../AuctionDetails';
import {Auction} from '../../requests/auctions';
import {BidList} from '../BidList';
import {BidForm} from '../BidForm';
import {Bid} from '../../requests/bids';

class AuctionShowPage extends Component {
  constructor (props) {
    console.log(`>>>>>>>>out ${props.auction}  <<<<<<<<`);

    super(props);

    this.state = {
      loading: true,
      auction: {
        title: ""
      },
      bids: [],
      bid: {}
    };

    this.delete = this.delete.bind(this);
    this.deleteBid = this.deleteBid.bind(this);
}

  delete () {
    this.setState({
      auction: {}
    });
  }

  deleteBid (bidId) {
    const {auction} = this.state;
    const {bids} = auction;

    this.setState({
      auction: {
        ...auction,
        bids: bids.filter(bid => bid.id !== bidId)
      }
    })
  }

    componentDidMount () {
      const {params} = this.props.match;

      Auction
      .get(params.id)
      .then(auction => {
        console.log(`>>>>>>>>auction.id ${params.id}  <<<<<<<<`);
        this.setState({auction, loading: false})
      });

      Bid
      .all(params.id)
      .then(bids => {
        this.setState({bids: bids, loading: false})
      });
    }

    createBid () {
      const {params} = this.props.match;
      const {history} = this.props;
      const {newBid, bids} = this.state;
      Bid
      .create(params.id, newBid)
      .then((bid) => {
        this.setState({
          bids: bids.concat(bid)
        })
      });
    }

    updateNewBid (data) {
      const {newBid} = this.state;
      this.setState({
        newBid: {...newBid, ...data}
      });
      console.log(this.state.newBid)
    }

    render () {
      const {auction, bids, loading, newBid} = this.state;
      // const {bids = []} = this.state.auction;

      if (loading) {
        return (
          <main
            className="AuctionShowPage"
            style={{
              padding: '0 20px'
            }}
          >
            <h3>Loading auction...</h3>
          </main>
        )
      }
    return (
      <main
        className="AuctionShowPage"
        style={{
          padding: '0 20px'
        }}
      >
        <AuctionDetails {...auction} />
        <button
          onClick={this.delete}
        >Delete</button>
        <h3>Bid</h3>
        <BidForm
          bid={newBid}
          onChange={this.updateNewBid.bind(this)}
          onSubmit={this.createBid.bind(this)}
        />
        <BidList
          bids={bids}
          onBidDeleteClick={this.deleteBid}
        />
      </main>
    );
  }
}


export {AuctionShowPage};
