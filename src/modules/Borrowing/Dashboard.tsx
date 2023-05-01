import React, { useState } from 'react'
import { FaDesktop } from "react-icons/fa";
import { colors } from '../../constants/colors';
import CustomInput from '../../components/CustomInput';
import AddItemModal from './AddItemModal';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../../db/db';
import { toast } from 'react-toastify';

function Dashboard() {
  const [showModal, setShowModal] = useState(false);
  const items = useLiveQuery(() => db.item.where('status').notEqual('DELETED').toArray()) ?? [];

  async function deleteItem(id: number) {
    await db.item.update(id, {
      status: 'DELETED'
    })
    toast.success('Item successfully deleted!', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  /*
  1. Align all items and search w dashboard
  2. Add item align on last box
  */

  return (
    <div style={{flex: 1, backgroundColor: '#F5F5F5', width: "87.4vw", height: "92vh"}}>
      <div style={{display: 'flex', flex: 1, flexDirection: 'row',  justifyContent: 'space-around', backgroundColor: '#F5F5F5', paddingTop: 40, paddingBottom: 20, paddingLeft: 10}}>

        <div style={{display: 'flex', width: 300, padding: 20, backgroundColor: 'white', borderRadius: 5, flexDirection: 'column',  borderWidth: 1, borderColor: colors.brand, borderStyle: 'solid'}}>
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

        <div style={{display: 'flex', width: 300, padding: 20, borderRadius: 5, backgroundColor: 'white', flexDirection: 'column',  borderWidth: 1, borderColor: colors.brand, borderStyle: 'solid'}}>
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

        <div style={{display: 'flex', width: 300, padding: 20, borderRadius: 5, backgroundColor: 'white', flexDirection: 'column',  borderWidth: 1, borderColor: colors.brand, borderStyle: 'solid'}}>
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
        <button style={{height: 50, backgroundColor: '#626f8a'}} onClick={() => setShowModal(true)}>Add Item +</button>
      </div>

      
      <div style={{display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#F5F5F5', paddingTop: 20, paddingBottom: 20, paddingLeft: 30, paddingRight: 30}}>
        <p style={{width: '20%', margin: 0, padding: 0}}>Item Name</p>
        <p style={{width: '20%', margin: 0, padding: 0}}>Item Description</p>
        <p style={{width: '10%', margin: 0, padding: 0}}>Status</p>
        <p style={{width: '10%', margin: 0, padding: 0}}>Delete Item</p>
        <p style={{width: '10%', margin: 0, padding: 0}}>Donate Item</p>
        <p style={{width: '20%', margin: 0, padding: 0}}>Updated</p>
      </div>

      <div style={{backgroundColor: colors.brand, width: '100%', height: 3,  marginTop: -10}} />

      <div style={{height: 300, overflowY: 'scroll', overflowX: 'hidden'}}>
        {items.map((item, index) => (
              <div key={index.toString()} style={{display: 'flex', marginTop: 10, borderRadius: 10, flexDirection: 'row', width: '100%', justifyContent: 'space-around', paddingLeft: 30, alignItems: 'center', paddingRight: 30, backgroundColor: index % 2 === 0 ? colors.brand : colors.base}}>
                <h4 style={{color: index % 2 === 0 ? colors.base : colors.brand, width: '20%', margin: 0, padding: 0}}>{item.name}</h4>
                <p style={{color: index % 2 === 0 ? colors.base : colors.brand, width: '20%', margin: 0, padding: 0}}>{item.description}</p>
                <p style={{color: index % 2 === 0 ? colors.base : colors.brand, width: '10%', margin: 0, padding: 0}}>{item.status}</p>
                <button onClick={() => deleteItem(item.id as number)} style={{width: '10%', height: 30, margin: 0, padding: 0, backgroundColor: '#626f8a'}}>Delete</button>
                <button onClick={() => deleteItem(item.id as number)} style={{width: '10%', height: 30,  margin: 0, padding: 0, backgroundColor: '#626f8a'}}>Donate</button>
                <p style={{color: index % 2 === 0 ? colors.base : colors.brand, width: '20%', margin: 0, padding: 0}}>{item.updated_at}</p>
              </div>
            )
        )}
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