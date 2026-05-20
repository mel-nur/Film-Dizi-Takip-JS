const listelerDiv = document.getElementById("liste-icerik");
const sekmeBtnlar = document.querySelectorAll(".filtre-btn");

let aktifListe = "izlenenler";

sekmeBtnlar.forEach(btn => {
  btn.addEventListener("click", () => {
    sekmeBtnlar.forEach(b => b.classList.remove("aktif-filtre"));
    btn.classList.add("aktif-filtre");
    aktifListe = btn.dataset.liste;
    listeGoster();
  });
});

function listeGoster() {
  const kayitlar = JSON.parse(localStorage.getItem(aktifListe)) || [];

  if (kayitlar.length === 0) {
    listelerDiv.innerHTML = `
      <p class="bos-mesaj">
        ${aktifListe === "izlenenler" ? "Henüz izlediğin bir şey yok 🎬" : "Listelediğin bir şey yok 🔖"}
      </p>`;
    return;
  }

  listelerDiv.innerHTML = kayitlar.map(item => `
    <div class="col-6 col-sm-4 col-md-3 col-lg-2">
      <div class="kart">
        <img src="${item.poster}" alt="${item.baslik}" loading="lazy" />
        <div class="kart-bilgi">
          <p class="kart-baslik" title="${item.baslik}">${item.baslik}</p>
          <div class="kart-meta">
            <span>${item.yil} · ${item.tur === "tv" ? "Dizi" : "Film"}</span>
            <span class="puan">⭐ ${item.puan}</span>
          </div>
          <div class="kart-butonlar">
            <button class="sil-btn" onclick="sil(${item.id})">🗑 Kaldır</button>
          </div>
        </div>
      </div>
    </div>
  `).join("");
}


function sil(id) {
  let kayitlar = JSON.parse(localStorage.getItem(aktifListe)) || [];
  kayitlar = kayitlar.filter(i => i.id !== id);
  localStorage.setItem(aktifListe, JSON.stringify(kayitlar));
  listeGoster();
}

listeGoster();
