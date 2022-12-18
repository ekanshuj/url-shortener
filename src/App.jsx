import React from 'react';
import { Header, Component } from './components';

const App = () => {
  return (
    <main>
      <div className="max-w-7xl mx-auto">
        <Header />
        <Component />
      </div>
    </main>
  )
}

export default App