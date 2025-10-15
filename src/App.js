import { useState } from 'react';
import './App.css';
import Title from './components/Title';


function App() {
  // arrayy  yaratib  uni funcsiyada foydalanib ishlatdik
  const [showConent, setShowContent ] = useState(true)
  const [events, setEvents] = useState ([
    {title: "orinboyeva's birthday party", id: 1},
    {title: "noziorinboyeva's live stream", id: 2},
    {title: "manchester united vs barcelona", id: 3}
  ])



  // delete item 
  const handleDelete  = (id) => {
    const filteredEvents = events.filter((event) => { 
      return event.id !== id
    })
    setEvents(filteredEvents)
  }

  return (
    <div className="App">
      <Title/>  
      {showConent && <button onClick={() => setShowContent(false)}>Hide Conent</button>}
      {!showConent && <button onClick={() => setShowContent(true)}>SHow Conent</button>}
      {showConent && <div>
        {events.length === 0 && <h2>Not Conent Yet:(</h2>}
        {
          events.map((event) => {
            return (
              <div key={event.id}>
                <h2>{event.title}</h2>
                <button onClick={ () => handleDelete(event.id)}>Delete</button>
                </div>
            )
          })}
          </div>}
    </div>
  );
}

export default App;
