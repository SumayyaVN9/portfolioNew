
import { Container } from "react-bootstrap";
import { useRef } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const Projects = () => {
  const projects = [
  {
    title: "Product Details",
    description: "Manage and organize products in a structured way for easy navigation through categories and product lines.",
    tools: "React, Bootstrap, MongoDB, Express",
    features: "View products, filter ,Add/Edit/Update/Delete, detailed product pages"
  },
  {
    title: "Budget Management",
    description: "Track income and expenses and manage budgets effectively.",
    tools: "HTML, CSS, PHP, MySQL",
    features: "Add/edit income and expenses, view summaries, manage budgets"
  },
  {
    title: "Whatsapp Clone",
    description: "Replicate WhatsApp UI for UI/UX practice.",
    tools: "Figma",
    features: "Chat layouts, responsive design, high-fidelity UI"
  },
];


  const containerRef = useRef(null);

 const scroll = (direction) => {
  if (containerRef.current) {
    const containerWidth = containerRef.current.offsetWidth;
    containerRef.current.scrollBy({
      left: direction === "left" ? -containerWidth : containerWidth,
      behavior: "smooth",
    });
  }
};

  return (
    <section className="projects" id="projects">
      <Container>
        <h2 className="text-center mb-4">Projects</h2>
        <div className="projects-wrapper">
          {/* <button className="arrow-btn arrow-left" onClick={() => scroll("left")}>
            <FaChevronLeft />
          </button> */}
          <div className="projects-container" ref={containerRef}>
            {projects.map((project, index) => (
              <div className="project-item" key={index}>
                <h4>{project.title}</h4>
                <p><strong>Description:</strong> {project.description}</p>
                <p><strong>Tools:</strong> {project.tools}</p>
                <p><strong>Features:</strong> {project.features}</p>
              </div>

            ))}
          </div>
          {/* <button className="arrow-btn arrow-right" onClick={() => scroll("right")}>
            <FaChevronRight />
          </button> */}
        </div>
      </Container>
    </section>
  );
};
