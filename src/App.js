import { useState, useEffect } from 'react';
import SavingCounter from './components/SavingCounter';
import AddForm from './components/AddForm';
import History from './components/History';
import './index.css';
import Alert from './components/Alert';
const App = () => {
  const [save, setSave] = useState({});
  const [totalSave, setTotalSave] = useState(0);
  const [alert, setAlert] = useState('diActive');
  const [message, setMessage] = useState(0);
  useEffect(() => {
    const getSaves = async () => {
      const savesFromServer = await fetchSaves();
      console.log(savesFromServer);
      setSave(savesFromServer);
    };
    fetchSaves();
    getSaves();
    setTotalSave(totalSavedMoney);
    console.log(totalSavedMoney);

    countSaves();
  }, []);
  let totalSavedMoney = 0;
  const fetchSaves = async () => {
    const res = await fetch('http://localhost:5000/saves');
  
    const data = await res.json()
    // for (let i = 0; i < data.length; i++) {
    //   totalSavedMoney += data[i].money;
    // }
    // console.log(totalSavedMoney);

    return data;
  };




  // Add save to history
  const addSave = async (money, day, month, year, e) => {
    const gotSave = {
      money: money,
      date: {
        day: day,
        month: month,
        year: year,
      },
    };

    const res = await fetch('http://localhost:5000/saves', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(gotSave),
    });

    const data = await res.json();
    setSave([...save, data]);

    countSaves();
    setMessage(prevMessage => gotSave.money)
    showAlert();
    // const totalRes = await fetch('http://localhost:5000/total');
    // const totalData = await totalRes.json();
  };


  // show add alert
  const showAlert = (money) => {
    setAlert('active');
    setTimeout(() => {
      setAlert('diActive')
    }, 3000)
  }

  // Delete save from history
  const deleteSave = async (id) => {
    await fetch(`http://localhost:5000/saves/${id}`, {
      method: 'DELETE',
    });
    const updSaves = save.filter((item) => item.id != id);
    console.log(`you want to delete save[${id}]`);
    setSave(updSaves);
    countSaves();
  };

  // Calculate total saved money
  const countSaves = async () => {
    const data = await fetchSaves();
    for (let i = 0; i < data.length; i++) {
      totalSavedMoney += data[i].money;
    }
    console.log(totalSavedMoney);
    setTotalSave(totalSavedMoney);
  };

  return (
    <div className='container'>
      <History data={save} onDelete={deleteSave} />
      <SavingCounter totalSave={totalSave} />

      <Alert activity={alert} content={message} />


      <AddForm onAdd={addSave} />
    </div>
  );
};

export default App;
