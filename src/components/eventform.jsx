import { useState,useEffect } from 'react';
import Wbutton from './Button.jsx';

export default function EventForm({ onClose,  selectedEvent,
  setSelectedEvent,selectedIndex }) {
  const [eventData, setEventData] = useState({
    title: '',
    date: '',
    description: '',
    venue:''
  });
    
    //for editing

      useEffect(() => {
    if (selectedEvent) {
      setEventData(selectedEvent); // Prefill fields with selected event data
    }
  }, [selectedEvent]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      const existingEvents = JSON.parse(localStorage.getItem('events')) || [];
      
      

  // Add the new event to that array
      let updatedEvents;
      if (selectedEvent && selectedIndex !== null) {
           updatedEvents = [...existingEvents];
  updatedEvents[selectedIndex] = eventData;
      }
      else {
          updatedEvents = [...existingEvents, eventData];
      }
     

  // Save back to localStorage as a string
  localStorage.setItem('events', JSON.stringify(updatedEvents));

      onClose(); 
      setSelectedEvent(null);
    };
    

  return (
    <form onSubmit={handleSubmit} style={{ padding: '10px' }}>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Event Title:</label>
        <input
          type="text"
          name="title"
          value={eventData.title}
          onChange={handleChange}
          style={{ width: '100%', padding: '3px' }}
          required
        />
      </div>
      
      <div style={{ marginBottom: '10px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Date:</label>
        <input
          type="date"
          name="date"
          value={eventData.date}
          onChange={handleChange}
          style={{ width: '100%', padding: '3px' }}
          required
        />
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Description:</label>
        <textarea
          name="description"
          value={eventData.description}
          onChange={handleChange}
          style={{ width: '100%', height: '60px', padding: '3px' }}
        />
          </div>
          <div style={{ marginBottom: "15px" }}>
              <label style={{ display: 'block', marginBottom: '5px' }}>Venue</label>
              <input type='text' name='venue' value={eventData.venue} onChange={handleChange}/>
          </div> 
      
      <div style={{ display: 'flex', gap: '10px' }}>
        <Wbutton type="submit">Save Event</Wbutton>
        <Wbutton type="button" onClick={onClose}>Cancel</Wbutton>
      </div>
    </form>
  );
}