// import { useState } from "react";

// export const Contact = () => {
//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     message: "",
//   });
//   const [status, setStatus] = useState({ message: "", success: false });
//   const [buttonText, setButtonText] = useState("Send");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setButtonText("Sending...");
//     try {
//       let response = await fetch("http://localhost:5000/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });
//       let result = await response.json();
//       setButtonText("Send");
//       setForm({ firstName: "", lastName: "", email: "", phone: "", message: "" });
//       setStatus({
//         message: result.code === 200 ? "Message sent!" : "Something went wrong.",
//         success: result.code === 200,
//       });
//     } catch (error) {
//       setButtonText("Send");
//       setStatus({ message: "Server error. Try again later.", success: false });
//     }
//   };

//   return (
//     <div className="contact-container" id="contact">
//       <h2>Contact Me</h2>
//       <div className="contact-content">
//         {/* Left side: contact info */}
//         <div className="contact-info">
//           <p>You are welcome to contact me through any of these channels:</p>
//            <p><strong>Email: <strong/></strong><a href="mailto:suminoushad101@gmail.com">suminoushad101@gmail.com</a></p>
//           <p><strong>LinkedIn: </strong><a href="https://www.linkedin.com/in/sumayya-v-n-09aaa629b/" target="_blank" rel="noopener noreferrer">Sumayya V N</a></p>
//           <p><strong>LinkedInGitHub: </strong><a href="https://github.com/SumayyaVN9" target="_blank" rel="noopener noreferrer">github.com/SumayyaVN9</a></p>
//         </div>

//         {/* Right side: form */}
//         <form onSubmit={handleSubmit} className="contact-form">
//           <div className="input-row">
//             <input
//               name="firstName"
//               placeholder="First Name"
//               value={form.firstName}
//               onChange={handleChange}
//               required
//             />
//             <input
//               name="lastName"
//               placeholder="Last Name"
//               value={form.lastName}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <input
//             name="email"
//             placeholder="Email"
//             value={form.email}
//             onChange={handleChange}
//             required
//           />
//           <input
//             name="phone"
//             placeholder="Phone"
//             value={form.phone}
//             onChange={handleChange}
//           />
//           <textarea
//             name="message"
//             placeholder="Message"
//             value={form.message}
//             onChange={handleChange}
//             required
//           />
//           <button type="submit">{buttonText}</button>
//           {status.message && (
//             <p className={status.success ? "status-success" : "status-failure"}>
//               {status.message}
//             </p>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// };

import { useState } from "react";

export const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState({ message: "", success: false });
  const [buttonText, setButtonText] = useState("Send");

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    try {
      // ✅ Use the Vercel API route (no localhost needed)
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await response.json();
      setButtonText("Send");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });

      setStatus({
        message: result.code === 200 ? "Message sent!" : "Something went wrong.",
        success: result.code === 200,
      });
    } catch (error) {
      console.error("Error sending message:", error);
      setButtonText("Send");
      setStatus({ message: "Server error. Try again later.", success: false });
    }
  };

  return (
    <div className="contact-container" id="contact">
      <h2>Contact Me</h2>
      <div className="contact-content">
        {/* Left side: contact info */}
        <div className="contact-info">
          <p>You are welcome to contact me through any of these channels:</p>
          <p>
            <strong>Email: </strong>
            <a href="mailto:suminoushad101@gmail.com">
              suminoushad101@gmail.com
            </a>
          </p>
          <p>
            <strong>LinkedIn: </strong>
            <a
              href="https://www.linkedin.com/in/sumayya-v-n-09aaa629b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sumayya V N
            </a>
          </p>
          <p>
            <strong>GitHub: </strong>
            <a
              href="https://github.com/SumayyaVN9"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/SumayyaVN9
            </a>
          </p>
        </div>

        {/* Right side: contact form */}
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="input-row">
            <input
              name="firstName"
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
              required
            />
            <input
              name="lastName"
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit">{buttonText}</button>

          {status.message && (
            <p className={status.success ? "status-success" : "status-failure"}>
              {status.message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};
