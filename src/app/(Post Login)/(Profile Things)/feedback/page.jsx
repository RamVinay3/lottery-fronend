'use client'

import React, { useState,useEffect } from 'react';
import { ArrowLeftIcon, PaperAirplaneIcon } from '@heroicons/react/24/solid'; // Importing Heroicons V2
import Link from 'next/link';
import styles from './feedback.module.css';
import { isAuth,callApi } from '@/app/_Utils/apiCalls';
import { useRouter } from 'next/navigation';

const FeedbackPage = () => {
  const [feedback, setFeedback] = useState('');
  const router=useRouter();
  const handleChange = (e) => setFeedback(e.target.value);
  //authentication check
      useEffect(() => {
        if (!isAuth()) {
          router.replace("/login");
        }
      }, []);
    
      //authentication check
  const handleSubmit = () => {
    alert('Feedback sent');
      callApi('/help','POST',{"feedback":feedback});
    setFeedback('');
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href="/profile" className={styles.backButton}>
          <ArrowLeftIcon className={styles.icon} />
        </Link>
        <h2 className={styles.title}>Give Feedback</h2>
      </div>
      <div className={styles.content}>
        <textarea
          value={feedback}
          onChange={handleChange}
          className={styles.textArea}
          placeholder="We'd love to hear your thoughts! in 300 charachters"
          maxLength={300}
        />
        <button onClick={handleSubmit} className={styles.sendButton}>
          <PaperAirplaneIcon className={styles.sendIcon} />
          Send
        </button>
      </div>
    </div>
  );
};

export default FeedbackPage;
