import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='bg-[#0a192f] w-full  flex justify-center items-center p-2 pt-[80px] pb-[50px]'>
        <form method="POST" action="https://getform.io/f/66f4899d-3f48-4190-be5e-f23615a621c6" className='flex flex-col max-w-[350px] md:max-w-[600px] w-full sm:mr-0'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <div className='text-gray-300 pt-5'>
                   <p>Submit the form or contact me via my Email - <span className='font-bold text-white'>adlafeliachi@gmail.com</span></p> 
                </div>
            </div>
            <input type="text" placeholder='Name or Company' name='name' className='bg-gray-300 focus:bg-white pl-2 py-1 border-white border-2 outline-none'/>
            <input type="email" placeholder='Email' name='email' className='my-4 p-2 bg-gray-300 focus:bg-white border-white border-2 outline-none'/>
            <textarea name="message" rows="8" placeholder="Message" className='bg-gray-300 focus:bg-white p-2 border-white border-2 outline-none'></textarea>
            <button className='active:scale-95 hover:bg-pink-600 text-white border-2 hover:border-pink-600 font-bold  my-4 mr-auto py-2 px-4 mx-auto'>Submit</button>
        </form>
    </div>
  )
}

export default Contact