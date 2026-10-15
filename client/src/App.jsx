import React, { useState } from "react";
import DayColumn from "./Components/DayColumn";
import "./App.css";

function App() {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([
    {
      id: 1,
      name: "Team Meeting",
      description: "Discuss project updates and next steps",
      startDateTime: "2023-11-01T10:00:00",
      endDateTime: "2023-11-01T11:00:00",
    },
    {
      id: 2,
      name: "Lunch with Client",
      description: "Discuss the new proposal",
      startDateTime: "2023-11-02T12:30:00",
      endDateTime: "2023-11-02T13:30:00",
    },
    {
      id: 3,
      name: "Code Review",
      description: "Review the latest PRs",
      startDateTime: "2026-10-14T10:00:00",
      endDateTime: "2026-10-14T12:00:00",
    },
  ]);

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