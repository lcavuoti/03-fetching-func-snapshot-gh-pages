import React, { useState, useEffect } from "react";
import "./App.css";
//http://react.tips/radio-buttons-in-reactjs/

function App() {
  // state hook
  const [checkedItems, setCheckedItems] = useState({}); //plain object as state
  let [numberOfGuests, setNumberOfGuests] = useState(0);
  const [options, setOptions] = useState(0);

  // Functions
  const handleChange = (event) => {
    const target = event.target;
    const id = event.target.id;
    const value = target.type === "radio" ? target.checked : target.value;
    const name = target.name;
    console.log(
      "target: " +
        target +
        "type: " +
        value +
        "name: " +
        name +
        "id " +
        id +
        "value: " +
        value
    );

    /*  alert(
      "id:" + id + "Target: " + target + "Value: " + value + "Name: " + name
    ); */
    setOptions({ [name]: value });
    console.log("value: " + value);
  };

  function handleRadioChange(event) {
    const target = event.target;
    const id = event.target.id;
    const value = target.type === "radio" ? target.checked : target.value;
    const name = target.name;
    console.log(
      "target: " +
        target +
        "type: " +
        value +
        "name: " +
        name +
        "id " +
        id +
        "value: " +
        value
    );

    /*  alert(
      "id:" + id + "Target: " + target + "Value: " + value + "Name: " + name
    ); */
    setOptions({ [name]: value });
    console.log("value: " + value);
  }

  function handleInputChange(event) {
    const target = event.target;
    const id = event.target.id;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    /* alert(
      "id:" + id + "Target: " + target + "Value: " + value + "Name: " + name
    ); */
    setCheckedItems({
      [name]: value,
    });
    console.log("value: " + value);
  }

  useEffect(
    () => {
      console.log("checkedItems: ", checkedItems);
    },
    [checkedItems]
  );

  return (
    <div className="App">
      <div className="App-header">
        <h3>Checkboxes & Radioboxes Example</h3>
      </div>
      <h4>Forms - Checkboxes</h4>
      <form>
        <div className="checkbox">
          <label>
            Is going 0:
            <input
              name="isGoing0"
              type="checkbox"
              checked={checkedItems[1]}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Is going 1:
            <input
              name="isGoing1"
              type="checkbox"
              checked={checkedItems[2]}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Is going 2:
            <input
              name="isGoing2"
              type="checkbox"
              checked={checkedItems[3]}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            //value={numberOfGuests}
            onChange={handleChange}
          />
        </label>

        <div className="radio">
          <label>
            <input
              type="radio"
              value={options}
              name="myradio"
              checked={true}
              onChange={handleRadioChange}
            />
            Option 1
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value={options}
              name="myradio"
              onChange={handleRadioChange}
            />
            Option 2
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              name="myradio"
              value={options}
              onClick={handleRadioChange}
            />
            Option 3
          </label>
        </div>
      </form>
    </div>
  );
}

class App1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
      options: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
  }

  handleRadioChange(event) {
    this.setState({ options: event.target.value });
    console.log("value: " + this.state.options);
  }

  handleInputChange(event) {
    const target = event.target;
    const id = event.target.id;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    /* alert(
      "id:" + id + "Target: " + target + "Value: " + value + "Name: " + name
    ); */
    this.setState({
      [name]: value,
    });
    console.log("value: " + value);
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
          />
        </label>

        <div className="radio">
          <label>
            <input
              type="radio"
              value={this.state.options}
              value="option1"
              name="myradio"
              checked={true}
              onClick={this.handleInputChange}
            />
            Option 1
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="option2"
              name="myradio"
              onClick={this.handleRadioChange}
            />
            Option 2
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              name="myradio"
              onClick={this.handleRadioChange}
              value="option3"
            />
            Option 3
          </label>
        </div>
      </form>
    );
  }
}
export default App;
