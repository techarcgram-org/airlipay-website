
import React from 'react'

const StatisticsCard = ({title,subtitle}) => {
  return (
    <div class="stats-detail">
      <h3>{title}</h3>
      <p class="description">
        {subtitle}
      </p>
    </div>
  );
}

export default StatisticsCard
