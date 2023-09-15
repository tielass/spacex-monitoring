import React from 'react';

function Core({coreData}) {

  return (
    <div>
      <h4>Core - {coreData.serial}</h4>
      <p>Status - {coreData.status}</p>
      <p>Reuse Count - {coreData.reuse_count}</p>
      <p>Last update - {coreData.last_update}</p>
    </div>
  )
}

export default Core
