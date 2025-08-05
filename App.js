import React from 'react';
import CompanyList from './CompanyList';
import './app.css'; 

function App() {
  return (
    <div className="app-container">
      <div className="card">
        <h1>Frontend Log API</h1>
        <h2>Company Logs</h2>
        <CompanyList />
      </div>
    </div>
  );
}

export default App;

