// create store
let orderCount = 0;
console.log(`orderCount initialized: Order count = ${orderCount}` );

let newOrder = false;

const orderSide = (state, action) => {
  switch(action.type) {
    case 'MAKE_FRIES':
      orderCount ++;
      return {
        orderNumber: orderCount,
        guest: action.guestName,
        price: action.itemPrice,
        timeStamp: new Date(),
        item: action.itemName,
        notes: action.itemNotes, 
      }, console.log(`orderCount:`, orderCount);
      default: 
        return state;
  }
};

const orderEntree = (state, action) => {
  switch(action.type) {
    case 'MAKE_SALMON_BURGER':
      orderCount ++;
      return {
        orderNumber: orderCount,
        guest: action.guestName,
        price: action.itemPrice,
        timeStamp: new Date(),
        item: action.itemName,
        notes: action.itemNotes, 
      }, console.log(`orderCount:`, orderCount);
      default: 
        return state;
  }
}

const orderDrink = (state, action) => {
  switch(action.type) {
    case 'MAKE_SHAKE':
      orderCount ++;
      return {
        orderNumber: orderCount,
        guest: action.guestName,
        price: action.itemPrice,
        timeStamp: new Date(),
        item: action.itemName,
        notes: action.itemNotes,
      }, console.log(`orderCount:`, orderCount);
      default: 
        return state;
  }
};

const orderHistoryRootReducer = (state = [], action) => {
  switch (action.type) {
    case 'MAKE_FRIES':
      console.log("At orderHistoryRootReducer, 'MAKE_FRIES'");

      return [
        ...state,
        orderSide(undefined, action)
      ];
      case 'MAKE_SALMON_BURGER':
        console.log("At orderHistoryRootReducer, 'MAKE_SALMON_BURGER'");

        return [
          ...state,
          orderEntree(undefined, action),
          newOrder = false
        ];
      case 'MAKE_SHAKE':
        console.log("At orderHistoryRootReducer, 'MAKE_SHAKE'");

        console.log('newOrder: ', newOrder);

        newOrder = true;

        return [
          ...state,
          orderEntree(undefined, action), 
          newOrder = false
        ];
      default: 
      return state;
  }
};

const foodTruckApp = (state = {}, action) => {
  return {
    orderHistoryRootReducerState: orderHistoryRootReducer(
      state.orderHistoryRootReducerState,
      action
    )
  };
};

// TODO: Display each new order in UI

const { createStore } = Redux;
const store = createStore(foodTruckApp);

console.log('Initial state: ', store.getState());

console.log('Dispatching MAKE_FRIES')
store.dispatch({
  type: 'MAKE_FRIES',
  orderNumber: undefined,
  guestName: 'Tom',
  itemPrice: 3.99,
  timeStamp: undefined,
  itemName: 'Fries',
  itemNotes: '', 
});

console.log('Dispatching MAKE_FRIES')
store.dispatch({
  type: 'MAKE_FRIES',
  orderNumber: undefined,
  guestName: 'June',
  itemPrice: 3.99,
  timeStamp: undefined,
  itemName: 'Fries',
  itemNotes: '', 
});

console.log('Dispatching MAKE_SALMON_BURGER')
store.dispatch({
  type: 'MAKE_SALMON_BURGER',
  orderNumber: undefined,
  guestName: 'Darlene',
  itemPrice: 8.99,
  timeStamp: undefined,
  itemName: 'Salmon Burger',
  itemNotes: 'Extra aioli', 
});


