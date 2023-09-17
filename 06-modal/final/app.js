// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const modalBtn = document.querySelector(".modal-btn");
const body = document.querySelector(".body")
// const modal = document.querySelector(".modal-overlay");
// const closeBtn = document.querySelector(".close-btn");

// modalBtn.addEventListener("click", function () {
//   modal.classList.add("open-modal");
// });
// closeBtn.addEventListener("click", function () {
//   modal.classList.remove("open-modal");
// });






// one way 

var closeBtn = document.createElement("button");
// modalBtn.addEventListener("click", function () {
  
//   console.log("clicked on modal")
//   const modalOverlay = document.createElement("div");
//   const modalContainer = document.createElement("div");
//   const modalContent = document.createElement("h3");
//   closeBtn.classList.add("close-btn");

//   modalOverlay.classList.add("modal-overlay");
//   modalContainer.classList.add("modal-container");
  
//   closeBtn.innerHTML = '<i class="fas fa-times"></i>'
//   modalContent.innerText = "Modal Content"

//   modalOverlay.appendChild(modalContainer);
//   modalContainer.appendChild(modalContent);
//   modalContainer.appendChild(closeBtn);

//   body.appendChild(modalOverlay);
//   modalOverlay.classList.add("open-modal");
// })



closeBtn.addEventListener("click", function () {
  const modal = document.querySelector(".modal-overlay");
  modal.classList.remove("open-modal");
});


//second way:
const dynamic = "Hello world!";

modalBtn.addEventListener("click", function () {
  const modalOverlay = document.createElement("div");
  modalOverlay.classList.add("modal-overlay");

  modalOverlay.innerHTML = `
  <div class="modal-container">
        <h3>${dynamic}</h3>
        <button class="close-btn"><i class="fas fa-times"></i></button>
  </div>
  `
  body.appendChild(modalOverlay);
  modalOverlay.classList.add("open-modal");
})