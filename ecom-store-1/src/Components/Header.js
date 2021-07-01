import React from "react";
import "../CSS/Header.css";
import "../CSS/App.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "../Config/firebase";
import useDarkMode from "../Hooks/useDarkMode";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = event => {
      event.preventDefault();
      setDarkMode(!darkMode);
  };

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">

        <div className= "header__topDiv">
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
        </Link>

        <div className="dark-mode__container">
                    <span className="light__symbol">☀︎</span>
                      <div className='dark-mode__toggle'>
                          <div 
                          onClick={toggleMode} 
                          className={darkMode ? 'toggle toggled' : 'toggle'} 
                          />
                      </div>
                  <span className="dark__symbol">☾</span>
              </div>
          </div>

        <div className="header__search">
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon" />

      </div>
      <div className="header__nav">
        <Link style={{textDecoration: 'none'}} to={!user && '/login'}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <Link style={{textDecoration: 'none'}} to='/orders'>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        

        <div style={{textDecoration: 'none'}} className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;