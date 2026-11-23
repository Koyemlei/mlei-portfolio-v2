
import { useState } from "react";
import "./App.css";
import ProjectDetails from "./components/ProjectDetails";
import type { ProjectDetailsData } from "./components/ProjectDetails";
type Language = "fr" | "en";

const translations = {
  fr: {
    nav: ["Accueil", "À propos", "Formation", "Compétences", "Projets", "Contact"],
    hello: "Bonjour, je suis",
    field: "Information Technology & Networking",
    tagline: "Cybersécurité • Analyse de données • IA • Développement logiciel",
    intro: "Étudiant en systèmes d'information, passionné par les réseaux informatiques, la cybersécurité et la création de solutions technologiques innovantes.",
    viewProjects: "Découvrir mes projets",
    contactMe: "Me contacter",
    about: "À propos de moi",
    aboutText: "Je poursuis une formation en Computer Information Systems avec une concentration en Cyber Security Programming. Je développe des projets qui associent technologies de l'information, intelligence artificielle et développement logiciel.",
    education: "Formation universitaire",
    degree: "Bachelor of Science — En cours",
    major: "Spécialité",
    concentration: "Concentration",
    status: "Étudiant actuellement inscrit",
    skills: "Domaines de compétences",
    projects: "Projets professionnels",
    contact: "Contact",
    contactText: "Vous souhaitez discuter d'un projet, d'une opportunité professionnelle ou d'une collaboration ?",
    footer: "Tous droits réservés.",
    projectDescriptions: [
      "Plateforme de mobilité multimodale destinée aux transports urbains et interurbains en Côte d'Ivoire.",
      "Application de gestion des compteurs électriques prépayés, avec suivi et alertes de crédit faible.",
      "Projet de plateforme de cybersécurité assistée par intelligence artificielle, visant la détection des menaces, l'analyse des vulnérabilités et la surveillance réseau."
    ]
  },
  en: {
    nav: ["Home", "About", "Education", "Skills", "Projects", "Contact"],
    hello: "Hello, I'm",
    field: "Information Technology & Networking",
    tagline: "Cybersecurity • Data Analytics • AI • Software Development",
    intro: "Computer Information Systems student passionate about networking, cybersecurity, and building innovative technology solutions.",
    viewProjects: "Explore my projects",
    contactMe: "Contact me",
    about: "About Me",
    aboutText: "I am pursuing a degree in Computer Information Systems with a concentration in Cyber Security Programming. I develop projects combining information technology, artificial intelligence, and software development.",
    education: "Academic Education",
    degree: "Bachelor of Science — In Progress",
    major: "Major",
    concentration: "Concentration",
    status: "Currently Enrolled",
    skills: "Areas of Expertise",
    projects: "Professional Projects",
    contact: "Contact",
    contactText: "Interested in discussing a project, professional opportunity, or collaboration?",
    footer: "All rights reserved.",
    projectDescriptions: [
      "Multimodal mobility platform for urban and intercity transportation in Côte d'Ivoire.",
      "Prepaid electricity meter management application with monitoring and low-credit alerts.",
      "AI-assisted cybersecurity platform project focused on threat detection, vulnerability analysis, and network monitoring."
    ]
  }
};

const skillItems = [
  { icon: "🌐", title: "Information Technology & Networking" },
  { icon: "🛡️", title: "Cybersecurity" },
  { icon: "📊", title: "Data Analytics" },
  { icon: "🤖", title: "Artificial Intelligence" },
  { icon: "💻", title: "Software Development" }
];


const projectItems = [
  {
    name: "RYVO",
    image: "/images/ryvo-background.jpg",
    className: "ryvo",
    tech: "Flutter • Dart • Backend API"
  },
  {
    name: "MonCompteur CIE",
    image: "/images/moncompteur-background.jpg",
    className: "moncompteur",
    tech: "Flutter • FastAPI • PostgreSQL"
  },
  {
    name: "CyberGuard AI",
    image: "/images/cyberguard-background.jpg",
    className: "cyberguard",
    tech: "Cybersecurity • AI • Network Security"
  }
];

function App() {
  const [language, setLanguage] = useState<Language>("fr");

  const [selectedProject, setSelectedProject] =
    useState<ProjectDetailsData | null>(null);

  const t = translations[language];

  const projectDetails: ProjectDetailsData[] = [
    {
      name: "RYVO",
      image: "/images/ryvo-background.jpg",
      description: t.projectDescriptions[0],
      technologies: ["Flutter", "Dart", "Backend API"],
      features: language === "fr"
        ? [
            "Recherche de trajets interurbains en Car",
            "Sélection des sièges et réservation",
            "Transport urbain : Gbaka, Woro-woro et Taxi"
          ]
        : [
            "Intercity bus trip search",
            "Seat selection and booking",
            "Urban transport: Gbaka, Woro-woro and Taxi"
          ],
      status: language === "fr"
        ? "Application en cours de développement."
        : "Application under development."
    },
    {
      name: "MonCompteur CIE",
      image: "/images/moncompteur-background.jpg",
      description: t.projectDescriptions[1],
      technologies: ["Flutter", "FastAPI", "PostgreSQL"],
      features: language === "fr"
        ? [
            "Enregistrement et gestion des compteurs",
            "Suivi du crédit électrique",
            "Alertes de crédit faible",
            "Recharge automatique envisagée"
          ]
        : [
            "Meter registration and management",
            "Electricity credit monitoring",
            "Low-credit alerts",
            "Planned automatic recharging"
          ],
      status: language === "fr"
        ? "Application et backend en cours de développement."
        : "Application and backend under development."
    },
    {
      name: "CyberGuard AI",
      image: "/images/cyberguard-background.jpg",
      description: t.projectDescriptions[2],
      technologies: [
        "Cybersecurity",
        "Artificial Intelligence",
        "Network Security"
      ],
      features: language === "fr"
        ? [
            "Détection intelligente des cybermenaces envisagée",
            "Analyse des vulnérabilités envisagée",
            "Surveillance des réseaux envisagée",
            "Tableau de bord de sécurité envisagé"
          ]
        : [
            "Planned intelligent threat detection",
            "Planned vulnerability analysis",
            "Planned network monitoring",
            "Planned security dashboard"
          ],
      status: language === "fr"
        ? "Projet en phase de conception."
        : "Project in the design phase."
    }
  ];

  const sections = ["home", "about", "education", "skills", "projects", "contact"];

  return (
    <div className="app">
      <header className="header">
        <a href="#home" className="logo">MLEI<span>.</span></a>

        <nav className="navigation">
          {t.nav.map((name, index) => (
            <a href={`#${sections[index]}`} key={sections[index]}>
              {name}
            </a>
          ))}
        </nav>

        <button
          className="language-button"
          onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
        >
          {language === "fr" ? "EN" : "FR"}
        </button>
      </header>

      <main>
        <section className="hero" id="home">
          <div>
            <p className="eyebrow">{t.hello}</p>
            <h1>Koye <span>Mlei.</span></h1>
            <h2>{t.field}</h2>
            <p className="tagline">{t.tagline}</p>
            <p className="hero-description">{t.intro}</p>

            <div className="hero-actions">
              <a href="#projects" className="primary-button">
                {t.viewProjects} ↗
              </a>
              <a href="#contact" className="secondary-button">
                {t.contactMe}
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <div className="hero-symbol">M</div>
            <div className="visual-label">BUILD • SECURE • INNOVATE</div>
          </div>
        </section>

        <section className="section" id="about">
          <p className="section-kicker">01 / ABOUT</p>
          <h2>{t.about}</h2>
          <p className="section-description">{t.aboutText}</p>
        </section>

        <section className="section" id="education">
          <p className="section-kicker">02 / EDUCATION</p>
          <h2>{t.education}</h2>

          <div className="education-card">
            <div className="education-header">
              <div>
                <p className="eyebrow">UNIVERSITY</p>
                <h3>DeVry University</h3>
                <p>{t.degree}</p>
              </div>
              <span className="status-badge">{t.status}</span>
            </div>

            <div className="education-details">
              <div>
                <small>{t.major}</small>
                <strong>Computer Information Systems</strong>
              </div>
              <div>
                <small>{t.concentration}</small>
                <strong>Cyber Security Programming</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <p className="section-kicker">03 / EXPERTISE</p>
          <h2>{t.skills}</h2>

          <div className="skills-grid">
            {skillItems.map((skill) => (
              <article className="skill-card" key={skill.title}>
                <span className="skill-icon">{skill.icon}</span>
                <h3>{skill.title}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <p className="section-kicker">04 / PROJECTS</p>
          <h2>{t.projects}</h2>

          <div className="projects-grid">
            {projectItems.map((project, index) => (
              
<article
  className="project-card"
  key={project.name}
>
  <button
    type="button"
    className="project-card-button"
    onClick={() => setSelectedProject(projectDetails[index])}
    aria-label={
      language === "fr"
        ? `Découvrir le projet ${project.name}`
        : `Explore ${project.name}`
    }
  >

                
<div className={`project-visual ${project.className}`}>
  {project.image ? (
    <img
      src={project.image}
      alt={`${project.name} - Project visual`}
      className="project-image"
      loading="lazy"
    />
  ) : (
    <span aria-hidden="true">🛡️</span>
  )}
</div>

                <div className="project-content">
                  <p className="project-number">PROJECT 0{index + 1}</p>
                  <h3>{project.name}</h3>
                  <p>{t.projectDescriptions[index]}</p>
                  <div className="project-tech">{project.tech}</div>
                                </div>
              </button>
              </article>
            ))}
          </div>
        </section>

        

<section className="section contact-section" id="contact">
  <p className="section-kicker">05 / CONNECT</p>

  <h2>{t.contact}</h2>

  <p className="section-description">
    {t.contactText}
  </p>

  <div className="contact-links">
    <p className="contact-availability">
      {language === "fr"
        ? "Mes coordonnées professionnelles seront bientôt disponibles."
        : "My professional contact details will be available soon."}
    </p>
  </div>
</section>


      </main>

      
      <footer>
        <span>© {new Date().getFullYear()} MLEI.</span>
        <span>{t.footer}</span>
      </footer>

      {selectedProject && (
        <ProjectDetails
          project={
            projectDetails.find(
              (item) => item.name === selectedProject.name
            ) ?? selectedProject
          }
          language={language}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}


export default App;
