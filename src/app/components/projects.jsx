const projectDetails = [
  {
    id: 1,
    //color: "from-red-300 to-blue-300",
    type: "Web App",
    title: "NewsGrid",
    desc: "NewsGrid is a  news website designed to provide users with the latest news from around the world",
    keyFeatures:
      "‣ Responsive Design: The website is designed to be responsive, ensuring a seamless experience across various devices and screen sizes.‣ Dynamic News Feed: The homepage features a dynamic news feed that updates in real-time, providing users with the latest news as it happens.‣ Category-wise News: News articles are categorized into various sections such as Politics, Technology, Sports, and Entertainment, allowing users to easily find news of their interest.",
    technicalDetails:
      "‣ HTML: Semantic HTML5 was used to structure the website content, ensuring accessibility and improved SEO.‣ CSS: CSS3 was used to style the website, with a focus on modern design principles and responsiveness. CSS Grid and Flexbox were extensively used for layout purposes.",
    images: [1, 2, 3, 4, 5],
    demo: "https://nowarmerey.github.io/newsgrid/index.html",
    github: "https://github.com/nowarmerey/newsgrid",
  },
  {
    id: 2,
    type: "Web App",
    title: "ServicesAndBlog",
    desc: "Interactive Web Template",
    keyFeatures:
      "‣ Responsive Design: The website is designed to be responsive, ensuring a seamless experience across various devices and screen sizes.‣ Dynamic Content: The website features dynamic content that updates in real-time, providing users with fresh and relevant information.‣ Interactive Elements: The website incorporates interactive elements such as forms, sliders, and dropdown menus, enhancing user engagement.‣ Client-Side Validation: Implemented client-side validation for forms using JavaScript, improving user experience by providing immediate feedback.‣ Smooth Navigation: Smooth scrolling and a fixed navigation bar were implemented for easy navigation.",
    technicalDetails:
      "‣ HTML: Semantic HTML5 was used to structure the website content, ensuring accessibility and improved SEO.‣ CSS: CSS3 was used to style the website, with a focus on modern design principles and responsiveness. CSS Grid and Flexbox were extensively used for layout purposes.‣ JavaScript: JavaScript was used to add interactivity to the website. This includes features like form validation, dynamic content loading, and interactive UI components.",
    images: [1, 2, 3, 4, 5],
    demo: "https://nowarmerey.github.io/HTML_AND_CSS_TEMPLATE_2",
    github: "https://github.com/nowarmerey/HTML_AND_CSS_TEMPLATE_2",
  },
  {
    id: 3,
    title: "PotfolioTemplate",
    type: "Web App",
    desc: "Portfolio is a dynamic and interactive portfolio website . The website showcases a modern, user-friendly interface that provides a seamless browsing experience.",
    keyFeatures:
      "‣ Dynamic Content: The website features dynamic content that updates in real-time, providing users with fresh and relevant information.‣ Interactive UI: The website incorporates interactive UI elements created with JavaScript, enhancing user engagement.‣ Responsive Design: The website is designed to be responsive, ensuring a seamless experience across various devices and screen sizes.‣ Custom Styling**: The website is styled with CSS, allowing for highly customizable designs.",
    technicalDetails:
      "‣ HTML: Semantic HTML5 was used to structure the website content, ensuring accessibility and improved SEO.‣ CSS: CSS3 was used to style the website, with a focus on modern design principles and responsiveness. CSS Grid and Flexbox were extensively used for layout purposes.",
    images: [1, 2, 3, 4, 5],
    demo: "https://photographerportfoliojd.netlify.app/",
    github: "https://github.com/nowarmerey/portfolio_website",
  },
  {
    id: 4,
    type: "Web App",
    title: "TodoList",
    desc: "Todolist is a simple, yet powerful ToDo List application . The application provides an intuitive interface that allows users to manage their tasks efficiently",
    keyFeatures:
      "‣ Task Management: Users can add, update, and delete tasks, providing full control over their ToDo list.‣ Task Status: Each task has a status (completed or pending), allowing users to track their progress.‣ Local Storage: Tasks are stored in the local storage of the browser, ensuring that the data persists even after the browser is closed.",
    technicalDetails:
      "‣ React: The application is built using React, a popular JavaScript library for building user interfaces. The use of React allows for a modular approach, with each task being a separate component.‣ Local Storage: The application uses the local storage web API to store the tasks. This allows the data to persist across browser sessions.",
    images: [1],
    demo: "https://todo-list-reactnawar.netlify.app/",
    github: "https://github.com/nowarmerey/todo-list",
  },
  {
    id: 5,
    type: "Web App",
    title: "Ecommerce",
    desc: "Ecommerce App is a robust and dynamic eCommerce platform. The website showcases a modern, user-friendly interface that provides a seamless online shopping experience.",
    keyFeatures:
      "‣ Product Catalog: The website features a dynamic product catalog with detailed product pages, including images, descriptions, and customer reviews.‣ Shopping Cart: Users can add products to a shopping cart, adjust quantities, and view subtotal calculations in real-time.‣ Checkout Process: The website offers a secure and streamlined checkout process, integrated with Stripe for payment processing.‣ User Authentication: Users can create accounts, log in, manage their profiles, and track their order history.‣ Search Functionality: A robust search functionality enables users to search for specific products.",
    technicalDetails:
      "‣ Nextjs and React: The frontend of the website is built using Next.js and React, offering a fast, SEO-friendly, and user-centric experience.‣ Strapi: Strapi, a headless CMS, is used for backend management, allowing for efficient handling of product information, user data, and other website content.‣ Stripe: Stripe is integrated for secure, reliable, and seamless payment processing.",
    images: [1],
    video: true,
    demo: "/404",
    github: "https://github.com/nowarmerey/netlifyecommerce",
  },
  {
    id: 6,
    type: "Desktop App",
    title: "SalesPoint",
    desc: "SalesPoint is a robust and efficient Point of Sale (POS) application built using Java. The application is designed to streamline the sales process and inventory management for small businesses.",
    keyFeatures:
      "‣ Inventory Management: The application allows users to add, update, and delete products from the inventory, providing full control over stock levels.‣ Sales Processing: Users can process sales transactions, with the application automatically updating the inventory and generating sales receipts.‣ Reporting: The application generates detailed sales and inventory reports, providing valuable insights into business performance.‣ User Management: The application supports multiple user accounts with different access levels, ensuring secure and efficient operation.",
    technicalDetails:
      "‣ Java: The application is built using Java, demonstrating efficient use of Object-Oriented Programming (OOP) principles and Java's robust library of classes for building interactive user interfaces.‣ Database Integration: The application is integrated with a database for persistent storage of inventory and sales data.",
    images: [1, 2, 3, 4, 5],
    demo: "/404",
    github: "https://github.com/nowarmerey/JavaCommercialApp",
  },
  {
    id: 7,
    type: "Desktop App",
    title: "Workshop",
    desc: "TechWorkshop is a comprehensive and efficient Computer and Printer Workshop Maintenance application built using JavaFX. The application is designed to streamline the process of managing and maintaining a computer and printer workshop",
    keyFeatures:
      "‣ Work Order Management: The application allows users to create, update, and track work orders for computer and printer repairs and maintenance.‣ Inventory Management: Users can manage inventory of computer parts and printer supplies, with the application automatically updating inventory levels as parts are used.‣ Scheduling: The application includes a scheduling feature that allows users to schedule repair and maintenance tasks, ensuring efficient use of workshop resources.‣ Reporting: The application generates detailed reports on work orders, inventory levels, and workshop performance, providing valuable insights for business decision-making.",
    technicalDetails:
      "‣ JavaFX: The application is built using JavaFX, a software platform for creating and delivering desktop applications, JavaFX allows for a seamless user experience with a rich set of features.‣ Database Integration: The application is integrated with a database for persistent storage of work orders, inventory data, and other workshop information.",
    images: [1, 2, 3, 4, 5],
    demo: "/404",
    github: "https://github.com/nowarmerey/javaCustodyApp",
  },
  {
    id: 8,
    type: "Web App",
    title: "Dashboard",
    desc: "Dashboard is a dynamic and interactive dashboard website built using HTML, CSS, and JavaScript. The website showcases a modern, user-friendly interface that provides a seamless browsing experience.",
    keyFeatures:
      "‣ Dynamic Content: The website features dynamic content that updates in real-time, providing users with fresh and relevant information.‣ Interactive UI: The website incorporates interactive UI elements created with JavaScript, enhancing user engagement.‣ Responsive Design: The website is designed to be responsive, ensuring a seamless experience across various devices and screen sizes.‣ Custom Styling: The website is styled with CSS, allowing for highly customizable designs.‣ Data Visualization: The website includes various data visualization components such as charts, graphs, and tables, providing users with a clear and concise view of their data.",
    technicalDetails:
      "‣ HTML: Semantic HTML5 was used to structure the website content, ensuring accessibility and improved SEO.‣ CSS: CSS3 was used to style the website, with a focus on modern design principles and responsiveness.‣ JavaScript: JavaScript was used to add interactivity to the website. This includes features like dynamic content loading, interactive UI components, and data visualization.",
    images: [1, 2, 3, 4, 5],
    demo: "https://nowarmerey.github.io/HTML_AND_CSS_TEMPLATE_4/",
    github: "https://github.com/nowarmerey/HTML_AND_CSS_TEMPLATE_4",
  },
  {
    id: 9,
    type: "Web App",
    title: "MyPortfolio",
    desc: "MyPortfolio is a modern, dynamic portfolio website built using Next.js, Framer Motion, and Tailwind CSS. The website showcases a sleek, user-friendly interface that provides a seamless browsing experience.",
    keyFeatures:
      "‣ Dynamic Content: The website features dynamic content that updates in real-time, providing users with fresh and relevant information.‣ Interactive UI: The website incorporates interactive UI elements created with Framer Motion, enhancing user engagement.‣ Responsive Design: The website is designed to be responsive, ensuring a seamless experience across various devices and screen sizes.‣ Custom Styling: The website is styled with Tailwind CSS, a utility-first CSS framework, allowing for highly customizable designs.",
    technicalDetails:
      "‣ Next.js: The website is built using Next.js, a React-based framework that offers server-side rendering and generates static websites for React-based web applications.‣ Framer Motion: Framer Motion, a production-ready motion library for React, is used to create delightful animations and interactions throughout the website.‣ Tailwind CSS: Tailwind CSS, a utility-first CSS framework, is used for styling the website. It allows for custom designs without leaving the HTML.",
    images: [1],
    demo: "/404",
    github: "/404",
  },
];

export default projectDetails;
