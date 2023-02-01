import { useEffect , useRef } from "react";
import "./main.css";
import Container from "../HOC/Container";

const Main = ({ toggle, loginHandler ,isAuth}) => {
  const btnRef = useRef(null)

  useEffect(() => {
    console.log("use Effect");
    // btnRef.current.toggle()

    return () => {
      console.log("clean up js");
    };
  }, []);
  return (
    <Container>
      <h2 key={1}>BookStore</h2>
      <button ref={btnRef} key={2} className="btn-app" onClick={()=>toggle()}>
        show/hide
      </button>
      <button className="btn-app" onClick={loginHandler}>LogIn</button>
      
    {isAuth ? <p>logIn</p> : <p>please log in</p>}
    </Container>
  );
};

export default Main;
