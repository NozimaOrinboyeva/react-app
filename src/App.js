import { useState} from 'react';
import './App.css';
import EventList from './components/EventList';
// import React from 'react';
import Title from './components/Title';
import Modal from './components/Modal';
import NewEventForm from './components/NewEventForm'

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showConent, setShowContent] = useState(true);
  const [events, setEvents] = useState([
    { title: "orinboyeva's birthday party", id: 1 },
    { title: "noziorinboyeva's live stream", id: 2 },
    { title: "manchester united vs barcelona", id: 3 }
  ]);

  const handleDelete = (id) => {
    const filteredEvents = events.filter((event) => event.id !== id);
    setEvents(filteredEvents);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <Title />
      {showModal && (
        <Modal closeModal={closeModal} isModeModal={true}>
          <NewEventForm/>
          {/* <h1>Nozima O'rinboyeva Frontend developer💻</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, deserunt?</p> */}
        </Modal>
      )}
      <button onClick={() => {setShowModal(true)}}>New Event</button>

      {showConent && <button onClick={() => setShowContent(false)}>Hide Conent</button>}
      {!showConent && <button onClick={() => setShowContent(true)}>Show Conent</button>}
      {showConent && <EventList events={events} handleDelete={handleDelete}/>}
    </div>
  );
}

export default App;
