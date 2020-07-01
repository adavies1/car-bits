import React from 'react';

import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header title="Checkout"/>
      <main className="container">
        <div className="grid grid--checkout">
          <p>main content</p>
          <p>Products</p>
        </div>
      </main>
    </>
  );
}

export default App;
