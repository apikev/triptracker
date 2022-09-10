import { useState } from 'react';
import LocationForm from './LocationForm';
import { Link } from 'react-router-dom';

const LocationShow = ({ id, title, deleteLocation, updateLocation }) => {
  // this will keep track of if we are editing
  const [editing, setEdit] = useState(false)

  // conditional rendering - display base off of a condition
  return (
    <>
      <h3>{title}</h3>
      {/* conditional rendering of if I am editing show the form or if not then show the button */}
      {
        editing ?
        <>
          <LocationForm 
            updateLocation={updateLocation}
            id={id}
            title={title}
            setEdit={setEdit}
          />
          <button
            onClick={() => setEdit(false)}
          >
            Cancel
          </button>
        </>
        :
        <button
          onClick={() => setEdit(true)}
        >
            Edit
        </button>
      }
      <button
        onClick={() => deleteLocation(id)}
      >
        Delete
      </button>
      <Link to={`/${id}/adresses`}>
        <button>Adresses</button>
      </Link>
    </>
  )
}

export default LocationShow;