'use client'
import styles from './home.module.css';

// src/app/home/page.js (or your home page component)
import { useRouter } from 'next/navigation';
import React, { useEffect,useState } from 'react';
import Ticket from '../../../_Components/Ticket';
import { callApi,isAuth } from '@/app/_Utils/apiCalls';
const HomePage = () => {

const router = useRouter();
  const [tickets, setTickets] = useState([]);
  const  [error,setError]=useState('');
  const [loading, setLoading] = useState(true);

    // authentication check
    useEffect(() => {
      if (!isAuth()) {
        router.replace("/login");
      }
    }, []);
  
    // authentication check

  useEffect(() => {
    
      const getTickets =  callApi('/ticket/available', 'GET');

      getTickets.then((response)=>{
        setTickets(response.tickets);
        setLoading(false);
      })
      .catch((err)=>{
        setError('something went wrong please try again later');
        setLoading(false);
      })
     

  }, []);
  const purchase = (ticketId,ticketName) => {
    const payload={
      "tickedId":ticketId
    }
    
   const purchaseTicket= callApi('/ticket/process','POST',payload);
    purchaseTicket.then((response)=>{
      if(!response.hasError){
      alert(`You purchased the ${ticketName}! ticket`);
      }
      
    }).catch((err)=>{
      alert(err);
  });
    // You can redirect the user to the purchase page or handle further logic here.
  };

  if (loading) {
    return <div className={styles.loading}>
     <div className={styles.loader}></div>
      </div>; 
  }
  if(tickets.length===0){

    return <div>{error}</div>
  }
  return (
    < div className={styles.container}>
   
    <div className={styles.flow}>
      
      {tickets.map((ticket, index) => (
        <Ticket
          key={index}
          name={ticket.name}
          price={ticket.price}
          totalUsers={ticket.targetUsers}
          currentUsers={ticket.sold}
          description={ticket.description} // Pass description
          onBuyClick={() => purchase(ticket.ticketId,ticket.name)} // Pass the buy click handler
       
        />
      ))}
    </div>
    </div>
  );
};

export default HomePage;
