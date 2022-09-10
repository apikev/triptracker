import { useState, useEffect } from 'react';

const TripForm = ({ addTrip, id, title, setEdit, updateTrip }) => {
                              //  fields the obj has
  const [trip, setTrip] = useState({ title: '' })

  useEffect( () => {
    // pre fill the form
    if (id) {
      // setUser({ title: title })
      setTrip({ title })
    }
  }, [])

  const handleSubmit = (e) => {
    // not do a full page reload, and lose data and post in the url
    e.preventDefault()
    // see if we are doing a edit
    if (id) {
      updateTrip(id, trip)
      setEdit(false)
    } else {
      addTrip(trip)
    }
    // clear out the form 
    setTrip({ title: '' })
  }

  return (
    <>
      <h2>{ id ? 'Edit' : 'Create' } Trip</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        {/* 1 input for each attr */}
        <input 
          // main 3 things is name value and on change
          name='title'
          value={trip.title}
          onChange={(e) => setTrip({ ...trip, title: e.target.value })}

          required
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default TripForm;