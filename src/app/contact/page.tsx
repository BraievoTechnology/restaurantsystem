"use client";

import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTripadvisor, // Use FaTwitter instead of FaXTwitter
} from "react-icons/fa";
import Footer from "../components/layout/Footer";
import { FaXTwitter } from "react-icons/fa6";
import MainButton from "../components/maincomponents/Button";
import { SectionTitle } from "../components/maincomponents/SectionTitle";
import Image from "next/image";

const ContactInfoItem = ({
  icon,
  lines,
}: {
  icon: React.ReactNode;
  lines: string[];
}) => (
  <div className="flex items-start gap-4">
    <div className="mt-1">{icon}</div>
    <div>
      {lines.map((line, idx) => (
        <p key={idx} className="text-sm leading-snug text-gray-300">
          {line}
        </p>
      ))}
    </div>
  </div>
);

const FormField = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  isTextArea = false,
  rows = 4,
}: any) => (
  <div className="flex flex-col">
    <label htmlFor={name} className="mb-1 text-sm font-medium text-gray-400">
      {label}
    </label>
    {isTextArea ? (
      <textarea
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className="p-3 text-gray-200 border border-gray-600 rounded resize-none bg-neutral-800"
      />
    ) : (
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="p-3 text-gray-200 border border-gray-600 rounded bg-neutral-800"
      />
    )}
  </div>
);

const SocialLink = ({
  href,
  ariaLabel,
  children,
}: {
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    aria-label={ariaLabel}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    comments: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form data submitted:", formData);
    setSubmitMessage("Your message has been sent successfully!");
    setFormData({ fullName: "", email: "", subject: "", comments: "" });
    setIsSubmitting(false);
    setTimeout(() => setSubmitMessage(null), 5000);
  };

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
          <div className="absolute inset-0 " />
        </div>
        <div data-aos="fade-down">
          <div className="relative z-10 text-center">
            <h1 className="text-[80px] font-normal drop-shadow-lg font-sans tracking-[20px]">
              Contact Us
            </h1>
          </div>
        </div>
      </section>

      <section className="relative">
        {/* Contact Content */}
        <div className="min-h-screen p-8 font-sans text-gray-300 bg-brand-dark md:p-16">
          <div className="container max-w-screen-xl mx-auto">
            <div className="grid gap-12 md:grid-cols-12 md:gap-16">
              {/* Left Column */}
              <div className="space-y-10 md:col-span-7 md:space-y-12">
                {/* Header */}
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-0.5 bg-[#CA9C5E] mr-3 ml-1"></div>
                    <p
                      className="text-[#CA9C5E] text-xs font-medium tracking-widest uppercase"
                      style={{ fontFamily: "Adamina, serif" }}
                    >
                      KEEP CLOSE
                    </p>
                  </div>

                  <h1
                    className="text-4xl sm:text-5xl font-bold text-[#CA9C5E] mt-2 mb-4"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Get In Touch
                  </h1>
                  <div className="w-24 h-0.5 bg-brand-gold mb-6"></div>
                  <p
                    className="text-sm leading-relaxed text-gray-400 sm:text-base"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    Savannah Restaurant has been a local favorite for more than
                    a decade, situated near the coastal lines of the western
                    province of Sri Lanka. Savannah is known for its authentic
                    Sri Lankan food, exotic Indian and Chinese cuisine, and a
                    blend of western and continental dishes.
                  </p>
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 mt-8 text-sm text-gray-400 sm:grid-cols-2 gap-x-8 gap-y-6">
                  {/* Location */}
                  <div className="flex items-start space-x-3">
                    <FaMapMarkerAlt className="w-8 h-8 text-[#CA9C5E] mt-1" />
                    <div>
                      <p>129A Main Street, 11</p>
                      <p>Colombo, Sri Lanka</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-3">
                    <FaPhoneAlt className="w-8 h-8 text-[#CA9C5E] mt-1" />
                    <div>
                      <p>(+94) 71 243 2345</p>
                      <p>(+94) 71 243 7463</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-3">
                    <FaEnvelope className="w-8 h-8 text-[#CA9C5E] mt-1" />
                    <div>
                      <p>info@email.com</p>
                      <p>booking@resev.com</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start space-x-3">
                    <FaClock className="w-8 h-8 text-[#CA9C5E] mt-1" />
                    <div>
                      <p>Mon - Fri : 8AM - 10PM</p>
                      <p>Sat : 8AM - 4PM</p>
                    </div>
                  </div>
                </div>

                {/* Location Map */}
                <div className="pt-6">
                  <h2
                    className="text-3xl text-[#CA9C5E] mb-5"
                    style={{ fontFamily: "Adamina, serif" }}
                  >
                    Located In
                  </h2>
                  <div className="border-[4px] border-[#CA9C5E] p-2 shadow-lg">
                    <img
                      src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg"
                      alt="Location Map"
                      className="object-cover w-full h-auto"
                      style={{ maxHeight: "400px" }}
                    />
                  </div>

                  <hr className="my-10 border-t border-gray-700" />

                  {/* Social Media Section */}
                  <div>
                    <h2
                      className="text-3xl text-[#CA9C5E] mb-6"
                      style={{ fontFamily: "Adamina, serif" }}
                    >
                      Follow Us
                    </h2>
                    <div className="flex space-x-5">
                      <SocialLink href="#" ariaLabel="Twitter">
                        <FaXTwitter className="w-5 h-5 text-gray-200 hover:text-[#CA9C5E] transition duration-300 ease-in-out transform hover:scale-110" />
                      </SocialLink>
                      <SocialLink href="#" ariaLabel="Facebook">
                        <FaFacebookF className="w-5 h-5 text-gray-200 hover:text-[#CA9C5E] transition duration-300 ease-in-out transform hover:scale-110" />
                      </SocialLink>
                      <SocialLink href="#" ariaLabel="Instagram">
                        <FaInstagram className="w-5 h-5 text-gray-200 hover:text-[#CA9C5E] transition duration-300 ease-in-out transform hover:scale-110" />
                      </SocialLink>
                      <SocialLink href="#" ariaLabel="TripAdvisor">
                        <FaTripadvisor className="w-5 h-5 text-gray-200 hover:text-[#CA9C5E] transition duration-300 ease-in-out transform hover:scale-110" />
                      </SocialLink>
                    </div>
                  </div>

                  <hr className="mt-10 border-t border-gray-700" />
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div className="md:col-span-5 md:pt-1">
                <h2
                  className="text-4xl font-bold text-[#CA9C5E] mb-1"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Contact Us
                </h2>
                <p
                  className="mb-8 text-sm text-gray-400"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Let us know how we can contact you
                </p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <FormField
                      label="Full Name"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="John Doe"
                    />
                    <FormField
                      label="E-Mail"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                    />
                  </div>
                  <FormField
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Regarding..."
                  />
                  <FormField
                    label="Comment / Questions"
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}
                    isTextArea
                    placeholder="Your message here..."
                    rows={6}
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-neutral-800 text-gray-200 py-3 px-10 border border-[#CA9C5E] hover:bg-gray-800 hover:text-brand-dark transition-colors duration-300 ease-in-out font-medium text-sm tracking-wider"
                  >
                    {isSubmitting ? "Sending..." : "Submit"}
                  </button>
                  {submitMessage && (
                    <p className="pt-2 text-sm text-green-500">
                      {submitMessage}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Leaves Image */}
        <div className="hidden lg:block absolute top-140 right-[00px] z-10 pointer-events-none">
          <Image
            src="/images/contactusBgImg.png"
            alt="Decorative leaves"
            width={600}
            height={600}
            className="opacity-100"
          />
        </div>
      </section>

      <section className="relative h-[50vh] flex items-center justify-center text-white px-4 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/Images/coverPage.png"
            alt="Background"
            className="object-cover w-full h-full"
          />
          {/* Single Dark Overlay */}
          <div className="absolute inset-0 "></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center space-y-5 text-center">
          {/* Book Now Section */}
          <div className="flex flex-col items-center space-y-2">
            <div className="flex items-center space-x-3">
              <SectionTitle
                className="-mb-40"
                title="book now"
                data-id="book-now-section"
              />
            </div>
          </div>

          {/* Main Heading */}
          <h1
            className="text-6xl leading-tight text-white sm:text-2xl md:text-6xl lg:text-7xl font-regular"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Reserve A Table Now
          </h1>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
