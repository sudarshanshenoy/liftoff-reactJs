import React from "react";
import FlatButton from "material-ui/FlatButton";
import { RadioButton, RadioButtonGroup } from "material-ui/RadioButton";
import { Scrollbars } from "react-custom-scrollbars";
import "./../App.css";

const Test = props => {

  let out = props.questions.map((data, index) => {
    return (
      <div
        key={index}
        style={{
          backgroundColor:
            props.answers[index] === 0 && props.issubmitclicked
              ? "#d3796e"
              : "#fff",
          color:
            props.answers[index] === 0 && props.issubmitclicked ? "#fff" : "",
          width: "95%",
          minHeight: 130,
          margin: 15
        }}
      >
        <div style={{ padding: 10 }}>
          <h4 style={{ marginBottom: 5, marginTop: 0 }}>
            Question {index + 1}
          </h4>
          <div
            style={
              props.wronganswers[index] === 1 && props.issubmitted
                ? { color: "red", fontSize: 14 }
                : { fontSize: 14 }
            }
          >
            {data.question}
          </div>
          <h5 style={{ marginBottom: 0, marginTop: 10 }}>Options:</h5>
          <RadioButtonGroup
            onChange={(event, value) => props.handleAnswer(value, index)}
            className="flexContainer"
            style={{ marginTop: 5, marginLeft: 20, minWidth: 150 }}
            valueSelected={props.answers[index]}
            name="shipSpeed"
          >
            <RadioButton
              className="flex1"
              value={1}
              label={data.options[0]}
              iconStyle={{ height: 20, width: 20, marginRight: 5 }}
              style={{
                marginBottom: 5,
                fontSize: 12,
                width: "30%",
                minWidth: 180
              }}
            />
            <RadioButton
              className="flex1"
              value={2}
              label={data.options[1]}
              iconStyle={{ height: 20, width: 20, marginRight: 5 }}
              style={{
                marginBottom: 5,
                fontSize: 12,
                width: "30%",
                minWidth: 180
              }}
            />
            <RadioButton
              className="flex1"
              value={3}
              label={data.options[2]}
              iconStyle={{ height: 20, width: 20, marginRight: 5 }}
              style={{
                marginBottom: 5,
                fontSize: 12,
                width: "30%",
                minWidth: 180
              }}
            />
          </RadioButtonGroup>
        </div>
      </div>
    );
  });
  return (
    <div className="mainTest">
      <p
        style={{
          color:
            !props.allanswered && props.issubmitclicked ? "#d3796e" : "#fff",
          margin: 0,
          fontSize: 14
        }}
      >
        Please answer all the questions. Scroll to find more questions{" "}
      </p>
      <Scrollbars
        style={{
          border: "1px solid #d3d3d3",
          backgroundColor: "#e1e1e1",
          height: 400
        }}
      >
        {out}
      </Scrollbars>
      <div style={{ margin: 20 }} className="flexContainer">
        <div className="flex1 flatButton">
          <FlatButton
            backgroundColor="#a4c639"
            style={{ width: "90%" }}
            labelStyle={{ color: "#fff", fontWeight: 600 }}
            hoverColor="#8AA62F"
            label="SUBMIT"
            onClick={props.submittest}
          />
        </div>
        <div className="flex1 flatButton">
          <FlatButton
            backgroundColor="#dd4b39"
            style={{ width: "90%" }}
            hoverColor="#c74434"
            labelStyle={{ color: "#fff", fontWeight: 600 }}
            label="CLEAR"
            onClick={props.cleartest}
          />
        </div>
      </div>
    </div>
  );
};

export default Test;
