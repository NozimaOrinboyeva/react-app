import './EventList.module.css'
import { v4 as uuidv4 } from 'uuid'; 
import { useState } from 'react'
function NewEventForm( {newEvent}) {
    const[title,setTitle] = useState('')
    const [date,setDate] = useState('')

    const resetInputs = () => {
        setTitle('')
        setDate('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const event = {
            title: title,
            date: date,
            id: uuidv4()
        }

        newEvent(event)
        resetInputs()
    }
    return (
        <form className="new-event-form" onSubmit={handleSubmit}>
            <label>
                <span>Event Title:</span>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}/>
            </label>
            <br />
            <label>
                <span>Event Date:</span>
                <input type="date" onChange={(e) => setDate(e.target.value)} value={date}/>
            </label>
            <br />
            {/* <button onClick={resetInputs} type="button">reset inputs</button> */}
            <br />
            <br />
            <button>Submit</button>
        </form>
    )
}

export default NewEventForm