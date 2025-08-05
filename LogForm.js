import React, { useState } from 'react';
import axios from 'axios';

const accessToken = "YOUR_FULL_ACCESS_TOKEN_HERE";

const LogForm = () => {
  const [level, setLevel] = useState('error');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      stack: "frontend",
      level,
      package: "component",
      message
    };
    try {
      const res = await axios.post("http://20.244.56.144/evaluation-service/logs", payload, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json"
        }
      });
      setResponse(res.data);
    } catch (err) {
      setResponse(err.response?.data || { message: "Unknown error" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Level:</label>
        <select value={level} onChange={(e) => setLevel(e.target.value)}>
          <option value="debug">debug</option>
          <option value="info">info</option>
          <option value="warn">warn</option>
          <option value="error">error</option>
          <option value="fatal">fatal</option>
        </select>
      </div>
      <div>
        <label>Message:</label>
        <input
          type="text"
          placeholder="Enter log message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <button type="submit">Send Log</button>
      {response && (
        <div style={{ marginTop: '20px' }}>
          <strong>Server Response:</strong>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </form>
  );
};

export default LogForm;