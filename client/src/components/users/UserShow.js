import { useState } from 'react';
import UserForm from './UserForm';
import { Link } from 'react-router-dom';

const UserShow = ({ username, title, deleteUser, updateUser }) => {
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
          <UserForm 
            updateUser={updateUser}
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
        onClick={() => deleteUser(username)}
      >
        Delete
      </button>
      <Link to={`/${username}/home`}>
        <button>home</button>
      </Link>
    </>
  )
}

export default UserShow;