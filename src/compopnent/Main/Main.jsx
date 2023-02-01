import { useEffect } from "react";
import "./main.css";
import Container from "../HOC/Container";

const Main = ({ toggle, products }) => {
  useEffect(() => {
    console.log("use Effect");
    return () => {
      console.log("clean up js");
    };
  }, []);
  return (
    <Container>
      <h2 key={1}>BookStore</h2>
      <button key={2} className="btn-app" onClick={toggle}>
        show/hide
      </button>
    </Container>
  );
};

export default Main;
