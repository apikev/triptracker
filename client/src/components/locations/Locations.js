import { useState, useEffect } from 'react';
import axios from 'axios';
import LocationList from './LocationList';
import LocationForm from './LocationsForm';

// this is where all the CRUD are in the front end 
const Locations = () => {
  // where we are storing all the subs in the front end
  const [locations, setLocations] = useState([])

  // this will run before we display to the page
  useEffect( () => {
    // http verb and url 
    // subs index action
    // res -> all of your subs from your db
    axios.get('/api/locations')
      .then( res => setLocations(res.data) ) // storing all the subs from the db to the component state
      .catch( err => console.log(err) )
  }, [])

  // add function with a post request and http
  const addLocation = (location) => {
    // create it in the back via the routes and controller
    axios.post('/api/locations', { location })
      .then( res => setLocations([...users, res.data])) // adding to the front end
      .catch( err => console.log(err) )
  }

  const updateLocations = (id, location) => {
    // update in the back end
    axios.put(`/api/location/${id}`, { user })
      .then( res => {
        // update in the front end
        const newUpdatedLocations = locations.map( s => {
          if (s.id === id) {
            return res.data
          }
          return s
        })
        setUsers(newUpdatedLocations)
      })
      .catch( err => console.log(err) )
  }

  const deleteLocation = (id) => {
    // make sure its back ticks 
    // interpolting the id we are passing in
    // destroy in the back end
    axios.delete(`/api/locations/${id}`)
      .then( res => {
        // delete in the front end 
        // filter out the one delete, or filter in the all the one but the one we deleted
        setUsers(locations.filter( s => s.id !== id ))
      })
      .catch( err => console.log(err) )
  }

  return (
    <>
      <h1>All Users</h1>
      <LocationForm addUser={addUser} />
      <LocationList 
        locations={locations}
        updatelocations={updatelocations}
        deleteLocations={deleteLocation}
      />
    </>
  )
}

export default Locations;