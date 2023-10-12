import { React, useState } from 'react';
const AddForm = ({ onAdd }) => {
  const [money, setMoney] = useState();
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(1401);

  const submitForm = (e) => {
    e.preventDefault();

    onAdd(money, day, month, year);

    setMoney(0);
    setDay(1);
    setMonth(1);
    setYear(1401);

  };

  return (
    <form action='#' className='addSavingForm' onSubmit={submitForm}>
      <div className='money form-items'>
        <label htmlFor='money'>مبلغ</label>
        <input
          type='number'
          name='money'
          id='money'
          value={money}
          onChange={(e) => setMoney(Number(e.target.value))}
        />
      </div>

      <div className='date form-items'>
        <label htmlFor='date'>تاریخ</label>

        <div className='date-inputs '>
          {/* <input
            type='number'
            placeholder='DD'
            autoComplete='off'
            name='day'
            id='date'
            maxLength={'2'}
            value={day}
          /> */}
          <select
            name='day'
            id='date'
            className='date-select'
            value={day}
            onChange={(e) => setDay(Number(e.target.value))}
          >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
            <option value='11'>11</option>
            <option value='12'>12</option>
            <option value='13'>13</option>
            <option value='14'>14</option>
            <option value='15'>15</option>
            <option value='16'>16</option>
            <option value='17'>17</option>
            <option value='18'>18</option>
            <option value='19'>19</option>
            <option value='20'>20</option>
            <option value='21'>21</option>
            <option value='22'>22</option>
            <option value='23'>23</option>
            <option value='24'>24</option>
            <option value='25'>25</option>
            <option value='26'>26</option>
            <option value='27'>27</option>
            <option value='28'>28</option>
            <option value='29'>29</option>
            <option value='30'>30</option>
            <option value='31'>31</option>
          </select>
          {/* <input
            type='number'
            placeholder='MM'
            autoComplete='off'
            name='month'
            id='month'
            maxLength={2}
          /> */}
          <select
            name='month'
            className='date-select'
            value={month}
            onChange={(e) => setMonth(Number(e.target.value))}
          >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
            <option value='11'>11</option>
            <option value='12'>12</option>
          </select>
          {/* <input
            type='number'
            placeholder='YYY'
            autoComplete='off'
            name='year'
            id='year'
            maxLength={4}
          /> */}

          <select
            name='year'
            className='date-select'
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
          >
            <option value='1401'>1401</option>
            <option value='1402'>1402</option>
            <option value='1403'>1403</option>
            <option value='1404'>1404</option>
            <option value='1405'>1405</option>
          </select>
        </div>
      </div>

      <input type='submit' value='ثبت' className='submit-button block-button' />
    </form>
  );
};

export default AddForm;
