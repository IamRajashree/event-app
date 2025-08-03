import bgimage from "../assets/background.jpg";
import image1 from "../assets/image1.jpg";
import icon from "../assets/icons8-event-32.png";
import Window98Window from "../components/window.jsx";
import Wbutton from "../components/Button.jsx";
import { useState } from "react";
import EventForm from "../components/eventform.jsx";
import ViewEvents from "../components/viewevent.jsx";

export default function Land() {
  //this is for window box
  const [isWindowOpen, setIsWindowOpen] = useState(false);

  const handleDoubleClick = () => {
    setIsWindowOpen(true);
  };
  const handleCloseWindow = () => {
    setIsWindowOpen(false);
  };
  //this is for eventform
  const [formisOpen, setform] = useState(false);

  const handleClick = () => {
    setform(true);
  };

  const handlecloseform = () => {
    setform(false);
    setSelectedEvent(null);
    setSelectedIndex(null);
  };
  //this is for view events button
  const [viewEvents, setViewEvents] = useState(false);
  const handleclickevents = () => {
    setViewEvents(true);
  };
  const handleclose = () => {
    setViewEvents(false);
  };
  //for editing
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleEdit = (event, index) => {
    setSelectedEvent(event);
    setSelectedIndex(index);
    setform(true); // open the form window
  };

  return (
    <>
      <div
        className="container"
        style={{
          backgroundImage: `url(${bgimage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
      >
        <div className="icon-in-desktop" onDoubleClick={handleDoubleClick} onTouchStart={handleDoubleClick} onClick={handleDoubleClick
          
        }>
          <img src={icon} />
          <span className="event-placeholder">Event</span>
        </div>

        {isWindowOpen && (
          <div className="window-after-doubleclick">
            <Window98Window
              title="Event-app"
              defaultPosition={{ x: 350, y: 50 }}
              onClose={handleCloseWindow}
            >
              <img
                src={image1}
                alt="event"
                style={{
                  width: "250px",
                  height: "100px",
                  paddingLeft: "10px",
                  marginBottom: "8px",
                }}
              />
              <br />
              <Wbutton onClick={handleClick}>Add Event</Wbutton>
              <Wbutton onClick={handleclickevents}>View Events</Wbutton>
            </Window98Window>
          </div>
        )}

        <section>
          {formisOpen && (
            <Window98Window
              title="Event-app"
              defaultPosition={{ x: 450, y: 60 }}
              onClose={handlecloseform}
            >
              <EventForm
                onClose={handlecloseform}
                selectedEvent={selectedEvent}
                setSelectedEvent={setSelectedEvent}
                selectedIndex={selectedIndex}
              />
            </Window98Window>
          )}
        </section>

        <section>
          {viewEvents && (
            <Window98Window
              title="Event-app"
              defaultPosition={{ x: 450, y: 60 }}
              onClose={handleclose}
              scrollable={true}
              $width="50rem"
            >
              <ViewEvents onClose={handlecloseform} onEdit={handleEdit} setViewEvents={setViewEvents} />
            </Window98Window>
          )}
        </section>
      </div>
    </>
  );
}
