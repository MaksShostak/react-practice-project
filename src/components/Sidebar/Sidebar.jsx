import React from 'react';
import { HiUserCircle } from 'react-icons/hi';
import MenuList from 'components/Menu/MenuList';
const Sidebar = () => {
  return (
    <aside>
      <div></div>
      <MenuList />
      <div>
        <p>
          {' '}
          <HiUserCircle />
          user
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
