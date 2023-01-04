import React from 'react';
import { FaTimes } from 'react-icons/fa';
const Saved = ({ save, onDelete, className }) => {
  console.log();

  return (
    <div className='saved'>
      <div className='left'>
        <div className='money'>{save.money} T</div>
        <div className='date'>{save.date.year} / {save.date.month} / {save.date.day}</div>
      </div>
      <div className='right'>
        <div className='cloase-button' onClick={() => onDelete(save.id)}>
          <FaTimes />
        </div>
      </div>
    </div>

  );
};

export default Saved;
