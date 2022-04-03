import { event } from "jquery";
import React, { useState, useEffect } from "react";
import PlayerApi from "./api";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Greeting />
      <Greeting1 />
      <Welcome name="Luigi" />
      <Greeting2 />
    </div>
  );
}

//export default
class Greeting extends React.Component {
  constructor(props) {
    super();
    this.state = {
      name: "Mary",
      surname: "Poppins",
      width: window.innerWidth,
    };

    // bindings
    //this.handleChangeName = this.handleChangeName.bind(this);
    //this.handleChangeSurname = this.handleChangeSurname.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }
  // LifeCycle Methods
  componentDidMount() {
    document.title = this.state.name + " " + this.state.surname;
    window.addEventListener("resize", this.handleResize);
  }

  componentDidUpdate() {
    document.title = this.state.name + " " + this.state.surname;
  }

  // abruume!
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }
  // this will bind tooo!
  handleChangeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleChangeSurname(e) {
    this.setState({
      surname: e.target.value,
    });
  }
  handleResize() {
    this.setState({
      width: window.innerWidth,
    });
  }
  render() {
    return (
      <div className="container">
        <h1>Greeting Comp</h1>
        <div className="row">
          <label>Name: </label>
          <input
            className="form-control"
            type="text"
            value={this.state.name}
            onChange={this.handleChangeName}
          />
        </div>
        <div className="row">
          <label>Name: </label>
          <input
            className="form-control"
            type="text"
            value={this.state.surname}
            // this will bind toooo!
            onChange={this.handleChangeSurname.bind(this)}
          />
        </div>
        <div className="row">
          <label>Width:</label>
          <input
            className="form-control"
            type="text"
            value={this.state.width}
            onChange={this.handleResize}
          />
        </div>
      </div>
    );
  }
}
// props
function Welcome(props) {
  return <h1>Welcome, {props.name}</h1>;
}

// functional component with hooks
//export default
function Greeting1() {
  // using the state
  /* const results = useState("");
  const inputText = results[0];
  const setInputText = results[1];
   */
  const [name, setName] = useState("Mary");
  const [surname, setSurname] = useState("Poppins");
  // window innerWidth
  const [width, setWidth] = useState(window.innerWidth);
  // using context some global settings/variables later on
  //using effects mount and update together
  useEffect(() => {
    document.title = name + " " + surname;
  });

  useEffect(() => {
    //const handleResize = () => setWidth(Window.innerWidth);
    console.log("uE im mount---------");
    window.addEventListener("resize", handleResize);
    // optionally you can return a function for clean up
    return () => {
      console.log("uE im remove---------");
      window.removeEventListener("resize", handleResize);
    };
  });

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeSurname(e) {
    setSurname(e.target.value);
  }

  function handleResize(e) {
    setWidth(window.innerWidth);
  }

  return (
    <div className="container">
      <div className="row">
        <h1>Greeting function</h1>

        <label>Name: </label>
        <input
          className="form-control"
          type="text"
          value={name}
          onChange={handleChangeName}
        />
      </div>
      <div className="row">
        <label>Surname: </label>
        <input
          className="form-control"
          type="text"
          value={surname}
          onChange={handleChangeSurname}
        />
        <div className="row">
          <label>Window Width: </label>
          <input
            className="form-control"
            type="text"
            value={width}
            onChange={handleResize}
          />
        </div>
      </div>
    </div>
  );
}

// functional component with hooks, extrating functions
// and make own custom hooks
//export default
function Greeting2() {
  // using the custom hooks !!!
  const name = useFormInput("Mary");
  //const [name, setName] = useFormInput("Mary");
  const surname = useFormInput("Poppins");
  // custom hooks extracting the function as useF.... potentially stateful
  const width = useWindowWidth();
  // custom hook wih params, now objects so .value
  useDocumentTitle(name + surname.value);
  // testint the cart api
  const [items, setItems, cartApi] = useCartApi([
    { number: 1, name: "Ben Blocker", position: "G" },
    { number: 2, name: "Dave Defender", position: "D" },
    { number: 3, name: "Sam Sweeper", position: "D" },
    { number: 4, name: "Matt Midfielder", position: "M" },
    { number: 5, name: "William Winger", position: "M" },
    { number: 6, name: "Filippe  Forward", position: "F" },
    { number: 7, name: "Ben Blocker", position: "G" },
    { number: 11, name: "James Bond", position: "007" },
    { number: 12, name: "Lou Bond", position: "003" },
  ]);

  return (
    <div className="container">
      <div className="row">
        <h1>Greeting function 2</h1>
        <label>Name: </label>
        <input
          className="form-control"
          type="TEXT"
          value={name.value}
          onChange={name.onChange}
          onClick={name.onClick}
        />
      </div>
      <div className="row">
        <label>Surname: </label>
        <input className="form-control" type="text" {...surname} />
        <div className="row">
          <label>Window Width: </label>
          <input
            className="form-control"
            type="text"
            value={width}
            readOnly
            //onChange={handleResize}
          />
        </div>
        <div>
          <h4 className="display-4">Full Roster 2020</h4>
          <ul>
            {/* PlayerApi.all().map((p) => (
              <li key={p.key}>
                {p.number + " "}
                {p.name}
              </li>
            )) */}
            {
              //PlayerApi.add({ number: 8, name: "james bond", position: "007" })
            }
            {/* PlayerApi.all().map((p) => (
              <li key={p.key}>
                {p.number + " "}
                {p.name}
              </li>
            )) */}
            <div className="row">
              {cartApi.all().map((p) => (
                <li key={p.key}>
                  {p.number + " "}
                  {p.name + " "}
                  {p.position}
                  <input
                    className="form-control"
                    type="button"
                    value={"+"}
                    //onChange={() => cartApi.handleChange(p)}
                    onClick={() => cartApi.handleClick(p)}
                    /* onClick={() =>
                      cartApi.add({
                        number: p.number,
                        name: p.name,
                        position: p.position,
                      })
                    } */
                  />
                  <input
                    className="form-control"
                    type="text"
                    value={name.value}
                    //onChange={() => cartApi.handleChange(p)}
                    //onClick={() => cartApi.handleClick(p)}
                    //onClick={name.onClick}
                    /* onClick={() =>
                      cartApi.add({
                        number: p.number,
                        name: p.name,
                        position: p.position,
                      })
                    } */
                  />
                </li>
              ))}
            </div>
            {/* items.push({
                number: 99, name: "hugo", position: "Block"
               */
            /* cartApi.add({
                number: 99,
                name: "hugo",
                position: "Block",
              }) */}

            {/* cartApi.all().map((p) => (
              <li key={p.key}>
                {p.number + " "}
                {p.name}
              </li>
            )) */}
            {<li> {/* cartApi.get(99).name */}</li>}
          </ul>
        </div>
      </div>
    </div>
  );
}

// define custom hooks - functions !
function useFormInput(initialValue) {
  // state here
  const [value, setValue] = useState(initialValue);

  // function here
  function handleChange(e) {
    console.log("onChange: type:" + e.type);
    console.log("onChange: value:" + e.target.value);
    console.log("onChange: name:" + e.target.value.name);
    console.log("onChange: bubbles:" + e.nativeEvent);
    setValue(e.target.value);
  }

  function handleClick(e) {
    console.log("onClick: type:" + e.type);
    console.log("onClick: value:" + e.target.value);
    console.log("onClick: bubbles:" + e.nativeEvent);

    setValue(e.target.value);
  }
  // return an object with a value and a function
  return {
    value,
    onChange: handleChange,
    onClick: handleClick,
  };
}

function useDocumentTitle(title) {
  //using effects mount and update together
  useEffect(() => {
    document.title = title;
  });
}

function useWindowWidth() {
  // window innerWidth
  const [width, setWidth] = useState(window.innerWidth);

  // or as function in a function
  function handleResize() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    // the function is defined here
    //const handleResize = () => setWidth(Window.innerWidth);
    // LifeCycle registers an eventListener on resize of the window
    window.addEventListener("resize", handleResize);
    // optionally you can return a function for clean up
    // thi will be run when the hook is terminated
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  // we need to return the current width since it is a function
  return width;
}

function useCartApi(initialValue) {
  // a simple data api that will be using to get players from
  // foe our componentes. on a real webseite we would use a
  // more robust data fetching solution.
  // state here
  const [items, setItems] = useState(initialValue);
  useEffect(() => {
    console.log("into useEffect");
  });
  const cartApi = {
    /* items: [
      { number: 1, name: "Ben Blocker", position: "G" },
      { number: 2, name: "Dave Defender", position: "D" },
      { number: 3, name: "Sam Sweeper", position: "D" },
      { number: 4, name: "Matt Midfielder", position: "M" },
      { number: 5, name: "William Winger", position: "M" },
      { number: 6, name: "Filippe  Forward", position: "F" },
      { number: 7, name: "Ben Blocker", position: "G" },
    ], */
    all: function () {
      return items;
    },
    get: function (id) {
      const isItem = (i) => i.number === id;
      return items.find(isItem);
    },
    add: function (p) {
      items.push(p);
    },
    set: function (items) {
      //items.add(items);
    },
    handleChange: function handleChange(p) {
      console.log("onChange: number:" + p.number);
      console.log("onChange: name:" + p.name);
      console.log("onChange: position:" + p.position);

      setItems(items + p);
    },
    handleClick: function handleClick(p) {
      console.log("onChange: number:" + p.number);
      console.log("onChange: name:" + p.name);
      console.log("onChange: position:" + p.position);
      cartApi.add(p);
      setItems(p);
    },
  };

  // return an array with a value and a function
  return [items, setItems, cartApi];
  // return an object with a value and a function
  //return cartApi;
}
