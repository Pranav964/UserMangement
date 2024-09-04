import React, { useState } from 'react';

const UserForm = ({ onClose, onUserAdded }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { id: Date.now(), firstName, lastName, email }; // Mock ID for demonstration
    // Add user to API
    // Example: fetch('/api/users', { method: 'POST', body: JSON.stringify({ firstName, lastName, email, password }) })
    //   .then(response => response.json())
    //   .then(newUser => {
    //     onUserAdded(newUser);
    //     onClose();
    //   });
    onUserAdded(newUser); // Call this to add user locally
  };

  return (
    <div className="popup">
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        </label>
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <button type="submit">SIGN UP</button>
        <button type="button" onClick={onClose}>CANCEL</button>
      </form>
    </div>
  );
};

export default UserForm;
