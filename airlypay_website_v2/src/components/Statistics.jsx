
import dynamic from 'next/dynamic';
import React from 'react'

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
          <div class="stats-detail">
            <h3>95%</h3>
            <p class="description">
              of on-demand pay users stopped using payday loans (81%) or reduce
              use (15%) after access to on-demand pay.{" "}
            </p>
          </div>
          <div class="stats-detail">
            <h3>88%</h3>
            <p class="description">
              of users credit on-demand pay for reducing or eliminating their
              use of payday loans
            </p>
          </div>
          <div class="stats-detail">
            <h3>$624 - $930</h3>
            <p class="description">
              Conservative estimate of amount frequent payday users save
              annually using on-demand pay.{" "}
            </p>
          </div>
          <div class="stats-detail">
            <h3>$361</h3>
            <p class="description">
              An average of $361 is saved annually across the entire spectrum of
              payday borrowers.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default dynamic(() => Promise.resolve(Statistics), { ssr: false });
