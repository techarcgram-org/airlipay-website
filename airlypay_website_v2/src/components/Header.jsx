
import Link from 'next/link';

const Header = () => {
  return (
    <header id="header">
      <div className="header-container">
        <div id="logo">
          <Link className="logo-text" href="/">
            AirliPay
          </Link>
        </div>
        <div className="page-links">
          <nav>
            <ul id="nav-bar">
              <li>
                <Link href="#faq">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#benefits">
                  Benefits
                </Link>
              </li>
              <li>
                <Link href="#contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
          <button id="get-app">Get App</button>
        </div>
      </div>
    </header>
  );
}

export default Header;