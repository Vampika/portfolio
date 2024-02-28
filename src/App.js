import './css/style.css'

import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import UpArrow from './components/elements/UpArrow'

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
