// import { Col, Container, Row } from "react-bootstrap";
// import { ProjectCard } from "./ProjectCard";
// import colorSharp2 from "../assets/img/color-sharp2.png";
// import projImg1 from "../assets/img/project-img1.png";
// import projImg2 from "../assets/img/project-img2.png";
// import projImg3 from "../assets/img/project-img3.png";
// import projImg4 from "../assets/img/project-img4.png";

// export const Projects = () => {
//   const projects = [
//     {
//       title: "Android App Development",
//       description:
//         "Android applications using XML and Kotlin with Firebase Firestore as the backend.Implemented user authentication (email/password), and CRUD functionalities (Create, Read, Update, Delete) for various use cases",
//       imgUrl: projImg1,
//     },
//     {
//       title: "Budget Management",
//       description:
//         "Designed and developed a budget management system using HTML, CSS, and PHP. The application allows users to track income and expenses, view financial summaries, and manage their budgets effectively through a simple, user-friendly interface.",
//       imgUrl: projImg2,
//     },
//     {
//       title: "Whatsapp Clone",
//       description:
//         "Designed a high-fidelity user interface of WhatsApp using Figma, focusing on replicating the chat layout, buttons, and screens to closely resemble the real app for UI/UX practice",
//       imgUrl: projImg3,
//     },
//     {
//       title: "PetCare App",
//       description:
//         "Designed and developed a pet care management app that allows pet owners to manage appointments, track vaccinations, and set reminders for feeding and grooming, all through a simple, user-friendly interface.",
//       imgUrl: projImg4,
//     },
//   ];

//   return (
//     <section className="project" id="projects">
//       <Container>
//         <Row>
//           <Col>
//             <h2>Projects</h2>
//             <Row>
//               {projects.map((project, index) => {
//                 return <ProjectCard key={index} {...project} />;
//               })}
//             </Row>
//           </Col>
//         </Row>
//       </Container>
//       <img className="background-image-right" src={colorSharp2} alt="decorative background" />
//     </section>
//   );
// };
