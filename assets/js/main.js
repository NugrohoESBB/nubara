window._vanta = VANTA.NET({
	el: "#vanta-bg",
	mouseControls: true,
	touchControls: true,
	gyroControls: false,
	minHeight: 200,
	minWidth: 200,
	color: 0xffffff,
	backgroundColor: 0x050508,
	points: 12,
	maxDistance: 20,
	spacing: 18,
});

// Initialize Year's
document.getElementById("year").textContent = new Date().getFullYear();

AOS.init({
	once: false,
	mirror: true,
	offset: 80,
	easing: "ease-out-quart",
});

const cursor = document.getElementById("cursor");
const cursorRing = document.getElementById("cursorRing");
let mx = 0,
	my = 0,
	rx = 0,
	ry = 0;

document.addEventListener("mousemove", (e) => {
	mx = e.clientX;
	my = e.clientY;
	cursor.style.left = mx + "px";
	cursor.style.top = my + "px";
});

function animRing() {
	rx += (mx - rx) * 0.12;
	ry += (my - ry) * 0.12;
	cursorRing.style.left = rx + "px";
	cursorRing.style.top = ry + "px";
	requestAnimationFrame(animRing);
}
animRing();

document.querySelectorAll("a, button, .service-row, .file-card, .product-card, .team-card, .partner-item").forEach((el) => {
	el.addEventListener("mouseenter", () => {
		cursor.classList.add("hover");
		cursorRing.classList.add("hover");
	});
	el.addEventListener("mouseleave", () => {
		cursor.classList.remove("hover");
		cursorRing.classList.remove("hover");
	});
});

const navbar = document.getElementById("navbar");
const progressBar = document.getElementById("progress");
const heroTitle = document.getElementById("heroTitle");
const heroSub = document.getElementById("heroSub");
const scrollHint = document.getElementById("scrollHint");

let cur = 0,
	tgt = 0;

window.addEventListener("scroll", () => {
	tgt = window.scrollY;
	navbar.classList.toggle("scrolled", tgt > 60);
	scrollHint.classList.toggle("hidden", tgt > 80);
});

function frame() {
	cur += (tgt - cur) * 0.08;
	const max = document.documentElement.scrollHeight - window.innerHeight;
	const pct = cur / max;
	progressBar.style.width = pct * 100 + "%";
	heroTitle.style.transform = `translateY(${cur * -0.45}px)`;
	heroTitle.style.opacity = Math.max(0, 1 - pct * 4);
	heroSub.style.transform = `translateY(${cur * -0.2}px)`;
	heroSub.style.opacity = Math.max(0, 1 - pct * 5);
	requestAnimationFrame(frame);
}
frame();

new Swiper(".testi-swiper", {
	slidesPerView: 1,
	spaceBetween: 24,
	loop: true,
	grabCursor: true,
	autoplay: {
		delay: 4500,
		disableOnInteraction: false,
		pauseOnMouseEnter: true,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	breakpoints: {
		768: { slidesPerView: 2 },
		1024: { slidesPerView: 3 },
	},
});

const map = L.map("map", { zoomControl: false, scrollWheelZoom: false }).setView([-6.1667033435294485, 106.87250731702541], 14);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
	attribution: "© OpenStreetMap contributors",
}).addTo(map);

const markerIcon = L.divIcon({
	className: "",
	html: `<div style="
    width:30px;height:30px;
    background:#e74c3c;
    border-radius:50% 50% 50% 0;
    transform:rotate(-45deg);
    border:3px solid #fff;
    box-shadow:0 2px 8px rgba(0,0,0,0.4);
  "></div>`,
	iconSize: [30, 30],
	iconAnchor: [15, 30],
});

L.marker([-6.1667033435294485, 106.87250731702541], { icon: markerIcon }).addTo(map).bindPopup(`<b style="font-family:monospace;font-size:11px">NUBARA STUDIO</b><br><span style="font-family:monospace;font-size:10px;color:#666">Jakarta, Indonesia</span>`).openPopup();

window.onbeforeunload = () => window.scrollTo(0, 0);

// ── THEME SWITCHER ──────────────────────────────────
const themeToggleBtn = document.getElementById("themeToggleBtn");
const themeDropdown = document.getElementById("themeDropdown");

const themeVanta = {
	dark: { color: 0xffffff, backgroundColor: 0x050508, maxDistance: 20, points: 12, spacing: 18 },
	light: { color: 0x222222, backgroundColor: 0xf5f5f0, maxDistance: 20, points: 12, spacing: 18 },
};

function applyTheme(name) {
	document.documentElement.setAttribute("data-theme", name);
	document.querySelectorAll(".theme-btn").forEach((b) => b.classList.toggle("active", b.dataset.t === name));
	const v = themeVanta[name];
	if (v && window._vanta) {
		// Destroy & recreate
		window._vanta.destroy();
		window._vanta = VANTA.NET({
			el: "#vanta-bg",
			mouseControls: true,
			touchControls: true,
			gyroControls: false,
			minHeight: 200,
			minWidth: 200,
			color: v.color,
			backgroundColor: v.backgroundColor,
			points: v.points,
			maxDistance: v.maxDistance,
			spacing: v.spacing,
		});
	}
	localStorage.setItem("nubara-theme", name);

	// ganti icon sesuai theme
	const icon = themeToggleBtn.querySelector("i");
	if (icon) icon.className = name === "dark" ? "bx bx-moon" : "bx bx-sun";
}

document.querySelectorAll(".theme-btn").forEach((btn) => btn.addEventListener("click", () => applyTheme(btn.dataset.t)));

applyTheme(localStorage.getItem("nubara-theme") || "dark");

themeToggleBtn.addEventListener("click", (e) => {
	e.stopPropagation();
	const isOpen = themeDropdown.dataset.open === "true";
	if (!isOpen) {
		themeDropdown.style.display = "flex";
		requestAnimationFrame(() => {
			themeDropdown.style.opacity = "1";
			themeDropdown.style.transform = "translateX(-50%) scaleY(1)";
		});
		themeDropdown.dataset.open = "true";
	} else {
		closeDropdown();
	}
});

function closeDropdown() {
	themeDropdown.style.opacity = "0";
	themeDropdown.style.transform = "translateX(-50%) scaleY(0.85)";
	setTimeout(() => {
		themeDropdown.style.display = "none";
	}, 220);
	themeDropdown.dataset.open = "false";
}

document.addEventListener("click", closeDropdown);
themeDropdown.addEventListener("click", (e) => e.stopPropagation());

// ── WHATSAPP ORDER ────────────────────────────────────────────────
const WA_NUMBER = "6281379544107";

document.querySelectorAll(".product-wa-btn").forEach((btn) => {
	btn.addEventListener("click", (e) => {
		e.preventDefault();
		const product = btn.dataset.product;
		const price = btn.dataset.price;
		const message = `Hi Nubara! I'm interested in ordering:\nProduct: *${product}*\nPrice: ${price}\n\nPlease provide more information...`;
		window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
	});
});

// ── CONTACT MESSAGE ────────────────────────────────────────────────
document.getElementById("contactSubmit").addEventListener("click", () => {
	const name = document.querySelector('input[placeholder="John Doe"]').value.trim();
	const email = document.querySelector('input[placeholder="john@company.com"]').value.trim();
	const projectType = document.querySelector('input[placeholder="e.g. Web Development, UI/UX..."]').value.trim();
	const message = document.querySelector("textarea").value.trim();

	const text = `Hi Nubara! I have a project inquiry:\n\nName: ${name}\nEmail: ${email}\nProject Type: ${projectType}\nMessage:\n${message}`;
	window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
	document.querySelector(".contact-form").reset();
});
