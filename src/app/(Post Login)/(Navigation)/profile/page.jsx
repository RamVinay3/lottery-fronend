// src/components/Profile.jsx
"use client";
import { callApi, isAuth, logout } from "@/app/_Utils/apiCalls";
import React, { useEffect, useState } from "react";
import { UserCircleIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import styles from "./profile.module.css";
import { useRouter } from "next/navigation";

const Profile = () => {
  const [user, setUser] = useState(null);
  const router=useRouter();

  const logout=()=>{
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('tokenExpiration');
    router.replace('/login');
  };
  //authentication check
  useEffect(() => {
    if (!isAuth()) {
      router.replace("/login");
    }
  }, []);

  //authentication check

  useEffect(() => {
    const getUser = callApi("/getDetails", "GET");
    getUser
      .then((response) => {
        setUser({
          name: response.data.firstName + " " + response.data.secondName,
          email: response.data.email,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.profilePage}>
      <div className={styles.profileContainer}>
        {/* Header */}
        <div className={styles.profileHeader}>
          <UserCircleIcon className={styles.icon} />
          <div className={styles.userInfo}>
            <h2 className={styles.userName}>{user.name}</h2>
            <p className={styles.userEmail}>{user.email}</p>
          </div>
        </div>

        {/* Policy Links */}
        <div className={styles.policyLinks}>
          <a href="/help" className={styles.policyButton}>
            Help & Support
            <ChevronRightIcon
              className={styles.arrowIcon}
              width={24}
              height={24}
            />
          </a>
          <a href="/feedback" className={styles.policyButton}>
            Feedback
            <ChevronRightIcon
              className={styles.arrowIcon}
              width={24}
              height={24}
            />
          </a>
          <a href="/privacy-policy" className={styles.policyButton}>
            Privacy Policy
            <ChevronRightIcon
              className={styles.arrowIcon}
              width={24}
              height={24}
            />
          </a>
          <a href="/terms" className={styles.policyButton}>
            Terms and Conditions
            <ChevronRightIcon
              className={styles.arrowIcon}
              width={24}
              height={24}
            />
          </a>
          <button onClick={logout} className={styles.policyButton}>
            Logout
            <ChevronRightIcon
              className={styles.arrowIcon}
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
