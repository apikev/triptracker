import { useState, useEffect } from 'react';

const UserForm = ({ addUser, id, title, setEdit, updateUser }) => {
                              //  fields the obj has
  const [user, setUser] = useState({ title: '' })

  useEffect( () => {
    // pre fill the form
    if (id) {
      // setUser({ title: title })
      setUser({ title })
    }
  }, [])

  const handleSubmit = (e) => {
    // not do a full page reload, and lose data and post in the url
    e.preventDefault()
    // see if we are doing a edit
    if (id) {
      updateUser(id, user)
      setEdit(false)
    } else {
      addUser(user)
    }
    // clear out the form 
    setUser({ title: '' })
  }

  return (
    <>
      <h2>{ id ? 'Edit' : 'Create' } User</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        {/* 1 input for each attr */}
        <input 
          // main 3 things is name value and on change
          name='title'
          value={user.title}
          onChange={(e) => setUser({ ...user, title: e.target.value })}

          required
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default UserForm;