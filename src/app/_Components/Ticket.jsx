'use client'
import React, { useState, useEffect } from 'react';
import styles from '../_Stylings/ticket.module.css'; // Import CSS module

const Ticket = ({ name, price, totalUsers, currentUsers, description, onBuyClick }) => {
  // State for updating the progress of the ticket
  const [progress, setProgress] = useState(0);

  // Calculate progress percentage based on the current and total users
  useEffect(() => {
    console.log(totalUsers,currentUsers,"users count");
    if (totalUsers > 0) {
      setProgress((currentUsers / totalUsers) * 100);
    }
  }, [currentUsers, totalUsers]);

  return (
    <div className={styles.ticketContainer}>
      <h3 className={styles.ticketName}>{name}</h3>
      <div className={styles.ticketPrice}>Price: ${price}</div>
      <div className={styles.ticketUsers}>TotalTickets : {totalUsers}</div>

      {/* Description */}
      {description && <p className={styles.ticketDescription}>{description}</p>}

      {/* Progress Bar */}
      <div className={styles.progressBarContainer}>
        <div
          className={styles.progressBar}
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className={styles.progressText}>{currentUsers }/ {totalUsers} of tickets sold</div>

      {/* Buy Now Button */}
      <button className={styles.buyNowButton} onClick={onBuyClick}>
        Buy Now
      </button>
    </div>
  );
};

export default Ticket;
