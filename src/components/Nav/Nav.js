import React from "react"
import {NavLink} from "react-router-dom"
import SocialIcons from "components/SocialIcons/SocialIcons"

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
        <NavLink to="/home">
          <h1 className="nav-logo">
            sk
            <span>.</span>
          </h1>
        </NavLink>

        <div className="nav-btn">
          <button
            onClick={e => this.toggleMenu(e)}
            className={(toggle ? 'is-active' : '')}
          >
            <span className="btn-bar btn-bar--1" />
            <span className="btn-bar btn-bar--2" />
            <span className="btn-bar btn-bar--3" />
          </button>
        </div>

        {toggle && (
          <nav>
            <ul>
              <li>
                <NavLink
                  activeClassName="active"
                  to="/home"
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
              <li><a href="www.google.com">Work</a></li>
              <li><a href="www.google.com">Contact</a></li>
            </ul>
          </nav>
        )}

        <SocialIcons />
      </header>
    )
  }
}

export default Nav
