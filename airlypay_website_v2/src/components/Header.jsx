"use client";
import dynamic from "next/dynamic";
import Link from "next-intl/link";

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
                <Link href="#faq" suppressHydrationWarning={true}>
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#benefits" suppressHydrationWarning={true}>
                  Benefits
                </Link>
              </li>
              <li>
                <Link href="#contact" suppressHydrationWarning={true}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/" locale="en">
                  en
                </Link>
                |
                <Link href="/" locale="fr">
                  fr
                </Link>
              </li>
            </ul>
          </nav>
          <button id="get-app">Get App</button>
        </div>
      </div>
    </header>
  );
};

export default dynamic(() => Promise.resolve(Header), { ssr: false });
