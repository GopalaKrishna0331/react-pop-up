import {withRouter, Link} from 'react-router-dom'

import {Popup} from 'reactjs-popup'

import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <>
    <div className="header-container">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="logo"
        />
      </Link>

      <Popup
        modal
        trigger={
          <button
            className="button"
            type="button"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu size="30px" />
          </button>
        }
      >
        {close => (
          <div className="pop-container">
            <button
              className="button pop-cross"
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              {' '}
              <IoMdClose className="burger-icon" />{' '}
            </button>
            <ul className="cross-container">
              <Link to="/" onClick={() => close()}>
                <li className="link-container">
                  <AiFillHome className="pop-icon" />

                  <p className="link-head">Home</p>
                </li>
              </Link>
              <Link to="/about" onClick={() => close()}>
                <li className="link-container">
                  <BsInfoCircleFill className="pop-icon" />

                  <p className="link-head">About</p>
                </li>
              </Link>
            </ul>
          </div>
        )}
      </Popup>
    </div>
    <hr className="separator" />
  </>
)

export default withRouter(Header)
