const SOURCE_IMAGE_BASE = "https://balirental.id/wp-content/uploads/2022/11";
const SOURCE_IMAGE_BASE_2026 = "https://balirental.id/wp-content/uploads/2026/05";

const carImages = {
  avanza: `${SOURCE_IMAGE_BASE}/r5.webp`,
  innovaReborn: `${SOURCE_IMAGE_BASE}/r7.webp`,
  grandInnova: `${SOURCE_IMAGE_BASE}/r15.webp`,
  xenia: `${SOURCE_IMAGE_BASE}/r3.webp`,
  sigra: `${SOURCE_IMAGE_BASE}/r3.webp`,
  veloz: `${SOURCE_IMAGE_BASE}/veloz.png`,
  agya: `${SOURCE_IMAGE_BASE}/r1.webp`,
  ayla: `${SOURCE_IMAGE_BASE}/r2.webp`,
  ertiga: `${SOURCE_IMAGE_BASE}/r6.webp`,
  terios: `${SOURCE_IMAGE_BASE}/r16.webp`,
  xpander: `${SOURCE_IMAGE_BASE}/expander.png`,
  brio: `${SOURCE_IMAGE_BASE}/r11.webp`,
  raize: `${SOURCE_IMAGE_BASE}/r12.webp`,
  hrv: `${SOURCE_IMAGE_BASE}/r14.webp`,
  jazz: `${SOURCE_IMAGE_BASE}/r17.webp`,
  fortuner: `${SOURCE_IMAGE_BASE}/r9.webp`,
  hiace: `${SOURCE_IMAGE_BASE}/r19.webp`,
  elf: `${SOURCE_IMAGE_BASE}/r20.webp`,
  airEv: `${SOURCE_IMAGE_BASE_2026}/wulling-airev.png`,
  atto1: `${SOURCE_IMAGE_BASE_2026}/bydatto1.png`,
  bydM6: `${SOURCE_IMAGE_BASE_2026}/bydm6.png`,
};

const createCar = ({
  id,
  name,
  category,
  categoryLabel,
  badge,
  image,
  seats,
  luggage,
  price,
  driverPrice,
  transmission = "Automatic",
}) => {
  const startingPrice = price ?? driverPrice;

  return {
    id,
    name,
    category,
    categoryLabel,
    badge,
    image,
    transmission,
    seats: `${seats} penumpang`,
    luggage,
    price: startingPrice,
    packages: [
      ...(price
        ? [{ name: "Lepas kunci", duration: "24 jam", price, service: "self_drive" }]
        : []),
      ...(driverPrice
        ? [{ name: "Dengan sopir", duration: "10 jam", price: driverPrice, service: "with_driver" }]
        : []),
    ],
  };
};

const cars = [
  createCar({ id: "avanza", name: "Toyota Avanza", category: "family", categoryLabel: "Keluarga", badge: "Paling dicari", image: carImages.avanza, seats: 8, luggage: "2 koper besar", price: 350000, driverPrice: 650000 }),
  createCar({ id: "innova-reborn", name: "Toyota Innova Reborn", category: "family", categoryLabel: "Keluarga", badge: "Nyaman untuk jauh", image: carImages.innovaReborn, seats: 8, luggage: "3 koper besar", price: 650000, driverPrice: 900000 }),
  createCar({ id: "grand-innova", name: "Toyota Grand Innova", category: "family", categoryLabel: "Keluarga", badge: "Ruang lebih lega", image: carImages.grandInnova, seats: 8, luggage: "3 koper besar", price: 450000, driverPrice: 750000 }),
  createCar({ id: "xenia", name: "Daihatsu Xenia", category: "family", categoryLabel: "Keluarga", badge: "Praktis untuk keluarga", image: carImages.xenia, seats: 8, luggage: "2 koper besar", price: 350000, driverPrice: 650000 }),
  createCar({ id: "sigra", name: "Daihatsu Sigra", category: "city", categoryLabel: "City car", badge: "Hemat & lincah", image: carImages.sigra, seats: 8, luggage: "2 koper", price: 300000, driverPrice: 600000 }),
  createCar({ id: "all-new-avanza", name: "All New Avanza", category: "family", categoryLabel: "Keluarga", badge: "Favorit keluarga", image: carImages.veloz, seats: 8, luggage: "2 koper besar", price: 450000, driverPrice: 750000 }),
  createCar({ id: "agya", name: "Toyota Agya", category: "city", categoryLabel: "City car", badge: "Hemat bahan bakar", image: carImages.agya, seats: 4, luggage: "1 koper", price: 300000, driverPrice: 600000 }),
  createCar({ id: "ayla", name: "Daihatsu Ayla", category: "city", categoryLabel: "City car", badge: "Mudah bermanuver", image: carImages.ayla, seats: 4, luggage: "1 koper", price: 300000, driverPrice: 600000 }),
  createCar({ id: "ertiga", name: "Suzuki Ertiga", category: "family", categoryLabel: "Keluarga", badge: "Ruang lebih lega", image: carImages.ertiga, seats: 8, luggage: "2 koper besar", price: 350000, driverPrice: 650000 }),
  createCar({ id: "terios", name: "All New Terios", category: "suv", categoryLabel: "SUV", badge: "Siap eksplorasi", image: carImages.terios, seats: 8, luggage: "2 koper besar", price: 400000, driverPrice: 700000 }),
  createCar({ id: "xpander", name: "Mitsubishi Xpander", category: "family", categoryLabel: "Keluarga", badge: "Nyaman untuk jauh", image: carImages.xpander, seats: 8, luggage: "2 koper besar", price: 450000, driverPrice: 750000 }),
  createCar({ id: "brio", name: "Honda Brio", category: "city", categoryLabel: "City car", badge: "Hemat & lincah", image: carImages.brio, seats: 4, luggage: "1 koper", price: 300000, driverPrice: 600000 }),
  createCar({ id: "raize", name: "Toyota Raize", category: "suv", categoryLabel: "SUV", badge: "Kompak dan modern", image: carImages.raize, seats: 4, luggage: "2 koper", price: 400000, driverPrice: 700000 }),
  createCar({ id: "hrv", name: "Honda HRV", category: "suv", categoryLabel: "SUV", badge: "Premium dan nyaman", image: carImages.hrv, seats: 4, luggage: "2 koper besar", price: 650000, driverPrice: 900000 }),
  createCar({ id: "jazz-rs", name: "Honda Jazz RS", category: "city", categoryLabel: "City car", badge: "Gaya dinamis", image: carImages.jazz, seats: 4, luggage: "2 koper", price: 400000, driverPrice: 700000 }),
  createCar({ id: "fortuner-vrz", name: "Toyota Fortuner VRZ", category: "suv", categoryLabel: "SUV", badge: "Kelas premium", image: carImages.fortuner, seats: 8, luggage: "3 koper besar", price: 950000, driverPrice: 1200000 }),
  createCar({ id: "hiace", name: "Toyota Hiace", category: "van", categoryLabel: "Van & rombongan", badge: "Untuk rombongan", image: carImages.hiace, seats: 14, luggage: "8 koper", driverPrice: 1500000 }),
  createCar({ id: "elf-short", name: "Elf Short", category: "van", categoryLabel: "Van & rombongan", badge: "Rombongan praktis", image: carImages.elf, seats: 14, luggage: "8 koper", driverPrice: 1300000 }),
  createCar({ id: "elf-long", name: "Elf Long", category: "van", categoryLabel: "Van & rombongan", badge: "Kapasitas besar", image: carImages.elf, seats: 16, luggage: "10 koper", driverPrice: 1500000 }),
  createCar({ id: "wuling-air-ev", name: "Wuling Air EV", category: "electric", categoryLabel: "Electric", badge: "Mobilitas modern", image: carImages.airEv, seats: 2, luggage: "1 koper", price: 500000 }),
  createCar({ id: "byd-atto-1", name: "BYD Atto 1", category: "electric", categoryLabel: "Electric", badge: "Efisien dan modern", image: carImages.atto1, seats: 4, luggage: "2 koper", price: 500000 }),
  createCar({ id: "byd-m6", name: "BYD M6", category: "electric", categoryLabel: "Electric", badge: "Electric family car", image: carImages.bydM6, seats: 7, luggage: "3 koper besar", price: 750000, driverPrice: 1000000 }),
];
let activeFilter = "all";
let query = "";
let sort = "featured";
let selectedCar = null;
let selectedPackage = null;
const rupiah = (value) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  })
    .format(value)
    .replace("IDR", "Rp");
const grid = document.querySelector("#carGrid");
const empty = document.querySelector("#emptyState");
function filteredCars() {
  let result = cars.filter(
    (car) =>
      (activeFilter === "all" || car.category === activeFilter) &&
      car.name.toLowerCase().includes(query.toLowerCase()),
  );
  if (sort === "low") result.sort((a, b) => a.price - b.price);
  if (sort === "high") result.sort((a, b) => b.price - a.price);
  return result;
}
function renderCars() {
  const result = filteredCars();
  grid.innerHTML = result
    .map(
      (car) =>
        `<article class="car-card reveal"><div class="car-photo"><img src="${car.image}" alt="${car.name}" loading="lazy"><span class="car-badge">${car.badge}</span></div><div class="car-content"><div class="car-topline"><div><h3 class="car-title">${car.name}</h3><p class="car-category">${car.categoryLabel}</p></div><button class="car-favorite" data-fav="${car.id}" aria-label="Simpan ${car.name}">♡</button></div><div class="car-specs"><span>◉ ${car.transmission}</span><span>♙ ${car.seats}</span></div><div class="car-price-row"><div class="car-price"><small>Mulai dari</small><strong>${rupiah(car.price)}</strong><small>/ 24 jam</small></div><button class="view-car" data-car="${car.id}">Lihat mobil ↗</button></div></div></article>`,
    )
    .join("");
  empty.hidden = result.length > 0;
  grid.hidden = result.length === 0;
  document
    .querySelectorAll("[data-car]")
    .forEach((button) =>
      button.addEventListener("click", () => openDetail(button.dataset.car)),
    );
  document.querySelectorAll("[data-fav]").forEach((button) =>
    button.addEventListener("click", () => {
      button.classList.toggle("active");
      button.textContent = button.classList.contains("active") ? "♥" : "♡";
      showToast(
        button.classList.contains("active")
          ? "Kendaraan disimpan ke favorit perangkat"
          : "Kendaraan dihapus dari favorit",
      );
    }),
  );
}
function openDetail(id) {
  selectedCar = cars.find((car) => car.id === id);
  selectedPackage = selectedCar.packages[0];
  const content = document.querySelector("#detailContent");
  content.innerHTML = `<div class="modal-visual"><img src="${selectedCar.image}" alt="${selectedCar.name}"></div><div class="modal-body"><p class="eyebrow">${selectedCar.categoryLabel} · ${selectedCar.transmission}</p><h2 id="detailTitle">${selectedCar.name}</h2><p>${selectedCar.seats} · ${selectedCar.luggage}. Pilih paket yang paling sesuai dengan perjalananmu.</p><div class="package-options">${selectedCar.packages.map((pack, index) => `<button class="package-option ${index === 0 ? "selected" : ""}" data-package="${index}"><strong>${pack.name}</strong><small>${pack.duration} · ${rupiah(pack.price)}</small></button>`).join("")}</div><form class="modal-form" id="inquiryForm"><label>Mulai sewa<input type="datetime-local" id="startAt" required></label><label>Selesai sewa<input type="datetime-local" id="endAt" required></label><label class="full">Lokasi penjemputan<input type="text" id="pickup" placeholder="Contoh: Bandara Ngurah Rai" required></label><label>Nama (opsional)<input type="text" id="customerName" placeholder="Nama kamu"></label><label>Catatan (opsional)<input type="text" id="notes" placeholder="Kebutuhan tambahan"></label><div class="estimate full"><span>Estimasi dasar</span><strong id="estimatePrice">${rupiah(selectedPackage.price)}</strong></div><p class="full form-disclaimer">Ketersediaan dan harga final dikonfirmasi admin melalui WhatsApp.</p><button class="button modal-submit full" type="submit">Lanjut ke WhatsApp <span aria-hidden="true">↗</span></button></form></div>`;
  content.querySelector(".modal-body > p").textContent =
    `${selectedCar.seats} · ${selectedCar.luggage}. Pilih paket sesuai kebutuhan perjalanan Anda.`;
  const startInput = content.querySelector("#startAt");
  const endInput = content.querySelector("#endAt");
  const pickupInput = content.querySelector("#pickup");
  const nameInput = content.querySelector("#customerName");
  const pickupField = pickupInput.closest("label");
  const nameField = nameInput.closest("label");

  startInput.type = "date";
  endInput.type = "date";
  pickupInput.removeAttribute("required");
  nameInput.required = true;
  pickupField.parentNode.insertBefore(nameField, pickupField);
  nameInput.placeholder = "Nama Anda";
  nameInput.closest("label").firstChild.textContent = "Nama";
  pickupInput.closest("label").firstChild.textContent =
    "Lokasi penjemputan (opsional)";
  content.querySelector("#notes").closest("label").firstChild.textContent =
    "Catatan (opsional)";
  content.querySelector(".form-disclaimer").textContent =
    "Ketersediaan dan harga final dikonfirmasi tim kami melalui WhatsApp.";
  content.querySelector(".modal-submit").innerHTML =
    'Lanjutkan ke WhatsApp <span aria-hidden="true">↗</span>';
  document.querySelector("#detailModal").hidden = false;
  document.body.style.overflow = "hidden";
  document.querySelectorAll("[data-package]").forEach((button) =>
    button.addEventListener("click", () => {
      document
        .querySelectorAll("[data-package]")
        .forEach((item) => item.classList.remove("selected"));
      button.classList.add("selected");
      selectedPackage = selectedCar.packages[Number(button.dataset.package)];
      document.querySelector("#estimatePrice").textContent = rupiah(
        selectedPackage.price,
      );
    }),
  );
  document
    .querySelector("#inquiryForm")
    .addEventListener("submit", submitInquiry);
}
function closeDetail() {
  document.querySelector("#detailModal").hidden = true;
  document.body.style.overflow = "";
}
function submitInquiry(event) {
  event.preventDefault();
  const start = document.querySelector("#startAt").value;
  const end = document.querySelector("#endAt").value;
  const name = document.querySelector("#customerName").value.trim();
  if (!start || !end || !name) {
    showToast("Lengkapi tanggal dan nama Anda");
    return;
  }
  const pickup = document.querySelector("#pickup").value || "Belum ditentukan";
  const notes = document.querySelector("#notes").value || "Tidak ada catatan";
  const formalMessage = [
    "Selamat pagi/siang, tim JUARA RENTAL. Saya ingin mengajukan permintaan sewa kendaraan.",
    "",
    `Kendaraan: ${selectedCar.name}`,
    `Paket: ${selectedPackage.name} (${selectedPackage.duration})`,
    `Waktu mulai: ${start.replace("T", " ")}`,
    `Waktu selesai: ${end.replace("T", " ")}`,
    `Lokasi penjemputan: ${pickup}`,
    `Nama: ${name}`,
    `Catatan: ${notes}`,
    "",
    `Estimasi dasar: ${rupiah(selectedPackage.price)}`,
    "",
    "Mohon konfirmasi ketersediaan dan penawaran final. Terima kasih.",
  ].join("%0A");
  const message = `Halo admin JalanYuk, saya ingin mengajukan permintaan sewa.%0A%0AMobil: ${selectedCar.name}%0APaket: ${selectedPackage.name} (${selectedPackage.duration})%0AMulai: ${start.replace("T", " ")}%0ASelesai: ${end.replace("T", " ")}%0ALokasi jemput: ${pickup}%0ANama: ${name}%0ACatatan: ${notes}%0A%0AEstimasi dasar: ${rupiah(selectedPackage.price)}%0A%0EMohon cek ketersediaan dan harga finalnya. Terima kasih.`;
  window.open(
    `https://wa.me/6281234567890?text=${formalMessage}`,
    "_blank",
    "noopener",
  );
  showToast("Membuka WhatsApp dengan draf permintaan");
  closeDetail();
}
function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove("show"), 3000);
}
document.querySelectorAll(".filter-pill").forEach((button) =>
  button.addEventListener("click", () => {
    document
      .querySelectorAll(".filter-pill")
      .forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeFilter = button.dataset.filter;
    renderCars();
  }),
);
document.querySelector("#searchInput").addEventListener("input", (event) => {
  query = event.target.value;
  renderCars();
});
document.querySelector("#sortSelect").addEventListener("change", (event) => {
  sort = event.target.value;
  renderCars();
});
document.querySelector("#resetFilters").addEventListener("click", () => {
  activeFilter = "all";
  query = "";
  sort = "featured";
  document.querySelector("#searchInput").value = "";
  document.querySelector("#sortSelect").value = "featured";
  document
    .querySelectorAll(".filter-pill")
    .forEach((item, index) => item.classList.toggle("active", index === 0));
  renderCars();
});
document.querySelector("#closeModal").addEventListener("click", closeDetail);
document.querySelector("#detailModal").addEventListener("click", (event) => {
  if (event.target.id === "detailModal") closeDetail();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !document.querySelector("#detailModal").hidden)
    closeDetail();
});
const menuButton = document.querySelector("#menuButton");
menuButton.addEventListener("click", () => {
  const expanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!expanded));
  document
    .querySelector(".desktop-nav")
    .classList.toggle("mobile-open", !expanded);
});

function setupTrustMarquee() {
  const viewport = document.querySelector(".trust-marquee");
  const track = viewport.querySelector(".trust-track");
  const group = track.querySelector(".trust-group");
  const items = [...group.children].map((item) => item.cloneNode(true));

  function fillTrack() {
    group.replaceChildren(...items.map((item) => item.cloneNode(true)));

    // A full group must be at least as wide as the viewport to avoid empty gaps.
    while (group.getBoundingClientRect().width < viewport.clientWidth) {
      group.append(...items.map((item) => item.cloneNode(true)));
    }

    const distance = group.getBoundingClientRect().width;
    track.replaceChildren(group, group.cloneNode(true));
    track.style.setProperty("--marquee-shift", `-${distance}px`);
    track.style.setProperty("--marquee-duration", `${distance / 65}s`);
  }

  fillTrack();
  document.fonts.ready.then(fillTrack);
  new ResizeObserver(fillTrack).observe(viewport);
}

setupTrustMarquee();
renderCars();
