import { useState, useEffect } from "react";
import { FetchingData } from "./FetchingData";

export const FetchingDataContainer = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let getData = fetch("https://jsonplaceholder.typicode.com/users/2");

    getData
      .then((data) => data.json())
      .then((res) => {
        setUsers(res);
      })
      .catch((error) => {
        console.log({ error });
      });
  }, []);

  //   const addUser = () => {
  //     let obj = {
  //       name: "Pepito",
  //       username: "Bret",
  //       email: "Sincere@april.biz",
  //       address: {
  //         street: "Kulas Light",
  //         suite: "Apt. 556",
  //         city: "Gwenborough",
  //         zipcode: "92998-3874",
  //         geo: {
  //           lat: "-37.3159",
  //           lng: "81.1496",
  //         },
  //       },
  //       phone: "123123",
  //       website: "hildegard.org",
  //       company: {
  //         name: "Romaguera-Crona",
  //         catchPhrase: "Multi-layered client-server neural-net",
  //         bs: "harness real-time e-markets",
  //       },
  //     };

  //     let tarea = fetch("https://jsonplaceholder.typicode.com/users", {
  //       method: "POST",
  //       body: JSON.stringify(obj),
  //       headers: {
  //         Authorization: "Barer pepito12312XZDsadasdfqweq",
  //       },
  //     });

  //     tarea.then((res) => console.log(res)).catch((error) => console.log(error));
  //   };

  const updateUser = () => {
    let obj = {
      
      phone: "1231",
     
    };

    let tarea = fetch("https://jsonplaceholder.typicode.com/users/2", {
      method: "PUT",
      body: JSON.stringify(obj),
      headers: {
        Authorization: "Barer pepito12312XZDsadasdfqweq",
      },
    });

    tarea.then((res) => console.log(res)).catch((error) => console.log(error));
  };
  return <div>{ <FetchingData updateUser={updateUser} /> }</div>;
};
