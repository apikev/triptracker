import { useState } from 'react';
import AddressForm from './AddressForm';

const AddressShow = ({ id, title, body, updateAddress, deleteAddress }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      <h3>{title}</h3>
      <p>{body}</p>
      { editing ?
        <>
          <AddressForm 
            id={id}
            title={title}
            body={body}
            updateAddress={updateAddress}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}>
            Cancel
          </button>
        </> 
        :
        <button onClick={() => setEdit(true)}>
          Edit
        </button>
      }
      <button onClick={() => deleteAddress(id)}>
        Delete
      </button>
      <button>Comments</button>
    </>
  )
}

export default AddressShow;