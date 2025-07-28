import React, { useEffect, useState } from "react";

const StatisticsPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("shortUrls") || "{}");
    const entries = Object.entries(stored).map(([code, info]) => ({
      code,
      ...info,
    }));
    setData(entries);
  }, []);

  return (
    <div>
      <h2>All Shortened URLs</h2>
      {data.length === 0 ? (
        <p>No shortened URLs found.</p>
      ) : (
        <table border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              <th>Custom Code</th>
              <th>Original URL</th>
              <th>Shortened URL</th>
              <th>Created At</th>
              <th>Expires At</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry, index) => (
              <tr key={index}>
                <td>{entry.code}</td>
                <td>
                  <a href={entry.longUrl} target="_blank" rel="noopener noreferrer">
                    {entry.longUrl}
                  </a>
                </td>
                <td>
                  <a href={entry.shortUrl} target="_blank" rel="noopener noreferrer">
                    {entry.shortUrl}
                  </a>
                </td>
                <td>{new Date(entry.createdAt).toLocaleDateString()}</td>
                <td>{new Date(entry.expiresAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StatisticsPage;
