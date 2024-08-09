import React from "react";
import a1 from '../../assets/a1.png'
import a6 from '../../assets/a6.jpg'
const DiscoverPlasma = () => {
  return (
    <div>
      <div className="max-w-5xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-4">
          Discover Plasma: An Essential Component of Blood
        </h1>

        <p className="text-lg mb-4">
          <strong>What is Plasma in Blood?</strong> Plasma is the liquid part of
          blood, making up about 55% of it. The other 45% consists of red blood
          cells, white blood cells, and platelets suspended within the plasma.
        </p>

        <img
          src={a1}
          alt="Plasma"
          className="w-full h-96 mb-4 rounded-lg object-contain"
        />

        <p className="text-lg mb-4">
          Plasma is composed of approximately 92% water. The remaining 8%
          includes essential proteins such as albumin, gamma globulin, and
          anti-hemophilic factor, along with 1% minerals, sugars, fats,
          hormones, and vitamins.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Plasma performs four crucial functions in the body:
        </h2>
        <ol className="list-decimal list-inside mb-4 space-y-2">
          <li>It helps regulate blood pressure and volume.</li>
          <li>
            It provides vital proteins needed for blood clotting and immune
            responses.
          </li>
          <li>
            It delivers electrolytes like sodium and potassium to muscles.
          </li>
          <li>
            It maintains the body’s pH balance, supporting overall cell
            function.
          </li>
        </ol>
        <img
          src={a6}
          alt="Plasma"
          className="w-full h-96 mb-10 rounded-lg object-contain"
        />
        <h2 className="text-2xl font-semibold mb-4">
          How is Blood Plasma Used?
        </h2>
        <p className="text-lg mb-4">
          Plasma is frequently administered to patients suffering from trauma,
          burns, shock, severe liver disease, or clotting factor deficiencies.
          It aids in increasing blood volume, preventing shock, and assisting in
          clotting. Additionally, plasma is utilized by pharmaceutical companies
          to create treatments for immune deficiencies and bleeding disorders.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          What is Plasma Donation?
        </h2>
        <p className="text-lg mb-4">
          During a plasma-only donation, the liquid portion of the donor’s blood
          is separated from the cells. Blood is drawn from one arm and processed
          through a machine that collects the plasma. The donor’s red blood
          cells and platelets, along with some saline, are returned to them.
          This process is safe and only takes a bit longer than donating whole
          blood.
        </p>
        <p className="text-lg mb-4">
          Donated plasma is frozen within 24 hours to preserve its clotting
          factors and can be stored for up to one year. It is thawed and used
          for patient transfusions when needed. Plasma donations to
          organizations like the Red Cross are often used directly for hospital
          transfusions rather than for pharmaceutical purposes.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          Who Should Donate Plasma?
        </h2>
        <p className="text-lg mb-4">
          The Red Cross encourages individuals with type AB blood to consider
          donating plasma. Type AB plasma is universal and can be given to
          patients of any blood type, allowing for immediate transfusions
          without compatibility testing. This quick response can be critical in
          emergency situations.
        </p>
        <p className="text-lg mb-4">
          Type AB plasma donations, referred to as “AB Elite” by the Red Cross,
          can be made every 28 days, up to 13 times a year. The donation process
          takes about one hour and 15 minutes, slightly longer than whole blood
          donation. Note that type O+ blood can only receive O+ or O- plasma,
          and only type O+ and O- plasma can be given to O+ recipients.
        </p>
      </div>
    </div>
  );
};

export default DiscoverPlasma;
