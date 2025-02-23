"use client";
import React,{useEffect} from 'react';
import styles from './terms.module.css';
import { isAuth } from '@/app/_Utils/apiCalls';
import {useRouter} from 'next/navigation';
const TermsPage = () => {

  const router=useRouter();
    useEffect(() => {
      if (!isAuth()) {
        router.replace("/login");
      }
    }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Terms and Conditions</h1>
        <p className={styles.lastUpdated}>Last Updated: 17/12/2024</p>

        <section className={styles.section}>
          <h2>1. Eligibility</h2>
          <p>
            Users must be 18 years of age or older or meet the legal age requirement in their location.
            By using this app, you confirm that you are legally permitted to participate in lotteries.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Account Registration</h2>
          <p>
            To access the full functionality of the app, you must create an account with accurate and up-to-date information.
            You are responsible for safeguarding your account credentials.
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. Purchasing Lottery Tickets</h2>
          <p>
            Tickets purchased through the app are final and non-refundable. Successful purchases will be reflected in your account under "History"
          </p>
        </section>

        <section className={styles.section}>
          <h2>4. Winning and Prizes</h2>
          <p>
            Winners are selected through a transparent and fair process. Prizes must be claimed within 30 days of the announcement.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. User Conduct</h2>
          <p>
            You agree to use the app only for its intended purpose and refrain from tampering or cheating.
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. Limitation of Liability</h2>
          <p>
            We are not liable for any losses, damages, or technical errors resulting from your use of this app.
          </p>
        </section>

        <section className={styles.section}>
          <h2>7. Contact Us</h2>
          <p>
            For any questions or support, please use <a href="/help-and-support">help & support</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsPage;
