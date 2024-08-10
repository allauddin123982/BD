import React from "react";
import a12 from "../assets/a12.jpg";
const AboutUs = () => {
  return (
    <div>
      <div className="max-w-4xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-6">About Us</h1>

        <p className="text-lg mb-4">
          Welcome to Blood & Plasma Link, a dedicated platform committed to
          saving lives through blood donation. Founded on the principle of
          compassion and community support, we strive to connect donors with
          those in urgent need, ensuring a robust supply of blood products for
          hospitals and healthcare facilities.
        </p>
        <img
          src={a12}
          alt="Plasma"
          className="w-full mb-10 mt-10 rounded-lg object-contain"
        />

        <p className="text-lg mb-4">
          At Blood & Plasma Link, we understand the critical importance of
          timely access to safe blood. Our mission is to bridge the gap between
          generous donors and patients facing medical emergencies, fostering a
          network where every donation counts. Through our innovative platform,
          we empower individuals to make a tangible impact on the lives of
          others, promoting health and well-being across communities.
        </p>

        <div className="space-y-4 mb-6">
          <p className="text-lg mb-2">
            What sets us apart is our unwavering commitment to excellence and
            safety. We adhere to stringent guidelines and collaborate with
            accredited blood banks to maintain the highest standards of quality
            and reliability. Whether you're a first-time donor or a regular
            contributor, Blood & Plasma Link provides a seamless experience,
            ensuring that every donation is handled with care and
            professionalism.
          </p>

          <p className="text-lg mb-2">
            Join us in our lifesaving journey. Together, we can make a profound
            difference in the lives of those in need. Explore Blood & Plasma
            Link, and discover how easy it is to become a hero in your
            community. Together, we save lives.
          </p>

          <h3 className="text-xl font-semibold">Blood & Plasma Link - Connecting hearts, saving lives.</h3>
              
    </div>
    </div>
    </div>
  );
};

export default AboutUs;
