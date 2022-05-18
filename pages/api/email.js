import sendgrid from '@sendgrid/mail'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

export default  async (req,res) =>{
  

    const message = `name: ${req.body.name}
    \remail: ${req.body.email}
    \r message: ${req.body.message}`



    await sendgrid.send({
        to: 'moezalzale@gmail.com',
        from: `moezalzale@gmail.com`,
        subject: `${req.body.subject}`,
        text: message,
        html: message.replace(/\r/g, '<br>')
      
        
    })


res.status(200)
}

