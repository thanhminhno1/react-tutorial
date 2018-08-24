import {SELECT_ITEM} from './actionTypes';

export const selectItem = (item) => {
  console.log(`You clicked a item with price: ${item.price}`);
  return {
    type: SELECT_ITEM,
    payload: item
  }
}
