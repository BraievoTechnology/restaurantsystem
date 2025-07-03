"use client";
import React from "react";
import Image from "next/image";
import { SectionTitle } from "../components/maincomponents/SectionTitle";
import ChefCard from "../components/maincomponents/ChefCard";
import Footer from "../components/layout/Footer";
import { FaUtensils, FaBoxOpen, FaTruck } from "react-icons/fa";
import MainButton from "../components/maincomponents/Button";
import ParmLeaf from "../components/maincomponents/ParmLeaf";
import GreenPalm from "../components/maincomponents/GreenPalm";
import FoodPlate from "../components/maincomponents/FoodPlate";

interface Step {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const stepsData: Step[] = [
  {
    title: "Prepare",
    description: "Professionals with diverse culinary experience.",
    icon: <FaUtensils className="w-full h-full" />,
  },
  {
    title: "Packing",
    description:
      "Carefully packaging products to keep them fresh and contents safe.",
    icon: <FaBoxOpen className="w-full h-full" />,
  },
  {
    title: "Deliver",
    description:
      "Timely delivery to ensure food arrives fresh directly to customers.",
    icon: <FaTruck className="w-full h-full" />,
  },
];

interface StepItemDisplayProps {
  step: Step;
}

const StepItemDisplay: React.FC<StepItemDisplayProps> = ({ step }) => (
  <div className="flex flex-col items-center w-full max-w-xs px-2 py-6 text-center md:w-auto md:max-w-none md:py-0">
    <div className="w-32 h-32 md:w-36 lg:w-40 bgmd:h-36 lg:h-40 rounded-full border-[5px] border-[#CA9C5E] bg-[#0B1517] flex items-center justify-center mb-6 p-3 shadow-lg">
      <div className="w-16 h-16 md:w-20 md:h-20 text-[#CA9C5E]">
        {step.icon}
      </div>
    </div>
    <h3 className="mb-3 font-serif text-2xl text-gray-100 md:text-3xl">
      {step.title}
    </h3>
    <p className="text-sm leading-relaxed text-gray-400 md:text-base">
      {step.description}
    </p>
  </div>
);

const DashedLineConnector: React.FC = () => (
  <div className="items-center justify-center flex-shrink-0 hidden w-16 mx-4 md:flex lg:mx-6 xl:mx-8 lg:w-20 xl:w-24">
    <div className="w-[300px] border-t-4 border-dashed border-gray-600 opacity-65 -mt-30" />
  </div>
);

const ProcessSteps: React.FC = () => (
  <div className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto md:flex-row">
    {stepsData.map((step, index) => (
      <React.Fragment key={step.title}>
        <StepItemDisplay step={step} />
        {index < stepsData.length - 1 && <DashedLineConnector />}
      </React.Fragment>
    ))}
  </div>
);

const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center text-white px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/Images/coverPage.png"
            alt="Background"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0" />
        </div>
        <div data-aos="fade-down">
          <div className="relative z-10 text-center">
            <h1 className="text-[80px] font-normal drop-shadow-lg font-sans tracking-[20px]">
              {" "}
              About Us
            </h1>
          </div>
        </div>
      </section>

      {/* About Section Left Image */}
      <section className="bg-[#0B1517] relative font-sans text-brand-light py-20 sm:py-28">
        <div data-aos="fade-right">
          <div className="relative">
            <FoodPlate
              position="left"
              rotate={0}
              className="top-[-270px] hidden md:block"
            />
          </div>
        </div>
        <div className="container px-4 mx-auto">
          <SectionTitle title="A Taste Of Our Space" />
          <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12">
            <div className="text-center lg:text-left">
              <p className="mb-6 text-base leading-relaxed text-gray-300 md:text-lg">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC. Contrary to popular belief, Lorem Ipsum is not simply
                random text. It has roots in a piece of cLatin literature from
                45 BC. Contrary to popular belief, Lorem Ipsum is not simply
                random text. It has roots in a piece of classical Latin
                literature from 45 BC. Contrary to popular belief, Lorem Ipsum
                is not simply random text. It has roots in a piece of classical
                Latin literature from 45 BC.Latin literature from 45 BC.
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC. Contrary to popular belief, Lorem Ipsum is not simply
                random text. It has roots in a piece of classical Latin
                literature from 45 BC.lassical Latin literature from 45 BC.
              </p>
              <p className="text-base leading-relaxed text-gray-300 md:text-lg">
                It was popularised in the 1960s with the release of Letraset
                shLatin literature from 45 BC. Contrary to popular belief, Lorem
                Ipsum is not simply random text. It has roots in a piece of
                classical Latin literature from 45 BC. Contrary to popular
                belief
              </p>
            </div>
            <div className="flex justify-center px-4 mt-8 lg:justify-end lg:mt-0">
              <div className="relative w-full max-w-lg sm:max-w-xl">
                <div className="absolute top-6 -right-6 w-full h-full border-[4px] border-[#CA9C5E] rounded"></div>
                <div className="relative z-10 p-2 rounded bg-brand-blue">
                  <img
                    src="https://media.istockphoto.com/id/1428412216/photo/a-male-chef-pouring-sauce-on-meal.jpg?s=612x612&w=0&k=20&c=8U3mrgWsuB7pB8axtGj89MXRkHDKodEli9F6wKgPT4A="
                    alt="Restaurant background"
                    className="object-cover w-full h-auto rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section Right Image */}
      <section className="bg-[#0B1517] font-sans text-brand-light">
        <div className="container px-4 mx-auto">
          <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12">
            <div className="flex justify-center px-4 mt-8 lg:justify-start lg:mt-0">
              <div className="relative w-full max-w-[600px] sm:max-w-[800px]">
                <div className="relative z-10 p-2 bg-brand-blue">
                  <img
                    src="/Images/cook.png"
                    alt="cooking image"
                    className="w-[700px] h-auto object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <p className="mb-6 text-base leading-relaxed text-gray-300 md:text-lg">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC. Contrary to popular belief, Lorem Ipsum is not simply
                random text. It has roots in a piece of cLatin literature from
                45 BC. Contrary to popular belief, Lorem Ipsum is not simply
                random text. It has roots in a piece of classical Latin
                literature from 45 BC. Contrary to popular belief, Lorem Ipsum
                is not simply random text. It has roots in a piece of classical
                Latin literature from 45 BC.Latin literature from 45 BC.
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC. Contrary to popular belief, Lorem Ipsum is not simply
                random text. It has roots in a piece of classical Latin
                literature from 45 BC.lassical Latin literature from 45 BC.
              </p>
              <p className="text-base leading-relaxed text-gray-300 md:text-lg">
                It was popularised in the 1960s with the release of Letraset
                shLatin literature from 45 BC. Contrary to popular belief, Lorem
                Ipsum is not simply random text. It has roots in a piece of
                classical Latin literature from 45 BC. Contrary to popular
                belief
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Steps */}
      <section className="relative py-20">
        <div data-aos="fade-left">
          <div className="relative">
            <GreenPalm
              position="right"
              rotate={200}
              className="top-[-180px] hidden md:block"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center px-4">
          <SectionTitle title="Our Process " />
          <div>
            <ProcessSteps />
          </div>
        </div>
      </section>

      {/* Chef Card Section */}

      <section className="bg-[#0B1517] font-sans text-brand-light py-20 sm:py-28">
        <div className="relative hidden pointer-events-none lg:block ">
          <div data-aos="fade-right">
            <ParmLeaf position="left" rotate={160} className="top-[-350px]" />
          </div>
        </div>
        <div className="container px-4 mx-auto">
          {/* Side Image */}

          <SectionTitle title="Our Chef" />
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            <ChefCard
              name="Chef Suranga"
              imageUrl="https://snibbs.co/cdn/shop/articles/Pros_and_Cons_of_Being_a_Chef.jpg?v=1688650492"
              socials={{
                facebook: "https://facebook.com/chef-alex",
                instagram: "https://instagram.com/chef-alex",
                linkedin: "https://linkedin.com/in/chef-alex",
              }}
            />
            <ChefCard
              name="Chef Namal"
              imageUrl="https://snibbs.co/cdn/shop/articles/Pros_and_Cons_of_Being_a_Chef.jpg?v=1688650492"
              socials={{
                facebook: "https://facebook.com/chef-alex",
                instagram: "https://instagram.com/chef-alex",
                linkedin: "https://linkedin.com/in/chef-alex",
              }}
            />
            <ChefCard
              name="Chef Kaveeja"
              imageUrl="https://snibbs.co/cdn/shop/articles/Pros_and_Cons_of_Being_a_Chef.jpg?v=1688650492"
              socials={{
                facebook: "https://facebook.com/chef-alex",
                instagram: "https://instagram.com/chef-alex",
                linkedin: "https://linkedin.com/in/chef-alex",
              }}
            />
            <ChefCard
              name="Chef Anura"
              imageUrl="https://snibbs.co/cdn/shop/articles/Pros_and_Cons_of_Being_a_Chef.jpg?v=1688650492"
              socials={{
                facebook: "https://facebook.com/chef-alex",
                instagram: "https://instagram.com/chef-alex",
                linkedin: "https://linkedin.com/in/chef-alex",
              }}
            />
          </div>
        </div>
      </section>

      {/* Contact Call to Action */}
      <section className="relative bg-[#0B1517] mb-20 sm:py-28">
        {/* CTA Box */}
        <div className="relative z-20 w-[90vw] mx-auto text-center bg-[#0B1517] border-[4px] sm:border-[8px] md:border-[10px] border-[#B08D57] p-10 sm:p-16 md:p-20 lg:p-24 shadow-2xl">
          {/* Decorative Leaves */}
          {/* <div className="absolute z-10 hidden pointer-events-none lg:block -top-45 -right-20"> */}

          <div className="absolute z-10 hidden pointer-events-none lg:block -top-30 -right-20">
            <Image
              src="/Images/pngtree4.png"
              alt="Decorative leaves"
              width={430}
              height={430}
              className="opacity-100"
            />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-[#E0D6C8] mb-2 sm:mb-3 md:mb-4 leading-snug sm:leading-normal">
            Let's Make Your Next Dining Experience Unforgettable
          </h2>

          <div
            className="absolute z-10 hidden pointer-events-none lg:block top-25 -left-20"
            // style={{
            //   transform: 'rotate(135deg) translateX(-50px) translateY(20px)',
            // }}
          >
            <Image
              src="/Images/food.png"
              alt="Decorative leaves"
              width={480}
              height={480}
              className="opacity-100"
            />
          </div>

          <MainButton
            text="CONTACT US"
            ariaLabel="Contact Us"
            href="/contact"
          />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
