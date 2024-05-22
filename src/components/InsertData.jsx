import { useState } from 'react';

function InsertData(props) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      // Code to submit the new data to the backend goes here
    };
  
    return (
    //   <form onSubmit={handleSubmit}>
    //     <label>
    //       Name:
    //       <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
    //     </label>
    //     <br />
    //     <label>
    //       Description:
    //       <textarea value={description} onChange={(event) => setDescription(event.target.value)} />
    //     </label>
    //     <br />
    //     <button type="submit">Add Data</button>
    //   </form>
    <div></div>
    );
  }
  export default InsertData;
  