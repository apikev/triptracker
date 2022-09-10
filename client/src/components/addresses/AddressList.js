import AddressShow from './AddressShow';

const AddressList = ({ addresses, updateAddress, deleteAddress }) => (
  <>
    {/* [
      {id: 1, body: "Kong City", title: 'food'}, 
      {id: 2, body: "Mario City", title: 'mushrooms'}, 
      {id: 3,body: "Peach City", title: 'coins'}, 
    ] */}
    {
      addresses.map( t => 
        <AddressShow
          key={t.id}
          {...t}
          updateAddress={updateAddress}
          deleteAddress={deleteAddress}
        />
      )
    }
  </>
)

export default AddressList;