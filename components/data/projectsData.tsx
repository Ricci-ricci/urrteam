const Data = () => {
  const projects = [
    {
      id: 1,
      title: "Secure Authentication System",
      slug: "secure-auth-system",
      description:
        "A full authentication system with registration, login, JWT-based sessions, protected routes and role-based access control.",
      longDescription:
        "This project demonstrates how authentication and authorization work in a modern web application. It includes password hashing, JWT handling, protected API routes, and basic security hardening against common attacks such as XSS and brute-force attempts.",
      techStack: [
        "Next.js",
        "React",
        "Node.js",
        "JWT",
        "MongoDB",
        "Tailwind CSS",
      ],
      features: [
        "User registration & login",
        "JWT authentication",
        "Protected routes",
        "Role-based access control",
        "Form validation & error handling",
      ],
      securityFocus: [
        "Password hashing",
        "JWT expiration & validation",
        "XSS mitigation",
        "Secure API endpoints",
      ],
      category: "Full-Stack / Security",
      status: "Completed",
      github: "https://github.com/username/secure-auth-system",
      liveDemo: null,
      image: "/image/Test.jpg",
      createdAt: "2025-02",
    },

    {
      id: 2,
      title: "Personal Wallet & Transaction Tracker",
      slug: "wallet-tracker",
      description:
        "A personal finance dashboard that allows users to track income, expenses and transaction history.",
      longDescription:
        "This project focuses on data handling, state management and clean UI. Users can add, edit and delete transactions, view balances, and visualize spending patterns.",
      techStack: ["React", "JavaScript", "LocalStorage", "Tailwind CSS"],
      features: [
        "Add income & expenses",
        "Transaction history",
        "Balance calculation",
        "Local data persistence",
      ],
      securityFocus: ["Input validation", "Safe local storage usage"],
      category: "Frontend / Logic",
      status: "Completed",
      github: "https://github.com/username/wallet-tracker",
      liveDemo: null,
      image: "/image/Test.jpg",
      createdAt: "2025-01",
    },

    {
      id: 3,
      title: "Cybersecurity Learning Lab",
      slug: "cybersecurity-lab",
      description:
        "A learning environment showcasing common web vulnerabilities and how to mitigate them.",
      longDescription:
        "This project simulates insecure scenarios such as XSS, weak authentication and misconfigured APIs. Each vulnerability is documented with an explanation and a secure fix.",
      techStack: ["Node.js", "Express", "HTML", "JavaScript", "Burp Suite"],
      features: [
        "Vulnerability simulation",
        "Attack demonstration",
        "Secure code fixes",
        "Technical documentation",
      ],
      securityFocus: [
        "OWASP Top 10",
        "XSS",
        "Broken authentication",
        "Insecure direct object references",
      ],
      category: "Cybersecurity",
      status: "In Progress",
      github: "https://github.com/username/cyber-lab",
      liveDemo: null,
      image: "/image/Test.jpg",
      createdAt: "2025-03",
    },

    {
      id: 4,
      title: "Developer Portfolio Website",
      slug: "developer-portfolio",
      description:
        "A personal portfolio website to showcase projects, skills and experience.",
      longDescription:
        "This website presents my development journey, technical skills and major projects. It focuses on performance, accessibility and clean design.",
      techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
      features: [
        "Project showcase",
        "Responsive design",
        "SEO optimization",
        "Smooth animations",
      ],
      securityFocus: ["No sensitive data exposure", "Secure external links"],
      category: "Frontend",
      status: "Completed",
      github: "https://github.com/username/portfolio",
      liveDemo: "https://yourdomain.com",
      image: "/image/Test.jpg",
      createdAt: "2025-02",
    },
  ];
  return projects;
};
export default Data;
