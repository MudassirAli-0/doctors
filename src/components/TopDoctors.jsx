import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

function TopDoctors() {


    const {doctors} = useContext(AppContext)

    const navigate = useNavigate();

  return (
    <div className='flex flex-col  items-center gap-4 my-16 text-gray-900 md:mx-10 '>
        
        <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
        <p className='sm:w-1/3 text-center text-sm'>Simply browser through our extensive list of trusted doctors.</p>
        <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>

            {doctors.slice(0,10).map((item ,index)=>{
                return(
                    <div onClick={()=>  {navigate(`/appointment/${item._id}`); scrollTo(0,0)}} key={index} className='border border-blue-50 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 '>
                        <img className='bg-blue-50' src={item.image} alt="" />
                        <div className='p-4'>
                            <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                                <p className='w-2 h-2 rounded-full bg-green-500'></p><p>Available</p>
                            </div>
                            <p className='text-gray-800 text-lg font-medium '>{item.name}</p>
                            <p className='text-gray-600 text-sm'>{item.speciality}</p>
                        </div>

                    </div>
                )
            })}
        </div>
                    <button onClick={()=> {navigate('/doctors'); scrollTo(0,0)}} className='bg-blue-50 text-gary-600 py-3 px-12 rounded-full mt-10'>More</button>
    </div>
  )
}

export default TopDoctors