"use client";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = sessionStorage.getItem("authToken");

    if (token) {
      router.replace("/home");
    } else {
      router.replace("/login");
    }
  }, []);
  return <div className={styles.page}>hello</div>;
}
