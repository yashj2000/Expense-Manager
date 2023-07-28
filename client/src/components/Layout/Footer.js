import React from "react";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import "../../styles/footer.css"; // Path to your CSS file

const Footer = () => {
  const email = "yash.janyani2000@gmail.com";

  return (
    <div className="footer-container bg-dark text-light p-4">
      <div className="icons-container">
        <a
          href="https://github.com/yashj2000"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubOutlined className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/yash-janyani/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinOutlined className="icon" />
        </a>
      </div>
      <h6 className="text-center text-white">
        Contact me here:{" "}
        <a href={`mailto:${email}`} className="email-link">
          {email}
        </a>
      </h6>
    </div>
  );
};

export default Footer;
