import { useHistory, useState } from 'react';

function DeleteAll() {
  const history = useHistory();
  const [data, setData] = useState([]);

  function deleteAllData() {
    // Code to delete all data goes here
    setData([]);
    history.push('/');
  }
 

  return (
    <div>
      <h1>Delete All Data</h1>
      <button onClick={deleteAllData}>Delete All Data</button>
    </div>
  );
}

export default DeleteAll;
