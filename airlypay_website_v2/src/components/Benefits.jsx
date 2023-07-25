import images from "@/constant/images";
import React from "react";
import { BenefitCard } from ".";

const Benefits = () => {
  return (
    <section id="benefits">
      <div class="benefits-content">
        <h2 class="heading-2">Earned wage access benefits</h2>
        <p class="description">
          It can take six months or more to break even on hiring a new employee.
          Earned wage access can make keeping employees (and keeping them happy)
          easier than ever.
        </p>
        <div class="grid-container">
          <div class="details">
            <BenefitCard
              image={images.turnOver}
              title="Reduced Employee Turnover"
              subtitle="When employees have almost instant access to their earned wages,
                they are less likely to stress about getting to payday. In turn,
                that also means they’ll be less likely to find a new job (or
                even take one that doesn’t offer the amazing employee benefit.)
                A convenient earned wage access app like Rain can reduce your
                own employee turnover"
            />

            <BenefitCard
              image={images.productivity}
              title="Employee Productivity"
              subtitle="Boost employee productivity by offering the #1 requested
                employee benefit! An earned wage access app can help reduce
                financial stress and concerns, which means they will be happier,
                more engaged, and feel more part of the team! Let your employees
                relax knowing that they can access their earned wages if needed."
            />

            <BenefitCard
              image={images.retention}
              title="Employee Retention"
              subtitle="Hiring and onboarding new employees is much more expensive than
                retaining good ones. Make loyalty an easy choice by offering
                earned wage access to your employees. Employees who have access
                to on-demand pay are more likely to have higher productivity and
                even be willing to take on more shifts. Invest in the best
                employee benefit around!"
            />

            <BenefitCard
              image={images.application}
              title="Increase in Job Applications"
              subtitle="Having trouble staffing your business? Employees are getting
                more selective about the places they work, which means you need
                to stand out against the competition. By offering an earned wage
                access app for employees, you become even more attractive to the
                potential pool of candidates! According to a study by ADP,
                offering EWA can almost double the amount of applications you
                receive."
            />

          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
