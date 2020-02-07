import { UPDATE_CART } from './actionTypes';

export const updateCart = cartProducts => dispatch => {
  let productQuantity = cartProducts.reduce((sum, p) => {
    sum += p.unitsInStock;
    return sum;
  }, 0);

  let totalPrice = cartProducts.reduce((sum, p) => {
    sum += p.unitPrice * p.unitsInStock;
    return sum;
  }, 0);

  let installments = cartProducts.reduce((greater, p) => {
    greater = p.unitsInStock > greater ? p.unitsInStock : greater;
    return greater;
  }, 0);

  let cartTotal = {
    productQuantity,
    installments,
    totalPrice,
    currencyId: 'USD',
    currencyFormat: '$'
  };

  dispatch({
    type: UPDATE_CART,
    payload: cartTotal
  });
};
