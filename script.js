document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".gallery-item");

    images.forEach(image => {
        image.addEventListener("click", function () {
            const modal = document.createElement("div");
            modal.classList.add("modal");
            modal.innerHTML = `<img src="${this.src}" alt="Full Image">
                               <span class="close">&times;</span>`;
            document.body.appendChild(modal);

            modal.querySelector(".close").addEventListener("click", function () {
                modal.remove();
            });
        });
    });
});

/* Stile per la lightbox */
const style = document.createElement("style");
style.innerHTML = `
.modal {
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
}
.modal img {
    max-width: 80%;
    max-height: 80%;
}
.modal .close {
    position: absolute;
    top: 10px; right: 20px;
    font-size: 30px;
    color: white;
    cursor: pointer;
}`;
document.head.appendChild(style);
