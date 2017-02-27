import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const TopNav = props => (
  <nav>
    <Link to="/">{props.branding}</Link>
    {props.links.map((link, index) => {
      const key = `topnav-${index}`;
      return <Link to={link.path} key={key}>{link.name}</Link>;
    })}
  </nav>
  );

TopNav.propTypes = {
  branding: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TopNav;
