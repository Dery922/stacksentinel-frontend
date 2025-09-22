import "./style.css"
import { MdAndroid, MdArrowRight } from "react-icons/md";
import { FaApple, FaAndroid, FaCloud } from "react-icons/fa";
import { IoLogoAndroid, IoIosArrowRoundForward } from "react-icons/io";
const Section = () => {
    return (
    <div className="top-banner">
        <div className="swiper-container banner-swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="container sentinel-slide">
                <div className="left">
                  <h1>
                    <span className="block">
                      <span className="blue-span">Parental Control</span> Tool :
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
                      <span class="blue-span">Social Media Monitoring:</span>{" "}
                      Monitor your child's activity across 30+ social apps like
                      YouTube, TikTok and Snapchat, including their screen time.
                    </li>
                    <li>
                      <span class="blue-span">Location Tracking:</span> Always
                      know your child's whereabouts with within a period of time
                      GPS location monitoring.
                    </li>
                    <li>
                      <span class="blue-span">Communication Safety:</span> Check
                      call logs and messages to protect against scams and
                      dangerous contacts.
                    </li>
                    <li>Monitor devices with permission of spouse/employee.</li>
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
                  <a href="#" className="btn-started">
                    <span>Get Started </span>
                    <span className="arrow">
                      <IoIosArrowRoundForward color="blue" size={40} />
                    </span>
                  </a>
                </div>
                <div className="right">
                  <picture>
                    <img src="/assets/img/banner.webp" alt="parental-control" />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Section