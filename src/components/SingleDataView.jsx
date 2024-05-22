import { useState, useEffect, useParams } from 'react';

function SingleDataView(props) {
    const [data, setData] = useState(null);
    const { id } = useParams();
  
    useEffect(() => {
      // Code to fetch data for a single ID goes here
    }, [id]);
  
    if (!data) {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        <h2>{data.name}</h2>
        <p>{data.description}</p>
      </div>
      
    );
  }
  export default SingleDataView;