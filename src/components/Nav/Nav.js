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
      <header className={'nav ' + (toggle ? 'is-open' : '')}>
        <NavLink to="/">
          <h1 className="nav-logo">
            sk
            <span>.</span>
          </h1>
        </NavLink>

        <div className="nav-btn">
          <button
            onClick={e => this.toggleMenu(e)}
            className={(toggle ? 'is-active' : '')}
            aria-label="Menu"
          >
            <span className="btn-bar btn-bar--1" />
            <span className="btn-bar btn-bar--2" />
            <span className="btn-bar btn-bar--3" />
          </button>
        </div>

        <CSSTransition
          in={toggle}
          timeout={350}
          classNames="fade-35"
          unmountOnExit
        >
          <nav>
            <ul>
              <li>
                <NavLink exact
                  activeClassName="active"
                  to="/"
                  onClick={e => this.toggleMenu(e)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="active"
                  to="/about"
                  onClick={e => this.toggleMenu(e)}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="active"
                  to="/work"
                  onClick={e => this.toggleMenu(e)}
                >
                  Work
                </NavLink>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={e => this.toggleMenu(e)}
                >
                  Contact
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
