let defaultState = {
  selectedItems: {items: [], restaurantName: ''},
};

let cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      let newState = {...state};
      console.log(action.payload.checkboxValue);
      if (action.payload.checkboxValue) {
        newState.selectedItems = {
          items: [...newState.selectedItems.items, action.payload.item],
          restaurantName: action.payload.restaurantName,
        };
      } else {
        let ele = newState.selectedItems.items.filter(el => {
          console.log(el);
          if (el.title != action.payload.item.title) {
            return el;
          }
        });
        newState.selectedItems = {
          items: [...ele],
          restaurantName: action.payload.restaurantName,
        };
      }
      console.log(newState, '👉');
      return newState;
    }
    default:
      return state;
  }
};

export default cartReducer;
