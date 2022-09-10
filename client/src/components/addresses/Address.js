import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import AddressList from './AddressList';
import AddressForm from './AddressForm';

const Addresses = () => {
  const [addresses, setAddresses] = useState([])

  const { locationId } = useParams()

  useEffect( () => {
    axios.get(`/api/location/${locationId}/addresses`)
      .then( res => setAddresses(res.data) )
      .catch( err => console.log(err) )
  }, [])

  const addAddress = (address) => {
    axios.post(`/api/locations/${locationId}/addresses`, { address })
      .then( res => setAddresses([...addresses, res.data]))
      .catch( err => console.log(err) )
  }

  const updateAddress = (id, address) => {
    axios.put(`/api/locations/${locationId}/addresses/${id}`, { address })
      .then(res => {
        const newUpdatedAddresses = addresses.map( t => {
          if (t.id === id) {
            return res.data
          }
          return t
        })
        setAddresses(newUpdatedAddresses)
      })
      .catch( err => console.log(err) )
  }

  const deleteAddress = (id) => {
    axios.delete(`/api/locations/${locationId}/addresses/${id}`)
      .then( res => {
        setAddresses( addresses.filter( t => t.id !== id ))
      })
      .catch( err => console.log(err) )
  }

  return (
    <>
      <h1>Addresses</h1>
      <AddressForm 
        addAddress={addAddress}
      />
      <AddressList 
        addresses={addresses}
        updateAddress={updateAddress}
        deleteAddress={deleteAddress}
      />
    </>
  )
}

export default Addresses;