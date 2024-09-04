import React, { useState, useEffect } from 'react';
import UserForm from './UserForm';
import DeleteUserPrompt from './DeleteUserPrompt';
import ExportButton from './ExportButton';

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showDeletePrompt, setShowDeletePrompt] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [deleteMessage, setDeleteMessage] = useState('');

  useEffect(() => {
    // Fetch users from API
    // Example: fetch('/api/users').then(response => response.json()).then(data => setUsers(data));
  }, []);

  const handleSelectUser = (user) => {
    setSelectedUsers(prevSelected =>
      prevSelected.includes(user)
        ? prevSelected.filter(u => u !== user)
        : [...prevSelected, user]
    );
  };

  const handleDeleteUser = () => {
    // Delete user from API
    // Example: fetch(`/api/users/${userToDelete.id}`, { method: 'DELETE' })
    //   .then(() => {
    //     setUsers(prevUsers => prevUsers.filter(u => u.id !== userToDelete.id));
    //     setDeleteMessage('User deleted successfully!');
    //     setShowDeletePrompt(false);
    //   });
    setUsers(prevUsers => prevUsers.filter(u => u.id !== userToDelete.id));
    setDeleteMessage('User deleted successfully!');
    setShowDeletePrompt(false);
  };

  const handleExport = () => {
    // Export selected users
    // Example: fetch('/api/export', { method: 'POST', body: JSON.stringify(selectedUsers) })
    //   .then(response => response.blob())
    //   .then(blob => {
    //     const url = window.URL.createObjectURL(blob);
    //     const a = document.createElement('a');
    //     a.href = url;
    //     a.download = 'users.csv';
    //     document.body.appendChild(a);
    //     a.click();
    //     document.body.removeChild(a);
    //   });
  };

  const handleUserAdded = (newUser) => {
    setUsers(prevUsers => [...prevUsers, newUser]);
    setShowForm(false); // Close the form after adding the user
  };

  return (
    <div>
      <button onClick={() => setShowForm(true)}>SIGN UP</button>
      <ExportButton selectedUsers={selectedUsers} onExport={handleExport} />
      {deleteMessage && <p className="delete-message">{deleteMessage}</p>}
      <table>
        <thead>
          <tr>
            <th><input type="checkbox" onChange={() => {}} /></th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td><input type="checkbox" checked={selectedUsers.includes(user)} onChange={() => handleSelectUser(user)} /></td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => { setUserToDelete(user); setShowDeletePrompt(true); }}>DELETE</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showForm && <UserForm onClose={() => setShowForm(false)} onUserAdded={handleUserAdded} />}
      {showDeletePrompt && (
        <DeleteUserPrompt
          onClose={() => setShowDeletePrompt(false)}
          onDelete={handleDeleteUser}
        />
      )}
    </div>
  );
};

export default UserTable;
