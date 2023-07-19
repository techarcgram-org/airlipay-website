import React from "react";
import Image from "next/image";
import frame from "../../src/app/assets/images/Frame 76.png";

const Dedication = () => {
  return (
    <section id="dedication">
      <div class="dedication-content">
        <Image
          width="100%"
          height="100%"
          class="dedication-image"
          src={frame}
          alt="Dedication Image"
        />
        <div class="dedication-text">
          <h2 class="heading-2">Commitment to employee adoption</h2>
          <p class="description">
            The AirliPay Solution starts by seamlessly and securely integrating
            with payroll systems to leave little to no added work for payroll
            teams. From there, collaborative services work with you on technical
            implementation, customized launch strategy, employee activation,
            client onboarding, training, marketing and more.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Dedication;
