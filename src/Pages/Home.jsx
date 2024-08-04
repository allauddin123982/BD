import React, { useState } from 'react'
import Hero from '../Components/Home/Hero'
import Donors from '../Components/Home/Donors'

const Home = () => {
  const [bloodType, setBloodType] = useState("");
  const [bloodLocation, setBloodLocation] = useState("");
  const [send, setSend] = useState(false);
  return (
    <div>
      <Hero
        bloodType={bloodType}
        setBloodType={setBloodType}
        bloodLocation={bloodLocation}
        setBloodLocation={setBloodLocation}
        send={send}
        setSend={setSend}
      />
      <Donors send = { send } 
      bloodType={bloodType.toLowerCase()}
      bloodLocation={bloodLocation.toLowerCase()}
      />
    
    </div>
  )
}

export default Home
