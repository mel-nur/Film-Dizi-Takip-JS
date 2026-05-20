# 🎬 FilmTakip - Film & Dizi Takip Uygulaması

Sevdiğiniz filmleri ve dizileri keşfetmek, izlediklerinizi takip etmek ve izlenecek listesi oluşturmak için basit ve modern bir web uygulaması.

## ✨ Özellikler

- **Film & Dizi Arama**: TMDB API kullanarak binlerce film ve dizi içinde arayın
- **Hızlı Arama**: Yazarken otomatik arama sonuçları (400ms)
- **Favorilere Ekle**: İzledikleriniz ve izlenecekler listesine film/dizi ekleyin
- **Lokal Kayıt**: LocalStorage kullanarak verileriniz tarayıcınızda güvenle saklanır
- **Duyarlı Tasarım**: Mobil, tablet ve masaüstü cihazlarda mükemmel görünüm
- **Koyu Tema**: Gözleri koruyan modern dark mode tasarım
- **Türkçe Dil**: Tam Türkçe arayüz ve TMDB sonuçları

## 🛠 Teknolojiler

- HTML5
- CSS3
- Vanilla JavaScript
- Bootstrap 5
- TMDB API
- LocalStorage API

## 📋 Gereksinimler

- Modern web tarayıcı (Chrome, Firefox, Safari, Edge)
- İnternet bağlantısı
- TMDB API anahtarı (ücretsiz)


## 🎥 Demo Video

Uygulamayı görmek için aşağıdaki videoyu izleyin:

[![FilmTakip Demo](https://img.youtube.com/vi/VIDEO_ID_BURADA/0.jpg)](https://www.youtube.com/watch?v=VIDEO_ID_BURADA)

## ⚙️ Kurulum ve Konfigürasyon

### 1. TMDB API Anahtarı Alın

1. https://www.themoviedb.org/ adresine gidin
2. Ücretsiz hesap oluşturun
3. Ayarlar → API kısmından API key alın

### 2. API Anahtarını Ekleyin

app.js dosyasının ilk satırını düzenleyin:

const API_KEY = "SIZIN_API_ANAHTAR_BURADA";

### 3. Uygulamayı Açın

index.html dosyasını web tarayıcınızda açın veya lokal server çalıştırın:

## 📚 Proje Yapısı

FilmDiziTakip/
├── index.html        # Arama sayfası
├── liste.html        # Listelerim sayfası
├── app.js           # Arama fonksiyonları
├── liste.js         # Liste yönetimi
├── style.css        # Stil dosyası
└── README.md        # Dokümantasyon

## 📖 Kullanım

### Arama Sayfası (index.html)

1. Arama kutusuna film veya dizi adı yazın
2. Arama sonuçları otomatik olarak görünür
3. Her sonuç kartında:
   - ✅ İzledim: İzlediklerim listesine ekle/çıkar
   - 🔖 Listele: İzlenecekler listesine ekle/çıkar

### Listelerim Sayfası (liste.html)

1. ✅ İzlenenler sekmesinde izlediklerinizi görün
2. 🔖 İzlenecekler sekmesinde planladıklarınızı görün
3. 🗑 Kaldır butonu ile bir öğeyi listeden çıkarın

## 💾 Veri Saklama

Uygulamada kaydedilen bilgiler tarayıcınızın LocalStorage'ında tutulur:

- izlenenler: İzlediğiniz film ve diziler
- izlenecekler: İzleyeceğiniz film ve diziler

Verileri temizlemek için:
localStorage.clear(); // Tüm verileri sil
localStorage.removeItem("izlenenler"); // Sadece izlenenler sil

## 📄 Lisans

Bu proje eğitim amaçlı oluşturulmuştur.

## 🙏 Kaynaklar

- TMDB API: https://developer.themoviedb.org/docs
- Bootstrap 5: https://getbootstrap.com/
- MDN Web Dokümanları: https://developer.mozilla.org/tr/
