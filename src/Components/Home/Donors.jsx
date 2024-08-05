import { collection, onSnapshot, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase_config";

import DonateBloodPic from "../../assets/DonateBloodPic.png";
const Donors = ({ bloodType, bloodLocation, send }) => {
  const [donors, setDonors] = useState([]);
  const [filteredDonors, setFilteredDonors] = useState([]);

  const getDonorsRef = collection(db, "Blood Donors");

  const getAllDonors = async () => {
    let unSubscribe;
    try {
      const queryDonors = query(getDonorsRef);
      unSubscribe = onSnapshot(queryDonors, (snapshot) => {
        let docs = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          const id = doc.id;
          const formattedData = {
            ...data,
            id,
            address: data.address ? data.address.toLowerCase() : null, // Ensure address is converted to lowercase if it exists
          };
          docs.push(formattedData);
        });
        setDonors(docs);
      });
    } catch (error) {
      console.log(error.message);
    }
    return () => unSubscribe();
  };

  useEffect(() => {
    const getFilterDonors = () => {
      const newDonors = donors.filter(
        (item) =>
          (bloodType ? item.bloodType === bloodType : true) &&
          (bloodLocation ? item.address.includes(bloodLocation) : true)
      );
      setFilteredDonors(newDonors);
    };

    getFilterDonors();
  }, [bloodType, bloodLocation, donors]);

  useEffect(() => {
    getAllDonors();
  }, []);

  console.log(" helooooo", { donors });
  return (
    <>
      <div className="my-20 w-full h-fit flex flex-wrap flex-col md:flex-row items-center justify-center gap-x-14 gap-y-4 pl-4 pr-4 md:pl-12 md:pr-12">
        {send
          ? filteredDonors.map((item) => {
              return (
                <div
                  key={item.id}
                  className="w-60 md:w-[300px] md:h-52 bg-gray-200 rounded-lg shadow flex flex-col md:flex-row items-center  gap-2 p-2"
                >
                  <div className="desc p-2 ">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                      Name: {item.Name}
                    </h5>

                    <p className="text-gray-700">Age: {item.age}</p>
                    <p className="text-gray-700">Email: {item.email} </p>
                    <p className="text-gray-700">
                      Blood Group: {item.bloodType}
                    </p>
                    <p className="text-gray-700">Phone # {item.phone}</p>
                    <p className="text-gray-700">
                      Address: {item.address.substring(0, 24)}
                    </p>
                  </div>
                </div>
              );
            })
          : donors.map((item) => {
              return (
                <div
                  key={item.id}
                  className="w-60 md:w-[300px] md:h-52 bg-gray-200 rounded-lg shadow flex flex-col md:flex-row items-center gap-2 p-2"
                >
                  <div className="desc p-2 ">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                        Name: {item.Name}
                      </h5>
                    </a>
                    <p className="text-gray-700">Age: {item.age}</p>
                    <p className="text-gray-700">Email: {item.email} </p>
                    <p className="text-gray-700">
                      Blood Group: {item.bloodType}
                    </p>
                    <p className="text-gray-700">Phone # {item.phone}</p>
                    <p className="text-gray-700">
                      Address: {item.address.substring(0, 24)}
                    </p>
                  </div>
                </div>
              );
            })}
      </div>
    </>
  );
};

export default Donors;
