import TripShow from './TripShow';

const TripList = ({ Trip, updateTrip, deleteTrip }) => (
  <>
    { trips.map( s => 
      <TripShow
        key={s.id} 
        {...s} // spread out the content of key and values of what the sub have 
        // id={s.id} title={s.title} created_at...
        deleteTrip={deleteTrip}
        updateTrip={updateTrip}
      />
    )}
  </>
)

export default TripList;