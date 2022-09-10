import { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from './UserList';
import UserForm from './UserForm';

// this is where all the CRUD are in the front end 
const Trips = () => {
  // where we are storing all the subs in the front end
  const [users, setTrips] = useState([])

  // this will run before we display to the page
  useEffect( () => {
    // http verb and url 
    // subs index action
    // res -> all of your subs from your db
    axios.get('/api/trips')
      .then( res => setTrips(res.data) ) // storing all the subs from the db to the component state
      .catch( err => console.log(err) )
  }, [])

  // add function with a post request and http
  const addTrip = (trip) => {
    // create it in the back via the routes and controller
    axios.post('/api/trips', { trip })
      .then( res => setTrips([...trips, res.data])) // adding to the front end
      .catch( err => console.log(err) )
  }

  const updateTrip = (id, trip) => {
    // update in the back end
    axios.put(`/api/trip/${id}`, { trip })

      .then( res => {
        // update in the front end
        const newUpdatedTrips = trips.map( s => {
          if (s.id === id) {
            return res.data
          }
          return s
        })
        setTrips(newUpdatedTrips)
      })
      .catch( err => console.log(err) )
  }

  const deleteTrip = (id) => {
    // make sure its back ticks 
    // interpolting the id we are passing in
    // destroy in the back end
    axios.delete(`/api/trips/${id}`)
      .then( res => {
        // delete in the front end 
        // filter out the one delete, or filter in the all the one but the one we deleted
        setTrips(trips.filter( s => s.id !== id ))
      })
      .catch( err => console.log(err) )
  }

  return (
    <>
      <h1>All Trips</h1>
      <TripForm addUser={addTrip} />
      <TripList 
        trip={trips}
        updateTrip={updateTrip}
        deleteTrip={deleteTrip}
      />
    </>
  )
}

export default Trips;