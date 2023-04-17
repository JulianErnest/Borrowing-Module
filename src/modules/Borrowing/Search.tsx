import React from 'react'
import { useState } from 'react';


const itemsDatabase = [
  'ASUS TF2 27 INCHES MONITOR',
  'TUF 27 INCHES MONITOR',
  'SAMSUNG 32 INCHES MONITOR',
  'VIEWSONIC 32 INCHES MONITOR',
  'DCISM DEPARTMENT RESOURCE SEARCAASASDSDASDADASDASDACAACAASASDACAASASDASDACAACADASDADASDASDACAACAASASDACAASASDASDACAACAASASDASDADASDASDACAASASDASDADASDASDASDASDASDH ENGINE'
]; // sample

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [foundItems, setFoundItems] = useState([]);

  const searchItems = (e) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);
    const filteredItems = itemsDatabase.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
    setFoundItems(filteredItems);
  };

  const handleBorrow = (item) => {
    // code for how it handles the item you borrowed
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>DCISM DEPARTMENT RESOURCE SEARCH ENGINE</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={searchItems}
        placeholder="Search up my ass..."
        style={styles.input}
      />
      <ul style={styles.list}>
        {foundItems.map(item => (
          <li key={item} style={styles.listItem}>
            <div style={styles.listContainer} title={item}>{item}</div>
            <button onClick={() => handleBorrow(item)} style={styles.button}>
              Borrow
            </button>
          </li>
          
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    marginTop: '100px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '80vh',
    width: '1300px'
  },
  header: {
    margin: '0',
    fontSize: '35px',
    marginBottom: '1rem'
  },
  input: {
    width: '100%',
    maxWidth: '750px',
    margin: '8px 0',
    padding: '8px',
  },
  listContainer: {
    width: '500px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  list: {
    listStyle: 'none',
    padding: '0',
    margin: '0',
    
  },
  listItem: {
    margin: '8px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '10px',
    
  },
  button: {
    marginLeft: '50px',
  },
};

export default Search;