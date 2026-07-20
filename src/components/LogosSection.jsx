import "./LogosSection.css";

import BootstrapLogo from "../assets/bootstrape.png";
import FigmaLogo from "../assets/figma.png";
import OpenAiLogo from "../assets/openAi.png";
import JavaScriptLogo from "../assets/javascript.png";
import KotlinLogo from "../assets/kotlin.png";
import PythonLogo from "../assets/Python.png";
import ReactLogo from "../assets/react.png";
import ReduxLogo from "../assets/redux.png";
import TailwindLogo from "../assets/tailwind.png";
import TypeScriptLogo from "../assets/typescript.png";
import FirebaseLogo from "../assets/firebase.png";
import NodeJsLogo from "../assets/nodeJs.png";
import MongoDBLogo from "../assets/mongodb.png";
import MySqlLogo from "../assets/mysql.png";

const clientLogos = [
  { src: ReactLogo, alt: "React" },
  { src: BootstrapLogo, alt: "Bootstrap", sizeClass: "logo-item--boost" },
  { src: ReduxLogo, alt: "Redux" },
  { src: TailwindLogo, alt: "Tailwind CSS", sizeClass: "logo-item--boost" },
  { src: JavaScriptLogo, alt: "JavaScript" },
  { src: KotlinLogo, alt: "Kotlin", sizeClass: "logo-item--boost" },
  { src: TypeScriptLogo, alt: "TypeScript" },
  { src: NodeJsLogo, alt: "NodeJS", sizeClass: "logo-item--boost"  },
  { src: FirebaseLogo, alt: "Firebase" , sizeClass: "logo-item--boost" },
  { src: MongoDBLogo, alt: "MongoDB" , sizeClass: "logo-item--boost" },
  { src: MySqlLogo, alt: "MySQL" , sizeClass: "logo-item--boost" },
  { src: FigmaLogo, alt: "Figma" },
  { src: OpenAiLogo, alt: "OpenAI" },
  { src: PythonLogo, alt: "Python" },
];

const LogosSection = () => {
  // Duplicate once for a seamless infinite scroll loop (same idea as Testimonials).
  const scrollingLogos = [...clientLogos, ...clientLogos];

  return (
    <section id="clients" className="logos-section">
      <div className="container">
        <div className="logos-marquee" aria-label="Client logos">
          <div className="logos-track">
            {scrollingLogos.map((logo, index) => (
              <div
                className={`logo-item ${logo.sizeClass || ""}`}
                key={`${logo.alt}-${index}`}
              >
                <img src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogosSection;

