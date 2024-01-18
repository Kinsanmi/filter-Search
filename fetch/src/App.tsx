
import './App.css';
import { List } from './List';
import { useState, useEffect } from 'react';


interface User {
  id: number;
  firstName?: string;
  email: string
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function App() {

  const [data, setData] = useState<string | null >(null);
  const [location, setLocation] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError]= useState<string>("")


  const fetchApi = async() =>{
      try {
          setLoading(true);
          const allData = await fetch(`https://dummyjson.com/products`);
          if(!allData.ok){
            throw new Error(`HTTP error: ${allData.status}`)
          }
          const request = await allData.json();
          console.log(request);
          setLoading(request);
      } catch (err:any) {
          console.error(err)
          setError(err.message);
      }finally {
          setLoading(false);
      }
  }

  useEffect(()=>{
      fetchApi()
  },[location])

  const Search = (input: string) =>{
    setData(input);
  }


  return (
    <div className="App">
      <List firstName='Mike' lastName='Kinsanmi' id='' maidenName='John' age='28' />
    </div>
  );
}

export default App;
