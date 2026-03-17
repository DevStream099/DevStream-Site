import { useEffect, useRef, useState } from "react";
import "./Team.css";

 import umarImg from "../../src/assets/Umar.png";
import maryamImg from "../../src/assets/Maryam.jpg";

const teamMembers = [
  {
    id: 1,
    name: "Muhammad Umar",
    role: "CEO",
    image: umarImg,
    gradient: "linear-gradient(135deg, #032dec, #0a63b7, #9f989b)",
    facebook: "https://www.facebook.com/profile.php?id=100032857386986",
    instagram: "https://www.instagram.com/o_m_e_r_099/",
    linkedin: "https://www.linkedin.com/in/muhammad-umar-7547b4156/",
  },
  {
    id: 2,
    name: "Maryam Shakir",
    role: "CTO",
    image: maryamImg,
    gradient: "linear-gradient(135deg, #f093fb, #f5576c)",
    facebook:
      "https://www.facebook.com/maryam.shakir.750?rdid=YV6NFuf460JXdZiI&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1KTnMPNZhT%2F#",
    instagram: "https://www.instagram.com/mryamshakir",
    linkedin: "https://www.linkedin.com/in/maryam-shakir-a06426296/",
  },
];

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className={`team section ${isVisible ? "visible" : ""}`}
      ref={sectionRef}
    >
      <div className="container">
        <div className="section-title">
          <h2>Meet Our Leadership</h2>
          <p>
            Our experienced team is dedicated to delivering exceptional results
            for every client.
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div
              className="team-card"
              key={member.id}
              style={{ "--delay": `${index * 0.15}s` }}
            >
              <div className="team-card-inner">
                <div className="team-avatar-wrapper">
                  <div
                    className="team-avatar"
                    style={{ background: member.gradient }}
                  >
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="team-avatar-img"
                      />
                    ) : (
                      <span>{member.initials}</span>
                    )}

                    <div
                      className="avatar-glow"
                      style={{ background: member.gradient }}
                    ></div>
                  </div>

                  <div
                    className="avatar-ring"
                    style={{ borderColor: "rgba(102, 126, 234, 0.3)" }}
                  ></div>
                </div>

                <h3>{member.name}</h3>
                <span className="team-role">{member.role}</span>

                <div className="team-socials">
                  {/* Facebook */}
                  <a
                    href={member.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="social-link"
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="social-link"
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm4.25 5a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.75-2.25a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="social-link"
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
