import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react';

function UpdateData() {
  const [rowData, setRowData] = useState({});
  const { id } = useParams();
  const history = useHistory();

  function updateRowData(newData) {
    // Code to update the row data goes here
    history.push('/');
  }

  useEffect(() => {
    // Code to fetch the row data based on the ID goes here
    setRowData({ id: id, name: 'John' }); // Example data
  }, [id]);

  return (
    <div>
      <h1>Update Row Data</h1>
      <form onSubmit={updateRowData}>
        <input type="text" value={rowData.name} onChange={(e) => setRowData({ ...rowData, name: e.target.value })} />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateData;
