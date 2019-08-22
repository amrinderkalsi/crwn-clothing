import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selector';

import './cart-dropdown.styles.scss'

const CartDropdown = ({cartItems}) => {
    return(
        <div className='cart-dropdown'>
            <div className="cart-items">
                {
                    cartItems ?
                    (
                        cartItems.map(item => (
                            <CartItem key={item.id} item={item} />
                        ))
                    ):
                    null 
                }
            </div>
            <CustomButton>Go TO CHECKOUT</CustomButton>
        </div>
    );
}

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);