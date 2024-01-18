import React, { useEffect, useState } from 'react'

interface User {
    id: number;
    firstName?: string;
    email: string
    handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
}



export const UserData:React.FC = () => {

    const [userData, setUserData] = useState<User[]>([]);
    const [search, setSearch] = useState<string>("");

    useEffect(()=>{
        const fetchData =async () => {
            try {
                const response = await fetch(`https://dummyjson.com/users`);
                const dataList = await response.json();
                setUserData(dataList); 
                console.log(dataList);           
            } catch (error) {
                console.log("Error data", error);
            }
        }
        fetchData();
    },[])

    const handleSearch = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setSearch(e.target.value)
    }


    //const filterData = userData.filter((user)=> user.firstName?.toLowerCase().includes(search.toLowerCase()));


  return (
    <>
    <input type="text"
    placeholder='Search...'
    value={search}
    onChange={handleSearch}
    />

    


    </>
  )
}
