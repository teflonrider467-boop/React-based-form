import React from 'react'
import { useState } from "react"
import styles from './ContactForm.module.css'
import Button from '../Button/Button'
import { MdMessage } from 'react-icons/md'
import { FaPhoneAlt} from 'react-icons/fa'
import { HiMail} from 'react-icons/hi'

const ContactForm = () => {
    const [name, setName] = useState("Hardik");
    const [email, setEmail] = useState("hardiksingh467@gmail.com");
    const [text, setText] = useState("Hello I am a Full Stack web developer with skils in LAMP and MERN Stack");

    const onSubmit = (event) =>{
        event.preventDefault();

        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);

    }
  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
            <div className={styles.top_btn}>
                <Button
                text = "VIA SUPPORT CHAT"
                icon = {<MdMessage/>}
                />
                <Button
                text = "VIA CALL"
                icon = {<FaPhoneAlt/>}
                />
            </div>
            <Button
            isOutline = {true}
            text = "VIA EMAIL FORM"
            icon = {<HiMail/>}
            />
            <form action="" onSubmit={onSubmit}>
                <div className={styles.form_control}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name = "name" />
                </div>
                <div className={styles.form_control}>
                    <label htmlFor="email">Email</label>
                    <input type="text" name = "email" />
                </div>
                <div className={styles.form_control}>
                    <label htmlFor="text">Text</label>
                    <textarea name = "text" rows = "8" />
                </div>

                <div style={{
                display: "flex",
                justifyContent: "end",
                }}>
                    <Button
                    text = "SUBMIT"
                    />
                </div>

                <div>{name + " " + email + " " + text}</div>
            </form>
        </div>
        <div className={styles.contact_image}>
            <img src="/images/contact.svg" alt="contact image" />
        </div>
    </section>
  )
}

export default ContactForm