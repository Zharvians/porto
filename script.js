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
    /* POP UP */
    /* ============================================= */
    
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");

    const modalTag =
        document.getElementById("modalTag");

    const modalStatus =
        document.getElementById("modalStatus");

    const modalTitle =
        document.getElementById("modalTitle");

    const modalDesc =
        document.getElementById("modalDesc");

    const modalTech =
        document.getElementById("modalTech");

    const images =
        document.querySelectorAll(".popup-image");

    const modalProjectLink =
        document.getElementById("modalProjectLink");

    const modalYear =
        document.getElementById("modalYear");

    const modalType =
        document.getElementById("modalType");

    const modalStack =
        document.getElementById("modalStack");

    const closeBtn =
        document.querySelector(".close-modal");


    images.forEach(img => {

        img.addEventListener("click", () => {

            const card =
                img.closest(".project-card");

            const tag =
                card.querySelector(".project-tag")
                .textContent
                .trim();

            const title =
                card.querySelector("h3")
                .textContent
                .trim();

            const desc =
                card.querySelector(".project-content p")
                .textContent
                .trim();
            
            const projectLink =
                card.querySelector(
                    ".project-link"
                );

            const projectYear =
                card.querySelector(
                    ".project-year"
                );

            const projectType =
                card.querySelector(
                    ".project-type"
                );

            const techs =
                card.querySelectorAll(
                    ".project-tech span"
                );

                const statusElement =
                    card.querySelector(
                        ".project-status"
                    );

                if(statusElement){

                    modalStatus.textContent =
                        statusElement.textContent;

                    modalStatus.className = "modal-status";

                    if(statusElement.classList.contains("completed")){
                        modalStatus.classList.add("completed");
                    }

                    if(statusElement.classList.contains("ongoing")){
                        modalStatus.classList.add("ongoing");
                    }

                    if(statusElement.classList.contains("planning")){
                        modalStatus.classList.add("planning");
                    }

                }
                if(projectLink){

                    const url =
                        projectLink.textContent.trim();

                    if(
                        url === "#" ||
                        url === "" ||
                        url === "Coming Soon"
                    ){

                        modalProjectLink.href = "#";

                        modalProjectLink.innerHTML = `
                            <i class="fa-solid fa-clock"></i>
                            Coming Soon
                        `;

                        modalProjectLink.style.opacity = ".7";

                        modalProjectLink.style.pointerEvents =
                            "none";

                    }
                    else{

                        modalProjectLink.href = url;

                        modalProjectLink.innerHTML = `
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                            Visit Project
                        `;

                        modalProjectLink.style.opacity = "1";

                        modalProjectLink.style.pointerEvents =
                            "auto";

                    }

                }

            modalTag.textContent = tag;

            modalTitle.textContent = title;

            modalDesc.textContent = desc;

            modalTech.innerHTML = "";

            techs.forEach(tech => {

                const span =
                    document.createElement("span");

                span.textContent =
                    tech.textContent;

                modalTech.appendChild(span);

            });

            modalImg.src = img.src;

            if(projectYear){

                modalYear.textContent =
                    projectYear.textContent.trim();

            }

            if(projectType){

                modalType.textContent =
                    projectType.textContent.trim();

            }

            modalStack.textContent =
                Array.from(techs)
                    .map(tech => tech.textContent.trim())
                    .join(", ");

            modal.classList.add("show");

            document.body.style.overflow =
                "hidden";

        });

    });


    closeBtn.addEventListener("click", () => {

        modal.classList.remove("show");

        document.body.style.overflow =
            "auto";

    });


    modal.addEventListener("click", (e) => {

        if(e.target === modal){

            modal.classList.remove("show");

            document.body.style.overflow =
                "auto";

        }

    });


    document.addEventListener(
        "keydown",
        (e) => {

            if(e.key === "Escape"){

                modal.classList.remove("show");

                document.body.style.overflow =
                    "auto";

            }

        }
    );

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
    /* AWARD EFFECT */
    /* ============================================= */

    const data = {

        award_ml:{
            image:"assets/achievements/immo.png",
            title:"Mythical Immortal Competitive Excellence",
            latin:"双子座",
            desc:"Awarded for demonstrating outstanding leadership, tactical awareness, resource management, conflict resolution, and high-pressure decision-making capabilities, culminating in the attainment of Mythical Immortal rank within the Mobile Legends competitive ecosystem.",
            date:"11 June 2026"
        },

        award1:{
            image:"assets/achievements/navi.png",
            title:"NAVI Esports Community Editing Finalist",
            latin:"水瓶座",
            desc:"Recognized as one of the Top 6 finalists in Team Navi's community editing competition, demonstrating creativity, visual storytelling, and advanced editing skills among numerous participants.",
            date:"5 February 2026"
        },

        award2:{
            image:"assets/achievements/discord.png",
            title:"Founder of a Growing Discord Community",
            latin:"乙女座",
            desc:"Founded and developed a Discord community that grew to hundreds of active members, fostering engagement through events, moderation, and community-driven activities.",
            date:"10 September 2025"
        },

        award3:{
            image:"assets/achievements/jungojam.png",
            title:"Top 7 Lucky Winner",
            latin:"牡牛座",
            desc:"Recognized as one of the Top 7 Lucky Winners in JungoJam's community event, earning a place among distinguished participants through active involvement and contribution within the game's creative ecosystem.",
            date:"25 April 2025"
        },

        award4:{
            image:"assets/achievements/tiktok.png",
            title:"Content Growth Creator",
            latin:"水瓶座",
            desc:"Successfully built a TikTok presence with over 10,000 followers through consistent content creation, audience engagement, and organic growth strategies.",
            date:"1 Februari 2022"
        },

         award5:{
            image:"assets/achievements/sma.png",
            title:"Excellence in Academic Performance",
            latin:"双子座",
            desc:"Maintained outstanding academic performance throughout senior high school, consistently earning top rankings and demonstrating dedication to continuous learning.",
            date:"15 June 2022"
        }

    };

    const items =
    document.querySelectorAll(
    ".archive-item,.preview-card"
    );

    items.forEach(item=>{

        item.addEventListener("click",()=>{

            const id =
            item.dataset.id;

            document
            .querySelectorAll(".archive-item")
            .forEach(el=>
                el.classList.remove("active")
            );

            document
            .querySelectorAll(".preview-card")
            .forEach(el=>
                el.classList.remove("active")
            );

            document
            .querySelector(
                `.archive-item[data-id="${id}"]`
            )
            .classList.add("active");

            document
            .querySelector(
                `.preview-card[data-id="${id}"]`
            )
            .classList.add("active");

            document
            .getElementById(
                "main-award-image"
            )
            .src = data[id].image;

            document
            .getElementById(
                "award-title"
            )
            .innerText = data[id].title;

            document.getElementById(
                "award-latin"
            ).textContent =
                data[id].latin;

            document
            .getElementById(
                "award-desc"
            )
            .innerText = data[id].desc;

            document
            .getElementById(
                "award-date"
            )
            .innerText = data[id].date;

            document
            .getElementById(
                "archive-background"
            )
            .style.backgroundImage =
            `url('${data[id].image}')`;
        });

    });

    /* ============================================= */
    /* AWARDS MODAL */
    /* ============================================= */

    const mainAwardImage =
    document.getElementById(
        "main-award-image"
    );

    const awardsModal =
    document.getElementById(
        "awardsModal"
    );

    const awardsModalImage =
    document.getElementById(
        "awardsModalImage"
    );

    const closeAwardsModal =
    document.getElementById(
        "closeAwardsModal"
    );

    mainAwardImage.addEventListener("click",()=>{

        awardsModal.classList.add(
            "active"
        );

        awardsModalImage.src =
        mainAwardImage.src;
    });

    closeAwardsModal.addEventListener("click",()=>{

        awardsModal.classList.remove(
            "active"
        );
    });

    awardsModal.addEventListener("click",(e)=>{

        if(e.target === awardsModal){

            awardsModal.classList.remove(
                "active"
            );
        }

    });

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
            <h2>Loading Portofolio</h2>
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

const certModal =
    document.getElementById(
        "certificateModal"
    );

const certImg =
    document.getElementById(
        "certificateImg"
    );

document
.querySelectorAll(
    ".certificate-popup"
)
.forEach(img => {

    img.addEventListener(
        "click",
        () => {

            certImg.src =
                img.src;

            certModal.classList.add(
                "show"
            );

        }
    );

});

const closeCertificate =
    document.querySelector(
        ".close-certificate"
    );

if(closeCertificate){

    closeCertificate.addEventListener(
        "click",
        () => {

            certModal.classList.remove(
                "show"
            );

        }
    );

}

certModal.addEventListener(
    "click",
    (e) => {

        if(e.target === certModal){

            certModal.classList.remove(
                "show"
            );

        }

    }
);

document.addEventListener(
    "keydown",
    (e) => {

        if(
            e.key === "Escape" &&
            certModal.classList.contains(
                "show"
            )
        ){

            certModal.classList.remove(
                "show"
            );

        }

    }
);

function openLibraryModal(src){

    document.getElementById(
        "libraryModal"
    ).classList.add("active");

    document.getElementById(
        "libraryModalImage"
    ).src = src;
}

function closeLibraryModal(){

    document.getElementById(
        "libraryModal"
    ).classList.remove("active");
}

function openActivity(index){

    const item = activities[index];

    document.getElementById("activityImage").src =
        item.image;

    document.getElementById("activityTitle").textContent =
        item.title;

    document.getElementById("activityDate").textContent =
        item.date;

    document.getElementById("activityDescription").textContent =
        item.desc;

    document.getElementById("activityCategory").textContent =
        item.category;

    document.getElementById("activityLocation").textContent =
        item.location;

    document.getElementById("activityPhotographer").textContent =
        item.photographer;

    document.getElementById("activityDetails").innerHTML =
        item.details.map(detail =>
            `<li>${detail}</li>`
        ).join("");

    document
        .getElementById("activityModal")
        .classList.add("show");

    document.body.style.overflow =
        "hidden";

    document
        .getElementById("activityModal")
        .classList.add("show");
}

/* ============================================= */
/* ACTIVITY IMAGE VIEWPORT CONTROL */
/* ============================================= */

let keyboardX = 0;
let keyboardY = 0;

const activityImageContainer =
document.querySelector(".activity-image");

const activityImage =
document.getElementById("activityImage");

function getImageBounds(){

    const imageRect =
    activityImage.getBoundingClientRect();

    const containerRect =
    activityImageContainer.getBoundingClientRect();

    return{

        maxX:
        Math.max(
            0,
            (imageRect.width -
            containerRect.width) / 2
        ),

        maxY:
        Math.max(
            0,
            (imageRect.height -
            containerRect.height) / 2
        )

    };

}

function updateActivityImage(){

    const bounds =
    getImageBounds();

    keyboardX = Math.max(
        -bounds.maxX,
        Math.min(bounds.maxX, keyboardX)
    );

    keyboardY = Math.max(
        -bounds.maxY,
        Math.min(bounds.maxY, keyboardY)
    );

    activityImage.style.transform =
    `
    translate(
        calc(-50% + ${keyboardX}px),
        calc(-50% + ${keyboardY}px)
    )
    `;
}

/* ============================================= */
/* OPEN ACTIVITY */
/* ============================================= */

function openActivity(index){

    const item = activities[index];

    activityImage.src = item.image;

    document.getElementById("activityTitle").textContent =
    item.title;

    document.getElementById("activityDate").textContent =
    item.date;

    document.getElementById("activityDescription").textContent =
    item.desc;

    document.getElementById("activityCategory").textContent =
    item.category;

    document.getElementById("activityLocation").textContent =
    item.location;

    document.getElementById("activityPhotographer").textContent =
    item.photographer;

    document.getElementById("activityDetails").innerHTML =
    item.details.map(
        detail => `<li>${detail}</li>`
    ).join("");

    keyboardX = 0;
    keyboardY = 0;

    activityImage.onload = ()=>{

        updateActivityImage();

    };

    document
    .getElementById("activityModal")
    .classList.add("show");

    document.body.style.overflow =
    "hidden";

}

/* ============================================= */
/* MOUSE CONTROL */
/* ============================================= */

if(activityImageContainer){

    activityImageContainer.addEventListener(
        "mousemove",
        (e)=>{

            const rect =
            activityImageContainer.getBoundingClientRect();

            const x =
            (e.clientX - rect.left) /
            rect.width;

            const y =
            (e.clientY - rect.top) /
            rect.height;

            const bounds =
            getImageBounds();

            keyboardX =
            (0.5 - x) *
            bounds.maxX * 2;

            keyboardY =
            (0.5 - y) *
            bounds.maxY * 2;

            updateActivityImage();

        }
    );

    activityImageContainer.addEventListener(
        "mouseleave",
        ()=>{

            keyboardX = 0;
            keyboardY = 0;

            updateActivityImage();

        }
    );

}

/* ============================================= */
/* KEYBOARD CONTROL */
/* ============================================= */

document.addEventListener(
    "keydown",
    (e)=>{

        const modal =
        document.getElementById(
            "activityModal"
        );

        if(
            !modal.classList.contains("show")
        ) return;

        const validKeys = [

            "ArrowLeft",
            "ArrowRight",
            "ArrowUp",
            "ArrowDown",

            "a","d","w","s",
            "A","D","W","S"

        ];

        if(!validKeys.includes(e.key))
            return;

        e.preventDefault();

        const step = 80;

        switch(e.key){

            case "ArrowLeft":
            case "a":
            case "A":
                keyboardX += step;
                break;

            case "ArrowRight":
            case "d":
            case "D":
                keyboardX -= step;
                break;

            case "ArrowUp":
            case "w":
            case "W":
                keyboardY += step;
                break;

            case "ArrowDown":
            case "s":
            case "S":
                keyboardY -= step;
                break;
        }

        updateActivityImage();

    }
);

/* ============================================= */
/* CLOSE MODAL */
/* ============================================= */

function closeActivityModal(){

    keyboardX = 0;
    keyboardY = 0;

    document
    .getElementById("activityModal")
    .classList.remove("show");

    document.body.style.overflow =
    "auto";

}

emailjs.init("mYZzCFaPRwJwoybYw");

const form =
document.getElementById("contactForm");

const cooldownTime = 60000;

form.addEventListener("submit", async (e)=>{

    e.preventDefault();

    const btn =
    form.querySelector("button");

    const originalHTML =
    btn.innerHTML;

    const honeypot =
    document.getElementById("website").value;

    if(honeypot){
        return;
    }

    const lastSent =
    localStorage.getItem("lastContact");

    if(
        lastSent &&
        Date.now() - lastSent < cooldownTime
    ){

        alert(
            "Please wait 1 minute before sending another message."
        );

        return;
    }

    btn.disabled = true;

    btn.innerHTML =
    '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

    try{

        await emailjs.send(

            "zharvian11",

            "template_nz5hpyw",

            {

                name:
                document.getElementById("name").value,

                email:
                document.getElementById("email").value,

                reply_to: 
                document.getElementById("email").value,

                subject:
                document.getElementById("subject").value,

                message:
                document.getElementById("message").value

            }

        );

        localStorage.setItem(
            "lastContact",
            Date.now()
        );

        btn.innerHTML =
        '<i class="fa-solid fa-circle-check"></i> Message Sent';

        form.reset();

    }

    catch(error){

        console.error("EMAILJS ERROR:", error);

        alert(JSON.stringify(error));

        btn.innerHTML =
        '<i class="fa-solid fa-triangle-exclamation"></i> Failed';

    }

    setTimeout(()=>{

        btn.disabled = false;

        btn.innerHTML = originalHTML;

    },3000);

});

const mobileBtn =
document.getElementById(
"mobileMenuBtn"
);

const mobileMenu =
document.getElementById(
"mobileMenu"
);

mobileBtn.addEventListener(
"click",
() => {

    mobileMenu.classList.toggle(
    "active"
    );

});

document
.querySelectorAll(
".mobile-menu a"
)
.forEach(link => {

    link.addEventListener(
    "click",
    () => {

        mobileMenu.classList.remove(
        "active"
        );

    });

});

mobileBtn.addEventListener(
"click",
() => {

    mobileMenu.classList.toggle(
    "active"
    );

    mobileBtn.innerHTML =
    mobileMenu.classList.contains(
    "active"
    )
    ?
    '<i class="fa-solid fa-xmark"></i>'
    :
    '<i class="fa-solid fa-bars"></i>';

});