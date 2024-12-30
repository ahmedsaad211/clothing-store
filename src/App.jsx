
import './App.css';
import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar/navbar';
import Landing from './components/landing/landing';
import Mc from './components/mc/mc';

function App() {
  const [data, setData] = useState([]);
  const mc = [];
  const j = [];
  const e = [];
  const wc = [];
  useEffect(() => {
    // Fetch API Data
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products'); // Example API
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json(); // Parse JSON response
        console.log(data); // Log the data
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error); // Log any errors
      }
    };

    fetchData(); // Call the fetch function
  }, []);

  data.forEach((item,index)=>{
    if (item.category == "men's clothing"){
      mc.push(item)
    }
    else if(item.category == "jewelery"){
      j.push(item)
    }
    else if(item.category == "electronics"){
      e.push(item)
    }
    else if(item.category == "women's clothing"){
    wc.push(item)
    }
  })
  
  
  return (
    <>
    <Navbar/>
    <Landing/>
    <Mc mc={mc} wc={wc} j={j} e={e}/>
    </>
  );
}

export default App;
