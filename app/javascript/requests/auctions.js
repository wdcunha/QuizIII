/* global fetch */
import {BASE_URL} from './config';


function getJwt () {
  return `JWT ${localStorage.getItem('jwt')}`;
}

// HTTP REQUESTS

export const Auction = {
  all () {
    return fetch(
      `${BASE_URL}/api/v1/auctions`,
      {
        headers: {
          'Authorization': getJwt()
        }
      }
    )
    .then(res => res.json())
  },
  get (id) {
    return fetch(
      `${BASE_URL}/api/v1/auctions/${id}`,
      {
        headers: {
          'Authorization': getJwt()
        }
      }
    )
      .then(res => res.json())
  },
  create (params) {
    console.log(`>>>>> requests ${params}`)
    return fetch(
      `${BASE_URL}/api/v1/auctions`,
      {
        method: 'POST',
        headers: {
          'Authorization': getJwt(),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      }
    )
    .then(res => res.json());
  }
}
