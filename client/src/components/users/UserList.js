import UserShow from './UserShow';

const UserList = ({ users, updateUser, deleteUser }) => (
  <>
    { users.map( s => 
      <UserShow
        key={s.id} 
        {...s} // spread out the content of key and values of what the sub have 
        // id={s.id} title={s.title} created_at...
        deleteUser={deleteUser}
        updateUser={updateUser}
      />
    )}
  </>
)

export default UserList;