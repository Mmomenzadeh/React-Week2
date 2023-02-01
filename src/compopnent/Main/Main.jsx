import { useEffect, useRef,useContext } from "react";
import "./main.css";
import Container from "../HOC/Container";
import Authentication from "../Context/Authentication";

const Main = ({ toggle }) => {
  const btnRef = useRef(null);

  useEffect(() => {
    console.log("use Effect");
    // btnRef.current.toggle()

    return () => {
      console.log("clean up js");
    };
  }, []);

    const authContext =useContext(Authentication)
    console.log(authContext.isAuth);
  return (
    <Container>
      <h2 key={1}>BookStore</h2>
      <button ref={btnRef} key={2} className="btn-app" onClick={() => toggle()}>
        show/hide
      </button>
      {
        <button className="btn-app" onClick={authContext.logIn}>
          LogIn
        </button>
      }

      {authContext.isAuth ? <p>logIn</p> : <p>please log in</p>}
    </Container>
  );
};

// const Main = ({ toggle }) => {
//   const btnRef = useRef(null);

//   useEffect(() => {
//     console.log("use Effect");
//     // btnRef.current.toggle()

//     return () => {
//       console.log("clean up js");
//     };
//   }, []);
//   return (
//     <Container>
//       <h2 key={1}>BookStore</h2>
//       <button ref={btnRef} key={2} className="btn-app" onClick={() => toggle()}>
//         show/hide
//       </button>
//       <Authentication.Consumer>
//         {(context) => (
//           <button className="btn-app" onClick={context.logIn}>
//             LogIn
//           </button>
//         )}
//       </Authentication.Consumer>

//       <Authentication.Consumer>
//         {(context) => (context.isAuth ? <p>logIn</p> : <p>please log in</p>)}
//       </Authentication.Consumer>
//     </Container>
//   );
// };

export default Main;
