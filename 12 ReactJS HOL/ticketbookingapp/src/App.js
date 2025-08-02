import React, { useState } from 'react';
import './App.css';

// Guest View Component
function GuestGreeting() {
  return (
    <div>
      <h2>Please sign up.</h2>
      <p>Flight List:</p>
      <ul>
        <li>Flight A - 10:00 AM</li>
        <li>Flight B - 12:30 PM</li>
        <li>Flight C - 4:45 PM</li>
      </ul>
    </div>
  );
}

// Logged-In View Component
function UserGreeting() {
  return (
    <div>
      <h2>Welcome back</h2>
      <p>You can now book your flight tickets.</p>
      <button>Book Now</button>
    </div>
  );
}

// Greeting Selector
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

// Login Button Component
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

// Logout Button Component
function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

// App Component
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <Greeting isLoggedIn={isLoggedIn} />
      {isLoggedIn ? (
        <LogoutButton onClick={handleLogoutClick} />
      ) : (
        <LoginButton onClick={handleLoginClick} />
      )}
    </div>
  );
}

export default App;
