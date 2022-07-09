import React from 'react';
// components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Featured from './components/Featured';
import SignUp from './components/SignUp';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <Featured />
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;
