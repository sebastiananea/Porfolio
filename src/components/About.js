import { FaReact, FaCss3Alt, FaLinkedin } from "react-icons/fa";
import {
  DiNodejs,
  DiPostgresql,
  DiGithubBadge,
  DiJavascript1,
} from "react-icons/di";
import { SiRedux, SiHtml5, SiWhatsapp } from "react-icons/si";
import { Button, Row, Col } from "react-bootstrap";
import "animate.css";
import wow from "wowjs";
import s from "./About.module.css";

export default function About({ vp }) {
  new wow.WOW().init();
  return (
    <Row
      className={`w-100 wow  animate__animated animate__fadeIn justify-space-around${
        vp > 720 ? "d-flex" : ""
      }`}
    >
      <Col lg={5} className="p-3 ">
        <h2 className="text-center">Sobre mi</h2>
        <p className="p-2">
          Con formación en desarrollo full stack, y un fuerte interes en el
          arte, la ciencia, y el avance tecnológico como herramienta para hacer
          del mundo un lugar mejor. Estudié la Licenciatura en Higiene y
          Seguridad durante 2 años, hasta que decidí cambiar a la Licenciatura
          en Ciencias de la Computación. Me gusta tocar la guitarra, jugar
          videojuegos y practicar voley y futbol.
        </p>
        <div className="text-center ">
          <Button className="bg-dark ">
            Ver perfil
            <FaLinkedin style={{ margin: 10, height: 35, width: 35 }} />
          </Button>
          <Button className="bg-dark">
            Contactar
            <SiWhatsapp style={{ margin: 10, height: 35, width: 35 }} />
          </Button>
        </div>
      </Col>
      <Col lg={5} className="text-center p-3">
        <h2 className="">Mi stack</h2>

        <div className="d-flex justify-content-around">
          <Col lg={3}>
            <span className={s.tech}>
              <SiHtml5 />
              <p>HTML</p>
            </span>
            <span className={s.tech}>
              <FaCss3Alt style={{ fontSize: 40 }} />
              <p>CSS</p>
            </span>
          </Col>

          <Col lg={3}>
            <span className={s.tech}>
              <DiGithubBadge style={{ fontSize: 40 }} />
              <p>Github</p>
            </span>
            <span className={s.tech}>
              <DiJavascript1 style={{ fontSize: 40 }} />
              <p>Javascript</p>
            </span>
          </Col>

          <Col lg={3}>
            <span className={s.tech}>
              <FaReact style={{ fontSize: 40 }} />
              <p>React</p>
            </span>
            <span className={s.tech}>
              <DiNodejs style={{ fontSize: 40 }} />
              <p>Node.js</p>
            </span>
          </Col>
          <Col lg={3}>
            <span className={s.tech}>
              <DiPostgresql style={{ fontSize: 40 }} />
              <p>PostgreSQL</p>
            </span>
            <span className={s.tech}>
              <SiRedux style={{ fontSize: 40 }} />
              <p>Redux</p>
            </span>
          </Col>
        </div>
      </Col>
    </Row>
  );
}
