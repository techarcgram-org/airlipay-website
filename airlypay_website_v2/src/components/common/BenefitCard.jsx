
import Image from 'next/image';
import React from 'react'

const BenefitCard = ({image,title,subtitle}) => {
  return (
    <div class="detail">
      <Image
        src={image}
        className="benefit-icons"
        width="100%"
        height="100%"
      />
      <h3>{title}</h3>
      <p>
        {subtitle}
      </p>
    </div>
  );
}

export default BenefitCard
