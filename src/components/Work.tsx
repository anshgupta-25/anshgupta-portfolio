import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "GhostCut - Where Evidence Meets Intelligence",
    category: "RAG-Based LLM Reliability System",
    tools: "Python, LangChain, RAG, Vector Databases",
    description: "Award-winning framework that secured 2nd Place at the DataForge'26 Hackathon (IIT Roorkee). Engineered to eliminate LLM hallucinations through advanced context compression, retrieval integrity auditing, and verified source attribution.",
    image: "/images/Ghostcut.png",
    link: "https://anshguptaa.in",
  },
  {
    title: "Nexus AI",
    category: "Intelligent Autonomous Agent",
    tools: "Python, Playwright, Selenium, LangChain, Ollama",
    description: "A privacy-first AI agent powered by local Ollama Mistral with a ChatGPT-style interface. Features smart recency scoring, Wikipedia-priority research, and CAPTCHA-free web search via Playwright. Built at the Hackxlerate Hackathon.",
    image: "/images/nexus.png",
    link: "https://anshguptaa.in",
  },
  {
    title: "Customer Service Chatbot - Smart Support Engine",
    category: "NLP-Powered Conversational Agent",
    tools: "Python, NLP, Flask, Git",
    description: "An intelligent conversational agent that automates customer interactions using natural language processing. Delivers high-accuracy responses with contextual awareness and seamless multi-turn dialogue handling.",
    image: "/images/chatbot.png",
    link: "https://github.com/anshgupta-25/customer-service-chatbot",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        {project.description && (
                          <p className="carousel-description">
                            {project.description}
                          </p>
                        )}
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
