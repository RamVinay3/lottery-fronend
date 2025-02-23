// src/app/signup/page.jsx
'use client';

import React, { useState,useEffect } from 'react';
import InputField from '../../_Components/Input';
import Button from '../../_Components/Button';
import { useRouter } from 'next/navigation';
import styles from './signup.module.css';
import { callApi, isAuth } from '../../_Utils/apiCalls';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    secondName: '',
    username: '',
    email: '',
    password: '',
  });
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
    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.secondName) newErrors.secondName = 'Last Name is required';
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Signed up with:', formData);
      const signup= callApi('/signup','POST',formData);

      router.push('/login'); // Replace with your actual route
    }
  };

  return (
    <div className={styles.signupContainer}>
      <form onSubmit={handleSubmit} className={styles.signupForm}>
        <h1 className={styles.signupTitle}>Create an Account</h1>
        <InputField
          type="text"
          name="firstName"
          label="First Name"
          placeholder="Enter your first name"
          value={formData.firstName}
          onChange={handleChange}
          error={errors.firstName}
        />
        <InputField
          type="text"
          name="secondName"
          label="second Name"
          placeholder="Enter your last name"
          value={formData.secondName}
          onChange={handleChange}
          error={errors.secondName}
        />
        <InputField
          type="text"
          name="username"
          label="Username"
          placeholder="Enter your username"
          value={formData.username}
          onChange={handleChange}
          error={errors.username}
        />
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
        <Button variant="primary" type="submit" className={styles.signupButton}>
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignupPage;
