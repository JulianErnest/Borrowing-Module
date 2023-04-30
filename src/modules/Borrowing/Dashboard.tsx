import React from 'react'
import { FaDesktop } from "react-icons/fa";
import { colors } from '../../constants/colors';
import CustomInput from '../../components/CustomInput';

function Dashboard() {
  return (
    <div style={{flex: 1, backgroundColor: '#F5F5F5', width: "87.4vw"}}>
      <div style={{display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#F5F5F5', paddingTop: 20, paddingBottom: 20, paddingLeft: 10}}>

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
        <button style={{height: 50}}>Add Item +</button>
      </div>

      
      <div style={{display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#F5F5F5', paddingTop: 20, paddingBottom: 20, paddingLeft: 30, paddingRight: 30}}>
        <p>Item Name</p>
        <p>Item Description</p>
        <p>Status</p>
        <p>Delete Item</p>
        <p>Donate Item</p>
        <p>Updated</p>
      </div>

      {/* <div style={{backgroundColor}}></div> */}

    </div>
  )
}

export default Dashboard;