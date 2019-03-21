import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { logger } from "redux-logger";
import { Field, Control, Form, combineForms } from "react-redux-form";
import store from "../Store/Store";
import "../Daily/Daily.scss";

const initialUserState = {
  firstName: "",
  lastName: ""
};

class Daily extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="col-md-12">
          <Form
            model="user"
            onSubmit={v => console.log(v)}
            className="dailyform"
          >
            <div className="col-md-6">
              <div className="field">
                <label>Name:</label>
                <Control.text
                  model=".firstName"
                  placeholder="First Name"
                  id="input-name"
                  type="text"
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="field">
                <label>Phone Number</label>
                <Control
                  model=".phone"
                  type="numerical"
                  placeholder="Phone Number"
                  id="input-phonenumber"
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="field">
                <label>What is your Gender?</label>
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

            <div className="col-md-6">
              <div className="field">
                <label>Which county are you from?</label>
                <Control.select model=".favoriteColor" id="input-county">
                  <option value="" />
                  <option value="ff0000">county #1</option>
                  <option value="00ff00">county #2</option>
                  <option value="0000ff">county #3</option>
                </Control.select>
              </div>
            </div>

            <div className="col-md-6">
              <div className="field">
                <label>Write your Message</label>
                <Control.textarea model=".notes" id="input-textarea" />
              </div>
            </div>

            <button
              type="submit"
              onClick={e => window.confirm("your message has been submitted")}
              style={{ left: "10px" }}
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
