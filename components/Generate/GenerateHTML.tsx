import React from "react";

interface GenerateHTMLProps {
  name: string;
  jobTitle: string;
  email: string;
  city: string;
  phone: string;
  school: string;
  company: string;
  color: string;
  profilePic: string;
  skillForms: Array<{ id: number; name: string; url: string }>;
  projectForms: Array<{ id: number; name: string; url: string }>;
  linkForms: Array<{ id: number; name: string; url: string }>;
}

const GenerateHTML: React.FC<GenerateHTMLProps> = ({
  name,
  jobTitle,
  email,
  city,
  phone,
  school,
  company,
  color,
  profilePic,
  skillForms,
  projectForms,
  linkForms,
}) => {
  const generateHTML = () => {
    return `
      <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"
    <title>${name}</title>
    <style>
      h1 {
        font-size: 40px;
      }
      p {
        font-size: 20px;
        color: #747474;
      }
      
      a {
        text-decoration: none;
        color: #747474;
        
      }
        a:hover{
        color:#DEDEDE
      }

      body {
        min-height: 100vh;
        width: 100%;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        background-color: #202020;
        color: ${color};
        font-family: "Ubuntu",sans-serif;
      }

      .navbar {
        width: 100%;
        height: 60px;
        background-color: #2d2d2d;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .main-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 100px 250px;
      }

      .main-left {
        max-width: 450px;
      }

      .main-email {
        margin-top: 20px;
      }

      .email-btn {
        padding: 15px 30px;
        background-color: ${color};
        border: none;
        border-radius: 5px;
        font-size: 16px;
        cursor:pointer;
      }

      .email-btn:hover{
      background-color: #DEDEDE;
      transition:0.3s;
      }

      .main-img {
        height: 400px;
        width: 400px;
        border-radius: 50%;
        background-color: #2d2d2d;
        text-align: center;
      }

      .main-img img {
        width: 400px;
        height: 400px;
        object-fit: cover;
        border-radius: 50%;
        transition: 0.3s;
      }

      .main-img img:hover{
        border-radius:15px;
        transform: scale(1.20);
      }

      .main-bottom {
        padding: 70px 250px;
      }

      .skills-container {
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
          rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
          rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        padding: 5px;
        min-height: 550px;
      }

      .skills-title {
        display:flex;
        align-items:center;
        justify-content:center;
      }

      .skills-main {
        display: flex;
        align-items: center;
        justify-content: center;
        gap:60px; 
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="navbar">
        <h1>${name}'s Portfolio</h1>
      </div>
      <div class="main-container">
        <div class="main-left">
          <div class="main-title">
            <h1>Hi There</h1>
            <h1>I'am ${name}</h1>
            <h1>${jobTitle}</h1>
          </div>
          <div class="main-p">
            <p>I live in ${city}, I study/studied at ${school}.</p>
            <p>I work/worked in ${company}.</p>
            <p>My phone number: ${phone}</p>
          </div>
          <div class="main-email">
            <a href="mailto:${email}?subject=Subject&body=Message">
              <button class="email-btn">Contact me email</button>
            </a>
          </div>
        </div>
        <div class="main-right">
          <div class="main-img">
            <img src="${profilePic}" alt="${name}'s Profile Picture" />
          </div>
        </div>
      </div>
      <div class="main-bottom">
        <div class="skills-container">
          <h1 class="skills-title">Skills</h1>
          <div class="skills-main">
            ${skillForms
              .map(
                (skill) => `
            <p>${skill.name}</p>
            `
              )
              .join("")}
          </div>
          <h1 class="skills-title">Projects</h1>
          <div class="skills-main">
            ${projectForms
              .map(
                (project) => `
            <p><a href=${project.url}>${project.name} </a></p>
            `
              )
              .join("")}
          </div>
          <h1 class="skills-title">Social Media</h1>
          <div class="skills-main">
            ${linkForms
              .map(
                (link) => `
            <p><a href=${link.url}>${link.name}</a></p>
            `
              )
              .join("")}
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
    `;
  };

  return generateHTML();
};

export default GenerateHTML;
