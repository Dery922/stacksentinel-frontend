import { useState } from "react";
import { IoLogoAndroid, IoIosArrowRoundForward } from "react-icons/io";
import { FaApple, FaCloud, FaDollarSign, FaExclamationCircle, FaLocationArrow, FaQuestionCircle, FaShieldAlt, FaSuperpowers } from "react-icons/fa";
import Footer from "../Footer/Footer";
import "./store.css"; // Renamed CSS file

const StorePage = () => {
  const [activeTooltip, setActiveTooltip] = useState(null);

  const toggleTooltip = (index) => {
    setActiveTooltip(activeTooltip === index ? null : index);
  };

  const products = [
    {
      id: 1,
      name: "StackSentinel Pro",
      description: "Monitor Android, iOS & iCloud",
      image: "/assets/img/pro.webp",
      plans: [
        {
          id: "monthly",
          duration: "1-Month Plan",
          price: "$39.99",
          originalPrice: "$55.99",
          savings: "$16",
          features: ["Auto Renew", "Cancel Anytime"]
        },
        {
          id: "quarterly",
          duration: "3-Month Plan",
          price: "$89.99",
          originalPrice: "$119.99",
          savings: "$30",
          features: ["Auto Renew", "Cancel Anytime", "Best Value"]
        },
        {
          id: "yearly",
          duration: "1-Year Plan",
          price: "$199.99",
          originalPrice: "$299.99",
          savings: "$100",
          features: ["Auto Renew", "Cancel Anytime", "Best Deal"]
        }
      ]
    }
  ];

  const paymentMethods = [
    { name: "PayPal", image: "/assets/img/paypal.png" },
    { name: "Mastercard", image: "/assets/img/mascercard.png" },
    { name: "Visa", image: "/assets/img/visa.png" },
    { name: "Discover", image: "/assets/img/discover.png" },
    { name: "Maestro", image: "/assets/img/maestro.png" }
  ];

  return (
    <div className="store-app">
      {/* Hero Banner */}
      <section className="store-hero">
        <div className="store-container">
          <div className="hero-content">
            <div className="badge">
              <span>1-Year Plan</span>
            </div>
            <h1>All-Round Parental Control for Monitoring</h1>
            <p className="hero-description">
              StackSentinel Pro, StackSentinel for WhatsApp and FamiGuard
              Monisen to check your children's Android & iOS devices, Windows
              computers and social apps activities.
            </p>
            <button className="cta-button">
              Buy Now
              <span className="arrow">
                      <IoIosArrowRoundForward color="blue" size={40} />
              </span>
            </button>
          </div>
          <div className="hero-image">
            <img 
              src="/assets/img/banner2.webp" 
              alt="Parental Control Dashboard" 
            />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <div className="store-container">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-info">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="product-image"
                />
                <div className="product-details">
                  <h2>{product.name}</h2>
                  <p>{product.description}</p>
                </div>
              </div>

              <div className="pricing-plans">
                {product.plans.map((plan, index) => (
                  <div key={plan.id} className="plan-card">
                    <div className="savings-badge">
                      <span>Save</span>
                      <span className="amount">{plan.savings}</span>
                    </div>
                    
                    <h3>{plan.duration}</h3>
                    
                    <div className="plan-features">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="feature">
                          {feature}
                          {feature.includes("Cancel") && (
                            <div className="tooltip-container">
                              <button 
                                className="info-button"
                                onClick={() => toggleTooltip(index)}
                                aria-label="More information"
                              >
                                <FaQuestionCircle />
                              </button>
                              {activeTooltip === index && (
                                <div className="feature-tooltip">
                                  <p>
                                    The license will be renewed automatically. You can{" "}
                                    <a href="/support-center/cancel-subscription/">
                                      cancel
                                    </a>{" "}
                                    it at any time on the product Settings page.
                                  </p>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    
                    <div className="price">
                      <span className="current-price">{plan.price}</span>
                      <span className="original-price">{plan.originalPrice}</span>
                    </div>
                    
                    <button className="buy-button">Buy Now</button>
                    
                    <div className="platforms">
                      <p>Available on:</p>
                      <div className="platform-icons">
                        <IoLogoAndroid title="Android" />
                        <FaApple title="iOS" />
                        <FaCloud title="iCloud" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Payment Methods */}
      <section className="payment-methods">
        <div className="store-container">
          <div className="security-badge">
            <FaShieldAlt className="shield-icon" />
            <span>Secure online payment</span>
          </div>
          <div className="payment-logos">
            {paymentMethods.map((method) => (
              <img 
                key={method.name}
                src={method.image} 
                alt={method.name} 
                className="payment-logo"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="support-service base-maxwidth">
        <div className="support-list">
          <div className="service-item">
             <FaLocationArrow color="white" size={31}/>
             <p className="service-title">100% Safe</p>
             <p className="service-desc">We value your privacy. Your personal or financial information will be kept confidential.</p>
          </div>
          <div className="service-item">
          <FaDollarSign color="white" size={31}/>
             <p className="service-title">100% Safe</p>
             <p className="service-desc">We value your privacy. Your personal or financial information will be kept confidential.</p>
          </div>
          <div className="service-item">
          <FaExclamationCircle color="white" size={31}/>
             <p className="service-title">100% Safe</p>
             <p className="service-desc">We value your privacy. Your personal or financial information will be kept confidential.</p>
          </div>
          <div className="service-item">
          <FaSuperpowers color="white" size={31}/>
             <p className="service-title">100% Safe</p>
             <p className="service-desc">We value your privacy. Your personal or financial information will be kept confidential.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StorePage;