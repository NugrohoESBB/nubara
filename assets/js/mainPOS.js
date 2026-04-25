const WA = "6281379544107";

/* ═══════════════════════════════════════════════
   TRANSLATIONS
═══════════════════════════════════════════════ */
const LANG = {
	id: {
		back: "Home",
		hero_eyebrow: "Produk",
		hero_title: "Produk",
		hero_title_em: "Kami",
		hero_desc: "Pilih produk yang kamu butuhkan, tambahkan ke keranjang, dan akan terhubung via WhatsApp untuk diskusi lebih lanjut.",
		nav_services: "Produk",
		nav_about: "Tentang",
		nav_contact: "Kontak",
		about_title: "Tentang Nubara",
		about_desc: "Nubara Labs adalah studio digital terlengkap yang memadukan keahlian teknis dengan kepekaan desain.",
		about_type_label: "Tipe Studio",
		about_type_val: "Studio Digital Terlengkap",
		about_loc_label: "Lokasi",
		about_resp_label: "Waktu Respons",
		about_resp_val: "Biasanya dalam beberapa jam via WhatsApp",
		about_exp_label: "Pengalaman",
		contact_title: "Hubungi Kami",
		contact_desc: "Punya proyek yang ingin diwujudkan? Hubungi kami langsung — kami selalu terbuka untuk kolaborasi baru.",
		cart_bar_sub: "Tap untuk lihat pesanan",
		cart_bar_cta: "Lihat Keranjang →",
		cart_title: "Keranjang",
		cart_empty: "Keranjangmu masih kosong",
		form_title: "Informasi Kamu",
		form_name: "Nama",
		form_name_ph: "Nama lengkapmu",
		form_contact: "WhatsApp",
		form_contact_ph: "Untuk konfirmasi",
		form_note: "Catatan Tambahan (opsional)",
		form_note_ph: "cth. deadline, fitur khusus, estimasi budget...",
		checkout_btn: "Pesan via WhatsApp",
		cart_summary_label: "Layanan dipilih",
		cart_pricing_label: "Harga",
		cart_pricing_val: "Akan didiskusikan via WhatsApp",
		cart_selected_label: "Layanan Dipilih",
		cart_addmore_label: "Tambah Layanan Lain",
		cat_all: "Semua",
		cat_docs: "Dokumen",
		cat_web: "Web",
		cat_software: "Software",
		cat_creative: "Kreatif",
		cat_iot: "IoT",
		price_negotiable: "Dapat Dinegosiasi",
		price_based_scope: "Dinegosiasi · sesuai lingkup",
		price_by_complexity: "Dinegosiasi · sesuai kompleksitas",
		wa_greeting: "Halo Nubara! 👋 Saya ingin memesan layanan berikut:\n\n",
		wa_qty: "Jml",
		wa_name: "Nama",
		wa_contact: "Kontak",
		wa_notes: "Catatan",
		wa_closing: "\nMohon konfirmasi detail dan harganya. Terima kasih!",
		alert_name: "Mohon masukkan namamu!",
	},
	en: {
		back: "Home",
		hero_eyebrow: "Products",
		hero_title: "Our",
		hero_title_em: "Products",
		hero_desc: "Select the products you need, add them to your shopping cart, and you will be connected via WhatsApp for further discussion.",
		nav_services: "Products",
		nav_about: "About",
		nav_contact: "Contact",
		about_title: "About Nubara",
		about_desc: "Nubara Labs is a full-service digital studio combining technical expertise with strong design sensibility.",
		about_type_label: "Studio Type",
		about_type_val: "Full-Service Digital Studio",
		about_loc_label: "Location",
		about_resp_label: "Response Time",
		about_resp_val: "Typically within a few hours via WhatsApp",
		about_exp_label: "Experience",
		contact_title: "Get in Touch",
		contact_desc: "Have a project in mind? Reach out directly — we're always open to new collaborations.",
		cart_bar_sub: "Tap to review your order",
		cart_bar_cta: "View Cart →",
		cart_title: "Your Cart",
		cart_empty: "Your cart is empty",
		form_title: "Your Info",
		form_name: "Name",
		form_name_ph: "Your full name",
		form_contact: "WhatsApp",
		form_contact_ph: "For follow-up",
		form_note: "Additional Notes (optional)",
		form_note_ph: "e.g. deadline, specific features, budget range...",
		checkout_btn: "Checkout via WhatsApp",
		cart_summary_label: "Services selected",
		cart_pricing_label: "Pricing",
		cart_pricing_val: "To be discussed via WhatsApp",
		cart_selected_label: "Selected Services",
		cart_addmore_label: "Add More Services",
		cat_all: "All",
		cat_docs: "Docs",
		cat_web: "Web",
		cat_software: "Software",
		cat_creative: "Creative",
		cat_iot: "IoT",
		price_negotiable: "Negotiable",
		price_based_scope: "Negotiable · based on scope",
		price_by_complexity: "Negotiable · based on complexity",
		wa_greeting: "Hi Nubara! 👋 I'd like to order the following services:\n\n",
		wa_qty: "Qty",
		wa_name: "Name",
		wa_contact: "Contact",
		wa_notes: "Notes",
		wa_closing: "\nKindly confirm the details and pricing. Thank you!",
		alert_name: "Please enter your name!",
	},
};

/* ═══════════════════════════════════════════════
   PRODUCTS DATA
   (name_id / name_en, desc_id / desc_en, features_id / features_en)
═══════════════════════════════════════════════ */
const PRODUCTS = [
	/* ── DOCUMENTATION ── */
	{
		id: 101,
		cat: "docs",
		catIcon: "📄",
		catLabel_id: "Dokumentasi",
		catLabel_en: "Documentation",
		name_id: "Makalah, Resume, & Esai",
		name_en: "Paper, Resume, & Essay Writing",
		desc_id: "Penulisan makalah ilmiah, resume, esai akademik, artikel jurnal, dan karya tulis lainnya.",
		desc_en: "Academic paper writing, resume, essays, journal articles, and other written works.",
		features_id: ["Makalah", "Resume", "Esai", "Jurnal", "Artikel"],
		features_en: ["Paper", "Resume", "Essay", "Journal", "Article"],
		price: "IDR 80.000+",
		priceNote_id: "Dinegosiasi · sesuai halaman",
		priceNote_en: "Negotiable · based on pages",
		img: "assets/img/products/Product7.png",
	},
	{
		id: 102,
		cat: "docs",
		catIcon: "📄",
		catLabel_id: "Dokumentasi",
		catLabel_en: "Documentation",
		name_id: "Skripsi & Tugas Akhir",
		name_en: "Thesis & Final Project",
		desc_id: "Bantuan penulisan skripsi, tugas akhir, proposal penelitian, dan laporan akademik.",
		desc_en: "Assistance with thesis writing, final projects, research proposals, and academic reports.",
		features_id: ["Skripsi", "Tugas Akhir", "Proposal", "Laporan"],
		features_en: ["Thesis", "Final Project", "Proposal", "Report"],
		price: "IDR 300.000+",
		priceNote_id: "Dinegosiasi · sesuai lingkup",
		priceNote_en: "Negotiable · based on scope",
		img: "assets/img/products/Product7.png",
	},
	{
		id: 103,
		cat: "docs",
		catIcon: "📄",
		catLabel_id: "Dokumentasi",
		catLabel_en: "Documentation",
		name_id: "Presentasi & Slide Deck",
		name_en: "Presentation & Slide Deck",
		desc_id: "Pembuatan slide presentasi profesional, pitch deck investor, dan materi seminar.",
		desc_en: "Professional presentation slides, investor pitch decks, and seminar materials.",
		features_id: ["PowerPoint", "Google Slides", "Pitch Deck", "Seminar"],
		features_en: ["PowerPoint", "Google Slides", "Pitch Deck", "Seminar"],
		price: "IDR 100.000+",
		priceNote_id: "Dinegosiasi · sesuai slide",
		priceNote_en: "Negotiable · based on slides",
		img: "assets/img/products/Product7.png",
	},
	{
		id: 104,
		cat: "docs",
		catIcon: "📄",
		catLabel_id: "Dokumentasi",
		catLabel_en: "Documentation",
		name_id: "Karya Tulis Ilmiah",
		name_en: "Scientific Writing",
		desc_id: "Penulisan karya tulis ilmiah (KTI), laporan penelitian, dan publikasi ilmiah.",
		desc_en: "Scientific papers, research reports, and scientific publications.",
		features_id: ["KTI", "Penelitian", "Publikasi", "Abstrak"],
		features_en: ["KTI", "Research", "Publication", "Abstract"],
		price: "IDR 150.000+",
		priceNote_id: "Dinegosiasi · sesuai lingkup",
		priceNote_en: "Negotiable · based on scope",
		img: "assets/img/products/Product7.png",
	},
	{
		id: 105,
		cat: "docs",
		catIcon: "📄",
		catLabel_id: "Dokumentasi",
		catLabel_en: "Documentation",
		name_id: "Proposal & Laporan Bisnis",
		name_en: "Business Proposal & Report",
		desc_id: "Penulisan proposal bisnis, laporan kerja, SOP perusahaan, dan dokumen operasional.",
		desc_en: "Business proposals, work reports, company SOPs, and operational documents.",
		features_id: ["Proposal", "Laporan", "SOP", "Dokumen Bisnis"],
		features_en: ["Proposal", "Report", "SOP", "Business Doc"],
		price: "IDR 120.000+",
		priceNote_id: "Dinegosiasi · sesuai lingkup",
		priceNote_en: "Negotiable · based on scope",
		img: "assets/img/products/Product7.png",
	},

	/* ── WEB ── */
	{
		id: 201,
		cat: "web",
		catIcon: "🌐",
		catLabel_id: "Web Development",
		catLabel_en: "Web Development",
		name_id: "Landing Page & Company Profile",
		name_en: "Landing Page & Company Profile",
		desc_id: "Halaman landas profesional, profil perusahaan, dan website portofolio yang elegan.",
		desc_en: "Professional landing pages, company profiles, and elegant portfolio websites.",
		features_id: ["Laravel", "Bootstrap", "MySQL", "Responsif"],
		features_en: ["Laravel", "Bootstrap", "MySQL", "Responsive"],
		price: "IDR 1.500.000+",
		priceNote_id: "Dinegosiasi · sesuai lingkup",
		priceNote_en: "Negotiable · based on scope",
		img: "assets/img/products/Product8.jpg",
	},
	{
		id: 202,
		cat: "web",
		catIcon: "🌐",
		catLabel_id: "Web Development",
		catLabel_en: "Web Development",
		name_id: "Toko Online, Sistem Pemesanan, & E-Commerce",
		name_en: "Online Store, Ordering System, & E-Commerce",
		desc_id: "Sistem toko online lengkap dengan manajemen produk, keranjang belanja, dan pembayaran.",
		desc_en: "Full online store system with product management, shopping cart, and payment gateway.",
		features_id: ["Laravel", "Midtrans", "Payment Gateway", "Admin Panel"],
		features_en: ["Laravel", "Midtrans", "Payment Gateway", "Admin Panel"],
		price: "IDR 3.000.000+",
		priceNote_id: "Dinegosiasi · sesuai fitur",
		priceNote_en: "Negotiable · based on features",
		img: "assets/img/products/Product8.jpg",
	},
	{
		id: 203,
		cat: "web",
		catIcon: "🌐",
		catLabel_id: "Web Development",
		catLabel_en: "Web Development",
		name_id: "Toko Online, Sistem Pemesanan, & E-Commerce (Versi Lite)",
		name_en: "Online Store, Ordering System, & E-Commerce (Lite Version)",
		desc_id: "Sistem toko online lengkap dengan manajemen produk, keranjang belanja, dan koneksi langsung ke WhatsApp.",
		desc_en: "Complete online store system with product management, shopping cart, and direct connection to WhatsApp.",
		features_id: ["Laravel", "WhatsApp", "Admin Panel"],
		features_en: ["Laravel", "WhatsApp", "Admin Panel"],
		price: "IDR 700.000+",
		priceNote_id: "Dinegosiasi · sesuai fitur",
		priceNote_en: "Negotiable · based on features",
		img: "assets/img/products/Product8.jpg",
	},
	{
		id: 204,
		cat: "web",
		catIcon: "🌐",
		catLabel_id: "Web Development",
		catLabel_en: "Web Development",
		name_id: "Sistem Informasi & Dashboard",
		name_en: "Information System & Dashboard",
		desc_id: "Sistem manajemen data, dashboard monitoring, dan aplikasi web custom sesuai kebutuhan.",
		desc_en: "Data management systems, monitoring dashboards, and custom web apps.",
		features_id: ["Laravel", "PHP", "MySQL", "Chart.js"],
		features_en: ["Laravel", "PHP", "MySQL", "Chart.js"],
		price: "IDR 1.500.000+",
		priceNote_id: "Dinegosiasi · sesuai fitur",
		priceNote_en: "Negotiable · based on features",
		img: "assets/img/products/Product8.jpg",
	},

	/* ── SOFTWARE ── */
	{
		id: 301,
		cat: "software",
		catIcon: "💻",
		catLabel_id: "Software Solutions",
		catLabel_en: "Software Solutions",
		name_id: "Aplikasi Mobile Android",
		name_en: "Android Mobile App",
		desc_id: "Aplikasi Android native dengan desain modern, performa tinggi, dan fitur sesuai kebutuhan.",
		desc_en: "Native Android app with modern design, high performance, and custom features.",
		features_id: ["Kotlin", "Android Studio", "Material UI"],
		features_en: ["Kotlin", "Android Studio", "Material UI"],
		price: "IDR 3.000.000+",
		priceNote_id: "Dinegosiasi · sesuai fitur",
		priceNote_en: "Negotiable · based on features",
		img: "assets/img/products/Product3.png",
	},
	{
		id: 302,
		cat: "software",
		catIcon: "💻",
		catLabel_id: "Software Solutions",
		catLabel_en: "Software Solutions",
		name_id: "Aplikasi Desktop Windows",
		name_en: "Windows Desktop App",
		desc_id: "Aplikasi desktop Windows dengan UI profesional, koneksi database, laporan otomatis, dan fitur sesuai kebutuhan.",
		desc_en: "Windows desktop app with professional UI, database connection, auto-generated reports and custom features.",
		features_id: [".NET / C#", "WinForms", "WPF", "MySQL"],
		features_en: [".NET / C#", "WinForms", "WPF", "MySQL"],
		price: "IDR 3.000.000+",
		priceNote_id: "Dinegosiasi · sesuai fitur",
		priceNote_en: "Negotiable · based on features",
		img: "assets/img/products/Product3.png",
	},

	/* ── CREATIVE ── */
	{
		id: 401,
		cat: "creative",
		catIcon: "🎨",
		catLabel_id: "Creative Solutions",
		catLabel_en: "Creative Solutions",
		name_id: "Desain Logo & Identitas Brand",
		name_en: "Logo & Brand Identity Design",
		desc_id: "Pembuatan logo profesional, panduan brand, warna, tipografi, dan identitas visual bisnis.",
		desc_en: "Professional logo creation, brand guidelines, colors, typography, and visual identity.",
		features_id: ["Logo", "Brand Guide", "Warna", "Tipografi"],
		features_en: ["Logo", "Brand Guide", "Colors", "Typography"],
		price: "IDR 300.000+",
		priceNote_id: "Dinegosiasi · sesuai lingkup",
		priceNote_en: "Negotiable · based on scope",
		img: "assets/img/products/Product4.png",
	},
	{
		id: 402,
		cat: "creative",
		catIcon: "🎨",
		catLabel_id: "Creative Solutions",
		catLabel_en: "Creative Solutions",
		name_id: "Desain Poster & Banner",
		name_en: "Poster & Banner Design",
		desc_id: "Desain poster promosi, banner digital, spanduk cetak, dan materi iklan visual.",
		desc_en: "Promotional poster, digital banner, print banner, and advertising visual materials.",
		features_id: ["Poster", "Banner Digital", "Spanduk", "Iklan"],
		features_en: ["Poster", "Digital Banner", "Print Banner", "Ad"],
		price: "IDR 100.000+",
		priceNote_id: "Dinegosiasi · sesuai lingkup",
		priceNote_en: "Negotiable · based on scope",
		img: "assets/img/products/Product4.png",
	},
	{
		id: 403,
		cat: "creative",
		catIcon: "🎨",
		catLabel_id: "Creative Solutions",
		catLabel_en: "Creative Solutions",
		name_id: "Konten & Feeds Media Sosial",
		name_en: "Social Media Content & Feeds",
		desc_id: "Desain template Instagram, Twitter, TikTok thumbnail, dan paket konten media sosial.",
		desc_en: "Instagram template, Twitter, TikTok thumbnails, and social media content packages.",
		features_id: ["Instagram", "TikTok", "Template", "Story"],
		features_en: ["Instagram", "TikTok", "Template", "Story"],
		price: "IDR 150.000+",
		priceNote_id: "Dinegosiasi · sesuai paket",
		priceNote_en: "Negotiable · per package",
		img: "assets/img/products/Product4.png",
	},
	{
		id: 404,
		cat: "creative",
		catIcon: "🎨",
		catLabel_id: "Creative Solutions",
		catLabel_en: "Creative Solutions",
		name_id: "Desain Interior & Spatial",
		name_en: "Interior & Spatial Design",
		desc_id: "Konsep desain interior ruangan, visualisasi 3D, dan layout tata letak ruang.",
		desc_en: "Interior room design concept, 3D visualization, and spatial layout planning.",
		features_id: ["Konsep Interior", "3D Visual", "Layout", "Moodboard"],
		features_en: ["Interior Concept", "3D Visual", "Layout", "Moodboard"],
		price: "IDR 500.000+",
		priceNote_id: "Dinegosiasi · sesuai ruangan",
		priceNote_en: "Negotiable · based on rooms",
		img: "assets/img/products/Product4.png",
	},

	/* ── IOT ── */
	{
		id: 501,
		cat: "iot",
		catIcon: "⚙️",
		catLabel_id: "Smart Technology",
		catLabel_en: "Smart Technology",
		name_id: "Proyek IoT Custom",
		name_en: "Custom IoT Project",
		desc_id: "Pengembangan sistem IoT custom — dari sensor, aktuator, hingga integrasi cloud.",
		desc_en: "Custom IoT system development — sensors, actuators, and cloud integration.",
		features_id: ["Arduino", "ESP32", "Raspberry Pi", "Sensor"],
		features_en: ["Arduino", "ESP32", "Raspberry Pi", "Sensor"],
		price: "IDR (Nego)",
		priceNote_id: "Dinegosiasi · sesuai kompleksitas",
		priceNote_en: "Negotiable · based on complexity",
		img: "assets/img/products/Product6.jpg",
	},
	{
		id: 502,
		cat: "iot",
		catIcon: "⚙️",
		catLabel_id: "Smart Technology",
		catLabel_en: "Smart Technology",
		name_id: "Tugas Akhir & Skripsi IoT",
		name_en: "IoT Thesis & Final Project",
		desc_id: "Bantuan pengerjaan tugas akhir, skripsi, dan proyek IoT untuk kebutuhan akademik.",
		desc_en: "IoT thesis assistance, final project, and academic IoT projects.",
		features_id: ["Skripsi IoT", "TA IoT", "Prototipe", "Dokumentasi"],
		features_en: ["IoT Thesis", "Final Project", "Prototype", "Docs"],
		price: "IDR 500.000+",
		priceNote_id: "Dinegosiasi · sesuai lingkup",
		priceNote_en: "Negotiable · based on scope",
		img: "assets/img/products/Product6.jpg",
	},
	{
		id: 503,
		cat: "iot",
		catIcon: "⚙️",
		catLabel_id: "Smart Technology",
		catLabel_en: "Smart Technology",
		name_id: "Smart Home & Otomasi Rumah",
		name_en: "Smart Home & Home Automation",
		desc_id: "Sistem otomasi rumah pintar — kendali lampu, kunci pintu, dan monitoring via app.",
		desc_en: "Smart home automation — light, door lock control, and app monitoring.",
		features_id: ["Smart Home", "Relay", "MQTT", "Mobile App"],
		features_en: ["Smart Home", "Relay", "MQTT", "Mobile App"],
		price: "IDR (Nego)",
		priceNote_id: "Dinegosiasi · sesuai kebutuhan",
		priceNote_en: "Negotiable · based on needs",
		img: "assets/img/products/Product6.jpg",
	},
	{
		id: 504,
		cat: "iot",
		catIcon: "⚙️",
		catLabel_id: "Smart Technology",
		catLabel_en: "Smart Technology",
		name_id: "Sistem Monitoring & Dashboard",
		name_en: "Monitoring System & Dashboard",
		desc_id: "Sistem monitoring real-time dengan dashboard web — suhu, kelembaban, energi, dan lainnya.",
		desc_en: "Real-time monitoring with web dashboard — temperature, humidity, energy, and more.",
		features_id: ["Real-time", "Dashboard", "Grafik", "Alert"],
		features_en: ["Real-time", "Dashboard", "Chart", "Alert"],
		price: "IDR 1.000.000+",
		priceNote_id: "Dinegosiasi · sesuai fitur",
		priceNote_en: "Negotiable · based on features",
		img: "assets/img/products/Product6.jpg",
	},
	{
		id: 505,
		cat: "iot",
		catIcon: "⚙️",
		catLabel_id: "Smart Technology",
		catLabel_en: "Smart Technology",
		name_id: "Proyek IoT untuk Sekolah / SMK",
		name_en: "IoT Project for School / Vocational",
		desc_id: "Proyek IoT untuk keperluan sekolah, SMK, perlombaan, dan pameran teknologi siswa.",
		desc_en: "IoT projects for schools, vocational education, competitions, and tech exhibitions.",
		features_id: ["Sekolah", "SMK", "Lomba", "Pameran"],
		features_en: ["School", "Vocational", "Competition", "Exhibition"],
		price: "IDR 500.000+",
		priceNote_id: "Dinegosiasi · sesuai lingkup",
		priceNote_en: "Negotiable · based on scope",
		img: "assets/img/products/Product6.jpg",
	},
];

/* ═══════════════════════════════════════════════
   STATE
═══════════════════════════════════════════════ */
let cart = {};
let currentCat = "all";
let lang = "id"; // default bahasa indonesia

/* ═══════════════════════════════════════════════
   I18N
═══════════════════════════════════════════════ */
function t(key) {
	return LANG[lang][key] || key;
}

function applyTranslations() {
	document.documentElement.lang = lang;
	document.querySelectorAll("[data-i18n]").forEach((el) => {
		const key = el.getAttribute("data-i18n");
		if (LANG[lang][key] !== undefined) el.textContent = LANG[lang][key];
	});
	document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
		const key = el.getAttribute("data-i18n-ph");
		if (LANG[lang][key] !== undefined) el.placeholder = LANG[lang][key];
	});
	// update cart bar label if visible
	updateCartBar();
	// re-render to pick up translated names
	renderProducts();
	renderCategoryNav();
	// re-render cart if open
	const cartOpen = document.getElementById("cartDrawer").classList.contains("open");
	if (cartOpen) renderCartDrawer();
}

function toggleLang() {
	lang = lang === "id" ? "en" : "id";
	const btn = document.getElementById("langBtn");
	btn.querySelector(".lang-flag").textContent = lang === "id" ? "🇮🇩" : "🇺🇸";
	btn.querySelector(".lang-text").textContent = lang.toUpperCase();
	applyTranslations();
}

/* ═══════════════════════════════════════════════
   CATEGORY NAV
═══════════════════════════════════════════════ */
const CATS = [
	{ key: "all", icon: "", id: "cat_all", en: "cat_all" },
	{ key: "docs", icon: "📄", id: "cat_docs", en: "cat_docs" },
	{ key: "web", icon: "🌐", id: "cat_web", en: "cat_web" },
	{ key: "software", icon: "💻", id: "cat_software", en: "cat_software" },
	{ key: "creative", icon: "🎨", id: "cat_creative", en: "cat_creative" },
	{ key: "iot", icon: "⚙️", id: "cat_iot", en: "cat_iot" },
];

function renderCategoryNav() {
	const nav = document.getElementById("categoryNav");
	nav.innerHTML = "";
	CATS.forEach((c) => {
		const btn = document.createElement("button");
		btn.className = "cat-btn" + (currentCat === c.key ? " active" : "");
		btn.dataset.cat = c.key;
		btn.textContent = (c.icon ? c.icon + " " : "") + t(c.id);
		btn.addEventListener("click", () => {
			currentCat = c.key;
			renderCategoryNav();
			renderProducts();
		});
		nav.appendChild(btn);
	});
}

/* ═══════════════════════════════════════════════
   RENDER PRODUCTS
═══════════════════════════════════════════════ */
function renderProducts() {
	const grid = document.getElementById("productGrid");
	const filtered = currentCat === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.cat === currentCat);

	const bycat = {};
	filtered.forEach((p) => {
		if (!bycat[p.cat]) bycat[p.cat] = [];
		bycat[p.cat].push(p);
	});

	grid.innerHTML = "";
	Object.entries(bycat).forEach(([cat, items]) => {
		const sec = document.createElement("div");
		sec.className = "category-section";
		const ref = items[0];
		const label = lang === "id" ? ref.catLabel_id : ref.catLabel_en;
		sec.innerHTML = `<div class="category-label"><span class="category-label-icon">${ref.catIcon}</span>${label}</div>`;
		const mg = document.createElement("div");
		mg.className = "menu-grid";
		items.forEach((p) => mg.appendChild(createCard(p)));
		sec.appendChild(mg);
		grid.appendChild(sec);
	});
}

function createCard(p) {
	const qty = cart[p.id]?.qty || 0;
	const inCart = qty > 0;
	const name = lang === "id" ? p.name_id : p.name_en;
	const desc = lang === "id" ? p.desc_id : p.desc_en;
	const features = lang === "id" ? p.features_id : p.features_en;
	const priceNote = lang === "id" ? p.priceNote_id : p.priceNote_en;

	const div = document.createElement("div");
	div.className = "product-card" + (inCart ? " in-cart" : "");

	const imgHtml = `<div class="card-img">
    <img src="${p.img}" alt="${name}" loading="lazy" onerror="this.parentElement.innerHTML='<div class=\\'card-img-emoji\\'>${p.catIcon}</div>'">
    <div class="in-cart-tag">✓ ${lang === "id" ? "Ditambahkan" : "Added"}</div>
  </div>`;

	const footer =
		qty > 0
			? `<div class="qty-control">
        <button class="qminus" data-id="${p.id}">−</button>
        <span class="qty-num">${qty}</span>
        <button class="qplus" data-id="${p.id}">+</button>
      </div>`
			: `<button class="add-btn" data-id="${p.id}">+</button>`;

	div.innerHTML = `${imgHtml}
    <div class="card-body">
      <div class="card-name">${name}</div>
      <div class="card-desc">${desc}</div>
      <div class="card-features">${features.map((f) => `<span class="feat-tag">${f}</span>`).join("")}</div>
      <div class="card-footer">
        <div class="card-price">${p.price}<small>${priceNote}</small></div>
        ${footer}
      </div>
    </div>`;

	div.querySelectorAll(".add-btn").forEach((b) =>
		b.addEventListener("click", (e) => {
			e.stopPropagation();
			changeQty(p.id, 1);
		}),
	);
	div.querySelectorAll(".qminus").forEach((b) =>
		b.addEventListener("click", (e) => {
			e.stopPropagation();
			changeQty(p.id, -1);
		}),
	);
	div.querySelectorAll(".qplus").forEach((b) =>
		b.addEventListener("click", (e) => {
			e.stopPropagation();
			changeQty(p.id, 1);
		}),
	);
	div.addEventListener("click", () => {
		if (!cart[p.id]) changeQty(p.id, 1);
	});
	return div;
}

/* ═══════════════════════════════════════════════
   CART
═══════════════════════════════════════════════ */
function changeQty(id, delta) {
	const p = PRODUCTS.find((x) => x.id === id);
	if (!cart[id]) cart[id] = { ...p, qty: 0 };
	cart[id].qty = Math.max(0, cart[id].qty + delta);
	if (cart[id].qty === 0) delete cart[id];
	updateCartBar();
	renderProducts();
}

function updateCartBar() {
	const items = Object.values(cart);
	const total = items.reduce((s, i) => s + i.qty, 0);
	const badge = document.getElementById("cartBadge");
	const bar = document.getElementById("cartBar");
	const label = document.getElementById("cartBarLabel");
	if (total > 0) {
		badge.textContent = total;
		badge.classList.add("show");
		bar.classList.add("visible");
		label.textContent = lang === "id" ? `Keranjang · ${total} layanan` : `Cart · ${total} service${total > 1 ? "s" : ""}`;
	} else {
		badge.classList.remove("show");
		bar.classList.remove("visible");
	}
}

function openCart() {
	renderCartDrawer();
	document.getElementById("cartOverlay").classList.add("open");
	document.getElementById("cartDrawer").classList.add("open");
}
function closeCart() {
	document.getElementById("cartOverlay").classList.remove("open");
	document.getElementById("cartDrawer").classList.remove("open");
}
function openSide() {
	document.getElementById("sideOverlay").classList.add("open");
	document.getElementById("sideDrawer").classList.add("open");
}
function closeSide() {
	document.getElementById("sideOverlay").classList.remove("open");
	document.getElementById("sideDrawer").classList.remove("open");
}

function showPage(name) {
	document.querySelectorAll(".page-section").forEach((p) => p.classList.remove("active"));
	document.querySelectorAll(".side-nav-item").forEach((n) => n.classList.remove("active"));
	document.getElementById("page-" + name).classList.add("active");
	document.querySelector(`.side-nav-item[data-page="${name}"]`).classList.add("active");
	closeSide();
}

function renderCartDrawer() {
	const body = document.getElementById("cartBody");
	const footer = document.getElementById("cartFooter");
	const items = Object.values(cart);

	if (!items.length) {
		body.innerHTML = `<div class="cart-empty"><div class="empty-icon">🛒</div><p>${t("cart_empty")}</p></div>`;
		footer.style.display = "none";
		return;
	}
	footer.style.display = "block";

	// Update form placeholders
	document.getElementById("cfName").placeholder = t("form_name_ph");
	document.getElementById("cfContact").placeholder = t("form_contact_ph");
	document.getElementById("orderNote").placeholder = t("form_note_ph");

	const summaryHtml = `<div class="summary-box">
    <div class="sum-row"><span class="s-label">${t("cart_summary_label")}</span><span class="s-val">${items.length} ${lang === "id" ? "layanan" : "service" + (items.length > 1 ? "s" : "")}</span></div>
    <div class="sum-row total-row"><span class="s-label">${t("cart_pricing_label")}</span><span class="s-val">${t("cart_pricing_val")}</span></div>
  </div>`;

	let itemsHtml = `<div class="cart-items-section"><div class="cart-items-label">${t("cart_selected_label")}</div>`;
	itemsHtml += items
		.map((item) => {
			const name = lang === "id" ? item.name_id : item.name_en;
			const priceNote = lang === "id" ? item.priceNote_id : item.priceNote_en;
			return `<div class="cart-item">
      <div class="ci-info">
        <div class="ci-name">${name}</div>
        <div class="ci-price">${item.price} · ${priceNote}</div>
      </div>
      <div class="ci-controls">
        <button class="ci-btn" data-id="${item.id}" data-delta="-1">−</button>
        <span class="ci-qty">${item.qty}</span>
        <button class="ci-btn" data-id="${item.id}" data-delta="1">+</button>
      </div>
    </div>`;
		})
		.join("");
	itemsHtml += `</div>`;

	const others = PRODUCTS.filter((p) => !cart[p.id]);
	let addMoreHtml = "";
	if (others.length) {
		addMoreHtml = `<div class="add-more-section"><div class="add-more-label">${t("cart_addmore_label")}</div><div class="add-more-slider">`;
		others.forEach((p) => {
			const name = lang === "id" ? p.name_id : p.name_en;
			addMoreHtml += `<div class="add-more-card" data-id="${p.id}">
        <div class="add-more-img"><img src="${p.img}" alt="${name}" loading="lazy" onerror="this.parentElement.textContent='${p.catIcon}'"></div>
        <div class="add-more-body">
          <div class="add-more-name">${name}</div>
          <div class="add-more-footer">
            <span class="add-more-price">${p.price}</span>
            <button class="add-more-btn" data-id="${p.id}">+</button>
          </div>
        </div>
      </div>`;
		});
		addMoreHtml += `</div></div>`;
	}

	body.innerHTML = summaryHtml + itemsHtml + addMoreHtml;

	body.querySelectorAll(".ci-btn").forEach((b) =>
		b.addEventListener("click", () => {
			changeQty(parseInt(b.dataset.id), parseInt(b.dataset.delta));
			renderCartDrawer();
		}),
	);
	body.querySelectorAll(".add-more-btn").forEach((b) =>
		b.addEventListener("click", (e) => {
			e.stopPropagation();
			changeQty(parseInt(b.dataset.id), 1);
			renderCartDrawer();
		}),
	);
	body.querySelectorAll(".add-more-card").forEach((c) =>
		c.addEventListener("click", () => {
			changeQty(parseInt(c.dataset.id), 1);
			renderCartDrawer();
		}),
	);
}

/* ═══════════════════════════════════════════════
   CHECKOUT
═══════════════════════════════════════════════ */
document.getElementById("checkoutBtn").addEventListener("click", () => {
	const items = Object.values(cart);
	if (!items.length) return;
	const name = document.getElementById("cfName").value.trim();
	const contact = document.getElementById("cfContact").value.trim();
	const note = document.getElementById("orderNote").value.trim();
	let errors = [];

	if (!name) errors.push("Nama wajib diisi");
	if (!contact) errors.push("Kontak wajib diisi");

	if (errors.length) {
		alert(errors.join("\n"));
		return;
	}

	let msg = t("wa_greeting");
	items.forEach((item, i) => {
		const itemName = lang === "id" ? item.name_id : item.name_en;
		const priceNote = lang === "id" ? item.priceNote_id : item.priceNote_en;
		msg += `${i + 1}. *${itemName}*\n   ${item.price} (${priceNote})\n   ${t("wa_qty")}: ${item.qty}\n\n`;
	});
	msg += `👤 ${t("wa_name")}: ${name}\n`;
	if (contact) msg += `📱 ${t("wa_contact")}: ${contact}\n`;
	if (note) msg += `📝 ${t("wa_notes")}: ${note}\n`;
	msg += t("wa_closing");
	window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, "_blank");
});

/* ═══════════════════════════════════════════════
   EVENTS
═══════════════════════════════════════════════ */
document.getElementById("langBtn").addEventListener("click", toggleLang);
document.getElementById("menuBtn").addEventListener("click", openSide);
document.getElementById("closeSideBtn").addEventListener("click", closeSide);
document.getElementById("sideOverlay").addEventListener("click", closeSide);
document.querySelectorAll(".side-nav-item").forEach((item) => item.addEventListener("click", () => showPage(item.dataset.page)));
document.getElementById("cartIconBtn").addEventListener("click", openCart);
document.getElementById("cartBar").addEventListener("click", openCart);
document.getElementById("closeCartBtn").addEventListener("click", closeCart);
document.getElementById("cartOverlay").addEventListener("click", closeCart);

/* ═══════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════ */
renderCategoryNav();
renderProducts();
applyTranslations();
