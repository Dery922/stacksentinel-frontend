import { FaShoppingCart } from "react-icons/fa";
import {IoIosContact} from 'react-icons/io'
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container container-sm">
          <div className="footer_box1 flexible">
            <div class="footer-item1">
              <p class="logo">
                <a href="">
                  {/* <img loading="lazy" src="/logo1.svg" alt="famiguard" /> */}
                </a>
              </p>
              {/* <p class="pay">
                          <span>
                            <a href="https://twitter.com/famiguardparent">
                              <img
                                loading="lazy"
                                src="https://images.imyfone.com/famiguarden/assets/common/footer/share_twitter.png"
                                alt="share_twitter"
                              />
                            </a>
                          </span>
                          <span>
                            <a href="https://www.pinterest.com/famiguardimyfone/">
                              <img
                                loading="lazy"
                                src="https://images.imyfone.com/famiguarden/assets/common/footer/follow_pinterest.png"
                                alt="follow_pinterest"
                              />
                            </a>
                          </span>
                          <span>
                            <a href="https://www.tiktok.com/@famiguard_parentcontrol">
                              <img
                                loading="lazy"
                                src="https://images.imyfone.com/famiguarden/assets/common/footer-tiktok.svg"
                                alt="share_tiktok"
                              />
                            </a>
                          </span>
                          <span>
                            <a href="https://www.youtube.com/@FamiGuardparentalcontrol">
                              <img
                                loading="lazy"
                                src="https://images.imyfone.com/famiguarden/assets/common/footer/share_youtube.png"
                                alt="share_youtube"
                              />
                            </a>
                          </span>
                        </p> */}
            </div>
            <div class="footer-item2">
              <p class="title shrink">
                Company<span class="arrow-icon down-ico"></span>
              </p>
              <ul class="footer_ul">
                <li>
                  <a href="/about-us/">About Us</a>
                </li>
                <li>
                  <a href="/contact-us">Contact Us</a>
                </li>
                <li>
                  <a href="/support-center/">Support Center</a>
                </li>
                <li>
                  <a href="https://www.imyfone.com/company/partner/">
                    Become Partner
                  </a>
                </li>
              </ul>
            </div>
            <div class="footer-item2">
              <p class="title shrink">
                Learning Center<span class="arrow-icon down-ico"></span>
              </p>
              <ul class="footer_ul">
                <li>
                  <a href="/topic/">All Topics</a>
                </li>
                <li>
                  <a href="/monitor/">Phone Monitoring</a>
                </li>
                <li>
                  <a href="/mobile-tracker/">Mobile Tracker</a>
                </li>
                <li>
                  <a href="/parental-control/">Parental Control</a>
                </li>
                <li>
                  <a href="/whatsapp-tracker/">WhatsApp Tracker</a>
                </li>
                <li>
                  <a href="/tips/">Parenting Tips</a>
                </li>
                <li>
                  <a href="/media-monitor/">Social Media Monitor</a>
                </li>
              </ul>
            </div>
            <div class="footer-item2">
              <p class="title shrink">
                Policies<span class="arrow-icon down-ico"></span>
              </p>
              <ul class="footer_ul">
                <li>
                  <a href="/privacy-policy/">Privacy Policy</a>
                </li>
                <li>
                  <a href="/cookie-policy/">Cookie Policy</a>
                </li>
                <li>
                  <a href="/refund-policy/">Refund Policy</a>
                </li>
                <li>
                  <a href="/eula/">EULA</a>
                </li>
                <li>
                  <a href="/terms-and-conditions/">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="/payment-agreement/">Payment Agreement</a>
                </li>
              </ul>
            </div>
            <div className="footer-item1">
              <p className="store">
                <a href="/store/" className="shoppingcart">
                  <span>StackSentinel Store</span>
                  <span className="store-icon">
                    <FaShoppingCart
                      className="cart"
                      size={20}
                      color="rgba(255, 204, 31, 1)"
                    />
                  </span>
                </a>
              </p>
              <p className="pay seal-pay"></p>
            </div>
          </div>
        </div>
        <div class="footer_box2">
          <p class="footer_title">Disclaimer</p>
          <p style={{ color: "#fff" }} class="footer_desc">
            StackSentinel'S SOFTWARE INTENDED FOR LEGAL USE ONLY. Installing the
            Licensed Software onto the device you do not possess monitoring
            rights may go against the Laws of your country or region. Violation
            of the law’s requirements would be liable to severe monetary and
            criminal penalties. Please consult your own legal advisor for
            professional opinions on the legality of using this Licensed
            Software in the way you intend to use. You take full responsibility
            for downloading, installing, and using it. StackSentinel shall not
            be responsible if you choose to monitor a device without being
            permitted to; nor can StackSentinel provide legal advice on the use
            of the monitoring software. All rights not expressly granted herein
            are reserved to and retained by StackSentinel.
          </p>
        </div>
        <p style={{ color: "#fff" }} class="desc-bottom">
          Copyright © 2025 StackSentinel. All rights reserved.
        </p>
      </div>

      <aside>
        <Link class="base-floatcontactus" target="_blank" to="/contact-us">
           <IoIosContact size={35}/>
            Contact Support
        </Link>
      </aside>
    </>
  );
};

export default Footer;
