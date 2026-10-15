import React from "react";

const DayColumn = ({ day, events }) => {
  const getEventsForDay = (day) => {
    return events.filter((event) => {
      const eventDate = new Date(event.startDateTime).toDateString();
      return eventDate === day.toDateString();
    });
  };

  // css and html for the day column and events 
  return (
    <div className="day-column">
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
  );
};

export default DayColumn;