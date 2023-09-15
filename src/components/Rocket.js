import React from 'react';
import '../styles/rocket.css'

function Rocket({ rocketData }) {
  return (
    <div key={rocketData.id}>
      <h4>Rocket - {rocketData.name.toUpperCase()}</h4>
      <div className='rocket-details-container'>
        <p className='rocket-desc'>{rocketData.description}</p>
      </div>
        <p>Height: {rocketData.height.meters}m, Diameter: {rocketData.diameter.meters}m</p>
        <p>Engine - {rocketData.engines.type} - Propellent - {rocketData.engines.propellant_1}</p>
    </div>
  );
}

export default Rocket;
