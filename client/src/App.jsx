//
import React, { useState } from "react";
import "./App.css";

function App() {
  const [date, setDate] = useState(new Date());

  const [events, setEvents] = useState([
    {
      id: 1,
      name: "Team Meeting",
      description: "Discuss project updates and next steps",
      startDateTime: "2026-10-14T10:00:00",
      endDateTime: "2026-10-14T11:00:00",
    },
    {
      id: 2,
      name: "Lunch with Client",
      description: "Discuss the new proposal",
      startDateTime: "2026-10-14T12:30:00",
      endDateTime: "2026-10-14T13:30:00",
    },
    {
      id: 3,
      name: "Code Review",
      description: "Review the latest PRs",
      startDateTime: "2026-10-14T14:00:00",
      endDateTime: "2026-10-14T15:00:00",
    },
  ]);

  const startOfWeek = new Date(date);
  startOfWeek.setDate(date.getDate() - date.getDay()); // Start of the week (Sunday)

  const daysOfWeek = Array.from({ length: 7 }, (_, i) => {
    const day = new Date(startOfWeek);
    day.setDate(startOfWeek.getDate() + i);
    return day;
  });

  const getEventsForDay = (day) => {
    const filteredEvents = events.filter((event) => {
      const eventDate = new Date(event.startDateTime).toDateString();
      return eventDate === day.toDateString();
    });
  
    console.log(`Events for ${day.toDateString()}:`, filteredEvents); // Debugging
    return filteredEvents;
  };

return (

    <div className="week-view">
  {daysOfWeek.map((day, index) => (
    <div key={index} className="day-column">
      <h3>{day.toDateString()}</h3>
      <div className="events">
        {getEventsForDay(day).map((event) => {
          const startTime = new Date(event.startDateTime).getHours();
          const endTime = new Date(event.endDateTime).getHours();
          const duration = endTime - startTime;

          return (
            <div
              key={event.id}
              className="event"
              style={{
                top: `${startTime * 50}px`, // Position based on start time
                height: `${duration * 50}px`, // Height based on duration
              }}
            >
              <h4>{event.name}</h4>
              <p>{event.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  ))}
</div>
);
}

export default App;