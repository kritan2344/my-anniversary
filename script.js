// Falling Heart Animation
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    // Randomize the position and delay of each heart
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s"; // Between 3s and 5s
    document.body.appendChild(heart);

    // Remove the heart after it falls
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Continuously generate hearts
setInterval(createHeart, 300);

// Smooth Scroll for Navigation Links
const links = document.querySelectorAll("nav a");
links.forEach(link => {
    link.addEventListener("click", function (e) {
        const href = this.getAttribute("href");

        // Check if the link starts with "#" (same-page section)
        if (href.startsWith("#")) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        } else {
            // If it's a link to another page, allow default behavior
            return;
        }
    });
});

// Page Load Animation
window.addEventListener("load", () => {
    document.body.style.opacity = 1;
    document.body.style.transition = "opacity 2s ease-in-out";
});
