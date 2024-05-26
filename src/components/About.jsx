import React from "react";

const About = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <header style={{ marginBottom: "40px", textAlign: "center" }}>
        <h1 style={{ color: "#4CAF50" }}>About Our Project</h1>
        <p>Innovative Solutions for Smarter Financial Decisions</p>
      </header>

      <section style={{ marginBottom: "40px" }}>
        <h2>Meet Our Team</h2>
        <ul>
          <li>
            <strong>Tejas</strong> - AI Specialist
          </li>
          <li>
            <strong>Yash</strong> - Financial Analyst
          </li>
          <li>
            <strong>Sumit</strong> - Tech Lead
          </li>
          <li>
            <strong>Mursaleen</strong> - Junior Developer
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2>Our Hackathon Project</h2>
        <p>
          We are a passionate team of four, united by our shared goal of
          creating innovative solutions for financial management. Our project
          aims to revolutionize the way you view and manage your finances by
          categorizing your bank statements into meaningful buckets, analyzing
          your spending habits, and providing you with personalized loan
          options.
        </p>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2>How It Works</h2>
        <p>
          Our application categorizes your bank statement transactions into
          various buckets such as food, entertainment, utilities, and more. By
          evaluating your spending patterns, we can offer insights into where
          you are expending the most and how it impacts your financial health.
        </p>
        <p>
          Based on this analysis, we judge your spending habits and determine
          your eligibility for loans. If your spending on essentials is
          balanced, you are likely to receive a higher loan amount. However, if
          you are spending excessively on non-essential items like liquor or
          expensive clothing, your credit score may be negatively impacted,
          resulting in a lower loan amount or even rejection.
        </p>
      </section>

      <section style={{ marginBottom: "40px" }}>
        <h2>Our Vision</h2>
        <p>
          Our vision is to empower individuals to make smarter financial
          decisions and achieve their financial goals. By providing clear and
          actionable insights into spending habits, we aim to promote financial
          literacy and responsible spending.
        </p>
      </section>

      <footer
        style={{
          borderTop: "1px solid #ccc",
          paddingTop: "20px",
          textAlign: "center",
        }}
      >
        <p>Contact us: hackathon@project.com</p>
        <p>Follow us on social media: Facebook | Twitter | LinkedIn</p>
      </footer>
    </div>
  );
};

export default About;
