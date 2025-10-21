import { useState } from 'react';
import './App.css';
import EventList from './components/EventList';
// import React from 'react';
import Title from './components/Title';
import Modal from './components/Modal';
import NewEventForm from './components/NewEventForm'

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showConent, setShowContent] = useState(true);
  const [events, setEvents] = useState([]);

  const newEvent = (event) => {
    setEvents((prev) => {
      return [...prev, event]
    })
    setShowModal(false)
  }

  const handleDelete = (id) => {
    const filteredEvents = events.filter((event) => event.id !== id);
    setEvents(filteredEvents);
  };


  return (
    <div className="App">
      <Title />
      {showModal && (
        <Modal>
          <NewEventForm newEvent={newEvent} />
        </Modal>
      )}
      <button onClick={() => { setShowModal(true) }}>New Event</button>

      {showConent && <button onClick={() => setShowContent(false)}>Hide Conent</button>}
      {!showConent && <button onClick={() => setShowContent(true)}>Show Conent</button>}
      {showConent && <EventList events={events} handleDelete={handleDelete} />}
    </div>
  );
}

export default App;
