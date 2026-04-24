const toggleBtn = document.querySelector(".toggle-button");
const dropdown = document.querySelector(".menu");

if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        dropdown.classList.toggle('-top-full');
        dropdown.classList.toggle('top-16'); 
        console.log("Home Menu Toggled!");
    });
}

// GSAP Animations
document.addEventListener("DOMContentLoaded", () => {
    const tl = gsap.timeline();

    tl.from("#logo", {
        y: 30,
        scale: 0.5,
        opacity: 0,
        duration: 0.5
    });

});