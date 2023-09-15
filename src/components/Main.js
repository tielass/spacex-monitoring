import React, { useState, useEffect } from 'react'
import Rocket from './Rocket'
import Core from './Core'
import Capsule from './Capsule'
import Landpad from './Landpad'
import SearchBar from './Search'
import Filters from './Filters'
import '../styles/main.css'

function Body() {

  const [launchesData, setLanchesData] = useState([])
  const [rocketData, setRocketData] = useState([])
  const [coreData, setCoreData] = useState([])
  const [capsuleData, setCapsuleData] = useState([])
  const [landpadData, setLandpadData] = useState([])
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  useEffect(() => {
    fetch('https://api.spacexdata.com/v5/launches')
      .then(response => response.json())
      .then(data => setLanchesData(data))
      .catch((error) => console.error('Error fetching Launch data:', error));

      fetch('https://api.spacexdata.com/v4/rockets')
      .then(response => response.json())
      .then(data => setRocketData(data))
      .catch((error) => console.error('Error fetching Rocket data:', error));

      fetch('https://api.spacexdata.com/v4/cores')
      .then(response => response.json())
      .then(data => setCoreData(data))
      .catch((error) => console.error('Error fetching Core data:', error));

      fetch('https://api.spacexdata.com/v4/capsules')
      .then(response => response.json())
      .then(data => setCapsuleData(data))
      .catch((error) => console.error('Error fetching Core data:', error));

      fetch('https://api.spacexdata.com/v4/landpads')
      .then(response => response.json())
      .then(data => setLandpadData(data))
      .catch((error) => console.error('Error fetching Core data:', error));
   },[] );

   const handleSearch = (query) => {
    setSearchQuery(query);
    setSelectedFilter('All');
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    setSearchQuery('');
  };


  const filteredLaunches = launchesData.filter((launch) => {
    const launchNameMatch = launch.name.toLowerCase().includes(searchQuery.toLowerCase());
    let additionalCriteriaMatch = true;
    if (selectedFilter === 'All') {
      return launchNameMatch && additionalCriteriaMatch;
    } else if (selectedFilter === 'Successful Launches') {
      return launchNameMatch && launch.success === true;
    } else if (selectedFilter === 'Future Launches') {
      return launchNameMatch && launch.upcoming === true;
    } else if (selectedFilter === 'Active Rocket') {
      const rocket = rocketData.find((rocket) => rocket.id === launch.rocket);
      return launchNameMatch && rocket && rocket.active === true;
    }else if (selectedFilter === 'Rocket Name') {
      const rocket = rocketData.find((rocket) => rocket.id === launch.rocket);
      const rocketNameMatch = rocket && rocket.name.toLowerCase().includes(searchQuery.toLowerCase());
      additionalCriteriaMatch = rocketNameMatch;
    }

    return launchNameMatch;
  });

  return (
    <div>

      <Filters selectedFilter={selectedFilter} onFilterChange={handleFilterChange} />

      <SearchBar onSearch={handleSearch}/>

      <div className='main'>
        {filteredLaunches.map((launch, index) => (
          <div className='launch-container' key={index}>
            <h3 className='launch-name'>{launch.name.toUpperCase()}</h3>
              <div>
                <p>Launch Date - {launch.date_local}</p>
                <p>{launch.details}</p>
              </div>
            <div className="launch-details-container">
              <div >
                <img className="launch-img" src={launch.links.flickr.original[1]} alt="" />
              </div>
            </div>
            <div className="bottom-row">
              {rocketData.map((rocket) => {
                if(rocket.id === launch.rocket) {
                  return (<Rocket key={rocket.id} rocketData={rocket} />)
                  }
                  return null;
                })}

              {coreData.map((core) => {
                if(core.id === launch.cores[0].core) {
                  return (<Core key={core.id} coreData={core} />)
                  }
                  return null;
              })}

              {capsuleData.map((capsule) => {
                if(capsule.id === launch.capsules[0]) {
                  return (<Capsule key={capsule.id} capsuleData={capsule} />)
                }
                return null;
              })}

              {landpadData.map((landpad) => {
                if(landpad.id === launch.cores[0].landpad) {
                  return (<Landpad key={landpad.id} landpadData={landpad} />)
                }
                return null;
              })}
            </div>
          </div>
         ))}
      </div>
    </div>
  )
}

export default Body
