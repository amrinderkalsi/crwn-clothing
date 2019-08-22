import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.util';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { createStructuredSelector } from 'reselect';

const Header = ({ currentUser, isCartHidden }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
            {
                currentUser ? 
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signin'>SIGNIN</Link> 
            }
            <CartIcon/>
        </div>
        {isCartHidden ? null : <CartDropdown/>}
        
    </div>
)

// const mapStateToProps = (state) => ({
//     currentUser: selectCurrentUser(state),
//     isCartHidden: selectCartHidden(state)
// })

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    isCartHidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);