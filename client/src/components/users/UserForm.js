import { useState, useEffect } from 'react';

const UserForm = ({ addUser, username, setEdit, updateUser }) => {
  const [user, setUser] = useState({ title: '' })

  useEffect( () => {
    // pre fill the form
    if (username) {
      // setSub({ title: title })
      setUser({ title })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username) {
      updateUser(username, user)
      setEdit(false)
    } else {
      addUser(user)
    }

    setUser({ title: '' })
  }

  return (
  <>
    <h2>{ username ? 'Edit' : 'Create' } Sub</h2>
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input
        name='title'
        value={sub.title}
        onChange={(e) => setUser({ ...user, title: e.target.value })}

        required
        />
        <button type='submit'>submit</button>
    </form>
  </>
  )
}

export default UserForm;