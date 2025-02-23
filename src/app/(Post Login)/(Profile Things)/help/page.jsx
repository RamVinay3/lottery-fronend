// src/app/help/HelpPage.jsx
'use client'
import React, { useState,useEffect } from 'react';
import { ArrowLeftIcon, PaperAirplaneIcon } from '@heroicons/react/24/solid'; // Importing Heroicons V2
import Link from 'next/link';
import styles from './help.module.css';
import { isAuth,callApi } from '@/app/_Utils/apiCalls';
import { useRouter } from 'next/navigation';
const HelpPage = () => {
  const [message, setMessage] = useState('');
  const router=useRouter();
  const handleChange = (e) => setMessage(e.target.value);
  //authentication check
      useEffect(() => {
        if (!isAuth()) {
          router.replace("/login");
        }
      }, []);
    
      //authentication check
  const handleSubmit = () => {
   callApi('/help','POST',{"query":message});
    setMessage('');
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href="/profile" className={styles.backButton}>
          <ArrowLeftIcon className={styles.icon} />
        </Link>
        <h2 className={styles.title}>Help & Support</h2>
      </div>
      <div className={styles.content}>
        <textarea
          value={message}
          onChange={handleChange}
          className={styles.textArea}
          placeholder="Describe your issue or inquiry in 300 charachters..."
          maxLength={300}
        />
        <div className={styles.buttonContainer}>
        <button onClick={handleSubmit} className={styles.sendButton}>
          <PaperAirplaneIcon className={styles.sendIcon} />
          Send
        </button>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
