import eligInjection from "../assets/eligInjection.png";
import plasmael from "../assets/plasmael.png";

const Eligibility = () => {
  return (
    <>
      <div className="m-12 pl-28 pr-28">
        <h1 className="text-5xl font-bold">Check Eligibilty</h1>
        <p className="px-4 py-8 text-2xl font-mono font-bold">
          Who can Donate Blood?{" "}
        </p>
        <ul className="text-xl bg-white p-4">
          <li className="ms-6 py-3 list-disc">Be in good general health.</li>
          <li className="ms-6 py-3 list-disc">
            Be aged 18 years or older but less than 60.
          </li>
          <li className="ms-6 py-3 list-disc">Weight at least 45kg. </li>
          <li className="ms-6 py-3 list-disc">
            Have a hemoglobin level of at least 12.5g/dl.
          </li>
          <li className="ms-6 py-3 list-disc">
            Not have donated blood in the last 3 months.
          </li>
          <img src={eligInjection} alt="" className="" />
        </ul>
        <p className="px-4 py-8 text-2xl font-mono font-bold">
          Who can Donate Plasma?{" "}
        </p>
        <ul className="text-xl bg-white p-4">
          <li className="ms-6 py-3 list-disc">
            Be able to travel to a plasma donor center in your area.
          </li>
          <li className="ms-6 py-3 list-disc">
            Be able to spare just over an hour to donate.
          </li>
          <li className="ms-6 py-3 list-disc">Be generally fit and well.</li>
          <li className="ms-6 py-3 list-disc">
            Be between the ages of 17 and 65 to start donating plasma. If you
            are over 65, you can start donating plasma if you have donated blood
            or platelets before (this must be within the last 2 years if you are
            over 69).
          </li>
          <li className="ms-6 py-3 list-disc">
            Be over 50kg (7 stone 12 lbs.) and have enough blood to donate
            safely. Check your blood levels before donating.
          </li>
          <li className="ms-6 py-3 list-disc">
            Have suitable veins and a normal pulse (these will be checked before
            you donate).
          </li>
          <li className="ms-6 py-3 list-disc">
            Meet all donor eligibility criteria (this will be discussed with you
            before you donate).
          </li>
          <img src={plasmael} alt="" className="" />
        </ul>
      </div>
    </>
  );
};

export default Eligibility;
