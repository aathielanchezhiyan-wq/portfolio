/*==============================
    PORTFOLIO SCRIPT
===============================*/

// Active Navigation
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {

        navLinks.forEach(item => item.classList.remove("active"));
        this.classList.add("active");

    });
});

/*==============================
    SMOOTH SCROLL
===============================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

/*==============================
    HEADER SHADOW
===============================*/

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.background = "#111";
        header.style.padding = "18px 30px";
        header.style.borderRadius = "12px";
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.4)";

    } else {

        header.style.background = "transparent";
        header.style.padding = "";
        header.style.boxShadow = "none";

    }

});

/*==============================
    TYPING EFFECT
===============================*/

const words = [
    "Cinematographer",
    "Visual Storyteller",
    "Film Maker",
    "Video Creator"
];

const title = document.querySelector(".left h1 span");

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        title.textContent = currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typingEffect, 1500);

            return;
        }

    } else {

        title.textContent = currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length)
                wordIndex = 0;

        }

    }

    setTimeout(typingEffect, deleting ? 50 : 120);

}

typingEffect();

/*==============================
    SCROLL REVEAL
===============================*/

const revealElements = document.querySelectorAll(

    ".card,.service-box,.item,.about-section,.contact,.portfolio"

);

function reveal() {

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 120) {

            el.style.opacity = "1";
            el.style.transform = "translateY(0px)";

        }

    });

}

revealElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(60px)";
    el.style.transition = ".8s ease";

});

window.addEventListener("scroll", reveal);

reveal();

/*==============================
    IMAGE PARALLAX
===============================*/

const profile = document.querySelector(".right img");

document.addEventListener("mousemove", (e) => {

    const x = (window.innerWidth / 2 - e.pageX) / 50;
    const y = (window.innerHeight / 2 - e.pageY) / 50;

    profile.style.transform =
        `translate(${x}px,${y}px)`;

});

/*==============================
    COUNTER ANIMATION
===============================*/

const counters = document.querySelectorAll(".card h3");

let started = false;

function runCounter() {

    if (started) return;

    const stats = document.querySelector(".stats");

    if (!stats) return;

    const top = stats.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {

        started = true;

        counters.forEach(counter => {

            const text = counter.innerText;

            const number = parseInt(text);

            let count = 0;

            const speed = number / 60;

            const update = () => {

                count += speed;

                if (count < number) {

                    counter.innerText = Math.floor(count) + "+";

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = text;

                }

            };

            update();

        });

    }

}

window.addEventListener("scroll", runCounter);

runCounter();

/*==============================
    BUTTON RIPPLE
===============================*/

document.querySelectorAll("button,.btn-orange,.btn-nav").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "scale(1.05)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "scale(1)";

    });

});

/*==============================
    CURRENT YEAR
===============================*/

const footer = document.querySelector("footer");

if (footer) {

    footer.innerHTML =
        `© ${new Date().getFullYear()} Aathi Elanchezhiyan | Cinematography Portfolio`;

}