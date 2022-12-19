(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModalAnimation);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.modal.setAttribute('open', '');
    refs.modal.addEventListener(
      'animationend',
      () => {
        refs.modal.removeAttribute('open');
      },
      { once: true },
    );
  }

  function toggleModalAnimation() {
    refs.modal.setAttribute('data-modal-close', '');
    refs.modal.addEventListener(
      'animationend',
      () => {
        refs.modal.removeAttribute('data-modal-close');
        refs.modal.classList.toggle('is-hidden');
      },
      { once: true },
    );
  }
})();
