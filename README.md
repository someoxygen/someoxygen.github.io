# Mustafa Yücel Portfolio

React ve TypeScript ile geliştirilmiş kişisel portfolyo web sitesi. Proje; hakkımda bilgisi, teknik yetenekler, iş deneyimi, özgeçmiş ve GitHub projelerini tek bir responsive arayüzde sunar.

Canlı site: [mustafayucel.com](https://mustafayucel.com/)

## Özellikler

- Responsive navbar ve mobil uyumlu menü
- Hakkımda, projeler ve özgeçmiş sayfaları
- Proje kartları ve kategori filtreleme
- Teknik yetenekler, deneyim, eğitim ve sertifika bölümleri
- Bootstrap tabanlı modern kart ve grid tasarımı
- React Router ile sayfa yönlendirme
- GitHub Pages dağıtım desteği

## Kullanılan Teknolojiler

- React
- TypeScript
- React Router
- Bootstrap
- React Icons
- CSS3
- GitHub Pages

## Sayfalar

| Sayfa | Açıklama |
| --- | --- |
| `Hakkımda` | Kısa tanıtım, teknoloji alanları, yaklaşım ve deneyim özeti |
| `Projelerim` | Frontend, Backend ve Full-Stack kategorilerine ayrılmış proje listesi |
| `CV` | Eğitim, iş deneyimi, teknik yetenekler, projeler ve sertifikalar |

## Kurulum

Projeyi yerelde çalıştırmak için:

```bash
npm install
npm start
```

Uygulama geliştirme modunda `http://localhost:3000` adresinde çalışır.

## Komutlar

```bash
npm start
```

Geliştirme sunucusunu başlatır.

```bash
npm run build
```

Production build oluşturur ve çıktıları `build` klasörüne yazar.

```bash
npm test
```

Test çalıştırıcısını başlatır.

```bash
npm run deploy
```

Projeyi GitHub Pages üzerine yayınlar. Yayınlama öncesinde otomatik olarak production build alınır.

## Proje Yapısı

```text
src/
  assets/
    profile.jpg
  components/
    Footer.tsx
    Navbar.tsx
  pages/
    About.tsx
    Projects.tsx
    Resume.tsx
  App.tsx
  index.css
  index.tsx
```

## Öne Çıkan Projeler

- Product Store App
- Chat App
- City Guide
- Messaging App
- Notefy
- Movie App
- Inventor Automation
- Product List API
- Portfolio Website

## Geliştirici

Mustafa Yücel  
Full Stack Developer

- GitHub: [someoxygen](https://github.com/someoxygen)
- Portfolio: [mustafayucel.com](https://mustafayucel.com/)

## SEO altyapısı

`npm run build`, React derlemesinden sonra altı sayfayı gerçek HTML içeriğiyle üretir. Sayfa metinleri, bağlantıları ve SEO etiketleri JavaScript çalışmadan da okunabilir; tarayıcıda React hydration ile etkileşimli hale gelir.

| Türkçe | İngilizce |
| --- | --- |
| `/` | `/en/` |
| `/projects/` | `/en/projects/` |
| `/resume/` | `/en/resume/` |

- Her sayfa için başlık, açıklama, kendisine işaret eden canonical, karşılıklı `hreflang` ve `x-default` bağlantıları bulunur.
- Dil URL ile belirlenir. Kayıtlı dil tercihi, doğrudan açılan bir URL’nin dilini değiştirmez. Dil düğmesi aynı sayfanın diğer dildeki adresine gider.
- Open Graph ve Twitter kartları, `public/social-preview.png` paylaşım görselini kullanır (1200 × 630).
- JSON-LD içinde Person, WebSite, ProfilePage/WebPage/CollectionPage; alt sayfalarda BreadcrumbList ve projelerde SoftwareSourceCode listesi üretilir. Bunlar zengin sonuç gösterimi garantisi vermez.
- `build/sitemap.xml` aynı sayfa tanımlarından otomatik oluşturulur; `public/robots.txt` dosyası sitemap adresini bildirir. Gerçek içerik değişim tarihleri takip edilmediğinden yanıltıcı `lastmod` tarihleri eklenmez.
- GitHub Pages alt sayfaları kendi `index.html` dosyalarından sunar. Sonunda `/` olmayan adresler için Pages’in dizin yönlendirmesi kullanılır. Bilinmeyen adresler gerçek 404 yanıtı ve `noindex` sayfası alır; ana sayfaya toplu yönlendirilmez.
- Kullanılmayan Font Awesome CSS isteği kaldırılmıştır. Google Fonts, CSS `@import` yerine HTML’den erken keşfedilir; bağlantı ön hazırlığı ve `display=swap` kullanılır.

### Bakım ve doğrulama

- Alan adı, sayfa adresleri ve iki dilde başlık/açıklamalar: `src/seo/config.ts`.
- Paylaşım etiketleri ve yapılandırılmış veri: `src/seo/metadata.ts`.
- Statik HTML ve sitemap üretimi: `scripts/prerender.cjs`.
- Build sonunda otomatik kontroller: `scripts/verify-seo.cjs`. Sayfa içerikleri, tekil etiketler, dil bağlantıları, JSON-LD, iç bağlantılar, paylaşım görseli ve 404 kontrol edilir.
- `npm test -- --watchAll=false`: gezinme, canonical güncellemeleri, dil önceliği, 404 davranışı ve altı sayfada hydration kontrolleri dahil uygulama testleri.

Yeni sayfa eklerken `App.tsx` sayfa eşlemesini ve `config.ts` içindeki `pagePaths`/metadata tanımlarını birlikte güncelleyin; beklenen sayfa sayılarını doğrulama testlerine yansıtın. `build/` üretilen çıktıdır, elle düzenlenmez.

### Yayınlama ve Search Console

`npm run deploy`, kontrolleri içeren build işleminden sonra `build/` klasörünü GitHub Pages’e yayınlar. `CNAME` dosyası özel alan adını korur; `.nojekyll` yayınlama seçeneği statik dosyaların doğrudan sunulmasını sağlar.

Yayın sonrası `/projects/`, `/resume/` ve İngilizce karşılıklarının HTTP 200; olmayan bir adresin HTTP 404 verdiğini doğrulayın. DNS ve GitHub Pages tarafında HTTPS zorlamasını ve alternatif alan adının ana alan adına yönlendirilmesini kontrol edin; HTTP yönlendirmeleri React kodundan ayarlanamaz.

Google Search Console’da `mustafayucel.com` alan adı mülkünü DNS ile doğrulayın ve `https://mustafayucel.com/sitemap.xml` adresini gönderin. URL Denetimi ile her dilde bir sayfayı kontrol edin. İndeksleme, sıralama, Core Web Vitals ve zengin sonuçlar yayın sonrasında gerçek verilerle izlenmelidir.

### `index.html` için noindex raporu

GitHub Pages `/index.html` ve diğer sayfaların `index.html` adreslerini de sunar. React bu adresleri dizin adresleriyle aynı sayfa olarak tanır; hydration sonrasında `noindex` eklemez. Canonical ve sitemap adresleri `/`, `/projects/` gibi dizin adresleri olarak kalır. Bilinmeyen adreslerde ve 404 sayfasında `noindex` korunur.

Yayın sonrası Search Console'da raporlanan `https://www.mustafayucel.com/index.html` adresini URL Denetimi > Canlı URL'yi test et ile kontrol edin. `www` adresi ana alan adına yönlenir; `/index.html` sayfasının canonical adresi `https://mustafayucel.com/` olur. İndekse eklenmesini isteyeceğiniz esas adres ana sayfadır. Eski URL'nin yönlendirme veya alternatif sayfa olarak raporlanması normaldir; her URL varyantının ayrı indekslenmesi hedeflenmez. Canlı test başarılı olduğunda noindex raporunda Düzeltmeyi doğrula işlemini başlatın.
