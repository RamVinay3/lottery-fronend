"use client";
import React, { use, useEffect } from "react";
import styles from "./privacy.module.css"; // You can create a separate CSS file for Privacy Policy
import { useRouter } from "next/navigation";
import { isAuth } from "@/app/_Utils/apiCalls";
const PrivacyPolicyPage = () => {

  const router=useRouter();
  useEffect(() => {
    if (!isAuth()) {
      router.replace("/login");
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.lastUpdated}>Last Updated: 17/12/2024</p>

        <section className={styles.section}>
          <h2>1. Introduction</h2>
          <p>
            This Privacy Policy explains how we collect, use, and protect your
            personal data when you use our lottery services. By using this app,
            you agree to the collection and use of information in accordance
            with this policy.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Information We Collect</h2>
          <p>
            We collect personal information that you provide directly, such as
            your first name, last name, and email address. We may also collect
            payment information if you use a payment gateway in the future.
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. How We Use Your Information</h2>
          <p>
            The information we collect is used to process your lottery entries,
            provide customer support, and improve our services. We may also use
            your data for marketing purposes with your consent.
          </p>
        </section>

        <section className={styles.section}>
          <h2>4. Data Protection</h2>
          <p>
            We take appropriate security measures to protect your personal
            information from unauthorized access, alteration, disclosure, or
            destruction.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. Sharing Your Information</h2>
          <p>
            We may share your personal data with third-party service providers
            who help us process payments and deliver services, such as payment
            gateways.
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. Your Rights</h2>
          <p>
            You have the right to access, update, or delete your personal data.
            If you have any concerns, you can contact us directly.
          </p>
        </section>

        <section className={styles.section}>
          <h2>7. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be communicated to you via email or on our website.
          </p>
        </section>

        <section className={styles.section}>
          <h2>8. Contact Us</h2>
          <p>
            If you have any questions or concerns regarding this Privacy Policy,
            please use <a href="/help-and-support">help & support</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
