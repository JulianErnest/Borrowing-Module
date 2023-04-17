import React from 'react'
import { useState } from 'react';
import { colors } from '../../constants/colors';

const itemsDatabase = [
  'ASUS TF2 27 INCHES MONITOR',
  'TUF 27 INCHES MONITOR',
  'SAMSUNG 32 INCHES MONITOR',
  'VIEWSONIC 32 INCHES MONITOR',
  'ASUS TF2 27 INCHES MONITOR',
  'TUF 27 INCHES MONITOR',
  'SAMSUNG 32 INCHES MONITOR',
  'VIEWSONIC 32 INCHES MONITOR',
  'ASUS TF2 27 INCHES MONITOR',
  'TUF 27 INCHES MONITOR',
  'SAMSUNG 32 INCHES MONITOR',
  'VIEWSONIC 32 INCHES MONITOR',
  'ASUS TF2 27 INCHES MONITOR',
  'TUF 27 INCHES MONITOR',
  'SAMSUNG 32 INCHES MONITOR',
  'VIEWSONIC 32 INCHES MONITOR',
  'ASUS TF2 27 INCHES MONITOR',
  'TUF 27 INCHES MONITOR',
  'SAMSUNG 32 INCHES MONITOR',
  'VIEWSONIC 32 INCHES MONITOR',
  'DCISM DEPARTMENT RESOURCE SEARCAASASDSDASDADASDASDACAACAASASDACAASASDASDACAACADASDADASDASDACAACAASASDACAASASDASDACAACAASASDASDADASDASDACAASASDASDADASDASDASDASDASDH ENGINE'
]; // sample

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [foundItems, setFoundItems] = useState([]);
  let searchTimeout = null;

  const searchItems = (e) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);
    clearTimeout(searchTimeout);

    searchTimeout = setTimeout(() => {
      const filteredItems = itemsDatabase.filter(item =>
        item.toLowerCase().includes(searchValue.toLowerCase())
      );
      console.log(filteredItems);
      setFoundItems(filteredItems);
      
    }, 1000);
    // whats up with these bitchass dogdick lines
    
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
          <li style={styles.listItem}>
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
    marginTop: '50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
    height: '600px',
    width: '979px',
    marginLeft: '15%',
    paddingBottom: '10px',
    backgroundColor: colors.secondary,
    border: '3px solid #252525',
    
  },
  header: {
    margin: '0',
    fontSize: '35px',
    marginBottom: '2rem',
    padding: '8px 20px',
    color: colors.base,
    backgroundColor: colors.brand
  },
  input: {
    width: '100%',
    maxWidth: '750px',
    marginBottom: '18px',
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
    overflowY: 'scroll', 
    maxHeight: '400px',
    marginBottom: '10px'
    
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