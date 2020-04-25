// create store
let orderCount = 0;

let newOrder = false;

// a root reducer
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
      };
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
      };
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
      };
      default: 
        return state;
  }
};

const orderHistory = (state = [], action) => {
  setTimeout(function(){
    console.log('orderHistory invoked: ', newOrder);
      return newOrder = true;
  }, 500);
  setTimeout(function(){
    console.log('1: ', 'newOrder: ', newOrder);
      return newOrder = false;
  }, 500);
  switch (action.type) {
    case 'MAKE_FRIES':
      console.log('At orderHistory');
      return [
        ...state,
        orderSide(undefined, action)
      ];
      case 'MAKE_SALMON_BURGER':
        console.log('At orderHistory');
        return [
          ...state,
          orderEntree(undefined, action)
        ];
      case 'MAKE_SHAKE':
        console.log('At orderHistory');
        return [
          ...state,
          orderEntree(undefined, action)
        ];
      default: 
      return state;
  }
};

const foodTruckApp = (state = {}, action) => {
  return {
    orderHistory: orderHistory(
      state.orderHistory,
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
console.log('Current state: ', store.getState());
console.log(orderHistory);

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
console.log('Current state: ', store.getState());
console.log(orderHistory);

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
console.log('Current state: ', store.getState());
console.log(orderHistory);

console.log('End of File. ', 'newOrder:' , newOrder);

