import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

interface stepsProps {
  steps: {
    "@type": string;
    name: string;
    text: string;
    image: string;
  }[];
}

const RecipeSteps: React.FC<stepsProps> = ({ steps }) => {
  return (
    <div className="w-full">
      <h2 className="heading-3 italic">Recipe</h2>
      <ul className="steps steps-vertical w-full">
        {steps.map((step, index) => (
          <li
            key={index}
            className={`${styles["custom-step"]} step step-primary body-m py-2`}
            data-content={index + 1}
            style={{ textAlign: "left" }}
          >
            <div
              className={`flex flex-col sm:flex-row items-center gap-1 lg:gap-4 w-full text-justify sm:text-left ${
                step.image && "flex-"
              }`}
            >
              <div className="">
                {step.image && (
                  <Image
                    src={step.image}
                    alt={step.name}
                    placeholder="empty"
                    loading="lazy"
                    width={250}
                    height={144}
                    className="rounded-md basis-1/4 flex"
                  />
                )}
              </div>
              <p className="pl-2 basis-1/2">{step.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeSteps;
