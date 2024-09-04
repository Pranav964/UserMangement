import React from 'react';
import './DeleteUserPrompt.css'; // Ensure this file exists and is correctly referenced

const DeleteUserPrompt = ({ onClose, onDelete }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <p>Are you sure you want to delete this user?</p>
        <button className="confirm" onClick={onDelete}>DELETE</button>
        <button className="cancel" onClick={onClose}>CANCEL</button>
      </div>
    </div>
  );
};

export default DeleteUserPrompt;
