import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ socket }) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userName', userName);
    socket.emit('newUser', { userName, socketID: socket.id });
    navigate('/chat');
  };
  return (
    <form className="home__container" onSubmit={handleSubmit}>
      <h2 className="home__header">Enter your name and start chatting</h2>
      <label htmlFor="username">Name</label>
      <input
        type="text"
        minLength={6}
        name="username"
        id="username"
        className="username__input"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button className="home__cta">JOIN NOW</button>
    </form>
  );
};

export default Home;
