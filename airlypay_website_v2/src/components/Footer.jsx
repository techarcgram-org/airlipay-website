import React from "react";

const Footer = () => {
  return (
    <div>
      <section id="footer">
        <div class="footer-content">
          <p>
            <span class="higher">A</span>irlipay ⓒ{" "}
            <span class="current-year "></span> |{" "}
            <a
              href="https://techarcgram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="higher">T</span>echarcgram
            </a>
          </p>
        </div>
      </section>

      <div class="back-to-top">
        <button class="back-to-top-button">
          <svg
            class="back-to-top-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
          </svg>
        </button>
      </div>

      <div class="pop-container">
        <div class="get-app-pop">
          <span class="emoji">😊</span>
          <h2>Coming Soon!</h2>
          <p>Stay tuned for AirliPay news</p>
          <button class="pop-btn">Done</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
