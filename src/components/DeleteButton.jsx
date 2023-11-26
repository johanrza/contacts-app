import React from 'react';

// parent ContactItem
function DeleteButton({ id, onDelete }) {
  return (
    <button className="contact-item__delete" onClick={() => onDelete(id)}>
      X
    </button>
  );
}

export default DeleteButton;
