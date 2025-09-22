import { useState } from "react";
import Navbar from "../../components/header/Navbar";
import Footer from "../Footer/Footer";
import "./support.css";
import {
  IoIosHeadset,
  IoIosSettings,
  IoIosInformationCircle,
} from "react-icons/io";
import { FaAndroid,FaLock, FaFileContract, FaDirections, FaGuilded } from "react-icons/fa";

const Support = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="contact-page">
      <Navbar />

      <section className="contact-hero">
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="cont">Welcome to StackSentinel Support Center</h1>
            <p className="hero-description-cont">
              Here you can find customer service help, FAQs, installation
              guides, and policies.
            </p>
          </div>
        </div>
      </section>

      <div className="w-full max-w-2xl mx-auto mt-10">
        {/* Tab Headers */}
        <div className="support-tab">
          <button
            className={`tab-btn ${activeTab === "profile" ? "active" : ""}`}
            onClick={() => setActiveTab("profile")}
          >
            <IoIosHeadset className="tab-icon" />
            Contact Support
          </button>

          <button
            className={`tab-btn ${activeTab === "settings" ? "active" : ""}`}
            onClick={() => setActiveTab("settings")}
          >
            <IoIosSettings className="tab-icon" />
            Common Faqs
          </button>

          <button
            className={`tab-btn ${activeTab === "about" ? "active" : ""}`}
            onClick={() => setActiveTab("about")}
          >
            <IoIosInformationCircle className="tab-icon" />
            Policy
          </button>
        </div>

        {/* Tab Content */}
        {/* Tab Content */}
        <div className="tab-content p-6 bg-white rounded-xl shadow-sm mt-6">
          {activeTab === "profile" && (
            <div className="container">
              <div className="contact-box">
                <a href="/contact-us" className="btn">
                  Contact-us
                </a>
                <p>This is the Profile tab content.</p>
              </div>
            </div>
          )}
          {activeTab === "settings" && <p>This is the Settings tab content.</p>}
          {activeTab === "about" && (
            <div>
              <div className="top-box-title">

              </div>
              <div className="flexible">
                <div>
                  {/* Section Title */}
                  <div className="top-box-title flex items-center gap-2">
                    <FaDirections color="blue" size={34} />
                    <span>Our Guidelines</span>
                  </div>

                  {/* Policy Cards */}
                  <div className="flexible policy-box">
                    {/* Refund Policy */}
                    <div className="policy-box-item">
                      <a href="/refund-policy">
                        <div className="refund-box">
                          <FaGuilded
                            size={32}
                            color="blue"
                            style={{ marginBottom: "10px" }}
                          />
                          <p className="title">Refund Policy</p>
                          <p className="desc">
                            Learn about our hassle-free refund process designed
                            to make your experience worry-free.
                          </p>
                        </div>
                      </a>
                    </div>

                    {/* Privacy Policy */}
                    <div className="policy-box-item">
                      <a href="/privacy-policy">
                        <div className="refund-box">
                          <FaLock
                            size={32}
                            color="blue"
                            style={{ marginBottom: "10px" }}
                          />
                          <p className="title">Privacy Policy</p>
                          <p className="desc">
                            Understand how we protect your personal information
                            and keep your data secure.
                          </p>
                        </div>
                      </a>
                    </div>

                    {/* Terms & Conditions */}
                    <div className="policy-box-item">
                      <a href="/terms">
                        <div className="refund-box">
                          <FaFileContract
                            size={32}
                            color="blue"
                            style={{ marginBottom: "10px" }}
                          />
                          <p className="title">Terms & Conditions</p>
                          <p className="desc">
                            Review the terms that guide the use of our services
                            to ensure a smooth experience.
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Support;
