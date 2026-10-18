import React, { useState, useEffect } from "react";
import DayColumn from "./Components/DayColumn";
import "./App.css";

function App() {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]); // Initialize with an empty array

  // Fetch events from the API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/events"); // Replace with your API URL
        const data = await response.json();
        setEvents(data); // Update state with fetched events
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []); // Empty dependency array ensures this runs only once

  const startOfWeek = new Date(date);
  startOfWeek.setDate(date.getDate() - date.getDay()); // Start of the week (Sunday)

  const daysOfWeek = Array.from({ length: 7 }, (_, i) => {
    const day = new Date(startOfWeek);
    day.setDate(startOfWeek.getDate() + i);
    return day;
  });

  return (
    <div>
      <h1>7-Day Calendar View</h1>
      <div className="week-view">
        {daysOfWeek.map((day, index) => (
          <DayColumn key={index} day={day} events={events} />
        ))}
      </div>
    </div>
  );
}

export default App;