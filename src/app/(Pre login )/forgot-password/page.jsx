'use client'

import Link from 'next/link';
import React, { useState,useEffect } from 'react';
import InputField from '../../_Components/Input';
import Button from '../../_Components/Button';
import { useRouter } from 'next/navigation';
import styles from './forget.module.css';

import { callApi } from '../../_Utils/apiCalls';

function FrogetPage() {

      const [formData, setFormData] = useState({ email: '', password: '' });
        const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
      
       const handleSubmit = (e) => {
            e.preventDefault();
            const newErrors = {};
            if (!formData.email) newErrors.email = 'Email is required';
            
            setErrors(newErrors);
           
            if (Object.keys(newErrors).length === 0) {
      
              const login= callApi('/forgot-password','POST',formData);
              login.then(res=>{
                
                
                 
                  router.replace('/home');
              
              })
              .catch(err=>{
                alert(err);
              })
             
            }
      
           
      
          };
    return (
        <div className={styles.loginContainer}>
          <form onSubmit={handleSubmit} className={styles.loginForm}>
            <h1 className={styles.loginTitle}>Welcome Back</h1>
            <InputField
              type="email"
              name="email"
              label="Email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />
           
            <Button variant="primary" type="submit">
              forgot password
            </Button>
            
          </form>
        </div>
      );
  
}

export default FrogetPage