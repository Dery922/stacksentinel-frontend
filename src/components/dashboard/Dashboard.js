import { useState, useEffect } from "react";
import Footer from "../footer/Footer";
import InfoWithGraphCard from "../infoWithGraphicCard";
import Sidebar from "../Sidebar/Sidebar";
import LanguageSelector from "./LanguageSelector";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { 
  FiLogOut, 
  FiMessageSquare, 
  FiShoppingCart, 
  FiHelpCircle,
  FiRefreshCw,
  FiBell
} from "react-icons/fi";
import format from "date-fns/format";

import "./styles.css";


const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [lastSync, setLastSync] = useState(new Date());
  const [activeDevice, setActiveDevice] = useState("Galaxy S8");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.user.token);

  const logout = () => {
    Cookies.set("user", "");
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  const handleSync = () => {
    // Simulate sync action
    setLastSync(new Date());
    // In a real app, you would dispatch an action to sync data
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const statsData = [
    { 
      id: 1, 
      title: "WhatsApp", 
      count: "1,000", 
      change: "+500", 
      icon: "/assets/img/whatsup.png" 
    },
    { 
      id: 2, 
      title: "Calls", 
      count: "1,000", 
      change: "+500", 
      icon: "/assets/img/call.png" 
    },
    { 
      id: 3, 
      title: "Messages", 
      count: "1,000", 
      change: "+500", 
      icon: "/assets/img/chat.png" 
    },
    { 
      id: 4, 
      title: "Photos", 
      count: "1,000", 
      change: "+500", 
      icon: "/assets/img/photo.png" 
    },
    { 
      id: 5, 
      title: "Browser History", 
      count: "1,000", 
      change: "+500", 
      icon: "/assets/img/history.png" 
    }
  ];

  return (
    <div className="dashboard-app">
      {/* Mobile Header */}
      <div className="mobile-header">
        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          ☰
        </button>
        <div className="mobile-device-info">
          <img src="/androidIcon.png" alt="Device" />
          <span>{activeDevice}</span>
        </div>
        <div className="mobile-actions">
          <button className="sync-btn-mobile" onClick={handleSync}>
            <FiRefreshCw />
          </button>
          <button className="logout-btn-mobile" onClick={logout}>
            <FiLogOut />
          </button>
        </div>
      </div>

      {/* Sidebar - Shows on desktop and mobile when toggled */}
      <Sidebar isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />

      <div className="dashboard-main">
        {/* Top Navigation Bar */}
        <header className="dashboard-header">
          <div className="device-info-container">
            <div className="device-info-card">
              <img src="/androidIcon.png" alt="Device" className="device-icon" />
              <div className="device-details">
                <h3 className="device-name">{activeDevice}</h3>
                <p className="device-relation">Father's phone</p>
              </div>
              <img src="/bind.svg" alt="Bind status" className="bind-icon" />
            </div>
          </div>

          <nav className="dashboard-nav">
            <div className="nav-links">
              <a href="#" className="nav-link">
                <FiHelpCircle className="nav-icon" />
                <span>Support</span>
              </a>
              <div className="nav-divider"></div>
              <a href="#" className="nav-link">
                <FiShoppingCart className="nav-icon" />
                <span>Store</span>
              </a>
            </div>

            <div className="nav-actions">
              <button className="notification-btn">
                <FiBell className="notification-icon" />
                <span className="notification-badge">3</span>
              </button>

              <button className="sync-btn" onClick={handleSync}>
                <FiRefreshCw className="sync-icon" />
                <span>Sync</span>
              </button>

              <LanguageSelector />

              <button className="logout-btn" onClick={logout}>
                <FiLogOut className="logout-icon" />
              </button>
            </div>
          </nav>
        </header>

        {/* Main Content Area */}
        <main className="dashboard-content">
          {/* Demo Data Banner */}
          <div className="demo-banner">
            <img src="/speak.svg" alt="Warning" />
            <p>
              You are now viewing demo data. To start collecting actual data,{" "}
              <a href="#" className="bind-link">
                bind a device
              </a>
            </p>
          </div>

          {/* Dashboard Header */}
          <div className="dashboard-section-header">
            <h2>Dashboard</h2>
            <div className="sync-info">
              <span className="sync-time">
                Last updated: {format(lastSync, "MMM d, h:mm a")}
              </span>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="stats-grid">
            {statsData.map((stat) => (
              <div className="stat-card" key={stat.id}>
                <div className="stat-info">
                  <img src={stat.icon} alt={stat.title} className="stat-icon" />
                  <div className="stat-text">
                    <h3 className="stat-title">{stat.title}</h3>
                    <p className="stat-desc">Total {stat.count}</p>
                  </div>
                </div>
                <div className="stat-change positive">{stat.change}</div>
              </div>
            ))}
          </div>

          {/* Graph Section */}
          <div className="graph-section">
            <InfoWithGraphCard />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;