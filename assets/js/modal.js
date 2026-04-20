const projectData = [
	{
		title: "Nubara · Kopi & Rasa POS",
		category: "Web App",
		year: "2026",
		img: "assets/img/portfolio/Portfolio14.jpg",
		desc: "Nubara Kopi & Rasa POS POS system is a web application that enables users to place food and beverage orders seamlessly, while providing admins with the ability to track, manage, and process orders in real-time.",
		client: "Business Owner",
		duration: "1 Weeks",
		role: "Full Stack",
		stack: ["Laravel", "Bootstrap", "MySQL"],
		live: "https://www.instagram.com/p/DXWftyVFLz4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
		github: "#",
	},
	{
		title: "Nubara · Solar Calculator",
		category: "Desktop App",
		year: "2026",
		img: "assets/img/portfolio/Portfolio12.png",
		desc: "Nubara Solar Calculator is a web application built to analyze and calculate solar panel requirements based on regional data across Indonesia. It enables users to estimate energy consumption, evaluate solar potential, and optimize installation planning.",
		client: "Gunadarma University Students",
		duration: "1 Month",
		role: "Full Stack",
		stack: ["Laravel", "Bootstrap", "MySQL", "Leaflet.js"],
		live: "#",
		github: "#",
	},
	{
		title: "Nubara · POS",
		category: "Web App",
		year: "2025",
		img: "assets/img/portfolio/Portfolio13.png",
		desc: "Nubara POS system is a web application that enables users to place food and beverage orders seamlessly, while providing admins with the ability to track, manage, and process orders in real-time.",
		client: "Business Owner",
		duration: "1 Months",
		role: "Full Stack",
		stack: ["Laravel", "Bootstrap", "MySQL", "Leaflet.js"],
		live: "#",
		github: "#",
	},
	{
		title: "Nubara · Landing Page",
		category: "Web App",
		year: "2025",
		img: "assets/img/portfolio/Portfolio2.png",
		desc: "Nubara Dashboard landing page built to present product information, highlight key features, and deliver a modern responsive experience across all devices.",
		client: "Gunadarma University Students",
		duration: "2 Weeks",
		role: "FrontEnd",
		stack: ["HTML", "CSS", "JS", "Bootstrap", "Leaflet.js"],
		live: "#",
		github: "#",
	},
	{
		title: "Nubara · Restaurant Management",
		category: "Web App",
		year: "2025",
		img: "assets/img/portfolio/Portfolio3.jpg",
		desc: "Nubara Dashboard is a web-based restaurant management interface that visualizes operational data such as orders, revenue, guest statistics, and menu performance through interactive analytics and real-time monitoring.",
		client: "Gunadarma University Students",
		duration: "1 Months",
		role: "Full Stack",
		stack: ["Laravel", "Bootstrap", "MySQL"],
		live: "#",
		github: "#",
	},
	{
		title: "Nubara · Company Profile",
		category: "Web App",
		year: "2025",
		img: "assets/img/portfolio/Portfolio4.jpg",
		desc: "Nubara Company Profile is a corporate profile website designed to communicate company expertise, services, and strategic capabilities through a modern UI, structured content layout, and engaging visual presentation.",
		client: "Gunadarma University Students",
		duration: "2 Weeks",
		role: "FrontEnd",
		stack: ["HTML", "CSS", "JS", "Bootstrap", "Leaflet.js"],
		live: "#",
		github: "#",
	},
	{
		title: "Nubara · SmartKasir",
		category: "Desktop App",
		year: "2025",
		img: "assets/img/portfolio/Portfolio5.png",
		desc: "Nubara SmartKasir is a desktop Point of Sale system built to streamline retail transactions, manage product inventory, process multiple payment methods, and generate sales reports efficiently.",
		client: "Gunadarma University Students",
		duration: "1 Months",
		role: "Full Stack",
		stack: [".NET", "C#", "MySQL"],
		live: "#",
		github: "#",
	},
	{
		title: "Nubara · StokKu",
		category: "Mobile App",
		year: "2025",
		img: "assets/img/portfolio/Portfolio6.png",
		desc: "Nubara StokKu is a mobile inventory management application built to help businesses monitor stock levels, manage product movements, and maintain accurate inventory records in real time.",
		client: "Business Owner",
		duration: "5 Weeks",
		role: "Full Stack",
		stack: ["Kotlin", "Spreatsheet"],
		live: "#",
		github: "#",
	},
	{
		title: "Nubara · CoreStage",
		category: "Web App",
		year: "2025",
		img: "assets/img/portfolio/Portfolio8.JPG",
		desc: "Nubara CoreStage is a web-based academic management platform built to handle student information, course data, and grading records through a structured administrative dashboard.",
		client: "One of the high schools in Bengkulu",
		duration: "1 Months",
		role: "Full Stack",
		stack: ["Laravel", "Bootstrap", "MySQL"],
		live: "#",
		github: "#",
	},
	{
		title: "Nubara · Smart System",
		category: "IoT",
		year: "2025",
		img: "assets/img/portfolio/Portfolio9.jpg",
		desc: "Modular IoT platform developed for academic and research purposes, integrating sensors, controllers, and monitoring dashboards to support smart agriculture, hydroponics, smart parking, and other automated systems.",
		client: "Gunadarma University Students",
		duration: "5 Weeks",
		role: "Full Stack",
		stack: ["Arduino", "ESP8266/ESP32", "Raspberry PI", "Sensor", "Web App", "Desktop App", "MySQL"],
		live: "#",
		github: "#",
	},
	{
		title: "Nubara · Smart System App",
		category: "Smart System App",
		year: "2025",
		img: "assets/img/portfolio/Portfolio10.jpg",
		desc: "Smart system web platform that integrates IoT devices, providing real-time monitoring, data visualization, and remote control capabilities for automated environments.",
		client: "Gunadarma University Students",
		duration: "5 Weeks",
		role: "Full Stack",
		stack: ["PHP", "Laravel", "Bootstrap", ".NET", "C#", "Kotlin", "MySQL", "Spreatsheet"],
		live: "#",
		github: "#",
	},
];

// ── MODAL LOGIC ───────────────────────────────────────────────
const overlay = document.getElementById("projOverlay");
const closeBtn = document.getElementById("projClose");
const projImg = document.getElementById("projImg");
const projTabCat = document.getElementById("projTabCat");
const projTabYr = document.getElementById("projTabYear");
const projCat = document.getElementById("projCat");
const projYrTxt = document.getElementById("projYearText");
const projTitle = document.getElementById("projTitle");
const projDesc = document.getElementById("projDesc");
const projClient = document.getElementById("projClient");
const projDur = document.getElementById("projDuration");
const projRole = document.getElementById("projRole");
const projStack = document.getElementById("projStack");
const projLive = document.getElementById("projLiveBtn");
const projGithub = document.getElementById("projGithubBtn");

function openModal(index) {
	const p = projectData[index];
	if (!p) return;

	// Isi konten
	projImg.src = p.img;
	projImg.alt = p.title;
	projTabCat.textContent = p.category;
	projTabYr.textContent = p.year;
	projCat.textContent = p.category;
	projYrTxt.textContent = p.year;
	projTitle.textContent = p.title;
	projDesc.textContent = p.desc;
	projClient.textContent = p.client;
	projDur.textContent = p.duration;
	projRole.textContent = p.role;

	// Tech stack pills
	projStack.innerHTML = p.stack.map((s) => `<span class="proj-stack-pill">${s}</span>`).join("");

	// Live link
	if (p.live) {
		projLive.href = p.live;
		projLive.style.display = "inline-flex";
	} else {
		projLive.style.display = "none";
	}

	// GitHub link
	if (p.github) {
		projGithub.href = p.github;
		projGithub.style.display = "inline-flex";
	} else {
		projGithub.style.display = "none";
	}

	// Reset scroll modal
	document.getElementById("projModal").scrollTop = 0;

	// Show
	overlay.classList.add("active");
	document.body.style.overflow = "hidden";
}

function closeModal() {
	overlay.classList.remove("active");
	document.body.style.overflow = "";
}

// ── CONNECT TO .file-card EVENT ────────────────────────────────
document.querySelectorAll(".file-card").forEach((card, i) => {
	card.style.cursor = "pointer";
	card.addEventListener("click", () => openModal(i));
});

// Close modal
closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", (e) => {
	if (e.target === overlay) closeModal();
});
document.addEventListener("keydown", (e) => {
	if (e.key === "Escape") closeModal();
});
