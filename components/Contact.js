import {TextField} from '@mui/material'
import React, {useEffect,useState} from 'react'

const Contact = () => {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [subject,setSubject] = useState('')
    const [message,setMessage] = useState('')

    const [errors,setErrors]=useState([])


    const handleSubmit = async (e) =>{
e.preventDefault()

let valid = validateForm()
console.log(errors)


if (valid)
{
await fetch('/api/email',{body: JSON.stringify({
    name: name,
    email: email,
    subject: subject,
    message: message}),
method: 'POST',
 headers: {
    "Content-Type": "application/json",
  }
})
}
}


const validateForm = ()=>{
let isValid= true
let temp =[]

 if (name.length<=0)   
 {
    temp.push('name')
    isValid=false

} 

if (subject.length<=0)   
{
   temp.push('subject')
   isValid=false


} 

if (message.length<=0)   
{
   temp.push('message')
   isValid=false


} 

setErrors([...temp])
return isValid



}

    

    return (
        <div className='flex flex-col h-screen bg-[white] relative items-center justify-center bg-morty bg-cover'> 
            <h1 className='text-6xl absolute top-5 left-5 text-[white]'>Contact Me</h1>

      

            <form onSubmit={handleSubmit} className=' text-2xl relative shadow-xl rounded flex flex-col bg-background h-[45vh] w-[20vw] items-center justify-around' >
                <h1 className='text-3xl'>Send me a message!</h1>

            <TextField variant='standard' className='w-[calc(100%-40px)]' error={errors.includes('name')} label={errors.includes('name') ?  'Name - please include your name': 'Name'} onChange={(e)=>setName(e.target.value)}/>
            <TextField variant='standard' className='w-[calc(100%-40px)]' label='Email' onChange={(e)=>setEmail(e.target.value)}/>
            <TextField variant='standard' className='w-[calc(100%-40px)]' error={errors.includes('subject')} label={errors.includes('subject') ?  'Subject - please include a subject': 'Subject'}  onChange={(e)=>setSubject(e.target.value)}/>
            <TextField rows={6} multiline className='w-[calc(100%-40px)]' error={errors.includes('message')} label={errors.includes('message') ?  'Message - please include a message': 'Message'}  onChange={(e)=>setMessage(e.target.value)}/>
            <button type='submit' className=' w-full bg-[rgb(3,161,252)] h-10 mt-5'>Submit</button>
        
            </form>



        </div>
    )
}

export default Contact
