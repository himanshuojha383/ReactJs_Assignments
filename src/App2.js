import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Himanshu Ojha</td>
            <td>Analyst A4</td>
          </tr>
          <tr>
            <td>Prashant Tripathi</td>
            <td>Devops Engineer</td>
          </tr>
          <tr>
            <td>Akash Pandey</td>
            <td>Network Engineer</td>
          </tr>
          <tr>
            <td>Aditya Mall</td>
            <td>Senior Analyst</td>
          </tr>
          <tr>
            <td>Amit Bharti</td>
            <td>Production Engineer</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
