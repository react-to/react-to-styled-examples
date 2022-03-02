import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Table} from '@react-to-styled/table';
import {EssentialStyle} from '@react-to-styled/essentials'
export const columns = {
  title: {
    header: 'Title',
    Cell: ({ data: { title } }) => <span>{title}</span>,
  },
  price: {
    header: 'Price',
    Cell: ({ data: { price } }) => <span>{price}</span>,
  },
};

export const data = [
  { title: 'One', price: 100 },
  { title: 'Two', price: 200 },
];
function App() {
  return (
    <div className="App">
      <EssentialStyle/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
<Table columns={columns} data={data} />
    </div>
  );
}

export default App;
