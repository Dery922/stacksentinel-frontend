import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const menuItems = [
    'Dashboard',
    'Logs',
    'Phone Files',
    'Mail Tracking',
    'Location Tracking',
    'Social Apps',
    'AI Tools',
    'Payment Monitoring',
    'Video Apps',
    'Live Recording',
    'Remote Control',
    'Data Export'
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Menu</h2>
      </div>
      <ul className="sidebar-menu">
        {menuItems.map((item, index) => (
          <li key={index} className="menu-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;