import React, { useState } from 'react'

const Signup = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const createUser = async ()=>{
        try{
        const res = await fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password})
        })
        const data = await res.json()
        console.log(data)
    } catch(err){
        console.error('error: ', err.message)
    }
    }
  return (
    <div className='p-10'>
     <input type='text' className='border border-zinc-500' required onChange={(e) => setName(e.target.value)}/>
     <input type='email' className='border border-zinc-500' required onChange={(e) => setEmail(e.target.value)}/>
     <input type='password' className='border border-zinc-500' required onChange={(e) => setPassword(e.target.value)}/>
     <button onClick={createUser} className='px-2 py-1 rounded bg-blue-500 ml-2'>Create</button>
    </div>
  )
}

export default Signup
