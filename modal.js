(function() {
  var modalTrigger = document.getElementById("modal-trigger");
  var modal = document.getElementById('modal');
  var closeButton = document.getElementById('close-modal');
 
  modalTrigger.addEventListener('click', function(event) {
    
    event.preventDefault();
    modal.classList.add('is-visible');
  });
  

  closeButton.addEventListener('click', function(event) {
  
    modal.classList.remove('is-visible');
  });
  document.addEventListener('keyup', function(event) {
    
    if (event.keyCode === 27) {
      modal.classList.remove('is-visible');
    }
  });
})();