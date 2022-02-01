import "bootstrap/dist/css/bootstrap.min.css";
import { Row } from "react-bootstrap";

import { proj } from "../data";
import MyCard from "./MyCard";

export default function MyCards(props) {
  return (
    <Row xs={1} md={3} className="g-4 mt-5 w-100">
      {proj.map(function (p) {
        return (
          <MyCard
            title={p.title}
            description={p.description}
            img={p.img}
            url={p.url}
            github={p.github}
          />
        );
      })}
    </Row>
  );
}
