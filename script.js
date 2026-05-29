/* ================================================= */
/* BLUEGLOW PORTFOLIO SCRIPT */
/* ================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* ============================================= */
    /* NAVBAR SCROLL EFFECT */
    /* ============================================= */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if(window.scrollY > 50){

            navbar.classList.add("navbar-active");

        }else{

            navbar.classList.remove("navbar-active");

        }

    });

    /* ============================================= */
    /* ACTIVE NAV LINK */
    /* ============================================= */

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar nav ul li a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if(scrollY >= sectionTop - 200){

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active-link");

            if(link.getAttribute("href").includes(current)){

                link.classList.add("active-link");

            }

        });

    });

    /* ============================================= */
    /* HERO FLOATING ANIMATION */
    /* ============================================= */

    const floatingCards = document.querySelectorAll(".floating-card");

    floatingCards.forEach((card, index) => {

        setInterval(() => {

            card.classList.toggle("float-animation");

        }, 2000 + (index * 500));

    });

    /* ============================================= */
    /* MOUSE GLOW EFFECT */
    /* ============================================= */

    const glow = document.createElement("div");

    glow.classList.add("cursor-glow");

    document.body.appendChild(glow);

    document.addEventListener("mousemove", (e) => {

        glow.style.left = e.clientX + "px";
        glow.style.top = e.clientY + "px";

    });

    /* ============================================= */
    /* PROJECT CARD HOVER EFFECT */
    /* ============================================= */

    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach(card => {

        card.addEventListener("mousemove", (e) => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty("--x", `${x}px`);
            card.style.setProperty("--y", `${y}px`);

        });

    });

    /* ============================================= */
    /* REVEAL ANIMATION ON SCROLL */
    /* ============================================= */

    const revealElements = document.querySelectorAll(
        ".hero-left, .hero-right, .stat-card, .tech-card, .about-card, .project-card, .award-card, .certificate-card, .library-card, .activity-large, .activity-small"
    );

    const revealOnScroll = () => {

        const windowHeight = window.innerHeight;

        revealElements.forEach(element => {

            const revealTop = element.getBoundingClientRect().top;

            if(revealTop < windowHeight - 100){

                element.classList.add("show");

            }

        });

    };

    window.addEventListener("scroll", revealOnScroll);

    revealOnScroll();

    /* ============================================= */
    /* TYPEWRITER EFFECT */
    /* ============================================= */

    const typeTarget = document.querySelector(".hero-left h1 span");

    if(typeTarget){

        const texts = [
            "Premium",
            "Modern",
            "Future",
            "Design",
            "Vision"
        ];

        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeEffect(){

            const currentText = texts[textIndex];

            if(!isDeleting){

                typeTarget.textContent =
                    currentText.substring(0, charIndex + 1);

                charIndex++;

                if(charIndex === currentText.length){

                    isDeleting = true;

                    setTimeout(typeEffect, 1500);

                    return;
                }

            }else{

                typeTarget.textContent =
                    currentText.substring(0, charIndex - 1);

                charIndex--;

                if(charIndex === 0){

                    isDeleting = false;

                    textIndex++;

                    if(textIndex >= texts.length){

                        textIndex = 0;

                    }

                }

            }

            setTimeout(typeEffect, isDeleting ? 80 : 120);

        }

        typeEffect();

    }

    /* ============================================= */
    /* PARALLAX EFFECT */
    /* ============================================= */

    window.addEventListener("mousemove", (e) => {

        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        const gradients = document.querySelectorAll(".bg-gradient");

        gradients.forEach((gradient, index) => {

            const speed = (index + 1) * 20;

            gradient.style.transform = `
                translate(
                    ${x * speed}px,
                    ${y * speed}px
                )
            `;

        });

    });

    /* ============================================= */
    /* COUNTER ANIMATION */
    /* ============================================= */

    const counters = document.querySelectorAll(".stat-card h2");

    let counterStarted = false;

    function startCounter(){

        if(counterStarted) return;

        counters.forEach(counter => {

            const target =
                parseInt(counter.innerText);

            let count = 0;

            const updateCounter = () => {

                count += Math.ceil(target / 40);

                if(count < target){

                    counter.innerText = count + "+";

                    requestAnimationFrame(updateCounter);

                }else{

                    counter.innerText = target + "+";

                }

            };

            updateCounter();

        });

        counterStarted = true;

    }

    window.addEventListener("scroll", () => {

        const stats = document.querySelector(".hero-stats");

        if(stats){

            const top = stats.getBoundingClientRect().top;

            if(top < window.innerHeight - 100){

                startCounter();

            }

        }

    });

    /* ============================================= */
    /* CONTACT FORM */
    /* ============================================= */

    const contactForm = document.querySelector("form");

    if(contactForm){

        contactForm.addEventListener("submit", (e) => {

            e.preventDefault();

            const button = contactForm.querySelector("button");

            button.innerText = "Sending...";

            setTimeout(() => {

                button.innerText = "Message Sent";

                button.classList.add("success-btn");

            }, 1500);

        });

    }

    /* ============================================= */
    /* SCROLL TO TOP BUTTON */
    /* ============================================= */

    const scrollBtn = document.createElement("button");

    scrollBtn.innerHTML =
        '<i class="fa-solid fa-arrow-up"></i>';

    scrollBtn.classList.add("scroll-top-btn");

    document.body.appendChild(scrollBtn);

    scrollBtn.addEventListener("click", () => {

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    });

    window.addEventListener("scroll", () => {

        if(window.scrollY > 400){

            scrollBtn.classList.add("show-scroll");

        }else{

            scrollBtn.classList.remove("show-scroll");

        }

    });

    /* ============================================= */
    /* PARTICLE EFFECT */
    /* ============================================= */

    for(let i = 0; i < 20; i++){

        const particle = document.createElement("span");

        particle.classList.add("particle");

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.animationDuration =
            5 + Math.random() * 10 + "s";

        particle.style.animationDelay =
            Math.random() * 5 + "s";

        document.body.appendChild(particle);

    }

    /* ============================================= */
    /* IMAGE TILT EFFECT */
    /* ============================================= */

    const profileCard =
        document.querySelector(".main-profile-card");

    if(profileCard){

        profileCard.addEventListener("mousemove", (e) => {

            const rect =
                profileCard.getBoundingClientRect();

            const x =
                e.clientX - rect.left;

            const y =
                e.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                ((y - centerY) / 25);

            const rotateY =
                ((centerX - x) / 25);

            profileCard.style.transform = `
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
            `;

        });

        profileCard.addEventListener("mouseleave", () => {

            profileCard.style.transform = `
                rotateX(0deg)
                rotateY(0deg)
            `;

        });

    }

    /* ============================================= */
    /* LOADING SCREEN */
    /* ============================================= */

    const loader = document.createElement("div");

    loader.classList.add("loader-wrapper");

    loader.innerHTML = `
        <div class="loader">
            <div class="loader-circle"></div>
            <h2>BlueGlow</h2>
        </div>
    `;

    document.body.appendChild(loader);

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.classList.add("hide-loader");

        }, 1800);

    });

});

/* ============================================= */
/* DARK LIGHT MODE */
/* ============================================= */

const themeBtn =
    document.querySelector(".theme-btn");

if(themeBtn){

    const icon =
        themeBtn.querySelector("i");

    /* SAVE THEME */

    if(localStorage.getItem("theme") === "light"){

        document.body.classList.add("light-mode");

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    }

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        if(document.body.classList.contains("light-mode")){

            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");

            localStorage.setItem("theme","light");

        }else{

            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");

            localStorage.setItem("theme","dark");

        }

    });

}