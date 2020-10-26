<img src="https://firebasestorage.googleapis.com/v0/b/ovo-sound.appspot.com/o/optim-deer-furryv2.gif?alt=media&token=806f68b2-a710-47cf-9c8c-6908e13dd248" alt="fixx" >

# Documentation

**Code entry point** `src/indes.js`<br/>

This is a Front-End implementation of a vending machine.<br/>
You can play with the machine in this [live link](https://deer-furry-vending-machine.netlify.app).

#### The essential data structure and business logic:

Can be seen here [here](https://github.com/vercetti11/deer-furry/blob/problem-essence/index.js) without any implementation details.

#### The implementation is made with:

`Plain JavaScript Objects` for **Data Structures**<br/>
`Redux + Redux Toolkit` for **Business Logic**<br/>
`React + Segment UI Framework`for **Presentation**

`create-react-app` for build setup<br/>
`react-testing-library` for testing

#### Features

- [x] Insert a coin then show inserted amount
- [x] Select a product then return beverage or error based on logic
- [x] Return change when delivering a product
- [x] Refund inserted coins on pressing a button
- [x] Refill stock of beverages
- [x] Refill coins for change

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />

### Take further
At this point in development, the app has all required user stories and fulfils their acceptance criteria,
but there are certain details that can take the code quality further:
- [ ] Split machine slice into a coinStackSlice and a productsSlice
  - [ ] Make slice reducer listen to actions outside from its own slice
  - [ ] Reuse refundedUserMoney reducer 
- [ ] Check if a reusable component can be made out of refill stock UI component
- [ ] Implement a middleware that logs when a stock falls under a minimum
- [ ] Improving Render Performance
- [ ] Implement own Popover component that does not use a deprecated method

