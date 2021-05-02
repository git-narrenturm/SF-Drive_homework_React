const closeModal = () => {
  const modal = document.getElementsByName("modal")[0];
  modal.classList.toggle("hidden");
}

module.exports = closeModal;