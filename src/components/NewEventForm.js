import './EventList.module.css'
import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid'; 
import { useState } from 'react'
function NewEventForm( {newEvent}) {

    const title = useRef()
    const date = useRef()
    const location = useRef('fargona')
    const form = useRef()
    // const[title,setTitle] = useState('')
    // const [date,setDate] = useState('')
    // const [location, setLocation] = useState('fargona')
    // console.log("rendering...")
    // console.log("Location: ", location)

    const resetInputs = () => {
        form.current.reset()
        // title.current.value = ''
        // date.current.value = ''
        // location.current.value = ''
        // setTitle('')
        // setDate('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const event = {
        title: title.current.value,
        date: date.current.value,
        location: location.current.value,
        id: uuidv4(),
        }
        newEvent(event)
        resetInputs()

        // const event = {
        //     title: title,
        //     date: date,
        //     location: location,

        // }
    }
    return (
        <form className="new-event-form">
            <label>
                <span>Event Title:</span>
                <input type="text" ref={title}/>
            </label>
            <br />
            <label>
                <span>Event Date:</span>
                <input type="date"  ref={date}/>
            </label><br />
            <label> 
                <span>Event Location:</span>
                <select  ref={location}>
                    <option value="fergana">Farg'ona</option>
                    <option value="tashkent">Toshkent</option>
                    <option value="xorazm">Xorazm</option>
                </select>
            </label> <br />
            <button>Submit</button>
        </form>
    )
}

export default NewEventForm