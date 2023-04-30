import React from 'react'
import { colors } from '../../constants/colors';
import { FaCheck } from "react-icons/fa";

const data = [
    {name: 'TUF 27 Inches Monitor', description: 'Room 467 unused monitor', borrowerName: "Daniel Bryan Gothong", status: 'AVAILABLE', updated: '4/20/1969'},
    {name: 'TUF 27 Inches Monitor', description: 'Room 467 unused monitor', borrowerName: "Daniel Bryan Gothong", status: 'AVAILABLE', updated: '4/20/1969'},
    {name: 'TUF 27 Inches Monitor', description: 'Room 467 unused monitor', borrowerName: "Daniel Bryan Gothong", status: 'AVAILABLE', updated: '4/20/1969'},
    {name: 'TUF 27 Inches Monitor', description: 'Room 467 unused monitor', borrowerName: "Daniel Bryan Gothong", status: 'AVAILABLE', updated: '4/20/1969'},
    {name: 'TUF 27 Inches Monitor', description: 'Room 467 unused monitor', borrowerName: "Daniel Bryan Gothong", status: 'AVAILABLE', updated: '4/20/1969'},
];

function PendingRequests() {
  return (
    <div style={{flex: 1, backgroundColor: '#F5F5F5', width: "87.4vw", height: "94vh"}}>
        <div style={{paddingLeft: 50, paddingTop: 30}}>
            <h2 style={{padding: 0, margin: 0, paddingBottom: 30}}>Requests</h2>
            <input placeholder="Search" style={{height: 30, borderRadius: 5, paddingLeft: 5, width: 300}} />
        </div>

        <div style={{display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#F5F5F5', paddingTop: 20, paddingBottom: 20, paddingLeft: 30, paddingRight: 30}}>
            <p>Item</p>
            <p>Borrower</p>
            <p>Approve</p>
            <p>Disapprove</p>
            <p>Updated</p>
        </div>

        <div style={{backgroundColor: colors.brand, width: '97%', height: 1, marginLeft: 25, marginRight: 25, marginTop: -20}} />


        <div style={{height: 600, overflowY: 'scroll'}}>
            {data.map((item, index) => (
            <div style={{display: 'flex', marginTop: 10, flexDirection: 'row', width: '100%', justifyContent: 'space-around',  paddingRight: 50}}>
                <div>
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                </div>
                <p>{item.borrowerName}</p>
                <button><FaCheck color="white" /></button>
                <button>X</button>
                <p>{item.updated}</p>
            </div>
            ))}
        </div>

    </div>
  )
}

export default PendingRequests