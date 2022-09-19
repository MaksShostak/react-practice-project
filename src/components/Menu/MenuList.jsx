import React from 'react';
import MenuItem from './MenuItem';
import { menuConfig } from 'components/constants/menu';
const MenuList = () => {
  return (
    <nav>
      <ul>
        {menuConfig &&
          menuConfig.map(({ name, icon }) => (
            <MenuItem key={name} name={name} icon={icon} />
          ))}
      </ul>
    </nav>
  );
};

export default MenuList;
