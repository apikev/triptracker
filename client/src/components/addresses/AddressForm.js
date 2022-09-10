import { useState, useEffect } from 'react';

const TopicForm = ({ addAddress, id, title, body, setEdit, updateAddress }) => {
  const [address, setAddress] = useState({ title: '', body: '' })

  useEffect( () => {
    if (id) {
      setAddress({ title, body })
    }
  }, [])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateAddress(id, address)
      setEdit(false)
    } else {
      addAddress(address)
    }
    setAddress({ title: '', body: '' })
  }

  return (
    <>
      <h2>{id ? 'Edit' : 'Create'} Address</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        {/* string */}
        <input 
          name='title'
          value={address.title}
          onChange={(e) => setAddress({ ...address, title: e.target.value })}
          required
        />
        {/* number */}
        {/* <input 
          type='number'
          name='age'
          value={topic.age}
          onChange={(e) => setTopic({ ...topic, age: e.target.value })}
          required
        /> */}
        {/* boolean */}
        {/* <input 
          type='checkbox'
          name='friend'
          value={topic.friend}
          onChange={(e) => setTopic({ ...topic, friend: e.target.value })}
          required
        /> */}
        <label>Body</label>
        {/* text */}
        <textarea
          name='body'
          value={address.body}
          onChange={(e) => setAddress({ ...address, body: e.target.value })}
          required
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default AddressForm;