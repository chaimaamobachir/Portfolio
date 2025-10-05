function openModal(id) {
  document.getElementById("popup").style.display = "block";

  // cacher tout
  document.querySelectorAll(".modal-content img, .modal-content video")
    .forEach(el => el.classList.add("hidden"));

  // afficher seulement l'élément cliqué
  document.getElementById(id).classList.remove("hidden");
}

function closeModal() {
  document.getElementById("popup").style.display = "none";
}