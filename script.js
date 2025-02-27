document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = link.getAttribute("href").slice(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const offset = 80; // Adjust based on header height
                window.scrollTo({
                    top: targetSection.offsetTop - offset,
                    behavior: "smooth"
                });
            }
        });
    });

    // Contact Section - Icon Hover Effect (Optional)
    const contactIcons = document.querySelectorAll(".contact-item img");

    contactIcons.forEach(icon => {
        icon.addEventListener("mouseenter", () => {
            icon.style.transform = "scale(1.5)";
        });
        icon.addEventListener("mouseleave", () => {
            icon.style.transform = "scale(1)";
        });
    });

    // Event Section - Auto Play Videos on Hover (Optional)
    const videos = document.querySelectorAll(".gallery-item video");

    videos.forEach(video => {
        video.addEventListener("mouseenter", () => {
            video.play();
        });
        video.addEventListener("mouseleave", () => {
            video.pause();
        });
    });

    console.log("script.js loaded successfully!");
});
