import React from 'react';

const Contact = () => {
  const styles = {
    container: {
      maxWidth: '700px',
      margin: '50px auto',
      background: '#fff',
      padding: '40px 60px',
      boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
      borderRadius: '12px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: '#333',
      lineHeight: 1.6,
    },
    title: {
      color: '#2c3e50',
      fontSize: '2.8rem',
      marginBottom: '25px',
      textAlign: 'center',
    },
    subtitle: {
      color: '#34495e',
      marginBottom: '15px',
      fontWeight: '600',
    },
    paragraph: {
      fontSize: '1.15rem',
      marginBottom: '20px',
      color: '#555',
    },
    highlight: {
      color: '#007bff',
      fontWeight: '600',
    },
    infoItem: {
      marginBottom: '12px',
      fontSize: '1.1rem',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contact Us</h1>
      
      <p style={styles.paragraph}>
        We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out.
      </p>

      <div style={styles.infoItem}>
        <span style={styles.subtitle}>Email: </span>
        <a href="mailto:support@blogapp.com" style={styles.highlight}>support@blogapp.com</a>
      </div>

      <div style={styles.infoItem}>
        <span style={styles.subtitle}>Phone: </span>
        <a href="tel:+1234567890" style={styles.highlight}>+1 234 567 890</a>
      </div>

      <div style={styles.infoItem}>
        <span style={styles.subtitle}>Address: </span>
        <span>123 Blog Street, Content City, Webland</span>
      </div>

      <p style={styles.paragraph}>
        You can also connect with us on social media:
      </p>

      <ul>
        <li><a href="https://twitter.com/blogapp" target="_blank" rel="noopener noreferrer" style={styles.highlight}>Twitter</a></li>
        <li><a href="https://facebook.com/blogapp" target="_blank" rel="noopener noreferrer" style={styles.highlight}>Facebook</a></li>
        <li><a href="https://instagram.com/blogapp" target="_blank" rel="noopener noreferrer" style={styles.highlight}>Instagram</a></li>
      </ul>
    </div>
  );
};

export default Contact;
