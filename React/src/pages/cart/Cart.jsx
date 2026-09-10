import  { useEffect, useState } from 'react'
import axios from 'axios';
import styles from "./cart.module.css";

const Cart = () => {
  let [userData, setUserData] = useState([]);
  let [isLoading, setIsLoading] = useState([]);

  useEffect(() => {
    async function getData() {
      let userId = localStorage.getItem("userId");
      let {data} = await axios.get(`http://localhost:3030/users/${userId}`)
      setIsLoading(!isLoading);
      setUserData(data);
    }
    getData();
  },[])

  console.log(userData);

  if(isLoading) {
    return <h1>Loading...</h1>
  } else {
    return (

      <>
        {
          (userData?.cart?.length > 0) ? (
            userData.cart.map((data) => {
              console.log(data)
              let {id, title, price, description, image} = data;

              console.log(id, title, price, description, image)
              return (
                <div className={styles.cart}>
                  <h1>{id}</h1>
                  <h2>{title}</h2>
                  <h2>{price}</h2>
                  <h2>{description.slice(0,25)}...</h2>
                  <img src={image} alt="" height={200} />
                  <button>Remove from Cart</button>
                </div>
                
              )
            })
          ) : (
            <h2>Your Cart is Empty</h2>
          )
        }
      </>
      
    )

  }
}

export default Cart