import { collection, onSnapshot, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase_config";

import DonateBloodPic from "../../assets/DonateBloodPic.png";
const Donors = ({ bloodType, bloodLocation, send }) => {
  const [bloodDonors, setBloodDonors] = useState([]);
  const [plasmaDonors, setPlasmaDonors] = useState([]);
  const [filteredDonors, setFilteredDonors] = useState([]);

  const getBloodDonorsRef = collection(db, "Blood Donors");
  const getPlasmaDonorsRef = collection(db, "Plasma Donors");

  const getAllBloodDonors = async () => {
    let unSubscribe;
    try {
      const queryDonors = query(getBloodDonorsRef);
      unSubscribe = onSnapshot(queryDonors, (snapshot) => {
        let docs = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          const id = doc.id;
          const formattedData = {
            ...data,
            id,
            address: data.address ? data.address.toLowerCase() : null,
          };
          docs.push(formattedData);
        });
        setBloodDonors(docs);
      });
    } catch (error) {
      console.log(error.message);
    }
    return () => unSubscribe();
  };

  const getAllPlasmaDonors = async () => {
    let unSubscribe;
    try {
      const queryDonors = query(getPlasmaDonorsRef);
      unSubscribe = onSnapshot(queryDonors, (snapshot) => {
        let docs = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          const id = doc.id;
          const formattedData = {
            ...data,
            id,
            address: data.address ? data.address.toLowerCase() : null,
          };
          docs.push(formattedData);
        });
        setPlasmaDonors(docs);
      });
    } catch (error) {
      console.log(error.message);
    }
    return () => unSubscribe();
  };

  useEffect(() => {
    const getFilterDonors = () => {
      const newDonors = bloodDonors.filter(
        (item) =>
          (bloodType ? item.bloodType === bloodType : true) &&
          (bloodLocation ? item.address.includes(bloodLocation) : true)
      );
      setFilteredDonors(newDonors);
    };

    getFilterDonors();
  }, [bloodType, bloodLocation, bloodDonors]);

  useEffect(() => {
    getAllBloodDonors();
    getAllPlasmaDonors();
  }, []);

  console.log(" helooooo", { bloodDonors });
  return (
    <>
      <h2 className="m-10 text-3xl font-serif font-bold pl-4 pr-4 md:pl-12 md:pr-12 border-b border-black">
        Blood Donors
      </h2>
      <div className="my-10 w-full h-fit flex flex-wrap flex-col md:flex-row items-center justify-start md:ms-20 gap-x-14 gap-y-4 pl-4 pr-4 md:pl-12 md:pr-12">
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
          : bloodDonors.map((item) => {
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

      <h2 className="m-10 text-3xl font-serif font-bold pl-4 pt-10 pr-4 md:pl-12 md:pr-12 border-b border-black">
        Plasma Donors
      </h2>
      <div className="my-10 w-full h-fit flex flex-wrap flex-col md:flex-row items-center justify-start md:ms-20 gap-x-14 gap-y-4 pl-4 pr-4 md:pl-12 md:pr-12">
        {plasmaDonors.map((item) => {
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
                <p className="text-gray-700">Blood Group: {item.bloodType}</p>
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
