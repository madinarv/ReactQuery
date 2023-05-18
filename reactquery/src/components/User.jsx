import React from 'react';
import { useQuery } from 'react-query';

const fetchUser = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();
  return data;
};

const User = () => {
  const { data, isLoading, isError } = useQuery('user', fetchUser);
    console.log(User)

  if (isLoading) {
    return <div>Loading Page</div>;
  }

  if (isError) {
    return <div>Warning</div>;
  }

  return (
    <div>
      <h1>User Details</h1>
  
      {
        data.map(users=>(
            console.log(users,"item"),
            <div> 
             <ul>   <li>
            
            <p>Name: {users.id}</p>
            <p>Title: {users.title}</p>
            <p>UserId: {users.UserId}</p>
            </li>

            </ul>
            
            </div>
        ))
      }
    </div>
  );
};

export default User;
