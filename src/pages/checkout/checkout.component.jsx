import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';

import { CheckoutPageContainer,  CheckoutHeaderContainer,  HeaderBlockContainer,  TotalContainer,  WarningContainer} from './checkout.styles';

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <span>product</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>description</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>quantity</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>price</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>remove</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <TotalContainer>total: ${total}</TotalContainer>
    <WarningContainer>
      *please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - exp: 01/20 - cvv: 123
    </WarningContainer>
    <StripeCheckoutButton price={total} />
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);