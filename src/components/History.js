import { React, useState } from 'react';
import { FaHistory } from 'react-icons/fa';
import Saved from './Saved';
const History = ({ data, onDelete }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`history ${isActive ? 'active' : ''}`}>
      <div
        className={`open-history-button history-colored-item`}
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <div className='before'>
          <svg
            width='25'
            height='25'
            viewBox='0 0 25 25'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M0 0H25C11.1929 0 0 11.1929 0 25V0Z'
              fill='#242424'
            />
          </svg>
        </div>

        <div className='icon'>
          <FaHistory />
        </div>

        <div className='after'>
          <svg
            width='25'
            height='25'
            viewBox='0 0 25 25'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M0 0H25C11.1929 0 0 11.1929 0 25V0Z'
              fill='#242424'
            />
          </svg>
        </div>
      </div>
      <div className='saves history-colored-item'>
        <p className='title'>تاریخجه</p>
        <div className='saves-items'>
          {data.length > 0 ? (
            data.map((save) => {
              return <Saved save={save} key={save.id} onDelete={onDelete} />;
            })
          ) : (
            <p>هیچ سابقه پس اندازی در کار نیست</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default History;
