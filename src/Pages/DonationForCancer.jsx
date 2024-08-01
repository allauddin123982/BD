import React from "react";
import donationDrive from "../assets/donationDrive.png";
import Hands from "../assets/Hands.jpeg";

const DonationForCancer = () => {
  return (
    <>
      <div className="max-w-[400px] md:max-w-[770px] lg:max-w-[1280px] mx-auto">
        <div className="flex justify-center ">
          <img src={donationDrive} alt="" />
        </div>
        <div className="">
          <p className="text-xl font-bold text-orange-500">
            Dear Community Members,
          </p>
          <p className="text-md font-semibold py-2">
            Every year, countless lives are saved because of the generosity of
            donors like you. Whether it’s a patient undergoing surgery, someone
            battling cancer, or a victim of a traumatic accident, your donation
            could be the lifeline they desperately need.
          </p>
          <div className="md:flex items-center">
            <div className="w-[400px] md:w-[700px] ">
              <p className="text-xl font-bold text-orange-500">
                Event Details:
              </p>

              <ul className="text-sm pb-4">
                <li className="ms-4 list-disc">Date: 7th September 2024</li>
                <li className="ms-4 list-disc">Contact: +92-3325552018</li>
                <li className="ms-4 list-disc">Location: TMUC</li>
                <li className="ms-4 list-disc">Time: 8am to 5pm</li>
              </ul>

              <p className="text-xl font-bold text-orange-500">Why Donate?</p>

              <ul className="text-sm pb-4">
                <li className="ms-4 list-decimal ">
                  Save Lives: Your donation can save up to three lives.
                </li>
                <li className="ms-4 list-decimal ">
                  Community Impact: By donating locally, you directly help those
                  in your community.
                </li>
                <li className="ms-4 list-decimal ">
                  Health Benefits: Regular blood donation can reduce the risk of
                  heart disease and certain cancers.
                </li>
              </ul>

              <p className="text-xl font-bold text-orange-500">
                What to Expect:
              </p>

              <ul className="text-sm">
                <li className="ms-4 list-disc ">
                  A welcoming and supportive environment.
                </li>
                <li className="ms-4 list-disc ">
                  Qualified medical professionals ensuring your safety.
                </li>
                <li className="ms-4 list-disc ">
                  Refreshments to replenish your energy after donation.
                </li>
              </ul>

            </div>

            {/* Hands picture  */}
            <div className="">
              <img src={Hands} alt="" className="lg:block hidden" />
            </div>
          </div>
          
          <p className="text-md font-semibold py-4">
                Spread the Word: Encourage your friends, family, and colleagues
                to join us. Together, we can amplify our impact and help even
                more individuals in need. Registration: To ensure a smooth
                experience, we encourage you to register in advance. However,
                walk-ins are always welcome. Your decision to donate blood can
                truly change someone’s life. Join us in this noble cause and
                let’s make a meaningful difference together.
              </p>


              <p className="text-xl font-bold text-orange-500">Thank You for your generoisty and support.</p>
        </div>
      </div>
    </>
  );
};

export default DonationForCancer;
