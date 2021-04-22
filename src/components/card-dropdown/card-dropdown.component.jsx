import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './card-dropdown.styles.scss';

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <CustomButton> go to checkout</CustomButton>
    </div>
);

export default CartDropdown;
