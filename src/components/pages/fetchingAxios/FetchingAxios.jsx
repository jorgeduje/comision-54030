
import { useEffect, useState } from "react";
import { axiosInstance } from "../../../api/axiosInstance";


export const FetchingAxios = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // const getUser = fetch("https://jsonplaceholder.typicode.com/users");
    // getUser
    //   .then((res) => res.json())
    //   .then((res) => setUsers(res))
    //   .catch((err) => console.log(err));

    const getUsers = axiosInstance.get("/users")
    getUsers.then( res => setUsers(res.data)).catch(err => console.log(err))

    

  }, []);

  const createUser = ()=>{

    let user = {
        name: "pepito",
        edad: 22
    }

    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify( user ),
    })

    axiosInstance.post("/users", user )
  }

  console.log(users)

  return <div>FetchingAxios</div>;
};
