const API_KEY = "SIZIN_API_ANAHTAR_BURADA";
const BASE_URL = "https://api.themoviedb.org/3";
const POSTER_URL = "https://image.tmdb.org/t/p/w500";

const input = document.getElementById("arama-input");
const sonuclarDiv = document.getElementById("sonuclar");
const filtreBtnlar = document.querySelectorAll(".filtre-btn");


input.addEventListener("keyup", (e) => {
    const aranan = input.value.trim();
    if (aranan.length < 2) {
        sonuclarDiv.innerHTML = "";
        return;
    }
    if ( e.key === "Enter") ara(aranan);
});

filtreBtnlar.forEach(btn => {
    btn.addEventListener("click", () => {
        filtreBtnlar.forEach(b => b.classList.remove("akitif-filtre"));
        btn.classList.add("aktif-filtre");
        const aranan = input.value.trim();
        if (aranan) ara(aranan);
    });
});

let zamanlayici;
input.addEventListener("input", () => {
    clearTimeout(zamanlayici);
    const aranan = input.value.trim();
    if (aranan.length < 2) { sonuclarDiv.innerHTML = ""; return;}
    zamanlayici = setTimeout(() => ara(aranan), 400);
});


async function ara(sorgu) {
  sonuclarDiv.innerHTML = `<p class="bos-mesaj">Aranıyor...</p>`;

  try {
    const endpoint = "search/multi" ;
    const url = `${BASE_URL}/${endpoint}?api_key=${API_KEY}&query=${encodeURIComponent(sorgu)}&language=tr-TR`;
    const yanit = await fetch(url);
    const veri = await yanit.json();
    const sonuclar = veri.results.filter(i => i.media_type !== "person" && (i.poster_path));
    console.log(sonuclar);

    if (sonuclar.length === 0) {
        sonuclarDiv.innerHTML = `<p class="bos-mesaj">Sonuç bulunamadı 😕</p>`;
        return;
    }

    sonuclarDiv.innerHTML = sonuclar.map(item => kartHtml(item)).join("");

  } catch (hata) {
    sonuclarDiv.innerHTML = `<p class="bos-mesaj">Bir hata oluştu 😞</p>`;
  }
}

function kartHtml(item) {
    const baslik = item.title || item.name;
    const yil = (item.release_date || item.first_air_date || "").slice(0, 4);
    const puan = item.vote_average ? item.vote_average.toFixed(1) : "—";
    const tur = item.media_type === "tv" || item.first_air_date ? "tv" : "movie";
    const turEtiketi = tur === "tv" ? "Dizi" : "Film";
    const poster = item.poster_path
        ? `${POSTER_URL}${item.poster_path}`
        : "https://via.placeholder.com/200x300/1a1a2e/888?text=Poster+Yok";


    const izlenenler = JSON.parse(localStorage.getItem("izlenenler")) || [];
    const izlenecekler = JSON.parse(localStorage.getItem("izlenecekler")) || [];

    const izlenenMi = izlenenler.some(i => i.id === item.id);
    const izlenecekMi = izlenecekler.some(i => i.id === item.id);

  return `
    <div class="col-6 col-sm-4 col-md-3 col-lg-2">
      <div class="kart">
        <img src="${poster}" alt="${baslik}" loading="lazy" />
        <div class="kart-bilgi">
          <p class="kart-baslik" title="${baslik}">${baslik}</p>
          <div class="kart-meta">
            <span>${yil} · ${turEtiketi}</span>
            <span class="puan">⭐ ${puan}</span>
          </div>
          <div class="kart-butonlar">
            <button
              class="${izlenenMi ? "eklendi" : ""}"
              onclick="listeye(${item.id}, '${baslik.replace(/'/g, "\\'")}', '${poster}', '${yil}', '${tur}', ${puan}, 'izlenenler', this)"
            >${izlenenMi ? "✅ İzlendi" : "✅ İzledim"}</button>
            <button
              class="${izlenecekMi ? "eklendi" : ""}"
              onclick="listeye(${item.id}, '${baslik.replace(/'/g, "\\'")}', '${poster}', '${yil}', '${tur}', ${puan}, 'izlenecekler', this)"
            >${izlenecekMi ? "🔖 Listede" : "🔖 Listele"}</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function listeye(id, baslik, poster, yil, tur, puan, liste, btn) {
  let kayitlar = JSON.parse(localStorage.getItem(liste)) || [];
  const varMi = kayitlar.some(i => i.id === id);

  if (varMi) {
    kayitlar = kayitlar.filter(i => i.id !== id);
    btn.classList.remove("eklendi");
    btn.textContent = liste === "izlenenler" ? "✅ İzledim" : "🔖 Listele";
  } else {
    kayitlar.push({ id, baslik, poster, yil, tur, puan });
    btn.classList.add("eklendi");
    btn.textContent = liste === "izlenenler" ? "✅ İzlendi" : "🔖 Listede";
  }

  localStorage.setItem(liste, JSON.stringify(kayitlar));
}