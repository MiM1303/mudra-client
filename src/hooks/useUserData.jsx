import { useEffect, useState } from "react";


const useUserData = () => {
    const user_email = localStorage.getItem('user-email');
    console.log(user_email);

    const [userData, setUserData] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/users/${user_email}`)
          .then((res) => res.json())
          .then((data) => {
              setUserData(data);
              console.log(userData);
          });
      }, [user_email]);
      return [userData];
};

export default useUserData;