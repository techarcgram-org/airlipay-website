import Image from "next/image";
import screen2 from "../app/assets/images/screen2.png";
import dynamic from "next/dynamic";

const Rules = () => {
  return (
    <section id="rules">
      <div class="rules-content">
        <div class="img-container">
          <Image
            class="rules-image"
            src={screen2}
            width="100%"
            height="100%"
            alt="Airlipay Home Screen"
          />
        </div>
        <div class="rules-text">
          <h2 class="rules-heading heading-2">
            Let’s rewrite the rules of money
          </h2>
          <p class="rules-description description">
            We’re rewriting the invisible rules of money. The traditional
            financial system would have you believe that you have to wait to get
            the money you’ve already earned. Get your money when you need it
            with on-demand pay (also known as earned wage access.)
          </p>
          <p class="rules-description description">
            We’re re-imaging the way money moves and what that means for the
            world.
          </p>
          <a href="#contact">
            <button class="btn">Join Us</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(Rules), { ssr: false });
