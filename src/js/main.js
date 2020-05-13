document.addEventListener("DOMContentLoaded", function(event) { 
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-togle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }
  
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });
  closeBtn.addEventListener('click', switchModal); 
  
  window.onclick = (e) => {
    if (e.target === modal) {
      modal.classList.remove('modal--visible');
    }
  };  
  
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modal.classList.remove('modal--visible');
    }
  });
  
});


