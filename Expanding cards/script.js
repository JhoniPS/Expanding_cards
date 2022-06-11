const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeActiveclasse();
        panel.classList.add("active");
    });
});

const removeActiveclasse = () => {
    panels.forEach((panel) => {
        panel.classList.remove("active");
    });
};