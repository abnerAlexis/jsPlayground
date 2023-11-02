(function() {

    let modalContainer = document.querySelector('#modal-container');
  
    function showModal(title, text) {
      modalContainer.innerHTML = '';
      let modal = document.createElement('div');
      modal.classList.add('modal');
  
      let closeButtonElement = document.createElement('button');
      closeButtonElement.classList.add('modal-close');
      closeButtonElement.innerText = 'Close';
      closeButtonElement.addEventListener('click', hideModal);
  
      let titleElement = document.createElement('h1');
      titleElement.innerText = title;
  
      let contentElement = document.createElement('p');
      contentElement.innerText = text;
  
      modal.appendChild(closeButtonElement);
      modal.appendChild(titleElement);
      modal.appendChild(contentElement);
      modalContainer.appendChild(modal);
  
      modalContainer.classList.add('is-visible');
    }
  
    function hideModal() {
      modalContainer.classList.remove('is-visible');
    }

    function showDialog(title, text) {
        showModal(title, text);

        // Define modal container
        let modalContainer = document.querySelector('#modal-container');

        //Define modal to add confirm and cancel buttons later on.
        let modal = modalContainer.querySelector('.modal');

        //create confirm and cancel buttons
        let confirmButton = document.createElement('button');
        confirmButton.classList.add('modal-confirm');
        confirmButton.innerText = 'Confirm';
        modal.appendChild(confirmButton);

        let cancelButton = document.createElement('button');
        cancelButton.classList.add('modal-cancel');
        cancelButton.innerText = 'Cancel';
        modal.appendChild(cancelButton);

        //Focus on confirmButton for the user to press enter.
        confirmButton.focus();
    }
  
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
        hideModal();  
      }
    });
  
    modalContainer.addEventListener('click', (e) => {
      // Since this is also triggered when clicking INSIDE the modal
      // We only want to close if the user clicks directly on the overlay
      let target = e.target;
      if (target === modalContainer) {
        hideModal();
      }
    });
  
    document.querySelector('#show-modal').addEventListener('click', () => {
      showModal('Modal title', 'This is the modal content!');
    });

    document.querySelector('#show-dialog').addEventListener('click', () => {
        showDialog('Confirm action', 'Are you sure you want confirm this?');
      }).then(function() {
        alert('confirmed!');
      },
      () => {
        alert('not confirmed.');
      });
  })();