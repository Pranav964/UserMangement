import React from 'react';

const ExportButton = ({ selectedUsers, onExport }) => {
  const handleExport = () => {
    if (selectedUsers.length === 0) {
      alert('No users selected for export.');
      return;
    }
    onExport(selectedUsers);
  };

  return (
    <button
      onClick={handleExport}
      disabled={selectedUsers.length === 0}
      className="export-button"
    >
      EXPORT
    </button>
  );
};

export default ExportButton;
