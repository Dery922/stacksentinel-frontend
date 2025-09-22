import "../style.css";
// import "../common.css";


import { useRef, useState } from "react";
import { MdAndroid, MdArrowRight } from "react-icons/md";
import { FaApple, FaAndroid, FaCloud, FaShoppingCart } from "react-icons/fa";
import { IoLogoAndroid, IoIosArrowRoundForward } from "react-icons/io";
import Navbar from "../../components/header/Navbar";
import Section from "../section/section";

import FAQToggle from "../../components/toggle";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
const slides = [
  {
    imgWebp:
      "https://images.famiguard.com/famiguarden/assets/common/index/way-1.webp",
    imgPng:
      "https://images.famiguard.com/famiguarden/assets/common/index/way-1.png",
    mpWebp:
      "https://images.famiguard.com/famiguarden/assets/common/index/way-mp-1.webp",
    mpPng:
      "https://images.famiguard.com/famiguarden/assets/common/index/way-mp-1.png",
    logo: "https://images.famiguard.com/famiguarden/assets/common/index/way-logo1.svg",
    heading: "Parental Control for Kids' Safety",
    text: "FamiGuard keeps an eye on your kids in time and checks their online activities, location, and social interactions to keep them safe.",
  },
  {
    imgWebp:
      "https://images.famiguard.com/famiguarden/assets/common/index/way-2.webp",
    imgPng:
      "https://images.famiguard.com/famiguarden/assets/common/index/way-2.png",
    mpWebp:
      "https://images.famiguard.com/famiguarden/assets/common/index/way-mp-2.webp",
    mpPng:
      "https://images.famiguard.com/famiguarden/assets/common/index/way-mp-2.png",
    logo: "https://images.famiguard.com/famiguarden/assets/common/index/way-logo2.svg",
    heading: "Ensure Enterprise Security",
    text: "Helps companies take timely actions to prevent employee data leaks and strengthens internal supervision and security.",
  },
  // Add more slides here
];

const Section1 = () => {
  const [tog, setTog] = useState(false);
  const [activeTab, setActiveTab] = useState("tab1");
  const handleToggle = () => {
    setTog(!tog);
  };
  return (
    <>
      <div className="main">
        {/* <div className="top-banner">
          <div className="swiper-container banner-swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="container sentinel-slide">
                  <div className="left">
                    <h1>
                      <span className="block">
                        <span className="blue-span">Parental Control</span> Tool
                        :
                      </span>
                      <span>
                        All-in-One Protection for your Child's
                        <span className="blue-span"> Digital Safety </span>
                      </span>
                    </h1>
                    <ul className="banner-list">
                      <li>
                        <span className="blue-span">
                          Multi-Device Monitoring:
                        </span>{" "}
                        Monitor all your child's devices including Android, iOS
                        and iCloud from one place.
                      </li>
                      <li>
                        <span className="blue-span">
                          Social Media Monitoring:
                        </span>{" "}
                        Monitor your child's activity across 30+ social apps
                        like YouTube, TikTok and Snapchat, including their
                        screen time.
                      </li>
                      <li>
                        <span className="blue-span">Location Tracking:</span>{" "}
                        Always know your child's whereabouts with within a
                        period of time GPS location monitoring.
                      </li>
                      <li>
                        <span className="blue-span">Communication Safety:</span>{" "}
                        Check call logs and messages to protect against scams
                        and dangerous contacts.
                      </li>
                      <li>
                        Monitor devices with permission of spouse/employee.
                      </li>
                    </ul>
                    <div className="available">
                      <span>Available for</span>

                      <span>
                        <IoLogoAndroid size={30} color="orange" />
                      </span>
                      <span>
                        <FaApple size={30} color="orange" />
                      </span>
                      <span>
                        <FaCloud size={30} color="orange" />
                      </span>
                    </div>
                    <Link to="#" className="btn-started">
                      <span>Get Started </span>
                      <span className="arrow">
                        <IoIosArrowRoundForward color="blue" size={40} />
                      </span>
                    </Link>
                  </div>
                  <div className="right">
                    <picture>
                      <img
                        src="/assets/img/banner.webp"
                        alt="parental-control"
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
       <Section />
        <div className="millon">
          <div className="container">
            <div className="item-m">
              <div className="h3 orange-span">4 Million </div>
              <p className="grey-text">
                Users are satisfied with StackSentinel
              </p>
            </div>
            <div className="item-m">
              <div className="h3 orange-span">134 Million </div>
              <p className="grey-text">
                Problems of various types are detected
              </p>
            </div>
            <div className="item-m">
              <div className="h3 orange-span">54 Million </div>
              <p className="grey-text">
                Children are protected by StackSentinel
              </p>
            </div>
          </div>
        </div>
        <div className="product-box">
          <div className="container">
            <div className="item">
              <div className="left">
                <picture></picture>
              </div>
              <div className="right">
                <div className="text-box">
                  <div className="h4">StackSentinel Pro</div>

                  <p>
                    The leading cell phone tracker to help your kids grow up
                    safely by checking text messages, call history, social media
                    apps,{" "}
                    <a
                      href="/mobile-tracker/track-cell-phone-location-without-knowing/"
                      target="_blank"
                    >
                      within a period of time location
                    </a>
                  </p>
                </div>
                <div className="go-product">
                  <a className="item-bth" href="/">
                    Try Now
                  </a>
                  <a className="item-learn">Learn More</a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="left"></div>
              <div className="right">
                <div className="text-box">
                  <div className="h4">StackSentinel Pro</div>
                  <p>
                    The effective WhatsApp tracker to monitor
                    <a
                      href="https://www.famiguard.com/whatsapp-tracker/read-girlfriend-whatsapp-message-without-her-knowing/"
                      target="_blank"
                    >
                      WhatsApp messages
                    </a>
                    , chats, voice memos,{" "}
                    <a
                      href="https://www.famiguard.com/whatsapp-tracker/how-to-view-someone-elses-whatsapp-call-history/"
                      target="_blank"
                    >
                      call history
                    </a>
                    , status and other data on Android&amp;iOS .{" "}
                  </p>
                </div>
                <div className="go-product">
                  <a className="item-bth" href="/">
                    Try Now
                  </a>
                  <a className="item-learn">Learn More</a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="left"></div>
              <div className="right">
                <div className="text-box">
                  <div className="h4">StackSentinel Pro</div>
                  <p>
                    Track your WhatsApp contacts'{" "}
                    <a
                      href="/whatsapp-tracker/whatsapp-online-status-checker/"
                      target="_blank"
                    >
                      online status
                    </a>{" "}
                    or device access. The WhatsApp online tracker can show their
                    online/offline time and notify you when they are online.
                  </p>
                </div>
                <div className="go-product">
                  <a className="item-bth" href="/">
                    Try Now
                  </a>
                  <a className="item-learn">Learn More</a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="left"></div>
              <div className="right">
                <div className="text-box">
                  <div className="h4">StackSentinel Pro</div>
                  <p>
                    Top computer monitoring software for efficiency and
                    security. Remotely monitor/screenshot live screen, track
                    emails, live chats like Facebook, WhatsApp Business,
                    software activities, local files and more on Windows-based
                    computers.
                  </p>
                </div>
                <div className="go-product">
                  <a className="item-bth" href="/">
                    Try Now
                  </a>
                  <a className="item-learn">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="explore">
          <div className="container">
            <h2>Explore Some StackSentinel Parental Control Features</h2>
            <div className="explore-list">
              <div class="list-l">
                <a href="/screen-time-report/" target="_blank" class="green">
                  <div class="content">
                    <div class="title">
                      <p>Manage</p>
                      <p>Screen Time</p>
                    </div>
                    <div class="bottom">
                      <p>Included with: StackSentinel Pro</p>
                      <img
                        src="https://images.famiguard.com/famiguarden/assets/common/index/esplore-1.png?x-oss-process=image/format,png"
                        alt="FamiGuard manages screen time feature"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div class="text">
                    Check your kids' screen time and app usage. Decide what apps
                    and when they can use.
                  </div>
                </a>
                <a href="/app-blocker/" target="_blank" class="blue">
                  <div class="content">
                    <div class="title">
                      <p>Control App</p>
                      <p>Downloads</p>
                    </div>
                    <div class="bottom">
                      <p>Included with: StackSentinel Pro</p>
                      <img
                        src="https://images.famiguard.com/famiguarden/assets/common/index/esplore-2.png?x-oss-process=image/format,png"
                        alt="FamiGuard app usage monitoring feature"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div class="text">
                    See when your children download an app and you are allowed
                    to uninstall a potentially dangerous app.
                  </div>
                </a>

                <a href="/parental-control-app/" target="_blank" class="purple">
                  <div class="content">
                    <div class="title">
                      <p>Monitor</p>
                      <p>Content</p>
                    </div>
                    <div class="bottom">
                      <p>Included with: StackSentinel Pro</p>
                      <img
                        src="https://images.famiguard.com/famiguarden/assets/common/index/esplore-4.png?x-oss-process=image/format,png"
                        alt="FamiGuard content monitoring"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div class="text">
                    Check child's sent and received messages, incoming and
                    outcoming calls, photos/videos, voice memos, notes,
                    calendars, browser history and email tracking.
                  </div>
                </a>
                <a href="/parental-control-app/" target="_blank" class="yellow">
                  <div class="content">
                    <div class="title">
                      <p>Remote</p>
                      <p>Control</p>
                    </div>
                    <div class="bottom">
                      <p>Included with: StackSentinel Pro</p>
                      <img
                        src="https://images.famiguard.com/famiguarden/assets/common/index/esplore-5.png?x-oss-process=image/format,png"
                        alt="FamiGuard remote control"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div class="text">
                    Capture screenshots, take photos and track keywords of the
                    targeted devices.
                  </div>
                </a>
              </div>

              <div class="list-r">
                <div class="list-one">
                  <a href="/record-surroundings/" target="_blank" class="blue">
                    <div class="content">
                      <div class="title">
                        <p>Live</p>
                        <p>Recording</p>
                      </div>
                      <div class="bottom">
                        <p>Included with: StackSentinel Pro</p>
                        <img
                          src="https://images.famiguard.com/famiguarden/assets/common/index/esplore-6.png?x-oss-process=image/format,png"
                          alt="FamiGuard live recording"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div class="text">
                      Record phone live screen, phone surrounding, phone calls
                      and app calls without the target knowing.
                    </div>
                  </a>
                  <a
                    href="/social-media-monitor/"
                    target="_blank"
                    class="green"
                  >
                    <div class="content">
                      <div class="title">
                        <p>Check Social</p>
                        <p>Media Apps Activities</p>
                      </div>
                      <div class="bottom">
                        <p>Included with: StackSentinel Pro</p>
                        <img
                          src="https://images.famiguard.com/famiguarden/assets/common/index/esplore-7.png?x-oss-process=image/format,png"
                          alt="FamiGuard social apps monitoring"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div class="text">
                      Monitor social apps like WhatsApp, Snapchat, Instagram,
                      Facebook and Tinder.
                    </div>
                  </a>
                </div>
                <div class="list-two">
                  <a href="/website-blocker/" target="_blank" class="yellow">
                    <div class="content">
                      <div class="title">
                        <p>Block</p>
                        <p>Apps&amp;Websites</p>
                      </div>
                      <div class="bottom">
                        <p>Included with: StackSentinel Pro</p>
                        <img
                          src="https://images.famiguard.com/famiguarden/assets/common/index/esplore-8.png?x-oss-process=image/format,png"
                          alt="FamiGuard content blocking feature"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div class="text">
                      Block specific sites and apps to keep your kids away from
                      inappropriate content.
                    </div>
                  </a>
                  <a href="/track-whatsapp/" target="_blank" class="purple">
                    <div class="content">
                      <div class="title">
                        <p>Check WhatsApp</p>
                        <p> Activities</p>
                      </div>
                      <div class="bottom">
                        <p>Included with: StackSentinel for WhatsApp</p>
                        <img
                          src="https://images.famiguard.com/famiguarden/assets/common/index/esplore-9.png?x-oss-process=image/format,png"
                          alt="FamiGuard whatsapp monitoring"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div class="text">
                      Track WhatsApp messages, contacts, photos, videos, online
                      status and more on Android&amp;iOS devices.
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="why-fam">
          <div class="container">
            <h2 style={{ zIndex: 90000 }}>
             
              StackSentinel is Your Best Digital Partent Assistant and here is why.
            </h2>
            <div class="why-box">
              <div class="item-w">
                <img
                  src="https://images.famiguard.com/famiguarden/assets/common/index/why-logo1.svg"
                  alt="100% Safe"
                  loading="lazy"
                />
                <div class="h4">100% Safe</div>
                <p>
                  There is no virus in StackSentinel software and no need to
                  jialbreak or root the devices.
                </p>
              </div>
              <div class="item-w">
                <img
                  src="https://images.famiguard.com/famiguarden/assets/common/index/why-logo2.svg"
                  alt="FamiGuard Persistent Update"
                  loading="lazy"
                />
                <div class="h4">Persistent Update</div>
                <p>
                  Our team continuously update the products to meet users' needs
                  and inprove their experience.
                </p>
              </div>
              <div class="item-w">
                <img
                  src="https://images.famiguard.com/famiguarden/assets/common/index/why-logo3.svg"
                  alt="FamiGuard Compatibility"
                  loading="lazy"
                />
                <div class="h4">Highly Compatible</div>
                <p>
                  Our products are widely compatible with all versions of
                  Android&amp;iOS.
                </p>
              </div>
              <div class="item-w">
                <img
                  src="https://images.famiguard.com/famiguarden/assets/common/index/why-logo4.svg"
                  alt="FamiGuard Support"
                />
                <div class="h4">5/24 Support</div>
                <p>
                  StackSentinel offers professional customer support team to solve
                  your problems.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="faqs">
          <div class="container">
            <h2>FAQs</h2>
            <div class="faq-box">
              <FAQToggle
                title="1. What is parental control?"
                className="faqs-title"
              >
                <span>
                  Parental control refers to a set of tools and features
                  designed to help parents monitor and manage their children's
                  online activities, access to content, and overall usage of
                  digital devices. These controls are typically implemented on
                  computers, smartphones, tablets, and other internet-connected
                  devices.
                </span>
              </FAQToggle>
              <FAQToggle
                title="2. What is the best app for parental control?"
                className="faqs-title"
              >
                <span>
                  StackSentinel Pro has detected 5.9 million online problems and
                  helped parents to protect their children from those dangers. 4
                  Million users feel satisfied with the parental control app. It
                  is availble on Android, iOS and iCloud. Try it now and see how
                  it works.
                </span>
              </FAQToggle>
              <FAQToggle
                title="3. Are parental control apps safe?"
                class="faqs-title"
              >
                <p class=""></p>

                <span>
                  Use reputable parental control apps like StackSentinel Pro can
                  help your kids safely surfing online. It has been praised by
                  many users and great sites. Safe parental control apps won't
                  invade your privacy or jailbreak/root the devices.
                </span>
              </FAQToggle>
              <FAQToggle
                title="4. How to put parental controls on child's phone?"
                class="faqs-title"
              >
                <span>
                  Choose a reliable parental control app such as StackSentinel
                  Pro and install it onto your child's phone based on the guide.
                  Then you can check the kids' phone activities, manage their
                  screen time, block inappropriate websites&amp;apps, etc.
                </span>
              </FAQToggle>
              <FAQToggle
                title=" 5. Is there a completely free parental control app for iPhone?"
                class="faqs-title"
              >
                <p></p>

                <span>
                  There is no completely free parental control app for iPhone.
                  Even there are some claim that their apps are free, they lack
                  essential features and have other issues in fact. So, choosing
                  a cost-effective and safe phone monitoring app like
                  StackSentinel Pro can let you have a peace of mind.
                </span>
              </FAQToggle>
              <FAQToggle title="6. Is my kids' data safe?" class="faqs-title">
                <span>
                  Yes, your kids' data is absolutely secure. StackSentinel saves
                  users' data in an encrypted database and won't invade/abuse
                  it. So you can rest easy.
                </span>
              </FAQToggle>
            </div>
          </div>
        </div>
        <div className="hot-topics">
          <h2>Hot Topics</h2>
          <div className="container">
            <div className="tab-switch">
              <div
                className={`"base-tabswitch-title active" , ${
                  activeTab === "tab1" ? "tab active" : "tab"
                }`}
                onClick={() => setActiveTab("tab1")}
              >
                Parental Control
              </div>
              <div
                className={`"base-tabswitch-title " , ${
                  activeTab === "tab2" ? "tab active" : "tab"
                }`}
                onClick={() => setActiveTab("tab2")}
              >
                Mobile Tracking
              </div>
              <div
                className={`"base-tabswitch-title " , ${
                  activeTab === "tab3" ? "tab active" : "tab"
                }`}
                onClick={() => setActiveTab("tab3")}
              >
                Phone Monitoring
              </div>
              <div
                className={`"base-tabswitch-title " , ${
                  activeTab === "tab4" ? "tab active" : "tab"
                }`}
                onClick={() => setActiveTab("tab4")}
              >
                WhatsApp Tracker
              </div>
            </div>
          </div>
          <div className="tabswitch-content">
            {activeTab === "tab1" && (
              <div className="base-tabswitch-msg tab1 active-tab ">
                <div className="item">
                  <a href="/">
                    <div className="imgbox">
                      <img src="/assets/img/pho.jpg" />
                    </div>
                    <p>Phone Lock Apps to Manage Time and Boost Productivity</p>
                  </a>
                </div>
                <div className="item">
                  <a href="/">
                    <div className="imgbox">
                      <img src="/assets/img/p2.jpg" />
                    </div>
                    <p>Phone Lock Apps to Manage Time and Boost Productivity</p>
                  </a>
                </div>
                <div className="item">
                  <a href="/">
                    <div className="imgbox">
                      <img src="/assets/img/p3.jpg" />
                    </div>
                    <p>Phone Lock Apps to Manage Time and Boost Productivity</p>
                  </a>
                </div>
                <div className="item">
                  <a href="/">
                    <div className="imgbox">
                      <img src="/assets/img/p4.jpg" />
                    </div>
                    <p>Phone Lock Apps to Manage Time and Boost Productivity</p>
                  </a>
                </div>
                <div className="item">
                  <a href="/">
                    <div className="imgbox">
                      <img src="/assets/img/p5.png" />
                    </div>
                    <p>Phone Lock Apps to Manage Time and Boost Productivity</p>
                  </a>
                </div>
                <div className="item">
                  <a href="/">
                    <div className="imgbox">
                      <img src="/assets/img/p6.jpg" />
                    </div>
                    <p>Phone Lock Apps to Manage Time and Boost Productivity</p>
                  </a>
                </div>
                <div className="item">
                  <a href="/">
                    <div className="imgbox">
                      <img src="/assets/img/p6.jpg" />
                    </div>
                    <p>Phone Lock Apps to Manage Time and Boost Productivity</p>
                  </a>
                </div>
              </div>
            )}
            {activeTab === "tab2" && (
              <div className="base-tabswitch-msg tab2">
                <div className="item">
                  <a href="">
                    <div className="imgbox">
                      <img src="/assets/img/location.png" />
                    </div>
                  </a>
                </div>
                <div className="item">
                  <a href="">
                    <div className="imgbox">
                      <img src="/assets/img/m1.jpg" />
                    </div>
                  </a>
                </div>
                <div className="item">
                  <a href="">
                    <div className="imgbox">
                      <img src="/assets/img/m3.jpeg" />
                    </div>
                  </a>
                </div>
                <div className="item">
                  <a href="">
                    <div className="imgbox">
                      <img src="/assets/img/m4.jpg" />
                    </div>
                  </a>
                </div>
                <div className="item">
                  <a href="">
                    <div className="imgbox">
                      <img src="/assets/img/m6.png" />
                    </div>
                  </a>
                </div>
              </div>
            )}
            {activeTab === "tab3" && (
              <div className="base-tabswitch-msg tab3">
                <div className="item">
                  <a href="">
                    <div className="imgbox">
                      <img src="/assets/img/pm1.jpg" />
                    </div>
                  </a>
                </div>
                <div className="item">
                  <a href="">
                    <div className="imgbox">
                      <img src="/assets/img/pm3.jpg" />
                    </div>
                  </a>
                </div>
                <div className="item">
                  <a href="">
                    <div className="imgbox">
                      <img src="/assets/img/pm7.jpg" />
                    </div>
                  </a>
                </div>
                <div className="item">
                  <a href="">
                    <div className="imgbox">
                      <img src="/assets/img/pm8.jpg" />
                    </div>
                  </a>
                </div>
                <div className="item">
                  <a href="">
                    <div className="imgbox">
                      <img src="/assets/img/pm9.png" />
                    </div>
                  </a>
                </div>
              </div>
            )}
            {activeTab === "tab4" && (
              <div className="base-tabswitch-msg tab4">
                <div className="item">
                  <a href="">
                    <div className="imgbox">
                      <img src="/assets/img/w1.jpg" />
                    </div>
                  </a>
                </div>
                <div className="item">
                  <a href="">
                    <div className="imgbox">
                      <img src="/assets/img/w2.jpg" />
                    </div>
                  </a>
                </div>
                <div className="item">
                  <a href="">
                    <div className="imgbox">
                      <img src="/assets/img/w3.jpg" />
                    </div>
                  </a>
                </div>
                <div className="item">
                  <a href="">
                    <div className="imgbox">
                      <img src="/assets/img/w5.jpg" />
                    </div>
                  </a>
                </div>
                <div className="item">
                  <a href="">
                    <div className="imgbox">
                      <img src="/assets/img/w6.jpg" />
                    </div>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Section1;
