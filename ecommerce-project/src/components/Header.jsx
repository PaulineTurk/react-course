import { NavLink } from "react-router"
import "./header.css"
import CartImage from "../assets/images/icons/cart-icon.png"
import SearchImage from "../assets/images/icons/search-icon.png"
import LogoWhiteImage from "../assets/images/logo-white.png"
import MobileLogoWhiteImage from "../assets/images/mobile-logo-white.png"

export default function Header({ cart }) {
    const cartQuantity = cart.reduce((accumulator, currentCart) => { return accumulator + currentCart.quantity }, 0)

    return (
        <div className="header">
            <div className="left-section">
                <NavLink to="/" className="header-link">
                    <img className="logo" src={LogoWhiteImage} />
                    <img className="mobile-logo" src={MobileLogoWhiteImage} />
                </NavLink>
            </div>

            <div className="middle-section">
                <input className="search-bar" type="text" placeholder="Search" />

                <button className="search-button">
                    <img className="search-icon" src={SearchImage} />
                </button>
            </div>

            <div className="right-section">
                <NavLink className="orders-link header-link" to="/orders">

                    <span className="orders-text">Orders</span>
                </NavLink>

                <NavLink className="cart-link header-link" to="/checkout">
                    <img className="cart-icon" src={CartImage} />
                    <div className="cart-quantity">{cartQuantity}</div>
                    <div className="cart-text">Cart</div>
                </NavLink>
            </div>
        </div>
    )
}