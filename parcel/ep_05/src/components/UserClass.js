import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {
      count1: 0,
      // count2:9,
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "ssdff",
      },
    };
    console.log(this.props.name + " Child component user class constructor");
  }

  async componentDidMount() {
    console.log(
      this.props.name + " Child component user class Component did mount",
    );
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    // console.log("user data github ",json);
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log(this.props.name + "Component did updated called");
  }

  componentWillUnmount() {
    console.log(this.props.name + " componentWillUnmount called");
  }
  render() {
    // const { name, location } = this.props;
    // const {count1,count2} = this.state;
    const { count1 } = this.state;
    const { name, location, avatar_url } = this.state.userInfo;
    console.log(name + " Child component user render");
    return (
      <div className="user-card">
        <h1>Count 1- class's state variable --- {count1}</h1>
        {/* <h1>Count 2- class's state variable --- {count2}</h1> */}
        <button
          onClick={() => {
            this.setState({
              count1: this.state.count1 + 1,
            });
          }}
        >
          Count Increase
        </button>
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @neeravisa</h4>
      </div>
    );
  }
}
export default UserClass;
