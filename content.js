// Import React dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import FloatingButton from '../src/FloatingButton';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const connectAll = async () => {
  const connectButtons = document.querySelectorAll('button');
  const filteredButtons = Array.from(connectButtons).filter(button =>
    button.textContent.includes('Connect')
  );
  
  if (filteredButtons.length === 0) {
    alert("No connectable profiles found.");
    return;
  }

  for (let i = 0; i < filteredButtons.length; i++) {
    filteredButtons[i].click();
    await delay(Math.floor(Math.random() * (3000 - 1000)) + 1000);  // Delay between 1-3 seconds
  }

  alert("All visible connection requests have been sent.");
};

// Inject floating button on the LinkedIn grow page
const addButtonToPage = () => {
  const container = document.createElement("div");
  document.body.appendChild(container);

  ReactDOM.render(<FloatingButton onClick={connectAll} />, container);
};

// Check if we are on the right LinkedIn page
if (window.location.href.includes("/mynetwork/grow")) {
  addButtonToPage();
}