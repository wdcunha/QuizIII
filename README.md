# Final Exam of Cohort 21 from CodeCore Bootcamp

Part 1: Auction & Bid CRUD
Value: 25%

Build a Rails JSON API. Use the wireframes below to choose which fields you will need for your application's models.

Implement create, show, index, destroy and update actions for Auctions.
Auctions should have many Bids.
Implement create and destroy actions for Bids.
Note: Feel free to use the --api option when generating your application with rails new. Read more...

Part 2: User Authentication
Value: 25%

Add user authentication with JWT.

Implement a TokensController with a create action to allows users to create JWTs.
Only allow authenticated users to do any CRUD for Auctions or Bids.
Associate users to auctions and bids they create.
Disallow users from bidding on their own auctions
Part 3: Frontend Client
Value: 50%

Build a React Client for the JSON API. Use the wireframes below as a guide.

Implement a SignInPage.
Implement an AuctionsIndexPage, an AuctionsShowPage and an AuctionsNewPage. Only the AuctionsNewPage and AuctionsShowPage are shown below.
Implement the ability to bid on auctions from the AuctionsShowPage.
Create a NavBar to navigate to the AuctionsIndexPage, the AuctionsShowPage and the SignInPage. Only show the SignInPage if the user is not signed in. Otherwise, display their name.
Redirect users that are not signed in to the SignInPage when they attempt to access any auction route.
Bonus 1: Auction State Machine
Value: 10%

Add states to auctions.

Add support for states, draft, published & reserve met, to the auction model.
Add a button to publish auctions on the auction show page that's only visible to the auction's creator. This would change its state to published. Only published auctions should be visible to everyone.
Trigger moving auctions to reserve met state when a bid beats the reserve price.
Bonus 2: Sign Up Page
Value: 10%

Add the ability for users to sign up from the frontend client.

Implement a UserController with a create action to allow users to sign up through the API. Creating a user should also sign in the user meaning that the create action must return a JWT.
Implement a SignUpComponent to create a user.
Add a link to the SignUpComponent in the NavBar if the user isn't signed in.
Bonus 3: Test the API
Value: 10%

Use RSpec to write tests for the JSON API

Implement 2 test cases per AuctionController action.
Implement 2 test cases per BidController action.
Implement 1 test case for the TokensController create action.
