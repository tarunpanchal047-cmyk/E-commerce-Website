import axios from "axios"
import { useEffect, useState } from "react"

const AllProduct = () => {
  let [allProduct, setAllProduct] = useState([])

  useEffect(() => {
    async function fetchAllProducts() {
      let { data } = await axios.get("https://fakestoreapi.com/products")

      setAllProduct(data)
    }
    fetchAllProducts()
  }, [])

  let id = localStorage.getItem("userId");
  async function addToCart(productData) {
    // console.log(productData)

    let { data } = await axios.get(`http://localhost:3030/users/${id}`)
    console.log(data)
    let updatedCart = data.cart ? [...data.cart] : []

    let existingProd = updatedCart.find((cartData) => {
      return cartData.id == productData.id
    })

    if (existingProd) {
      existingProd.quantity += 1
    } else {
      updatedCart.push({ ...productData, quantity: 1 })
    }

    await axios.patch(`http://localhost:3030/users/${id}`, {
      cart: updatedCart
    })

    alert("Product added....")
  }



  return (
    <div>
      <h1>AllProductssss</h1>
      {
        allProduct.map((res) => {
          let { id, image, price, title } = res
          return (
            <div key={id}>
              <h1>{id}</h1>
              <img src={image} alt="" height={200} />
              <h1>{price}</h1>
              <p>{title.slice(0, 40)}...</p>
              <button onClick={()=>addToCart(res)}>Add To Cart</button>
              <h1 />
            </div>
          )
        })
      }

    </div>
  )
}

export default AllProduct
