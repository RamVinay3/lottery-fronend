'use client'
import Link from 'next/link';
import React, { useState,useEffect } from 'react';
import InputField from '../../_Components/Input';
import Button from '../../_Components/Button';
import { useRouter } from 'next/navigation';
import styles from './login.module.css';
import { callApi, isAuth } from '../../_Utils/apiCalls';


const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    
    const router = useRouter();
  

    useEffect(() => {
        
    
        if (isAuth()) {
          router.replace("/home");
        } else {
          router.replace("/login");
        }
      }, []);


    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newErrors = {};
      if (!formData.email) newErrors.email = 'Email is required';
      if (!formData.password) newErrors.password = 'Password is required';
      setErrors(newErrors);
      console.log('Logged in with:', formData);
      if (Object.keys(newErrors).length === 0) {

        const login= callApi('/login','POST',formData);
        login.then(res=>{
          
          
            const expirationTime = new Date().getTime() + 3600 * 1000; 
            sessionStorage.setItem('tokenExpiration',expirationTime);

            sessionStorage.setItem('authToken',res.token);
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
          <InputField
            type="password"
            name="password"
            label="Password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
          />
          <Button variant="primary" type="submit">
            Login
          </Button>
          <div className={styles.links}>
            <Link href="/forgot-password" className={styles.forgotPassword}>
              Forgot Password?
            </Link>
            <Link href="/signup" className={styles.signupLink}>
              Don't have an account? Sign Up
            </Link>
          </div>
        </form>
      </div>
    );
  };
  
  export default Login;
  
