'use client';
import styles from './history.module.css';
import React, { useEffect, useState } from "react";
import { callApi,isAuth } from '@/app/_Utils/apiCalls';
import { useRouter } from 'next/navigation';

const EventHistoryPage = () => {
  const [data, setData] = useState({ tickets: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router=useRouter();
  //authentication check
  useEffect(() => {
    if (!isAuth()) {
      router.replace("/login");
    }
  }, []);

  //authentication check

  useEffect(() => {
    const getPurchasedTickets = callApi('/ticket/purchased', 'GET');
    
    getPurchasedTickets
      .then((response) => {
        setData(response);  // Assuming response is an object with tickets property
        setLoading(false);
      })
      .catch((err) => {
        setError('Something went wrong. Please try again later.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loader}>Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.container}>
        <div className={styles.error}>{error}</div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {data.tickets && data.tickets.length > 0 ? (
        data.tickets.map((ticket, index) => (
          <div
            key={ticket.personalTicketId}
            className={`${styles.card} ${index % 2 === 0 ? "" : styles.cardAlt}`}
          >
            <h1 className={styles.heading}>{ticket.ticketInfo.name}</h1>
            <p className={styles.description}>{ticket.ticketInfo.description}</p>
            <div className={styles.details}>
              <p>
                <strong>Personal Ticket ID:</strong> {ticket.personalTicketId}
              </p>
              <p>
                <strong>Winner Amount:</strong> ₹{ticket.ticketInfo.winnerAmount}
              </p>
              <p>
                <strong>Price:</strong> ₹{ticket.ticketInfo.price}
              </p>
              <p>
                <strong>Target Users:</strong> {ticket.ticketInfo.targetUsers}
              </p>
            </div>
          </div>
        ))
      ) : (
        <div className={styles.noTickets}>No tickets available.</div>
      )}
    </div>
  );
};

export default EventHistoryPage;
