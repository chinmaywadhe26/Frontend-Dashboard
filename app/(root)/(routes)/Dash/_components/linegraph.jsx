"use client";
import { User } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const numberfOfUserData = [
  { month: "Jan", users: Math.floor(Math.random() * 100) },
  { month: "Feb", users: Math.floor(Math.random() * 100) },
  { month: "Mar", users: Math.floor(Math.random() * 100) },
  { month: "Apr", users: Math.floor(Math.random() * 100) },
  { month: "May", users: Math.floor(Math.random() * 100) },
  { month: "Jun", users: Math.floor(Math.random() * 100) },
  { month: "Jul", users: Math.floor(Math.random() * 100) },
  { month: "Aug", users: Math.floor(Math.random() * 100) },
  { month: "Sep", users: Math.floor(Math.random() * 100) },
  { month: "Oct", users: Math.floor(Math.random() * 100) },
  { month: "Nov", users: Math.floor(Math.random() * 100) },
  { month: "Dec", users: Math.floor(Math.random() * 100) },
];

export const LineGraph = ({ data = numberfOfUserData }) => {
  return (
    <div className="bg-slate-100/20 shadow flex w-full flex-col gap-3 rounded-[5px] p-5 text-slate-100">
      <section className="flex justify-between gap-2 text-slate-100 pb-2">
        <p>Users Data</p>
        <User className="h-4 w-4 " />
      </section>
      <ResponsiveContainer width={"100%"} height={350}>
        <LineChart
          data={data}
          margin={{ top: 0, left: -15, right: 0, bottom: 0 }}
        >
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={true}
            stroke="#fffff"
            fontSize={13}
            padding={{ left: 0, right: 0 }}
          />
          <YAxis
            tickLine={false}
            axisLine={true}
            stroke="#fffff"
            fontSize={13}
            padding={{ left: 0, right: 0 }}
          />
          <CartesianGrid strokeDasharray="2 2" className="opacity-50" />
          <Line
            type="monotone"
            dataKey="users"
            stroke="#8884d8"
            strokeWidth={2}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
