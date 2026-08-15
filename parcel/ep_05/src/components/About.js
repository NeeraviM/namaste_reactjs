import UserClass from "./UserClass";
import User from "./User";
import { Component } from "react";
// const About = () =>{
//     return (
//         <div>
//             <h1>About</h1>
//             <p>About the restaurant</p>
//             <UserClass name={"Neeravi from class comp"}
//             location = {"Bengaluru from class"}/>
//             {/* <User name={"Neeravi from functional"}/> */}
//         </div>
//     )
// }
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      about: "About class state about",
    };
    console.log("Parent (About) counstructor");
  }

  componentDidMount() {
    console.log("Parent(About) componentDidmount");
  }
  render() {
    console.log("Parent(About) render");
    return (
      <div>
        <h1>About</h1>
        <p>About the restaurant</p>
        {/* <UserClass
          name={"Neeravi from class"}
          location={"Bengaluru from class"}
        />
        <UserClass
          name={"Saravanan from class"}
          location={"Hyderabad from class"}
        /> */}
        <User namess={"Neeravi from functional child2"}/>
      </div>
    );
  }
}
export default About;
