import { useState } from 'react';
import './App.css';
import Title from './components/Title';
import Modal from './components/Modal';

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
        <Modal closeModal={closeModal}>
          <h1>Nozima O'rinboyeva Frontend developer💻</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, deserunt?</p>
        </Modal>
      )}
      <button onClick={() => {setShowModal(true)}}>Show Modal</button>

      {showConent && <button onClick={() => setShowContent(false)}>Hide Conent</button>}
      {!showConent && <button onClick={() => setShowContent(true)}>Show Conent</button>}

      {showConent && (
        <div>
          {events.length === 0 && <h2>Not Conent Yet :(</h2>}
          {events.map((event) => (
            <div key={event.id}>
              <h2>{event.title}</h2>
              <button onClick={() => handleDelete(event.id)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
