

import React from 'react';
import './App.css'
import Products from './components/Products';

function App() {

   const products = [
    {
      id: 'p1',
      title: 'nirma',
      amount:200,
      date: new Date(2021,2,2),
    },
    {
      id: 'p2',
      title: 'sirf excal',
      amount:250,
      date: new Date(2021,8,2),
    },
    {
      id: 'p3',
      title: 'time',
      amount:500,
      date: new Date(2021,6,2),
    },
    {
      id: 'p4',
      title: '0',
      amount:200,
      date: new Date(1790,2,2),
    },
  ];
  return (
    <div>
      <Products items={products} />
    </div>
  )
};

export default App;
