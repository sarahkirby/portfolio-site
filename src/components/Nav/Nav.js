import React from 'react'
import {NavLink} from 'react-router-dom'
import {CSSTransition} from 'react-transition-group'
import SocialIcons from 'components/SocialIcons/SocialIcons'

class Nav extends React.Component {
  state = {
    toggle: false,
  }

  toggleMenu = e => {
    this.setState({
      toggle: !this.state.toggle,
    })
  }
  render() {
    const {toggle} = this.state
    return (
      <header className={`Nav ${toggle ? 'is-open' : ''}`}>
        <NavLink to="/">
          <h1 className="Nav__logo">
            sk
            <span className="gold">.</span>
          </h1>
        </NavLink>

        <div className="Nav__btn-wrapper">
          <button
            onClick={e => this.toggleMenu(e)}
            className={`Nav__btn ${toggle ? 'is-active' : ''}`}
            aria-label="Menu"
          >
            <span className="Nav__btnbar Nav__btnbar--1" />
            <span className="Nav__btnbar Nav__btnbar--2" />
            <span className="Nav__btnbar Nav__btnbar--3" />
          </button>
        </div>

        <CSSTransition
          in={toggle}
          timeout={350}
          classNames="fade-35"
          unmountOnExit
        >
          <nav className="Nav__menu">
            <ul className="Nav__list">
              <li className="Nav__listitem">
                <NavLink exact
                  activeClassName="Nav__link--active"
                  className="Nav__link"
                  to="/"
                  onClick={e => this.toggleMenu(e)}
                >
                  Home
                </NavLink>
              </li>
              <li className="Nav__listitem">
                <NavLink
                  activeClassName="Nav__link--active"
                  className="Nav__link"
                  to="/about"
                  onClick={e => this.toggleMenu(e)}
                >
                  About
                </NavLink>
              </li>
              <li className="Nav__listitem">
                <NavLink
                  activeClassName="Nav__link--active"
                  className="Nav__link"
                  to="/work"
                  onClick={e => this.toggleMenu(e)}
                >
                  Work
                </NavLink>
              </li>
              <li className="Nav__listitem--contact">
                <a
                  href="mailto:sk.irby@icloud.com"
                  className="Nav__link--contact"
                >
                  <i
                    className="Nav__linkicon far fa-envelope"
                    aria-hidden="true"
                    role="presentation"
                  />
                  sk.irby@icloud.com
                </a>

                <a
                  href="tel:+447562781121"
                  className="Nav__link--contact"
                >
                  <i
                    className="Nav__linkicon fas fa-mobile-alt"
                    aria-hidden="true"
                    role="presentation"
                  />
                  + 44 7562 781121
                </a>
              </li>
            </ul>
          </nav>
        </CSSTransition>

        <SocialIcons />
      </header>
    )
  }
}

export default Nav
