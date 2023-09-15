import React from 'react'

function Capsule({capsuleData}) {

  return (
    <div>
      <h4>Capsule - {capsuleData.serial}</h4>
      <p>Status - {capsuleData.status}</p>
      <p>Water Landings - {capsuleData.water_landing ? 'Yes' : 'No'}</p>
    </div>
  )
}

export default Capsule
