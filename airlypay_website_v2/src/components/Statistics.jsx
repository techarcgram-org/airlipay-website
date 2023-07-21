import React from "react";
import { StatisticsCard } from ".";

const Statistics = () => {
  return (
    <section id="stats">
      <div class="stats-content">
        <div class="stats-head">
          <h2 class="stats-heading heading-2">It's paying off for employees</h2>
          <p class="stats-description description">
            3rd party analysis confirms that on-demand pay makes a profound
            impact on employee financial well being
          </p>
        </div>
        <div class="stats-container">
          <StatisticsCard
            title="95%"
            subtitle="of on-demand pay users stopped using payday loans (81%) or reduce
              use (15%) after access to on-demand pay"
          />
          <StatisticsCard
            title="88%"
            subtitle="of users credit on-demand pay for reducing or eliminating their
              use of payday loans"
          />
          <StatisticsCard
            title="$624 - $930"
            subtitle="Conservative estimate of amount frequent payday users save
              annually using on-demand pay"
          />
          <StatisticsCard
            title="$361"
            subtitle="An average of $361 is saved annually across the entire spectrum of
              payday borrowers"
          />
        </div>
      </div>
    </section>
  );
};

export default Statistics;
