import Sidebar from "../Sidebar/Sidebar";
import LanguageSelector from "./LanguageSelector";
import "./style.css"
const Dashboard = () => {
  return (
    <div id="app">
      <div id="box">
        <div className="dashboard-box">
          <div className="header-page header-page-dashboard">
            <div className="header-topbar-container">
              <div className="header-topbar-wrap dashboard-topbar-wrap">
                <div className="header-topbar-logo">
                  <div className="device-conatiner">
                    <div className="device-box">
                      <div className="show-info">
                        <img
                          style={{ width: 50, height: 50 }}
                          src="/androidIcon.png"
                        />
                        <div className="device-info">
                          <div className="son">Galaxy s8</div>
                          <div className="father">Father phone</div>
                        </div>
                        <img
                          style={{ width: 50, height: 50 }}
                          src="/bind.svg"
                        />
                      </div>
                    </div>
                    <div className="choose-box"></div>
                  </div>
                </div>
                <div className="header-topbar-menu">
                  <header className="base-header">
                    <div className="header-nav">
                      <div className="header-products "></div>
                      <div className="header-products header-demo"></div>
                      <a className="nav-name support" href="">
                        Support Us
                      </a>
                      <i className="border-left"></i>
                      <div className="store-box">
                        <a className="store" href="#">
                          Store
                        </a>
                      </div>
                    </div>
                  </header>
                  <div className="top-message">
                    <a className="message-icon unread"></a>
                  </div>
                  <a className="demo-btn buy-demo">Buy Now</a>
                  <a style={{ cursor: "pointer" }}>
                    <img src="/placeholder.svg"></img>
                  </a>
                  <div class="mobile-hide">
                    <div class="lang mobile-hide">
                      <LanguageSelector />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="el-container">
          <Sidebar/>
            <div className="el-main">
              <div class="temp-wrap">
                <p class="bind-wrap">
                  <img src="/speak.svg" />
                  <span>
                    {" "}
                    You are now viewing demo data. To start collecting actual
                    data,
                    <a href="" class="bind-a">
                      {" "}
                      bind a device
                    </a>
                  </span>
                </p>
              </div>
               <div className="dashboard">
               <div className="dashboard-wrap">
                <h3>
                  <div className="title-notice">Dashboard</div>
                  <div className="right-box">
                    <div className="right-sync">
                      <a className="sync-btn">Sync</a>
                      <span className="sync-time">updated at</span>
                    </div>
                  </div>
                </h3>
              </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
