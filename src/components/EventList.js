import { Fragment } from "react";
import style from './EventList.module.css'

function EventList({ events, handleDelete }) {
  if (!Array.isArray(events)) {
    return <h3>Xatolik: events massiv emas!</h3>;
  }

  return (
    <div>
      {events.length === 0 && <h3>Not Connected Yet :(</h3>}
      {events.map((event) => (
        <div className={style['card-list']} key={event.id}>
          <h2>{event.title}</h2>
          <button onClick={() => handleDelete(event.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default EventList;
