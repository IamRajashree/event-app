import React, { useEffect, useState } from "react";

export default function ViewEvents({onEdit, setViewEvents}) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("events");
    if (stored) {
      setEvents(JSON.parse(stored));
    }
  }, []);

  const handleDelete = (indexToDelete) => {
    const updated = events.filter((_, index) => index !== indexToDelete);
    setEvents(updated);
    localStorage.setItem("events", JSON.stringify(updated));
    };
   
    //change color of past events
  const isPastEvent = (eventDate) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0); 
  const eventDay = new Date(eventDate);
  return eventDay < today;
};

    
  return (
    <div className="outer-container">
      <div className="scroll-container">
        {events.length === 0 ? (
          <p>No events found.</p>
        ) : (
          events.map((event, index) => (
            <div key={index} className="event-card" style={{background: isPastEvent(event.date) ? '#E8E8E8' : '#FFFFFF', 
              border: isPastEvent(event.date) 
                ? '2px outset #808080' 
                : '2px outset #FFFFFF',
              color: isPastEvent(event.date) ? '#808080' : '#000000' }}>
              <h3>{event.title}</h3>
              <p>{event.date}</p>
              <div className="buttons">
                <div className="button1">
                  <button onClick={() => alert(JSON.stringify(event, null, 2))}>
                    Details
                  </button>
                </div>
                <div className="button2">
                  <button onClick={()=>{onEdit(event,index); setViewEvents(false)}}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
