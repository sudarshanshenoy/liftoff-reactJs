import React from "react";
import { BarChart, Bar, Cell, XAxis, YAxis } from "recharts";

import "./../App.css";

const ResultBarChart = props => {
  return (
    <div>
      <BarChart
        width={450}
        height={410}
        data={props.data}
        margin={{ top: 15, right: 20, left: 0, bottom: 0 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="uv" onClick={this.handleClick}>
          {props.data.map((entry, index) => (
            <Cell
              cursor="pointer"
              fill={entry.name === "Correct Answers" ? "#82ca9d" : "#e06b5d"}
              key={`cell-${index}`}
            />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default ResultBarChart;

// const {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts;
// const TinyBarChart = React.createClass({
// 	getInitialState() {
//   	return {
//     	data: [
//         {name: 'Page A', uv: 4000},
//         {name: 'Page B', uv: 3000},
// 			],
//     	activeIndex: 0,
//     };
//   },
//
//   handleClick(data, index) {
//   	this.setState({
//     	activeIndex: index,
//     });
//   },
//
// 	render () {
//   	const { activeIndex, data } = this.state;
//     const activeItem = data[activeIndex];
//
//   	return (
//     	<div>
//         <BarChart width={600} height={300} data={data}
//             margin={{top: 5, right: 30, left: 20, bottom: 5}}>
//             <XAxis dataKey="name"/>
//        <YAxis/>
//            <Bar dataKey='uv' onClick={this.handleClick}>
//             {
//               data.map((entry, index) => (
//                 <Cell cursor="pointer" fill={entry.name === 'Page A' ? '#82ca9d' : '#8884d8' } key={`cell-${index}`}/>
//               ))
//             }
//            </Bar>
//          </BarChart>
//        </div>
//     );
//   }
// })
