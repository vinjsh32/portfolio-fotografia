document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const galleryItems = document.querySelectorAll(".gallery-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            document.querySelector(".filter-btn.active").classList.remove("active");
            this.classList.add("active");

            const category = this.getAttribute("data-category");
            galleryItems.forEach(item => {
                if (category === "all" || item.getAttribute("data-category") === category) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });

    // Animazione su hover
    galleryItems.forEach(item => {
        item.addEventListener("mouseover", () => item.classList.add("animated"));
        item.addEventListener("mouseleave", () => item.classList.remove("animated"));
    });
});
