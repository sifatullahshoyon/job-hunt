import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { id: "01", name: "Assignment 1", score: 49 },
  { id: "02", name: "Assignment 2", score: 30 },
  { id: "03", name: "Assignment 3", score: 30 },
  { id: "04", name: "Assignment 4", score: 27 },
  { id: "05", name: "Assignment 5", score: 30 },
  { id: "06", name: "Assignment 6", score: 29 },
];

export default class Example extends PureComponent {
  render() {
    return (
      <div className="container mx-auto p-5 w-4/5 h-auto">
        <div>
          <h1 className="uppercase text-center py-5 text-2xl md:text-5xl my-10 font-manrope font-bold text-indigo-600 leading-tight">
            Marks of all assignments received so far
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <AreaChart
            width={1000}
            height={700}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="score"
              stackId="1"
              stroke="#4B0082"
              fill="#82ca9d"
            />
          </AreaChart>
        </div>
        <div>
          <p className="text-center text-lg text-black font-manrope font-semibold my-5">
            Simple Area Chart
          </p>
        </div>
      </div>
    );
  }
}
