import React from 'react'

const ServicesCard = ({ icon: Icon, title, description }) => {
  return (
    <div className='bg-gradient-to-tr from-[#528ac2] to-[#E4EfE9] p-5 lg:p-8 rounded-2xl'>
        <div className='flex flex-row items-center mb-4 gap-4'>
            <Icon className="w-10 h-10" />
            <h4 className='text-xl font-bold'>{title}</h4>
        </div>
        <p className='mt-5 md:mt-7 text-lg'>
            {description}
        </p>
    </div>
  )
}

export default ServicesCard