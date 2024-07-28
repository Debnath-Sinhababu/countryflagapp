import React from 'react';
import { useState,useEffect } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App() {

  const initialData = [
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" }
  ];

  const [data, setData] = useState(initialData);

  const sortByDate = () => {
    const sortedData = [...data].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      if (dateA < dateB) return 1;
      if (dateA > dateB) return -1;
      return b.views - a.views;
    });
    setData(sortedData);
  };

  const sortByViews = () => {
    const sortedData = [...data].sort((a, b) => {
      if (b.views - a.views !== 0) return b.views - a.views;
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateA < dateB ? 1 : -1;
    });
    setData(sortedData);
  };
  
  return (
    <div className="App">
     <h1>Date and Views Table</h1>
      <button onClick={sortByDate}>Sort by Date</button>
      <button onClick={sortByViews}>Sort by Views</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.views}</td>
              <td>{item.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
