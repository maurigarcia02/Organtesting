import logo from './logo.svg';
import './App.css';

function MyButton(){
  return (
    <button>I'm a button</button>
  )
}

const events = [
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
    startDateTime: "2023-11-01T12:30:00",
    endDateTime: "2023-11-01T13:30:00",
  },
];

const listItems = events.map(product =>
  <li key = {product.id}>
    {product.name}
  </li>
)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>  
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a //Hyperlink 
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MyButton/>
          Learnn React
        </a>

        <div>
          <h1>Calendar Events</h1>
          {events.map((event) => (
            <div key={event.id}>
              <h2>{event.name}</h2>
              <p>{event.description}</p>
              <p>
                {new Date(event.startDateTime).toLocaleString()} -{" "}
                {new Date(event.endDateTime).toLocaleString()}
              </p>
        </div>
      ))}
    </div>
      </header>
    </div>
  );
}

export default App;
