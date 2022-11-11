# Employee Management System
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


  **Completion Date:**  11/11/22
  **Technologies used:**  Node, MySql2, Sequelize, Handlebars, Bootstrap, Tablr icons, bCrypt, Google Fonts, JavaScript, HTML, CSS, Heroku<br>
  **Project goal:** We aimed to create a simple employee management platform for the minimalist small business with 20 employees or less. 
 <br><br>
   **Contributor and contributions:** <br>
   [Sarah Thoorens](https://github.com/sarahthoorens): Back-end architecture (MVC paradigm: routing, models, js files and views), Bootstrap design, custom CSS, presentation, readme<br>
   [Matt Thomsen](https://github.com/mthomsn/): Back-end architecture (MVC paradigm: routing, models, server.js, MySql seeding), Heroku deployment, wireframing, readme<br>
   [Ikechukwu](https://github.com/ikeapedia): CSS, login.js, logout.js, presentation<br>
   [Mark Bermejo](): CSS


  ## Table of Contents
  1. [Project Description](#Description)
  2. [Installation](#Installation)
  3. [Contribution Guidelines](#Contributing)
  4. [Challenges Encounted](#Challenges)
  5. [License](#License)
  <br>
  
  ## Description

 Small business owners with 20 employees or less are often faced with moderate turnover and in need of a system that can keep a record of my current employees, their salaries, tenure and time-off balance. This application aims to provide this information in a streamlined, no-frills platform.

  ## User Story

   ```md
 I am a small business owner with less than 20 employees with moderate turnover and in need of a system that can keep a record of my current employees, their time-off balance and archive former employees.s
   ```

  ## Installation

  ```npm i express sequelize mysql2 dotenv @tabler/icons connect-session-sequelize express-handlebars```

  ## Contributing

  Contributions are welcome. Contact information is below.
 
  ## Challenges
 
Getting routes to work smoothly with event listeners proved to be the biggest challenge. In the end, we only successfully routed login (get), signup form (get and post) and pull from Employee table and render to Employees tab.  

Configuring queries to render appropriately within views was also a struggle. Since our program relies on one window with href tags, it required pulling all data in one swoop and distributing with partials. In the end, joining tables proved to be too complicated to render at the time of presentation. 

Overall organization of the controllers directory was a challenge early on and required a complete reconfiguration on day 2, which pushed us back on time significantly. 

Team challenges were signficant, as well. We were only able to spend a few hours total as a team of 3 throughout the week, which meant a lot of time working alone or as a pair on the most challenging concepts.


 
  ## License

  Click the badge to learn more about the license used for this project.
  <br>[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ## Questions?

Contact contributors through links above with any questions or suggestions. 



