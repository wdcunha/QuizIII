import React, {Component} from 'react';
import {AuctionDetails} from '../AuctionDetails';
import {BidList} from '../BidList';
import {Auction} from '../../requests/auctions';
import {Bid} from '../../requests/bids';

class AuctionShowPage extends Component {
  constructor (props) {
    console.log(`>>>>>>>>out ${props}  <<<<<<<<`);

    super(props)
    console.log(`>>>>>>>>in ${props}  <<<<<<<<`);

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
      console.log(`>>>>>>>> ${params}  <<<<<<<<`);

      Auction
        .get(params.id)
        .then(auction => {
          this.setState({auction, loading: false})
        });

      Bid
        .all(params.id)
        .then(bids => {
          this.setState({bids: bids, loading: false})
        });

    }

    render () {
      const {auction, bids, loading} = this.state;
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
        <BidList
          bids={bids}
          onBidDeleteClick={this.deleteBid}
        />
      </main>
    );
  }
}


export {AuctionShowPage};
