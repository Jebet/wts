import React from "react";
// import { createStore, applyMiddleware } from "redux";
// import { Provider } from "react-redux";
// import thunk from "redux-thunk";
// import { logger } from "redux-logger";
import Select from "react-select";
import { Control, Form } from "react-redux-form";
// import makeAnimated from "react-select/lib/animated";
// import store from "../Store/Store";
import "../Daily/Daily.scss";
// import { colourOptions } from '../data';

// const initialUserState = {
//   firstName: "",
//   lastName: ""
// };

const options = [
  { value: "county 1", label: "county 1" },
  { value: "county 3", label: "county 2" },
  { value: "county 5", label: "county 3" }
];

const Ageoptions = [
  { value: "county 001", label: "15-18" },
  { value: "county 002", label: "18-20" },
  { value: "county 003", label: "21" }
];

// const getOptions = input => {
//   return fetch(`/users/${input}.json`)
//     .then(response => {
//       return response.json();
//     })
//     .then(json => {
//       return { options: json };
//     });
// };
class Daily extends React.Component {
  state = {
    selectedOption: null
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  render() {
    return (
      <div className="daily-container">
        <div className="col-md-8">
          <Form
            model="user"
            onSubmit={v => console.log(v)}
            className="dailyform"
          >
            <div className="col-md-8">
              <label>Name:</label>
              <Control.text
                model=".firstName"
                placeholder="Name"
                id="input-name"
                type="text"
              />
            </div>

            <div className="col-md-8">
              <div className="field">
                <label>Phone Number</label>
                <Control
                  model=".phone"
                  type="numerical"
                  placeholder="Number"
                  id="input-phonenumber"
                  style={{ width: "334px" }}
                />
              </div>
            </div>

            <div className="col-md-8">
              <div className="field">
                <label>Gender</label>
                <label className="male">
                  <Control.radio
                    model=".sex"
                    value="male"
                    style={{ top: "12px" }}
                  />{" "}
                  Male
                </label>
                <label className="female">
                  <Control.radio
                    model=".sex"
                    value="female"
                    style={{ top: "12px" }}
                  />{" "}
                  Female
                </label>
              </div>
            </div>

            <div className="col-md-8">
              <label>Select county?</label>
              <Select
                closeMenuOnSelect={false}
                defaultValue={[options[4], options[5]]}
                isMulti
                options={options}
              />
            </div>

            <div className="col-md-8">
              <div className="field">
                <label>Age Group:</label>
                <Select
                  closeMenuOnSelect={false}
                  defaultValue={[options[4], options[5]]}
                  isMulti
                  options={Ageoptions}
                />
              </div>
            </div>

            <div className="col-md-8">
              <div className="field">
                <label>Write your Message</label>
                <Control.textarea model=".notes" id="input-textarea" />
              </div>
            </div>

            <div className="upload">
              <button className="file-upload" style={{ left: "16px" }}>
                Upload
              </button>
            </div>

            <button
              type="submit"
              onClick={e => window.confirm("your message has been submitted")}
              style={{ left: "16px" }}
            >
              Submit
            </button>
            <Control.reset
              model="user"
              className="secondary"
              style={{ left: "20px" }}
            >
              Clear
            </Control.reset>
          </Form>
        </div>
      </div>
    );
  }
}

export default Daily;
