import React from "react";
import "./Sidebar.css";
import {  
  FaBusinessTime,
  FaChartLine,
  FaHistory,
  FaMobile,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHashtag,
  FaRobot,
  FaMoneyBillWave,
  FaVideo,
  FaRecordVinyl,
  FaLaptop,
  FaFileExport} from "react-icons/fa"

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", icon: <FaChartLine /> },
    { name: "Logs", icon: <FaHistory /> },
    { name: "Phone Files", icon: <FaMobile /> },
    { name: "Mail Tracking", icon: <FaEnvelope /> },
    { name: "Location Tracking", icon: <FaMapMarkerAlt /> },
    { name: "Social Apps", icon: <FaHashtag /> },
    { name: "AI Tools", icon: <FaRobot /> },
    { name: "Payment Monitoring", icon: <FaMoneyBillWave /> },
    { name: "Video Apps", icon: <FaVideo /> },
    { name: "Live Recording", icon: <FaRecordVinyl /> },
    { name: "Remote Control", icon: <FaLaptop /> },
    { name: "Data Export", icon: <FaFileExport /> }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Menu</h2>
      </div>
      <ul className="sidebar-menu">
        {menuItems.map((item, index) => (
          <li key={index} className="menu-item">
            <span className="menu-icon">{item.icon}</span>
            {item.name}
          </li>
        ))}
      </ul>

    </div>
  );
};

export default Sidebar;
