import "./keylogger.css";
import Footer from "../Footer/Footer.js";
import { FaAndroid } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
const Keylogger = () => {
  return (
    <main>
      <div className="top-banner">
        <div className="base-maxwidth">
          <div className="banner-content">
            <span className="product-title">KEYLOGGER</span>
            <h1>
              <strong>Keylogger:</strong> Track What Your Kids Typing Daily
            </h1>
            <p className="product-info">
              Keylogger for every app, parents can know what their children are
              searching for, chatting, and concerned about from keyword
              tracking. Monitor devices with permission of spouse/employee.
            </p>
            <div class="btn-group">
              <Link to="#" className="btn-started">
                <span>Buy Now </span>
                <span className="arrow">
                  <IoIosArrowRoundForward color="blue" size={40} />
                </span>
              </Link>
              <a href="" class="view-demo" target="_blank">
                View Demo
              </a>
            </div>
            <picture></picture>
          </div>
          <picture className="whatsapp">
            <img
              style={{ width: 512, height: 500 }}
              src="/assets/img/keylogger.webp"
            />
          </picture>
        </div>
      </div>
      <div className="can-do">
        <div className="base-maxwidth">
          <div className="do-list">
            <h2>
              Benefits from <b> keylogger </b>Features
            </h2>

            <a class="do-item curr" href="#p1">
              <img
                src="https://images.famiguard.com/famiguarden/assets/features/log-keyword.svg"
                alt="Logs All Kids Type on Keyboard"
                width="48"
                height="48"
              />
              <p>Logs All Kids Type on Keyboard</p>
            </a>
            <a class="do-item" href="#p2">
              <img
                src="https://images.famiguard.com/famiguarden/assets/features/get-password-keylogger.svg"
                alt="Get the Password of the Software"
                width="48"
                height="48"
              />
              <p>Get the Password of the Software</p>
            </a>
            <a class="do-item" href="#p3">
              <img
                src="https://images.famiguard.com/famiguarden/assets/features/keyword-alerts.svg"
                alt="Keywords Tracking &amp; Alerts"
                width="48"
                height="48"
              />
              <p>Keywords Tracking &amp; Alerts</p>
            </a>
          </div>

          <div class="info-item" id="p1">
            <picture>
              {/* <source type="image/webp" srcset="https://images.famiguard.com/famiguarden/assets/features/log-keystroke.webp"> */}
              <img
                src="https://images.famiguard.com/famiguarden/assets/features/log-keystroke.png"
                alt="Logs All Kids Type on Keyboard "
                loading="lazy"
                width="465"
                height="474"
              />
            </picture>
            <div class="info-content">
              <h3 class="info-title">Logs All Kids Type on Keyboard </h3>
              <p class="info-desc">
                See all the keystrokes that occur on the monitored devices. Each
                keystroke has a name and an app icon that identifies its origin.
              </p>
              <ul>
                <li>
                  Clear vision of detailed messages and chatting content from
                  Messages and social apps.
                </li>
                <li>
                  Get to know what interests your kids on the Internet and what
                  they surf on the search engine.
                </li>
                <li>
                  Everything children note down on memos or calendars will be
                  tracked, too.
                </li>
              </ul>
              <div class="btn-group">
                <Link to="#" className="btn-started">
                  <span>Buy Now </span>
                  <span className="arrow">
                    <IoIosArrowRoundForward color="blue" size={40} />
                  </span>
                </Link>
                <a href="" class="view-demo" target="_blank">
                  View Demo
                </a>
              </div>
              <p class="version-list">
                Available for:
                <FaAndroid color="gray" size={34} />
              </p>
            </div>
          </div>
          <div class="info-item" id="p2">
            <div class="info-content">
              <h3 class="info-title">Get the Password of Software Easily</h3>
              <p class="info-desc">
                Catch every keyword activity, even the passwords typed.
              </p>
              <ul>
                <li>
                  Though in security mode when entering keywords, FamiGuard Pro
                  can record these keystrokes.
                </li>
                <li>
                  Have control of kids' accounts for better and comprehensive
                  parental control.
                </li>
              </ul>
              <div class="btn-group">
                <Link to="#" className="btn-started">
                  <span>Buy Now </span>
                  <span className="arrow">
                    <IoIosArrowRoundForward color="blue" size={40} />
                  </span>
                </Link>
                <a href="" class="view-demo" target="_blank">
                  View Demo
                </a>
              </div>
              <p class="version-list">
                Available for:
                <FaAndroid color="gray" size={34} />
              </p>
            </div>
            <picture>
              <img
                src="https://images.famiguard.com/famiguarden/assets/features/keylogger-get-password.png"
                alt="Get the Password of Software Easily"
                loading="lazy"
                width="465"
                height="468"
              />
            </picture>
          </div>

          <div class="info-item" id="p3">
            <picture>
              <img
                src="https://images.famiguard.com/famiguarden/assets/features/keyword-tracker.png"
                alt="Keywords Tracking &amp; Alerts"
                loading="lazy"
                width="465"
                height="468"
              />
            </picture>
            <div class="info-content">
              <h3 class="info-title">Keywords Tracking &amp; Alerts</h3>
              <p class="info-desc">
                You will be notified with emails or dashboard notifications if
                specific keywords or phrases appear.
              </p>
              <ul>
                <li>
                  Set up a single keyword or a whole phrase to set alerts.
                </li>
                <li>
                  In the dashboard, you can see keywords, where they are
                  detected, actual messages related to them, and when they
                  appear.
                </li>
                <li>
                  If keywords happen on some apps like WhatsApp and Telegram,
                  this keylogger will take screenshots, and you can check
                  screenshots for details.
                </li>
              </ul>
              <div class="btn-group">
                <Link to="#" className="btn-started">
                  <span>Buy Now </span>
                  <span className="arrow">
                    <IoIosArrowRoundForward color="blue" size={40} />
                  </span>
                </Link>
                <a href="" class="view-demo" target="_blank">
                  View Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="steps">
        <div className="base-maxwidth">
          <div className="step-bottom">
            <div className="step-left">
              <h3>Operate on Dashboard Panel and Begin Tracking</h3>
              <p>
                Anytime you want to monitor keystrokes, you can check details
                from <b>Phone Files &gt; Keylogger</b>. And if you're going to
                track keywords or set content alerts, access{" "}
                <b>Remote Control &gt; Track Keywords</b>.
              </p>
            </div>
            <picture>
              <img
                src="https://images.famiguard.com/famiguarden/assets/features/famiguard-pro-keylogger.png"
                alt="begin tracking"
                loading="lazy"
                width="634"
                height="311"
              />
            </picture>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Keylogger;
