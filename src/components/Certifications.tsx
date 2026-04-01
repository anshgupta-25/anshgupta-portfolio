import { useEffect, useRef } from "react";
import { MdArrowOutward } from "react-icons/md";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/Certifications.css";

gsap.registerPlugin(ScrollTrigger);

type Certification = {
  name: string;
  full?: string;
  link?: string;
  gamifiedBadge?: string;
};

type ProviderGroup = {
  provider: string;
  isAchievement?: boolean;
  certs: Certification[];
};

const certProviders: ProviderGroup[] = [
  {
    provider: "Microsoft",
    certs: [
      {
        name: "DP-900",
        full: "Azure Data Fundamentals",
        link: "https://www.credly.com/badges/82c6a2ff-03a6-446f-a9ba-724842ac7f4c/public_url",
      },
      {
        name: "AI-900",
        full: "Azure AI Fundamentals",
        link: "https://www.credly.com/badges/2c2520dd-a48e-449b-a6dd-89c5af89f47f/public_url",
      },
      {
        name: "AZ-900",
        full: "Azure Fundamentals",
        link: "https://www.credly.com/badges/9ca8454c-beac-4761-b823-7fdf354e82b3/public_url",
      },
    ],
  },
  {
    provider: "Oracle",
    certs: [
      {
        name: "Oracle AI Cloud Database Services 2025",
        full: "Certified Professional",
        link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=3DDEF78B5461522DFB2DF4DA6D2ADFE0C1D8A07457BBFB082DB6AC2A1854DA09",
      },
      {
        name: "Oracle Cloud Infrastructure 2025",
        full: "Certified AI Foundations Associate",
        link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=D9E8BCC70A9B093FBD4DD99B58B6D81EC8153A280475FB3A8382D64DC440A440",
      },
    ],
  },
  {
    provider: "Google Cloud",
    certs: [
      {
        name: "Arcade Legend",
        gamifiedBadge: "Legend Tier",
        full: "400+ labs, 50+ skill badges",
        link: "https://www.skills.google/public_profiles/be8828cf-964f-4286-98ab-0a1cf7685558",
      },
    ],
  },
  {
    provider: "Achievements",
    isAchievement: true,
    certs: [
      {
        name: "DataForge'26, IIT Roorkee",
        gamifiedBadge: "2nd Place Winner",
        full: "Secured 2nd Place by building 3 complete GenAI systems.",
        link: "/iit%20roorkee.pdf",
      },
      {
        name: "HackXlerate 2025",
        gamifiedBadge: "Top 7 Finalist",
        full: "Ranked among Top 7 from 1000+ participants.",
        link: "",
      },
    ],
  },
];

const Certifications = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const cards = containerRef.current.querySelectorAll(".cert-item");
    
    gsap.fromTo(
      cards,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div className="certs-section section-container" id="certifications" ref={containerRef}>
      <div className="certs-container">
        <h2>
          My Certifications <span>&</span>
          <br /> Achievements
        </h2>
        <div className="certs-grid">
          {certProviders.map((group, index) => (
            <div className={`cert-item ${group.isAchievement ? "cert-item-achievement" : ""}`} key={index}>
              {/* Gamified Scanline Effect */}
              <div className="cert-scanline"></div>
              
              {/* Premium sci-fi corner accents */}
              <div className="cert-corner"></div>

              <div className="cert-content">
                <div className="cert-header">
                  <span className="cert-provider">{group.provider}</span>
                  <div className="cert-line"></div>
                </div>

                <div className="cert-badge-list">
                  {group.certs.map((cert, j) => (
                    <div className="cert-badge" key={j}>
                      <div className="cert-badge-text">
                        <strong className="cert-code-highlight">{cert.name}</strong>
                        
                        {cert.gamifiedBadge && (
                          <div className="cert-gamified-badge">
                            <span className="cert-badge-dot"></span>
                            {cert.gamifiedBadge}
                          </div>
                        )}
                        
                        {cert.full && <span>{cert.full}</span>}
                      </div>

                      {cert.link && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noreferrer"
                          className="cert-badge-link"
                          data-cursor="disable"
                          title="View Credential"
                        >
                          <MdArrowOutward />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
