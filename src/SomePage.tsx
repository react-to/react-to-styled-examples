import React from "react";
import {
  Icon,
  Loader,
  Table,
  EssentialStyle,
} from "@react-to-styled/components";
import "./App.css";
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
function SomePage() {
  return (
    <div className="App">
      <EssentialStyle />
      <Icon name="arrow_down" />
      <Loader loaderSize={30} wrapperHeight={300} />
      <Table columns={columns} data={data} />
    </div>
  );
}

export default SomePage;
