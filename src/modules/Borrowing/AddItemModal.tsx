import React from 'react'
import Modal from 'react-modal';

import CustomInput from '../../components/CustomInput';

type Props = {
    isOpen: boolean;
    onRequestClose: () => void;
}

function AddItemModal({isOpen, onRequestClose}: Props) {
  return (
    <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form>
            <div style={{display: 'flex',  alignItems: 'center', flexDirection: 'column', paddingLeft: 80, paddingRight: 80}}>
                <h2>Add Item</h2>
                <div>
                    <p style={{padding: 0, margin: 0}}>Name</p>
                    <input type="text" required style={{paddingLeft: 20, padding: 10, width: 300}} />
                </div>
                <div>
                    <p style={{padding: 0, margin: 0, marginTop: 30}}>Description</p>
                    <input type="text" required style={{paddingLeft: 20, padding: 10, width: 300}} />
                </div>
                <div style={{display: 'flex', marginTop: 50}}>
                    <button onClick={onRequestClose} type="button" style={{marginRight: 20}}>Cancel</button>
                    <button type="submit">Confirm</button>
                </div>
            </div>
        </form>
      </Modal>
  )
}

export default AddItemModal

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};