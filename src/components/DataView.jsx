import { useState, useEffect } from 'react';

function DataView() {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      // Code to fetch data from the table goes here
      fetch('/api/data')
      .then(response => response.json())
      .then(data => {
        // do something with the data
      })
      .catch(error => console.error(error));
    }, []);
  
    return (
      <div>
      
      </div>
    );
  }
//   async function fetchData() {
//     try {
//       const response = await fetch('/api/data');
//       const data = await response.json();
//       // do something with the data
//     } catch (error) {
//       console.error(error);
//     }
//   }
export default DataView;