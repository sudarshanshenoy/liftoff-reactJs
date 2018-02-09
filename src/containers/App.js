import React, { Component } from "react";
import { connect } from "react-redux";
import Test from "../components/Test";
import Results from "../components/Results";

import { Card } from "material-ui/Card";
import { loadtestquestions } from "../actions/test";
import { submittest } from "../actions/test";
import { cleartest } from "../actions/test";
import { testdata } from "./../Data.js";
import "../App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      answers: [],
      submitclicked: false,
      submitted: false,
      wronganswers: [],
      allanswered: false
    };
  }

  componentDidMount() {
    let temp = [];
    for (let i = 0; i < testdata.actualanswers.length; i++) {
      temp[i] = 0;
    }
    this.setState({ answers: temp, wronganswers: temp });
    this.props.loadtestquestions(testdata);
  }

  handleAnswer = (value, index) => {
    let temp = [...this.state.answers];
    temp[index] = value;
    this.setState({ answers: temp });
  };

  submittest = () => {
    let correct = 0;
    let wrong = 0;
    let allanswered = true;
    let wronganswerstemp = [];
    for (let i = 0; i < this.props.test.actualanswers.length; i++) {
      wronganswerstemp[i] = 0;
      if (!this.state.answers[i] > 0) {
        allanswered = false;
      }
      if (this.props.test.actualanswers[i] === this.state.answers[i]) {
        correct++;
      } else {
        wronganswerstemp[i] = 1;
        wrong++;
      }
    }
    if (allanswered) {
      this.setState({
        wronganswers: wronganswerstemp,
        submitted: true,
        allanswered: true
      });
      this.props.submittest(correct, wrong);
    } else {
      this.setState({ submitclicked: true, allanswered: false });
    }
  };

  cleartest = () => {
    this.props.cleartest();
    let temp = [];
    for (let i = 0; i < this.props.test.actualanswers.length; i++) {
      temp[i] = 0;
    }
    this.setState({
      answers: temp,
      wronganswers: temp,
      allanswered: false,
      submitted: false,
      submitclicked: false
    });
  };

  render() {
    return (
      <Card className="mainCard">
        <h1 className="mainTitle">Cricket Trivia</h1>
        <div className="flexContainer">
          <div className="flex1">
            <Test
              allanswered={this.state.allanswered}
              handleAnswer={this.handleAnswer}
              issubmitted={this.state.submitted}
              issubmitclicked={this.state.submitclicked}
              cleartest={this.cleartest}
              wronganswers={this.state.wronganswers}
              answers={this.state.answers}
              submittest={this.submittest}
              questions={this.props.test.questions}
            />
          </div>
          <div className="flex1">
            <Results
              correct={this.props.test.correct}
              wrong={this.props.test.wrong}
            />
          </div>
        </div>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    test: state.test
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadtestquestions: testdata => {
      dispatch(loadtestquestions(testdata));
    },
    submittest: (correct, wrong) => {
      dispatch(submittest(correct, wrong));
    },
    cleartest: () => {
      dispatch(cleartest());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
