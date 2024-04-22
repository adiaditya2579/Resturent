import React, { useState } from 'react'
import restaurantsData from '../data/restaurants.json'
import Form from './Form'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

function Table() {
  const [showform,setshowform] = useState(false)
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [restaurants,setRestaurants] = useState(restaurantsData)

  const addRestaurant = (restaurant) => {
    restaurant.id = Date.now();
    setRestaurants([...restaurants, restaurant]);
    setshowform(false);
  };
  const editRestaurant = (restaurant) => {
    setRestaurants(restaurants.map((r) => (r.id === restaurant.id ? restaurant : r)));
    setSelectedRestaurant(null);
    setshowform(false);
  };
  const deleteRestaurant = (id) => {
    setRestaurants(restaurants.filter((r) => r.id !== id));
  };

  return (
    <div>
      <div className='p-10 h-screen w-screen'>
        <button
          onClick={() => setshowform(true)}
          className='bg-blue-600 px-2 py-1 rounded-full mb-4 '>Add Restaurant </button>
          {showform && <Form
            addRestaurant={addRestaurant}
            editRestaurant={editRestaurant}
            restaurant={selectedRestaurant}
            closeForm={() => setshowform(false)}
          />}
        <table>
          <thead>
            <tr>
              <th className='border-2 px-4'>Name</th>
              <th className='border-2 px-4'>Address</th>
              <th className='border-2 px-4'>Pincode</th>
              <th className='border-2 px-4'>Mobile Number</th>
              <th className='border-2 px-4'>Email</th>
              <th className='border-2 px-4'>Website</th>
            </tr>
          </thead>
          <tbody>
            {restaurants.map((restaurant)=>(
              <tr key={restaurant.id}>
                <td className='border-2 px-4'>{restaurant.name}</td>
                <td className='border-2 px-4'>{restaurant.address}</td>
                <td className='border-2 px-4'>{restaurant.pincode}</td>
                <td className='border-2 px-4'>{restaurant.mobileNumber} </td>
                <td className='border-2 px-4'>{restaurant.email}</td>
                <td className='border-2 px-4'>{restaurant.website}</td>
                <td className=' flex gap-2 ml-2'>
                  <button onClick={() =>{setSelectedRestaurant(restaurant) 
                    setshowform(true)}} 
                  className=' text-yellow-600 '><FaEdit  size={25}  /></button>
                  <button className=' text-red-500' onClick={() => deleteRestaurant(restaurant.id)}><RiDeleteBin6Line size={25}/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table
