import React from 'react';
import { Link } from 'react-router'

const TopNav = (props) => {
  return (
    <nav>
      <Link to="/">{props.branding}</Link>
      {props.links.map((link, index) => {
        return <Link to={link.path} key={index}>{link.name}</Link>
      })}
    </nav>
  )
}

export default TopNav
