import Image from "next/image";
import screen1 from '../app/assets/images/screen1.png'

const Introduction = () => {
  return (
    <section id="introduction">
      <div className="intro-content">
        <div className="intro-text">
          <h1 className="heading">
            Get paid on your terms. <br /> Instant wage access made simple
          </h1>
          <p className="intro-description description">
            On-demand pay — also known as earned wage access — gives employees
            access to their earned pay before the traditional, scheduled payday.
          </p>
          <div className="features">
            <div className="feature">
              <div className="icon-container">
                <svg
                  className="feature-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z" />
                </svg>
              </div>
              <span className="feature-text">Instant Pay</span>
            </div>
            <div className="feature">
              <div className="icon-container">
                <svg
                  className="feature-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
                </svg>
              </div>
              <span className="feature-text">100% Secure</span>
            </div>
            <div className="feature">
              <div className="icon-container">
                <svg
                  className="feature-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                </svg>
              </div>

              <span className="feature-text">Small Fees</span>
            </div>
          </div>
          <p className="description">Experience the Future of Wage Payment.</p>
        </div>
        <div id="intro-img">
          <Image
            className="intro-img"
            src={screen1}
            alt="AirliPay Mobile App"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default Introduction;