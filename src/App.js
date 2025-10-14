import { useState } from 'react';
import './App.css';

function App() {


  // arrayy  yaratib  uni funcsiyada foydalanib ishlatdik
  const [name, setName] = useState('Nozima')
  const [events, setEvents] = useState ([
    {title: "orinboyeva's birthday party", id: 1},
    {title: "noziorinboyeva's live stream", id: 2},
    {title: "manchester united vs barcelona", id: 3}
  ])


  const handleClick = () => {
    setName('Nozi')
  }


  // delete item 
  const handleDelete  = (id) => {
    const filteredEvents = events.filter((event) => { 
      return event.id !== id
    })
    setEvents(filteredEvents)
  }




  return (
    <div className="App">
      <h1>My name is {name} </h1>
      <button onClick={handleClick}>Change name</button>
      {events.map((event) => {
        return (
          <div key={event.id}>
            <h2>{event.title}</h2>
            <button onClick={ () => handleDelete(event.id)}>Delete</button>
            </div>
        )
      })}
    </div>
  );
}

export default App;
