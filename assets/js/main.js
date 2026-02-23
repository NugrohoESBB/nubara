VANTA.NET({
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

// L.marker([-6.1667033435294485, 106.87250731702541], { icon: customIcon })
//     .addTo(map)
//     .bindPopup("<b>Pudina Studio Office</b><br>Sumur Batu, Central Jakarta 10640, Indonesia")
//     .openPopup();

//L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
//  attribution: '© OpenStreetMap contributors © CARTO'
//}).addTo(map);

//const markerIcon = L.divIcon({
//  className: '',
//  html: `<div style="width:12px;height:12px;background:#fff;border-radius:50%;box-shadow:0 0 0 4px rgba(255,255,255,.2),0 0 20px rgba(255,255,255,.4)"></div>`,
//  iconSize: [12, 12],
//  iconAnchor: [6, 6]
//});

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

// ── WHATSAPP ORDER ────────────────────────────────────────────────
const WA_NUMBER = "6281379544107";

document.querySelectorAll(".product-wa-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        const product = btn.dataset.product;
        const price   = btn.dataset.price;
        const message = `Halo Nubara! Saya tertarik untuk order:\n\n*${product}*\nHarga: ${price}\n\nMohon info lebih lanjut ya 🙏`;
        const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    });
});
