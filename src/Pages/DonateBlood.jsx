import React, { useState } from "react";
import DonateBloodPic from "../assets/DonateBloodPic.png";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { db, storage } from "../firebase_config";
const DonateBlood = () => {
  const [dType, setDType] = useState("");
  const [typeValue, setTypeValue] = useState(false);
  const addBloodDonarRef = collection(db, "Blood Donors");
  const addPlasmaDonarRef = collection(db, "Plasma Donors");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const donor = Object.fromEntries(formData.entries());

    try {
      if(dType === "blood"){

        await addDoc(addBloodDonarRef, donor);
      
      }
      else{

        await addDoc(addPlasmaDonarRef, donor)
      }
      console.log("Donor added successfully");
    } catch (error) {
      console.error("Error adding donor:", error);
    }
  };

  console.log({dType})
  return (
    <>
      <div className="flex justify-center items-center gap-8 m-14">
        <div className="img">
          <img src={DonateBloodPic} alt="" />
        </div>
        <div className="Form">
          <h1 className="text-5xl font-bold text-orange-500">Register Now</h1>
          <form className="max-w-md mx-auto mt-5" onSubmit={handleSubmit}>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="Name"
                id="floating_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-500 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="number"
                name="age"
                id="floating_age"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-500 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_age"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Age
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-500 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="tel"
                pattern="123"
                name="phone"
                id="floating_phone"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-ororange-500 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-ororange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone number
              </label>
            </div>

           <p className="text-gray-500">
            What are you donating ?
            </p>
            <div className="mt-2 w-full mb-5 flex items-center gap-x-2 text-sm text-gray-500">
              Blood
              <input
                type="radio"
                name="blood"
                className=""
                
                value="blood"
                checked={dType === "blood"}
                onChange={(e) => {
                  setDType(e.target.value), setTypeValue(true);
                }}
              />
              Plasma
              <input
                type="radio"
                name="plasma"
                className=""
                
                value="plasma"
                checked={dType === "plasma"}
                onChange={(e) => {
                  setDType(e.target.value), setTypeValue(true);
                }}
               
              />
            </div>

            {typeValue ? (
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="bloodType"
                  id="floating_blood_type"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-ororange-500 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_blood_type"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Blood type
                </label>
              </div>
            ) : null}

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="address"
                id="floating_address"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-500 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_address"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Address
              </label>
            </div>

            <button
              type="submit"
              className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default DonateBlood;
