const projectData = [
	{
		title: "Arventa Store",
		category: "E-Commerce",
		year: "2024",
		img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
		desc: "Platform e-commerce fashion dengan sistem rekomendasi produk berbasis AI yang meningkatkan rata-rata order value sebesar 32%. Dibangun dengan arsitektur microservice yang scalable.",
		client: "Arventa Group",
		duration: "3 Months",
		role: "Full Stack",
		stack: ["Next.js", "Laravel", "TailwindCSS", "Python", "MySQL"],
		live: "#",
		github: "#",
	},
	{
		title: "Orion Dashboard",
		category: "Web App",
		year: "2024",
		img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
		desc: "Analytics dashboard real-time untuk monitoring performa bisnis multi-cabang. Menampilkan data dari 12+ sumber dalam satu tampilan terpadu dengan update tiap 30 detik.",
		client: "Orion Corp",
		duration: "2 Months",
		role: "Frontend",
		stack: ["React", "Chart.js", "Node.js", "WebSocket", "PostgreSQL"],
		live: "#",
		github: "#",
	},
	{
		title: "Kova Identity",
		category: "Branding",
		year: "2024",
		img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
		desc: "Sistem identitas visual lengkap untuk startup fintech Series A. Meliputi logo system, color palette, typography, motion guidelines, dan design token library.",
		client: "Kova Fintech",
		duration: "6 Weeks",
		role: "Brand Designer",
		stack: ["Figma", "Illustrator", "After Effects", "Notion"],
		live: "#",
		github: "#",
	},
	{
		title: "Muday App",
		category: "Mobile",
		year: "2023",
		img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
		desc: "Aplikasi mobile manajemen keuangan personal dengan UX yang intuitif. Fitur budget tracking, goal setting, dan laporan pengeluaran otomatis berbasis kategori AI.",
		client: "Muday",
		duration: "4 Months",
		role: "Mobile Dev",
		stack: ["Flutter", "Dart", "Firebase", "Figma"],
		live: "#",
		github: "#",
	},
	{
		title: "Pulsar CMS",
		category: "Web Dev",
		year: "2023",
		img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
		desc: "Content management system custom untuk media digital dengan traffic tinggi. Mendukung 50+ editor secara bersamaan dengan sistem versioning dan workflow approval.",
		client: "Pulsar Media",
		duration: "5 Months",
		role: "Backend Dev",
		stack: ["Laravel", "Vue.js", "Redis", "Elasticsearch", "AWS"],
		live: "#",
		github: "#",
	},
	{
		title: "Nestly Design",
		category: "UI/UX",
		year: "2023",
		img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80",
		desc: "Redesign platform properti digital yang berhasil meningkatkan konversi 140% dalam 3 bulan. Fokus pada simplifikasi user journey dari discovery hingga booking.",
		client: "Nestly",
		duration: "8 Weeks",
		role: "UI/UX Designer",
		stack: ["Figma", "Framer", "Maze", "Google Analytics"],
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
