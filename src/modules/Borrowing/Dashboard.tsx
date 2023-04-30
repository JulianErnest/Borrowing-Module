import React, { useState } from 'react'
import { FaDesktop } from "react-icons/fa";
import { colors } from '../../constants/colors';
import CustomInput from '../../components/CustomInput';
import AddItemModal from './AddItemModal';

function Dashboard() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div style={{flex: 1, backgroundColor: '#F5F5F5', width: "87.4vw"}}>
      <div style={{display: 'flex', flex: 1, flexDirection: 'row',  justifyContent: 'space-around', backgroundColor: '#F5F5F5', paddingTop: 40, paddingBottom: 20, paddingLeft: 10}}>

        <div style={{display: 'flex', width: 400, padding: 20, backgroundColor: 'white', borderRadius: 5, flexDirection: 'column',  borderWidth: 1, borderColor: colors.brand, borderStyle: 'solid'}}>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <FaDesktop size={30} style={{borderWidth: 1, borderColor: colors.brand, borderStyle: 'solid', padding: 20, borderRadius: '50%'}} />
            <div style={{marginLeft: 20}}>
              <h2 style={{padding: 0, margin: 0}}>105</h2>
              <p style={{padding: 0, margin: 0}}>Total No. Of Items</p>
            </div>
          </div>
          <div style={{width: '100%', height: 1, backgroundColor: colors.brand, marginTop: 10}} />
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <div>
              <h2 style={{textAlign: 'center'}}>23</h2>
              <p>Borrowed</p>
            </div>
            <div style={{backgroundColor: colors.brand, width: 1, marginTop: 10 }} />
            <div>
              <h2 style={{textAlign: 'center'}}>23</h2>
              <p>Borrowed</p>
            </div>
          </div>
        </div>

        <div style={{display: 'flex', width: 400, padding: 20, borderRadius: 5, backgroundColor: 'white', flexDirection: 'column',  borderWidth: 1, borderColor: colors.brand, borderStyle: 'solid'}}>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <FaDesktop size={30} style={{borderWidth: 1, borderColor: colors.brand, borderStyle: 'solid', padding: 20, borderRadius: '50%'}} />
            <div style={{marginLeft: 20}}>
              <h2 style={{padding: 0, margin: 0}}>105</h2>
              <p style={{padding: 0, margin: 0}}>Total No. Of Items</p>
            </div>
          </div>
          <div style={{width: '100%', height: 1, backgroundColor: colors.brand, marginTop: 10}} />
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <div>
              <h2 style={{textAlign: 'center'}}>23</h2>
              <p>Borrowed</p>
            </div>
            <div style={{backgroundColor: colors.brand, width: 1, marginTop: 10 }} />
            <div>
              <h2 style={{textAlign: 'center'}}>23</h2>
              <p>Borrowed</p>
            </div>
          </div>
        </div>

        <div style={{display: 'flex', width: 400, padding: 20, borderRadius: 5, backgroundColor: 'white', flexDirection: 'column',  borderWidth: 1, borderColor: colors.brand, borderStyle: 'solid'}}>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <FaDesktop size={30} style={{borderWidth: 1, borderColor: colors.brand, borderStyle: 'solid', padding: 20, borderRadius: '50%'}} />
            <div style={{marginLeft: 20}}>
              <h2 style={{padding: 0, margin: 0}}>105</h2>
              <p style={{padding: 0, margin: 0}}>Total No. Of Items</p>
            </div>
          </div>
          <div style={{width: '100%', height: 1, backgroundColor: colors.brand, marginTop: 10}} />
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <div>
              <h2 style={{textAlign: 'center'}}>23</h2>
              <p>Borrowed</p>
            </div>
            <div style={{backgroundColor: colors.brand, width: 1, marginTop: 10 }} />
            <div>
              <h2 style={{textAlign: 'center'}}>23</h2>
              <p>Borrowed</p>
            </div>
          </div>
        </div>

      </div>

      <div style={{display: 'flex', flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: '#F5F5F5', paddingTop: 20, paddingBottom: 20, paddingLeft: 30, paddingRight: 30}}>
        <div style={{flex: 1}}>
          <h2>All Items</h2>
          <input placeholder="Search" style={{height: 30, borderRadius: 5, paddingLeft: 5, width: 300}} />
        </div>
        <button style={{height: 50}} onClick={() => setShowModal(true)}>Add Item +</button>
      </div>

      
      <div style={{display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#F5F5F5', paddingTop: 20, paddingBottom: 20, paddingLeft: 30, paddingRight: 30}}>
        <p>Item Name</p>
        <p>Item Description</p>
        <p>Status</p>
        <p>Delete Item</p>
        <p>Donate Item</p>
        <p>Updated</p>
      </div>

      <div style={{backgroundColor: colors.brand, width: '97%', height: 3, marginLeft: 25, marginRight: 25, marginTop: -20}} />

      <div style={{height: 300, overflowY: 'scroll'}}>
        {data.map((item, index) => (
          <div style={{display: 'flex', marginTop: 10, flexDirection: 'row', width: '100%', justifyContent: 'space-around', marginLeft: 20, paddingRight: 50}}>
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <p>{item.status}</p>
            <button>Delete</button>
            <button>Donate</button>
            <p>{item.updated}</p>
          </div>
        ))}
      </div>
      <AddItemModal 
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
      />
    </div>
  )
}

export default Dashboard;

const data = [
  {name: 'TUF 27 Inches Monitor', description: 'Room 467 unused monitor', status: 'AVAILABLE', updated: '4/20/1969'},
  {name: 'TUF 27 Inches Monitor', description: 'Room 467 unused monitor', status: 'AVAILABLE', updated: '4/20/1969'},
  {name: 'TUF 27 Inches Monitor', description: 'Room 467 unused monitor', status: 'AVAILABLE', updated: '4/20/1969'},
  {name: 'TUF 27 Inches Monitor', description: 'Room 467 unused monitor', status: 'AVAILABLE', updated: '4/20/1969'},
  {name: 'TUF 27 Inches Monitor', description: 'Room 467 unused monitor', status: 'AVAILABLE', updated: '4/20/1969'},
  {name: 'TUF 27 Inches Monitor', description: 'Room 467 unused monitor', status: 'AVAILABLE', updated: '4/20/1969'},
]