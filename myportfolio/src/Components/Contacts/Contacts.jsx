import React from 'react'
import styles from './ContactStyles.module.css'

function Contacts() {
  return (
    <section  id='contact' className={styles.container}>
        <h1 className='sectionTitle'>
            Contact
        </h1>
        <form action="">
            <div className='formGroup'>
                <label htmlFor="name" hidden> 
                    Name
                </label>
                <input type="text" name="name" id="Name" placeholder='NAME' required/>
            </div>
            <div className='formGroup'>
                <label htmlFor="email" hidden> 
                    Email
                </label>
                <input type="email" name="email" id="email" placeholder='EMAIL' required/>
            </div>
            <div className='formGroup'>
                <label htmlFor="email" hidden> 
                    Message
                </label>
                <textarea name="message" id="message" placeholder='PLEASE LEAVE A MESSAGE' required/>
            </div>

            <input type="submit" value="Submit"className='hover btn'  />
        </form>
    </section>
  )
}

export default Contacts
