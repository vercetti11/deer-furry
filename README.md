<img src="https://firebasestorage.googleapis.com/v0/b/ovo-sound.appspot.com/o/deer-furry.gif?alt=media&token=ea48d7ec-761b-4f73-bfc8-5864bfde06a6" alt="fixx" >

# Documentation

**Code entry point** `src/indes.js`<br/>

This is a Front-End implementation of a vending machine.<br/>
You can play with it live [here](https://deer-furry-vending-machine.netlify.app), but be careful the machine will not give you change at this point in development.

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
- [ ] Refill stock of beverages
- [ ] Refill coins for change

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
