# Storyline — Starter Website Undangan Digital (Frontend)

Perubahan utama:
- Logo diganti menjadi "storyline".
- Tampilan lebih estetik: font Playfair + Inter, glassmorphism, gradien lembut, micro-interactions.
- Interaktivitas: smooth scroll, reveal on scroll, hero parallax, gallery carousel, kontrol musik, modal pemesanan, dan tombol WhatsApp otomatis.

File:
- index.html : struktur halaman, elemen interaktif, audio background, modal pemesanan.
- styles.css : styling estetik + animasi halus.
- script.js : logika interaksi (WA, modal, carousel, musik, reveal).
- README.md : dokumentasi (file ini).

Cara pakai cepat:
1. Ganti asset:
   - Letakkan gambar contoh di folder `assets/`:
     - `preview-1.jpg`, `preview-2.jpg`, `preview-3.jpg`
     - `gallery-1.jpg`, `gallery-2.jpg`, `gallery-3.jpg`
     - `music-sample.mp3` (opsional; bila tidak ada, tombol musik akan tetap ada tapi tidak memutar)
2. Ganti nomor WhatsApp admin:
   - Buka `script.js` dan ubah `ADMIN_WA_NUMBER` ke nomor Anda (format tanpa + atau spasi), contoh: `6281234567890`.
3. Kustomisasi:
   - Ganti teks "storyline" bila perlu.
   - Ganti warna di `:root` pada `styles.css` untuk palet brand.
   - Tambah/kurangi kartu katalog atau item carousel sesuai kebutuhan.
4. Deploy:
   - Template statis ini dapat di-deploy ke Netlify, Vercel, GitHub Pages, atau hosting statis lainnya.

Rekomendasi pengembangan selanjutnya:
- Backend untuk menyimpan form pemesanan & RSVP (Firebase / Supabase / Node + DB).
- Dashboard admin untuk melihat pesanan dan RSVP.
- Integrasi pembayaran (Midtrans / Xendit / Stripe).
- Preload & optimasi gambar untuk performa (webp, responsive srcset).
- Tambahkan validasi/format WA number di form jika ingin menyimpan nomor pelanggan.

Butuh bantuan menyesuaikan warna brand, aset, atau konversi ke React/Next.js? Saya bisa bantu konversi dan menambahkan backend sederhana juga — pilih langkah selanjutnya.