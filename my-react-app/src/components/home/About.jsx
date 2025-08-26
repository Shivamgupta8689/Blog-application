import React from 'react';

const About = () => {
  const styles = {
    container: {
      maxWidth: '900px',
      margin: '50px auto',
      background: '#fff',
      padding: '40px 60px',
      boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
      borderRadius: '12px',
      lineHeight: 1.6,
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: '#333',
    },
    title: {
      color: '#2c3e50',
      fontSize: '2.8rem',
      marginBottom: '15px',
      textAlign: 'center',
    },
    subtitle: {
      color: '#34495e',
      marginTop: '30px',
      marginBottom: '15px',
    },
    paragraph: {
      fontSize: '1.15rem',
      marginBottom: '20px',
      color: '#555',
    },
    highlight: {
      color: '#007bff',
      fontWeight: 600,
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About Our Blog Application</h1>
      <p style={styles.paragraph}>
        Welcome to{' '}
        <span style={styles.highlight}>Our Blog Application</span> — a modern, user-friendly platform built to empower writers and engage readers worldwide.
      </p>

      <h2 style={styles.subtitle}>Our Mission</h2>
      <p style={styles.paragraph}>
        We aim to create a seamless space where creators can share their stories, ideas, and insights effortlessly while readers discover fresh, meaningful content every day.
      </p>

      <h2 style={styles.subtitle}>What We Offer</h2>
      <p style={styles.paragraph}>
        Our application supports rich text posts, easy commenting, and personalized user profiles. Whether you’re a casual blogger or a professional writer, this platform is tailored for you.
      </p>

      <h2 style={styles.subtitle}>Get Involved</h2>
      <p style={styles.paragraph}>
        Join our community, start sharing your voice, or engage with articles that inspire you. Together, we build a vibrant blogging ecosystem!
      </p>
    </div>
  );
};

export default About;
