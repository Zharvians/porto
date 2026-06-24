const activities = [

{
    title:"NDBI Spatial Analysis of Urban Expansion in Sungai Andai",

    date:"May 19, 2026",

    image:"assets/activities/a8.png",

    category:"Spatial Analysis & Geographic Information Systems (GIS)",

    location:"UIN Antasari Banjarmasin",

    photographer:"Muhammad Ade Ramadhani",

    desc:"Conducted a spatial analysis project to examine urban development patterns in the Sungai Andai area using the Normalized Difference Built-up Index (NDBI). Utilizing Google Earth Engine and satellite imagery, the project evaluated changes in built-up land between 2019 and 2023 to identify urban expansion trends and support data-driven spatial planning.",

    details:[
        "Performed NDBI analysis using satellite imagery",
        "Utilized Google Earth Engine for geospatial processing",
        "Analyzed built-up land changes from 2019 to 2023",
        "Visualized spatial distribution of urban development",
        "Generated temporal trend charts and statistical summaries",
        "Applied remote sensing techniques for land-use monitoring",
        "Developed interactive geospatial visualization dashboards"
    ]
},

{
    title:"Smart Governance Strategy Presentation",

    date:"February 25, 2026",

    image:"assets/activities/a7.png",

    category:"Academic Presentation",

    location:"Faculty of Dakwah and Communication Sciences, UIN Antasari Banjarmasin",

    photographer:"Muhammad Ade Ramadhani",

    desc:"Presented a Smart Governance concept project as part of the Smart City Technology course. The presentation explored the role of digital technologies, e-government services, and data-driven decision making in improving public services, transparency, efficiency, and citizen participation within modern smart city ecosystems.",

    details:[
        "Presented Smart Governance concept and framework",
        "Explained the role of digital transformation in public administration",
        "Discussed e-government implementation strategies",
        "Analyzed technology integration for smart city development",
        "Collaborated with team members in preparing presentation materials",
        "Delivered project findings and responded to audience questions",
        "Strengthened public speaking and academic presentation skills"
    ]
},

{
    title:"RESTful Service Architecture Presentation",

    date:"October 27, 2025",

    image:"assets/activities/a6.png",

    category:"Academic Presentation",

    location:"Information Technology Department Laboratory, UIN Antasari Banjarmasin",

    photographer:"Muhammad Ade Ramadhani",

    desc:"Presented the final Web Service Engineering project focusing on RESTful API principles, system architecture, and service implementation. The presentation highlighted the development process, API design strategies, endpoint structures, and practical applications of web services in modern software development.",

    details:[
        "Presented Web Service Engineering course project",
        "Explained RESTful API architecture and concepts",
        "Demonstrated system workflow and service integration",
        "Discussed endpoint design and data communication",
        "Answered questions and received project feedback",
        "Improved technical presentation and public speaking skills",
        "Showcased practical implementation of web service technologies"
    ]
},

{
    title:"Concurrent Development of Mobile and IoT Applications",

    date:"September 22, 2025",

    image:"assets/activities/a5.png",

    category:"Mobile Development & Internet of Things (IoT)",

    location:"Information Technology Department Secretariat Office, UIN Antasari Banjarmasin",

    photographer:"Muhammad Ade Ramadhani",

    desc:"Worked simultaneously on Android mobile application development and an IoT-based smart thermometer project. This experience strengthened my ability to integrate software and hardware solutions while managing multiple development workflows.",

    details:[
        "Developed a mobile application using Android Studio",
        "Designed Android user interface components",
        "Built a microcontroller-based digital thermometer",
        "Performed hardware prototyping and sensor integration",
        "Conducted testing, debugging, and optimization",
        "Managed two parallel technology projects simultaneously",
        "Strengthened skills in both mobile and IoT development"
    ]
},

{
    title:"Introduction to Arduino Programming and Embedded Systems",

    date:"September 9, 2024",

    image:"assets/activities/a4.png",

    category:"Hardware Development",

    location:"Information Technology Department Secretariat Office, UIN Antasari Banjarmasin",

    photographer:"Muhammad Ade Ramadhani",

    desc:"Began learning Arduino-based embedded systems development through hands-on programming and circuit prototyping. During this activity, I explored the fundamentals of microcontroller programming, breadboard circuit assembly, and LED control using Arduino IDE.",

    details:[
        "Learned the fundamentals of Arduino microcontroller programming",
        "Practiced writing and uploading code using Arduino IDE",
        "Built a simple LED control circuit using a breadboard",
        "Explored digital input and output concepts",
        "Performed hardware testing and debugging",
        "Developed understanding of hardware-software interaction"
    ]
},

{
    title:"Academic Field Learning on Islam, Science, and Environmental Sustainability",

    date:"June 13, 2024",

    image:"assets/activities/a3.png",

    category:"Academic Learning & Environmental Studies",

    location:"Environmental Agency Office (DLH), Banjarbaru, South Kalimantan",

    photographer:"Muhammad Ade Ramadhani",

    desc:"Participated in an academic learning session for the Islam and Science course led by Mrs. Hanifah, Head of the South Kalimantan Environmental Agency (DLH). The session focused on environmental sustainability, scientific development, and the integration of Islamic values in addressing environmental challenges.",

    details:[
        "Attended an off-campus academic learning session",
        "Learned about environmental sustainability and governance",
        "Discussed science and environmental conservation",
        "Explored Islamic perspectives on environmental stewardship",
        "Gained insights from the Head of the South Kalimantan Environmental Agency",
        "Strengthened interdisciplinary understanding of science and society"
    ]
},

{
    title:"Technology Workshop & Industry Insight Session",

    date:"June 5, 2024",

    image:"assets/activities/a2.png",

    category:"Hardware Development",

    location:"Information Technology Department Secretariat Office",

    photographer:"Muhammad Ade Ramadhani",

    desc:"Started my journey in electronics and embedded systems through hands-on circuit prototyping at the organization secretariat office. During this activity, I explored breadboard-based circuit assembly, component integration, and hardware troubleshooting techniques. This practical experience strengthened my understanding of electronic systems and laid the groundwork for future IoT and smart monitoring projects.",

    details:[
        "Conducted hands-on breadboard prototyping exercises",
        "Learned component placement and circuit connectivity",
        "Practiced using jumper wires and electronic components",
        "Explored capacitor functions in electronic circuits",
        "Performed hardware testing and troubleshooting",
        "Built foundational skills for IoT and embedded systems development"
    ]
},

{
    title:"Technology Workshop & Industry Insight Session",

    date:"May 16, 2024",

    image:"assets/activities/a1.png",

    category:"Academic Event",

    location:"UIN Antasari Banjarmasin",

    photographer:"Muhammad Ade Ramadhani",

    desc:"Joined an academic workshop hosted by the Information Technology Department, gaining insights into technology innovation, career development, and industry practices.",

    details:[
        "Attended faculty-organized workshop",
        "Learned about technology trends",
        "Expanded professional networking",
        "Discussed career opportunities"
    ]
}

];

renderActivities();

function renderActivities(){

    const featured = activities[0];

    const latest = activities.slice(1,4);

    const archive = activities.slice(4);

    document.getElementById("activities-container").innerHTML = `

        <div class="activities-layout">

            <article class="activity-featured"
                     onclick="openActivity(0)">

                <img src="${featured.image}" alt="">

                <div class="featured-overlay"></div>

                <div class="featured-content">

                    <span class="featured-badge">
                        FEATURED PROJECT
                    </span>

                    <h3>${featured.title}</h3>

                    <p>${featured.desc}</p>

                </div>

            </article>

            <div class="latest-list">

                ${latest.map((item,index) => `

                    <article class="latest-card"
                             onclick="openActivity(${index+1})">
                        <div class="latest-thumb">

                            <img src="${item.image}" alt="">

                        </div>

                        <div class="latest-info">

                            <span>${item.date}</span>

                            <h4>${item.title}</h4>

                            <p>${item.desc}</p>

                        </div>

                    </article>

                `).join("")}

            </div>

        </div>

        <div class="archive-header">

            <span>
                ACTIVITY ARCHIVE
            </span>

            <div class="archive-line"></div>

        </div>

        <div class="archive-grid">

            ${archive.map((item,index) => `

                <article class="archive-card"
                         onclick="openActivity(${index+4})">

                    <div class="archive-thumb">

                        <img src="${item.image}" alt="">

                    </div>

                    <div class="archive-content">

                        <span>${item.date}</span>

                        <h4>${item.title}</h4>

                    </div>

                </article>

            `).join("")}

        </div>

    `;
}