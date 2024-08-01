import eligInjection from '../assets/eligInjection.png'

const Eligibility = () => {
  return (
    <>
      <div className="m-12 pl-28 pr-28">
        <h1 className="text-5xl font-bold">Check Eligibilty</h1>
        <p className="px-4 py-8 text-2xl font-mono font-bold">Who can Donate Blood? </p>
        <ul className="text-xl bg-white p-4">
          <li className="ms-6 py-3 list-disc">Be in good general health.</li>
          <li className="ms-6 py-3 list-disc">Be aged 18 years or older but less than 60.</li>
          <li className="ms-6 py-3 list-disc">Weight at least 45kg. </li>
          <li className="ms-6 py-3 list-disc">Have a hemoglobin level of at least 12.5g/dl.</li>
          <li className="ms-6 py-3 list-disc">Not have donated blood in the last 3 months.</li>
        <img src={eligInjection} alt="" className=""/>
        </ul>
      </div>
    </>
  );
};

export default Eligibility;
