
// import { Container } from "react-bootstrap";
// import { useRef } from "react";

// export const Projects = () => {
//   const projects = [
//   {
//     title: "Product Details",
//     description: "Manage and organize products in a structured way for easy navigation through categories and product lines.",
//     tools: "React, Bootstrap, MongoDB, Express",
//     features: "View products, filter ,Add/Edit/Update/Delete, detailed product pages"
//   },
//   {
//     title: "Budget Management",
//     description: "Track income and expenses and manage budgets effectively.",
//     tools: "HTML, CSS, PHP, MySQL",
//     features: "Add/edit income and expenses, view summaries, manage budgets"
//   },
//   {
//     title: "Whatsapp Clone",
//     description: "Replicate WhatsApp UI for UI/UX practice.",
//     tools: "Figma",
//     features: "Chat layouts, responsive design, high-fidelity UI"
//   },
//   {
//     title: "Car Rental",
//     description: "A full-stack car rental application that allows users to search, filter, and book cars with real-time availability. Built with a modern UI and seamless backend integration.",
//     tools: "Next.js, React, FastAPI, PostgreSQL, Node.js, Express.js, HTML, CSS",
//     features: "Search cars by location and date, advanced filters, car details page, booking system, responsive UI, backend API integration"
//   }

// ];


//   const containerRef = useRef(null);

//  const scroll = (direction) => {
//   if (containerRef.current) {
//     const containerWidth = containerRef.current.offsetWidth;
//     containerRef.current.scrollBy({
//       left: direction === "left" ? -containerWidth : containerWidth,
//       behavior: "smooth",
//     });
//   }
// };

//   return (
//     <section className="projects" id="projects">
//       <Container>
//         <h2 className="text-center mb-4">Projects</h2>
//         <div className="projects-wrapper">
         
//           <div className="projects-container" ref={containerRef}>
//             {projects.map((project, index) => (
//               <div className="project-item" key={index}>
//                 <h4>{project.title}</h4>
//                 <p><strong>Description:</strong> {project.description}</p>
//                 <p><strong>Tools:</strong> {project.tools}</p>
//                 <p><strong>Features:</strong> {project.features}</p>
//               </div>

//             ))}
//           </div>
        
//         </div>
//       </Container>
//     </section>
//   );
// };


import { Container } from "react-bootstrap";
import { useRef } from "react";

export const Projects = () => {
  const projects = [
     {
      title: "Car Rental",
      description:
        "A full-stack car rental application that allows users to search, filter, and book cars with real-time availability.",
      tools:
        "Next.js, React, FastAPI, PostgreSQL, Node.js, Express.js, HTML, CSS",
      features:
        "Search by location/date, advanced filters, car details page, booking system",
    },
    {
      title: "Product Details",
      description:
        "A MERN-stack supermarket solution that uses barcode lookup to manage product information in a standardized structure, enabling easy and accurate access across multiple stores.",
      tools: "React, Bootstrap, MongoDB, Express, Python, Google API",
      features:
        "Barcode-based product search, centralized product database, standardized product structure"
    },
    {
      title: "Budget Management",
      description:
        "Track income and expenses and manage budgets effectively.",
      tools: "HTML, CSS, PHP, MySQL",
      features:
        "Add/edit income and expenses, view summaries, manage budgets",
    },
    {
      title: "Whatsapp Clone",
      description: "Replicate WhatsApp UI for UI/UX practice.",
      tools: "Figma",
      features: "Chat layouts, responsive design, high-fidelity UI",
    },
   
  ];

  const containerRef = useRef(null);

  const scroll = (direction) => {
    if (containerRef.current) {
      const cardWidth =
        containerRef.current.querySelector(".project-item").offsetWidth + 30;

      containerRef.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="projects" id="projects">
      <Container>
        <h2 className="text-center mb-4">Projects</h2>

        <div className="projects-wrapper">
          {/* LEFT ARROW */}
          <button className="nav-btn prev" onClick={() => scroll("left")}>
            &#10094;
          </button>

          {/* PROJECTS */}
          <div className="projects-container" ref={containerRef}>
            {projects.map((project, index) => (
              <div className="project-item" key={index}>
                <h4>{project.title}</h4>
                <p>
                  <strong>Description:</strong> {project.description}
                </p>
                <p>
                  <strong>Tools:</strong> {project.tools}
                </p>
                <p>
                  <strong>Features:</strong> {project.features}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT ARROW */}
          <button className="nav-btn next" onClick={() => scroll("right")}>
            &#10095;
          </button>
        </div>
      </Container>
    </section>
  );
};
