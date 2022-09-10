import { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from './UserList';
import UserForm from './UserForm';

// this is where all the CRUD are in the front end 
const Users = () => {
  // where we are storing all the subs in the front end
  const [users, setUsers] = useState([])

  // this will run before we display to the page
  useEffect( () => {
    // http verb and url 
    // subs index action
    // res -> all of your subs from your db
    axios.get('/api/users')
      .then( res => setUsers(res.data) ) // storing all the subs from the db to the component state
      .catch( err => console.log(err) )
  }, [])

  // add function with a post request and http
  const addUser = (user) => {
    // create it in the back via the routes and controller
    axios.post('/api/users', { user })
      .then( res => setUsers([...users, res.data])) // adding to the front end
      .catch( err => console.log(err) )
  }

  const updateUser = (username, user) => {
    // update in the back end
    axios.put(`/api/users/${id}`, { user })
      .then( res => {
        // update in the front end
        const newUpdatedUsers = users.map( s => {
          if (s.id === id) {
            return res.data
          }
          return s
        })
        setUsers(newUpdatedUsers)
      })
      .catch( err => console.log(err) )
  }

  const deleteUser = (id) => {
    // make sure its back ticks 
    // interpolting the id we are passing in
    // destroy in the back end
    axios.delete(`/api/users/${id}`)
      .then( res => {
        // delete in the front end 
        // filter out the one delete, or filter in the all the one but the one we deleted
        setUsers(users.filter( s => s.id !== id ))
      })
      .catch( err => console.log(err) )
  }

  return (
    <>
      <h1>All Users</h1>
      <UserForm addUser={addUser} />
      <UserList 
        users={users}
        updateUser={updateUser}
        deleteUser={deleteUser}
      />
    </>
  )
}

export default Users;