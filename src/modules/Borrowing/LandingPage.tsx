import React, { useState } from 'react'
import USC from '../../assets/USC.png'
import DCISM from '../../assets/DCISM_LOGO.png'

function LandingPage() {

    return (
        <div style={{display: 'flex', justifyContent: 'space-evenly', padding: 0, margin: 0, width: '105%'}}>
            <div style={{margin: 'auto'}}>
                <center><img src={DCISM} style={{paddingTop: '25px', width: '200px', height: 'auto'}}></img></center>
                <h4 style={{padding: '15px', paddingBottom: '5px',margin: '10px', textAlign: 'center'}}>Welcome to the DCISM Borrowing Module! </h4>
                <h6 style={{padding: '15px', paddingBottom: '30px',margin: '1px', textAlign: 'center'}}>Where you can easily track and manage the borrowing of resources within the university. This module has been designed to help students, faculty, and staff keep track of who borrows resources such as books, equipment, and other materials from the university library or various departments.</h6>
                <center><button type="button" style={{backgroundColor: '#626f8a'}}>Go to Dashboard</button></center>
            </div>
            <div>
            <center><img src={USC} style={{width: 'auto', height: '90vh'}}></img></center>
            </div>
        </div>
  )
}

export default LandingPage