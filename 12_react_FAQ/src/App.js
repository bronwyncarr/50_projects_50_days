import React from 'react'
import './App.css';
import Faq from './components/Faq'
import faqData from './faqData'

function App() {
  return (
    <div className="App">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-container">
        {faqData.map((item) => <Faq question={item.question} answer={item.answer} />)}
      </div>
    </div>
  );
}

export default App;
