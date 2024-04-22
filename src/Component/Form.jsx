import React, { useEffect, useState } from 'react'
import { RxCross2 } from "react-icons/rx";
function Form({restaurant,closeForm,addRestaurant,editRestaurant}) {
  const [formData , setformData] = useState(restaurant||{})
  useEffect(() =>{
    setformData(restaurant || {})
  },[restaurant])
  const handalChange = (e)=>{
    e.preventDefault()
    const { value,name} = e.target
    setformData({...formData,[name]:value})
    
  }
  const handalSubmit= (e)=>{
    e.preventDefault()
    if (restaurant) {
      editRestaurant(formData);
    } else {
      addRestaurant(formData);
    }
    setformData({})
  }
  
  return (
    <div className='fixed  inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
    <div className='mt-10 flex flex-col gap' >
      <div className=' place-self-end'>
        <button className='' onClick={closeForm}><RxCross2 size={30}/></button>
      </div>
      <div className=' p-10 bg-blue-500 rounded-xl flex items-center justify-center '>  
        <form className=' flex flex-col gap-2 w-60' onSubmit={handalSubmit}>
          <input
          className=' rounded-md'
          name='name'
          placeholder='Name'
          type='text'
          value={formData.name || ''}
          onChange={handalChange}
          required
          />
          <input
          className=' rounded-md'
          name='address'
          value={formData.address || ''}
          placeholder='Address'
          type='text'
          onChange={handalChange}
          required
          />
          <input
          className=' rounded-md'
          name='pincode'
          value={formData.pincode || ''}
          placeholder='Pincode'
          type='number'
          onChange={handalChange}
          required
          />
          <input
          name='mobile'
          value={formData.mobile || ''}
          placeholder='Mobile'
          onChange={handalChange}
          type='number'
          required
          />
          <input
          className=' rounded-md'
          name='email'
          value={formData.email || ''}
          placeholder='Email'
          onChange={handalChange}
          type='email'
          required
          />
          <input
          className=' rounded-md'
          name='website'
          value={formData.website || ''}
          placeholder='Website'
          onChange={handalChange}
          type='text'
          required
          />
          <button className=' bg-white px-6 py-2 rounded-full'  type='submit'>{restaurant ? 'Edit' : 'Add'}</button>
          
        </form>
      </div>
    </div>  
    </div>
  )
}

export default Form