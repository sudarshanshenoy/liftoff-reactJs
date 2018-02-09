import React from "react";
import ResultBarChart from "./ResultBarChart";
import "./../App.css";

const Results = props => {
  return (
    <div>
      <ResultBarChart
        data={[
          { name: "Correct Answers", uv: props.correct },
          { name: "Wrong Answers", uv: props.wrong }
        ]}
      />
    </div>
  );
};

export default Results;
