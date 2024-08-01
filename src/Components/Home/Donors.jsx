import { collection, onSnapshot, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase_config";

import DonateBloodPic from "../../assets/DonateBloodPic.png";
const Donors = () => {
  const [donors, setDonors] = useState([]);
  const getDonorsRef = collection(db, "Blood Donors");

  const getAllDonors = async () => {
    let unSubscribe;
    try {
      const queryDonors = query(getDonorsRef);

      unSubscribe = onSnapshot(queryDonors, (snapshot) => {
        //keep track of query if changes
        let docs = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          const id = doc.id;
          docs.push({ ...data, id });
        });
        setDonors(docs);
      });
    } catch (error) {
      console.log(error.message);
    }
    return () => unSubscribe();
  };
  useEffect(() => {
    getAllDonors();
  }, []);
  console.log(" helooooo", { donors });
  return (
    <>
      <div className="border border-black mt-20 mb-20 w-full h-fit md:flex gap-4 pl-4 pr-4 md:pl-32 md:pr-32 ">
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow flex flex-col">
          <img
            class="rounded-full w-56 h-56 object-cover"
            src={DonateBloodPic}
            alt=""
          />

          <div class="p-5 flex flex-col items-center justify-center">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                Allauddin
              </h5>
            </a>
            <p class="font-normal text-gray-700">"Av. dos Andradas, 3000</p>
            <p class="font-normal text-gray-700">22</p>
            <p class="font-normal text-gray-700">B+</p>
            <p class="font-normal text-gray-700">email</p>
            <p class="font-normal text-gray-700">passwrds</p>
          </div>
        </div>
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow flex flex-col items-center justify-center">
          <a href="#" className="">
            <img class="rounded-t-lg w-56" src={DonateBloodPic} alt="" />
          </a>
          <div class="p-5 flex flex-col items-center justify-center">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Donors;
