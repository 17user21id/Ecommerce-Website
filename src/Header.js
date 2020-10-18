import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from "./StateProvider";
import { auth } from './firebase';


function Header() {
    
    


    const [{basket , user}] = useStateValue();

    const login = () =>{
        auth.signOut();
    }


    return (
        <nav className="header">
            <Link to="/">
            <img className = "header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"></img>
            </Link>

            <div className="header_search">
                <input type="text" className="header_searchInput"></input>
                <SearchIcon className="header_searchIcon"/>
            </div>

            <div className="headerNav">

               {/* Sign In box */}
                    <Link to={!user && "login"} className="header_link">
                        <div onClick={login} className="header_option">
                            <span className="header_option_line_one">Hello {user?.email}</span>
                            <span className="header_option_line_Two">{user ? 'signOut' : 'SignIn'}</span>
                        </div>
                    </Link>


                {/* Return and Order */}
                    <Link to="/" className="header_link">
                        <div className="header_option">
                            <span className="header_option_line_one">Returns</span>
                            <span className="header_option_line_Two">& Orders</span>
                        </div>
                    </Link>


                {/* Your Prime */}
                    <Link to="/" className="header_link">
                        <div className="header_option">
                            <span className="header_option_line_one">Your</span>
                            <span className="header_option_line_Two">Prime</span>
                        </div>
                    </Link>

               {/* Basket */}
                    <Link to="/checkout" className="header_link">
                        <div className="header_optionBasket">
                            {/* shopping basket icon */}
                             < ShoppingBasketIcon/>
                             {/* number of items in basket */}
                             <span className="header_option_line_Two BasketCount" >{basket?.length}</span>
                        </div>
                    </Link>


            </div>




        </nav>
    )
}



export default Header
