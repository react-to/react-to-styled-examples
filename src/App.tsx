import { Icon } from "@react-to-styled/icon";
import { Loader } from "@react-to-styled/loader";
import { Toggle } from "@react-to-styled/toggle";
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Table } from "@react-to-styled/table";
import { EssentialStyle } from "@react-to-styled/essentials";
export const columns = {
  title: {
    header: "Title",
    Cell: ({ data: { title } }: any) => <span>{title}</span>,
  },
  price: {
    header: "Price",
    Cell: ({ data: { price } }: any) => <span>{price}</span>,
  },
};

export const data = [
  { title: "One", price: 100 },
  { title: "Two", price: 200 },
];
function App() {
  return (
    <div className="App">
      <EssentialStyle />
      <Icon name="arrow_down" />
      <Toggle />
      <Loader loaderSize={30} wrapperHeight={300} />
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;
