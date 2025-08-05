// CompanyList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CompanyList() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/api/logs') // Replace with your actual endpoint
      .then(response => {
        setCompanies(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("API fetch error:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{ textAlign: 'center' }}>Loading...</p>;

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Company Logs</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {companies.map((company, index) => (
          <li key={index} style={{ margin: '10px 0' }}>
            {JSON.stringify(company)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CompanyList;
