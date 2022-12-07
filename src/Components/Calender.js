import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

import {createEmployee} from "./Queries";

export const Calender = () => {

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
    const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});


const events = [

    {
        name: "Vacation",
        start: new Date(2021, 6, 7),
        endd: new Date(2021, 6, 10),
    },
    {
        name: "Conference",
        start: new Date(2021, 6, 20),
        endd: new Date(2021, 6, 23),
    },
];


    const [newEvent, setNewEvent] = useState({ name: "", start: "", endd: "" });
    const [allEvents, setAllEvents] = useState(events);

    const {name,start,endd} = newEvent




    const onSubmit= async (e)=> {
        e.preventDefault()
        await createEmployee(newEvent)
        setAllEvents([...allEvents, newEvent]);


    }

    return (
        <div className="App" style={{backgroundColor: 'white'}}>
            <h1>Calendar</h1>
            <h2>Add New Event</h2>
            <div >
                <input
                    style={{ width: "20%", marginRight: "10px" }}
                    type={"text"}
                         className="form-control"
                         placeholder="Indtast dit navn"
                         name="name"
                         value={newEvent.name}
                         onChange={(e) => setNewEvent({...newEvent, name: e.target.value})} />

                <DatePicker
                    style={{ marginRight: "10px" }}
                       placeholderText="end date"
                       selected={newEvent.start}
                       onChange={(start) => setNewEvent({...newEvent,start})} />



                <DatePicker

                            placeholderText="start dato"
                            selected={newEvent.endd}
                            onChange={(endd) => setNewEvent({...newEvent,endd})}  />

                <button stlye={{ marginTop: "10px" }} onClick={onSubmit}>
                    Add Event
                </button>
            </div>
            <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="endd" style={{ height: 500, margin: "50px" }} />
        </div>


    );
}