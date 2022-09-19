import React from 'react';
import PropTypes from 'prop-types';

function MenuItem({ icon, name }) {
  return (
    <li>
      {icon}
      <a href="">{name}</a>
    </li>
  );
}

MenuItem.propTypes = {
  icon: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
};

export default MenuItem;
