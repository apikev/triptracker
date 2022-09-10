import { useState, useEffect } from 'react';

const LocationForm = ({ addLocation, id, title, setEdit, updateLocation }) => {
                              //  fields the obj has
  const [location, setLocation] = useState({ title: '' })

  useEffect( () => {
    // pre fill the form
    if (id) {
      // setUser({ title: title })
      setLocation({ title })
    }
  }, [])

  const handleSubmit = (e) => {
    // not do a full page reload, and lose data and post in the url
    e.preventDefault()
    // see if we are doing a edit
    if (id) {
      updateLocation(id, location)
      setEdit(false)
    } else {
      addLocation(location)
    }
    // clear out the form 
    setLocation({ title: '' })
  }

  return (
    <>
      <h2>{ id ? 'Edit' : 'Create' } Location</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        {/* 1 input for each attr */}
        <input 
          // main 3 things is name value and on change
          name='title'
          value={location.title}
          onChange={(e) => setLocation({ ...location, title: e.target.value })}

          required
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default UserLocation;