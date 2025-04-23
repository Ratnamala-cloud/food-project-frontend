import React from 'react'
import './Orders.css'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import axios from 'axios'
import { assets } from '../../assets/assets'
const Order = ({ url }) => {
  const [orders, setOrders] = useState([]);
  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list");
    if (response.data.success) {
      setOrders(response.data.data)
      console.log(response.data.data)
    }
    else {
      toast.error("Error")
    }
  }
  const statusHandler = async (event, orderId) => {
    const response = await axios.post(url + "/api/order/status", {
      orderId,
      status: event.target.value
    })
    if (response.data.success) {
      toast.success(response.data.message)

      await fetchAllOrders();
    }
  }
  useEffect(() => {
    fetchAllOrders()
  }, [])
  return (
    <div className='order add'>
      <h3>Order page</h3>
      <div className="order-list">
        {orders.map((added, index) => (
          <div key={index} className="order-item">
            <img src={assets.parcel_icon} alt="" />
            <div>
              <p className="order-item-food">
                {added.items.map((item, index) => {
                  if (index === added.items.length - 1) {
                    return item.name + " x " + item.quantity
                  }
                  else {
                    return item.name + " x " + item.quantity + " , "
                  }
                })}
              </p>
            </div>
            <p>Items: {added.items.length}</p>
            <p>${added.amount}</p>
            <select className='selected' onChange={(event) => statusHandler(event, added._id)} value={added.status}>
              <option value="Food Processing"> Food Processing</option>
              <option value="Out for delivery">Out for Delivery</option>
              <option value="Delivered">Delivered</option>
            </select>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Order