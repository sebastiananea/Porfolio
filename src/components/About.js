import { FaReact, FaCss3Alt, FaLinkedin } from "react-icons/fa";
import {
  DiNodejs,
  DiPostgresql,
  DiGithubBadge,
  DiJavascript1,
} from "react-icons/di";
import { SiRedux, SiHtml5, SiWhatsapp } from "react-icons/si";
import { Button } from "react-bootstrap";
import "animate.css";
import wow from "wowjs";
import s from "./About.module.css";

export default function About() {
  new wow.WOW().init();
  return (
    <div className="d-flex justify-content-around  m-5 pt-5 wow  animate__animated animate__fadeIn">
      <div className="text-center w-50">
        <h2 className="text-center m-3">Sobre mi</h2>
        <p className="m-4">
          Con formación en desarrollo full stack, y un fuerte interes en el
          arte, la ciencia, y el avance tecnológico como herramienta para hacer
          del mundo un lugar mejor. Estudié la Licenciatura en Higiene y
          Seguridad durante 2 años, hasta que decidí cambiar a la Licenciatura
          en Ciencias de la Computación. Me gusta tocar la guitarra, jugar
          videojuegos y practicar voley y futbol.
        </p>
        <Button className="bg-dark">
          Ver perfil
          <FaLinkedin style={{ margin: 10, height: 35, width: 35 }} />
        </Button>
        <Button className="bg-dark m-3">
          Contactar
          <SiWhatsapp style={{ margin: 10, height: 35, width: 35 }} />
        </Button>
      </div>
      <div className="text-center w-50">
        <h2 className="text-center m-3">Mi stack</h2>

        <div className="container text-center d-flex justify-content-around mt-4 mb-3">
          <span className={s.tech}>
            <SiHtml5 />
            <p>HTML</p>
          </span>
          <span className={s.tech}>
            <FaCss3Alt style={{ fontSize: 40 }} />
            <p>CSS</p>
          </span>
          <span className={s.tech}>
            <DiGithubBadge style={{ fontSize: 40 }} />
            <p>Github</p>
          </span>
          <span className={s.tech}>
            <DiJavascript1 style={{ fontSize: 40 }} />
            <p>Javascript</p>
          </span>
        </div>
        <div className="container text-center d-flex justify-content-around mt-2 mb-3">
          <span className={s.tech}>
            <FaReact style={{ fontSize: 40 }} />
            <p>React</p>
          </span>
          <span className={s.tech}>
            <DiNodejs style={{ fontSize: 40 }} />
            <p>Node.js</p>
          </span>
          <span className={s.tech}>
            <DiPostgresql style={{ fontSize: 40 }} />
            <p>PostgreSQL</p>
          </span>
          <span className={s.tech}>
            <SiRedux style={{ fontSize: 40 }} />
            <p>Redux</p>
          </span>
        </div>
      </div>
    </div>
  );
}
