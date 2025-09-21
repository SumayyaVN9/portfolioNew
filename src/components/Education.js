export const Education = () => {
  const education = [
    { course: "MVoc Software Application Development", name: "Cusat", year: "2024-2026" },
    { course: "BCA", name: "MES College Marampally", year: "2021-2024" },
    { course: "Computer science", name: "Holy Ghost Thottakkattukara", year: "2019-2021" },
  ];

  return (
    <div className="education-container">
      <h1>Education</h1>
      <ul>
        {education.map((edu, index) => (
          <li key={index}>
            <strong>{edu.course}</strong>
            <span>{edu.name}</span>
            <span>{edu.year}</span>
            {/* <em>{edu.year}</em> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

