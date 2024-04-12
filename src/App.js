import React, { useState } from 'react';
import './App.css';

function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(0);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleStarClick = (value) => {
    setRating(value);
  };

  const handleSubmit = () => {
    const comment = document.getElementById('comment').value;
    console.log('Rating:', rating);
    console.log('Comment:', comment);
    closeModal();
  };

  return (
    <div>
      <button onClick={openModal}>Abrir Modal</button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Evaluación</h2>
            <div className="star-container">
              {[1, 2, 3, 4, 5].map((value) => (
                <span
                  key={value}
                  className={value <= rating ? 'star filled' : 'star'}
                  onClick={() => handleStarClick(value)}
                >
                  ★
                </span>
              ))}
            </div>
            <div>
              <label htmlFor="comment" className="comment-label">Deja tus comentarios:</label>
              <textarea id="comment" className="comment-textarea"></textarea>
            </div>

            <div className="button-container">
              <button className="close-button" onClick={closeModal}>Cerrar</button>
              <button className="submit-button" onClick={handleSubmit}>Enviar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Modal con Calificación de Estrellas</h1>
      <Modal />
    </div>
  );
}

export default App;
