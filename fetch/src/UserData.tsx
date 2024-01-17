import React, { useEffect, useState } from 'react'

interface User {
    id: number;
    firstName?: string;
    email: string
}



export const UserData:React.FC = () => {

    const [UserData, setUserData] = useState<User[]>([]);
    const [filterData, setFilterData] = useState<User[]>([]);
    const [search, setSearch] = useState<string>("");

    useEffect(()=>{
        const fetchData =async () => {
            try {
                const response = await fetch(`https://dummyjson.com/users`);
                const dataList = await response.json();
                setUserData(dataList);
                setFilterData(dataList); 
                console.log(dataList);           
            } catch (error) {
                console.log("Error fetching data", error);
            }
        }
        fetchData();
    },[filterData])

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) =>{
        const searchTerm = event.target.value.toLowerCase();
        setSearch(searchTerm);

        const filterUser = UserData.filter((user)=> user.firstName?.toLowerCase().includes(search))

        setFilterData(filterUser)
    }

  return (
    <>
    <input type="text"
    placeholder='Search...'
    value={search}
    onChange={handleSearch}
    />

    {filterData.map((user)=>{
        return (
            <>
            <div key={user.id}>{user.firstName}</div>
            <p>{user.email}</p>
            </>
        )
    })}
    </>
  )
}
