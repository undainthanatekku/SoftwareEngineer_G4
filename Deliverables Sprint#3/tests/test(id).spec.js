import { test, expect } from '@playwright/test';

test('ID01', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    await page.waitForTimeout(2000);
});

test('ID02', async ({ page }) => {
    await page.goto('http://localhost:8080/gb/');
    await page.getByRole('link', { name: 'id' }).click();
    await page.getByRole('heading', { name: 'Populer' }).click();
    await page.locator('p').filter({ hasText: 'Produk' }).click();
    await page.locator('p').filter({ hasText: 'Perusahaan kami' }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: '© 2024 - Dibuat untuk tujuan' }).click();
    const page1 = await page1Promise;
    await page.getByRole('link', { name: 'Semua produk ' }).click();
    await page.getByRole('link', { name: 'project_G4' }).click();
});

test('ID03', async ({ page }) => {
    await page.goto('http://localhost:8080/gb/');
    await page.getByRole('link', { name: 'Clothes' }).click();
    await page.getByRole('link', { name: 'id' }).click();
    await page.getByRole('link', { name: 'Tema' }).click();
});

test('ID04', async ({ page }) => {
    await page.goto('http://localhost:8080/gb/');
    await page.getByRole('link', { name: 'Accessories' }).click();
    await page.getByRole('link', { name: 'id' }).click();
    await page.getByRole('link', { name: 'Aksesoris' }).click();
});

test('ID05', async ({ page }) => {
    await page.goto('http://localhost:8080/gb/');
    await page.getByRole('link', { name: 'gb' }).click();
    await page.locator('#cms-page-1').getByRole('link', { name: 'Delivery' }).click();
    await page.getByRole('link', { name: 'id' }).click();
    await page.locator('#cms-page-1').getByRole('link', { name: 'Pengiriman' }).click();
});

test('ID06', async ({ page }) => {
    await page.goto('http://localhost:8080/gb/');
    await page.getByRole('link', { name: 'gb' }).click();
    await page.locator('#cms-page-3').getByRole('link', { name: 'Terms and conditions of use' }).click();
    await page.getByRole('link', { name: 'id' }).click();
    await page.locator('#cms-page-3').getByRole('link', { name: 'syarat dan ketentuan' }).click();
});

test('ID07', async ({ page }) => {
    await page.goto('http://localhost:8080/gb/');
    await page.getByRole('link', { name: 'gb' }).click();
    await page.locator('#cms-page-4').getByRole('link', { name: 'About us' }).click();
    await page.getByRole('link', { name: 'id' }).click();
    await page.locator('#cms-page-4').getByRole('link', { name: 'Tentang kami' }).click();
});


test('ID08', async ({ page }) => {
    await page.goto('http://localhost:8080/gb/');
    await page.getByRole('link', { name: 'id' }).click();
    await page.getByText('mantel kku berwarna bata').click();
    
    await page.getByRole('link', { name: 'project_G4' }).click();
    await page.getByText('kaos polo kku warna bata').click();
    await page.getByRole('link', { name: 'project_G4' }).click();
    await page.getByText('Gelas air Yeti KKU').click();
});

test('ID09', async ({ page }) => {
    await page.goto('http://localhost:8080/gb/');
    await page.getByRole('link', { name: 'id' }).click();
    await page.getByText('mantel kku berwarna bata').click();
    await page.locator('span').filter({ hasText: 'mantel kku berwarna bata' }).click();
    await page.getByRole('heading', { name: 'mantel kku berwarna bata' }).click();
    await page.getByText('Hemat 20%').click();
    await page.getByText('Termasuk pajak').click();
    await page.locator('#product-description-short-1').getByText('Mantel KKU berwarna bata').click();
    await page.getByText('Ukuran: S').click();
    await page.getByText('Ukuran: S S M L XL Jumlah ').click();
    await page.getByText('Jumlah').click();
    await page.getByRole('button', { name: ' Beli' }).click();
    await page.getByRole('tab', { name: 'Keterangan' }).click();
    await page.getByText('Mantel KKU berwarna bata adalah pakaian Universitas Khon Kaen yang bergaya dan').click();
    await page.getByRole('tab', { name: 'Detail produk' }).click();
    await page.getByText('stok tersedia').click();
    await page.getByText('15 item').click();
    await page.getByRole('heading', { name: '1 produk lainnya dikategori' }).click();
});

test('ID10', async ({ page }) => {
    await page.goto('http://localhost:8080/gb/');
    await page.getByRole('link', { name: 'id' }).click();
    await page.getByText('kaos polo kku warna bata').click();
    await page.locator('span').filter({ hasText: 'kaos polo kku warna bata' }).click();
    await page.locator('#content').getByText('Baru').click();
    await page.getByRole('heading', { name: 'kaos polo kku warna bata' }).click();
    await page.getByText('Hemat 20%').click();
    await page.getByText('Termasuk pajak').click();
    await page.locator('#product-description-short-2').getByText('Kemeja polo Kku warna bata,').click();
    await page.getByText('Ukuran: S').click();
    await page.getByText('Warna: Type').click();
    await page.getByText('Jumlah').click();
    await page.getByRole('button', { name: ' Beli' }).click();
    await page.getByRole('tab', { name: 'Keterangan' }).click();
    await page.getByText('Kaos polo KKU warna bata tersedia dalam dua desain berbeda. Muncul dengan pola').click();
    await page.getByRole('tab', { name: 'Detail produk' }).click();
    await page.getByText('stok tersedia').click();
    await page.getByText('item').click();
    await page.getByRole('heading', { name: '1 produk lainnya dikategori' }).click();
    await page.getByRole('article').getByText('Baru').click();
});

test('ID11', async ({ page }) => {
    await page.goto('http://localhost:8080/gb/');
    await page.getByRole('link', { name: 'id' }).click();
    await page.getByText('Gelas air Yeti KKU').click();
    await page.getByText('Baru', { exact: true }).click();
    await page.locator('span').filter({ hasText: 'Gelas air Yeti KKU' }).click();
    await page.getByRole('heading', { name: 'Gelas air Yeti KKU' }).click();
    await page.getByText('Termasuk pajak').click();
    await page.locator('#product-description-short-6').getByText('Cocok digunakan saat').click();
    await page.getByText('Jumlah').click();
    await page.getByRole('button', { name: ' Beli' }).click();
    await page.getByRole('tab', { name: 'Keterangan' }).click();
    await page.getByText('Gelas KKU putih merupakan').click();
    await page.getByRole('tab', { name: 'Detail produk' }).click();
    await page.getByText('stok tersedia').click();
    await page.getByText('320 item').click();
    await page.getByText('Lembar Data').click();
    await page.getByText('Composition').click();
    await page.getByText('mantel').click();
});


test('ID12', async ({ page }) => {
    await page.goto('http://localhost:8080/gb/');
    await page.getByRole('link', { name: 'id' }).click();
    await page.locator('p').filter({ hasText: 'Produk' }).click();
    await page.locator('p').filter({ hasText: 'Perusahaan kami' }).click();
    await page.getByRole('link', { name: 'Turun harga' }).click();
    await page.getByRole('link', { name: 'project_G4' }).click();
    await page.getByRole('link', { name: 'Produk baru' }).click();
    await page.getByRole('link', { name: 'project_G4' }).click();
    await page.getByTitle('Syarat dan ketentuan pengiriman kami').click();
    await page.getByRole('link', { name: 'project_G4' }).click();
    await page.getByTitle('Syarat dan ketentuan penggunaan kami').click();
    await page.getByRole('link', { name: 'project_G4' }).click();
    await page.getByTitle('Pelajari lebih lanjut tentang').click();
    await page.getByRole('link', { name: 'project_G4' }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: '© 2024 - Dibuat untuk tujuan' }).click();
    const page1 = await page1Promise;
});

test('ID13', async ({ page }) => {
    await page.goto('http://localhost:8080/gb/');
    await page.getByRole('link', { name: 'id' }).click();
    await page.getByRole('link', { name: ' Lihat sekilas' }).first().click();
    await page.locator('#quickview-modal-1-48').getByRole('heading', { name: 'mantel kku berwarna bata' }).click();
    await page.getByText('Hemat 20%').click();
    await page.getByText('Termasuk pajak').click();
    await page.getByText('Mantel KKU berwarna bata adalah gaya modern khas universitas ini. Mantel ini').click();
    await page.getByText('Ukuran: S').click();
    await page.getByText('Jumlah').click();
    await page.getByRole('button', { name: ' Beli' }).click();
    await page.getByRole('link', { name: ' Lihat sekilas' }).nth(1).click();
    await page.locator('#quickview-modal-2-40').getByRole('heading', { name: 'kaos polo kku warna bata' }).click();
    await page.getByText('Hemat 20%').click();
    await page.getByText('Termasuk pajak').click();
    await page.getByText('Kemeja polo Kku warna bata,').click();
    await page.getByText('Ukuran: S').click();
    await page.getByText('Warna: Type').click();
    await page.getByText('Jumlah').click();
    await page.getByRole('button', { name: ' Beli' }).click();
    await page.getByRole('link', { name: ' Lihat sekilas' }).nth(2).click();
    await page.locator('#quickview-modal-6-0').getByRole('heading', { name: 'Gelas air Yeti KKU' }).click();
    await page.getByText('Termasuk pajak').click();
    await page.getByText('Cocok digunakan saat').click();
    await page.getByText('Jumlah').click();
    await page.getByRole('button', { name: ' Beli' }).click();
});

test('ID14', async ({ page }) => {
    await page.goto('http://localhost:8080/gb/');
    await page.getByRole('link', { name: 'Clothes' }).click();
    await page.getByRole('link', { name: 'id' }).click();
    await page.getByRole('link', { name: 'Tema' }).click();
    await page.getByRole('heading', { name: 'Tema' }).click();
    await page.getByText('Pencarian pakaian milik').click();
    await page.locator('#js-product-list-top div').filter({ hasText: 'Ada 2 produk.' }).click();
    await page.getByText('Sortir menurut:').click();
    await page.getByLabel('Urutkan berdasarkan pilihan').click();
    await page.getByRole('link', { name: 'Nama, A ke Z' }).click();
    await page.getByLabel('Urutkan berdasarkan pilihan').click();
    await page.getByRole('link', { name: 'Nama, Z ke A' }).click();
    await page.getByLabel('Urutkan berdasarkan pilihan').click();
    await page.getByRole('link', { name: 'Harga, Rendah ke Tinggi' }).click();
    await page.getByLabel('Urutkan berdasarkan pilihan').click();
    await page.getByRole('link', { name: 'Harga, Tinggi ke Rendah' }).click();
    await page.locator('#js-product-list').getByText('Menunjukkan 1-2 dari 2 barang').click();
    await page.locator('span').filter({ hasText: 'Tema' }).click();
});

test('ID15', async ({ page }) => {
    await page.goto('http://localhost:8080/gb/');
    await page.getByRole('link', { name: 'Accessories' }).click();
    await page.getByRole('link', { name: 'id' }).click();
    await page.getByRole('link', { name: 'Aksesoris' }).click();
    await page.locator('span').filter({ hasText: 'Aksesoris' }).click();
    await page.getByRole('heading', { name: 'Aksesoris' }).click();
    await page.getByText('Barang dan aksesoris Fakultas').click();
    await page.getByText('Sortir menurut:').click();
    await page.getByText('Terdapat 1 produk.').click();
    await page.getByLabel('Urutkan berdasarkan pilihan').click();
    await page.getByRole('link', { name: 'Nama, A ke Z' }).click();
    await page.getByLabel('Urutkan berdasarkan pilihan').click();
    await page.getByText('Baru', { exact: true }).click();
    await page.locator('#js-product-list').getByText('Menunjukkan 1-1 dari 1 barang').click();
    await page.locator('span').filter({ hasText: 'Aksesoris' }).click();
});

test('ID16', async ({ page }) => {
    await page.goto('http://localhost:8080/gb/');
    await page.locator('#cms-page-1').getByRole('link', { name: 'Delivery' }).click();
    await page.getByRole('link', { name: 'id' }).click();
    await page.locator('#cms-page-1').getByRole('link', { name: 'Pengiriman' }).click();
    await page.locator('span').filter({ hasText: 'Pengiriman' }).click();
    await page.getByRole('heading', { name: 'Pengiriman', exact: true }).click();
    await page.getByRole('heading', { name: 'Pengiriman dan pengembalian' }).click();
    await page.getByRole('heading', { name: 'Pengiriman paket Anda' }).click();
    await page.getByText('Paket umumnya dikirim dalam').click();
    await page.getByText('Biaya pengiriman termasuk').click();
    await page.getByText('Kotak berukuran besar dan').click();
});

test('ID17', async ({ page }) => {
    await page.goto('http://localhost:8080/gb/');
    await page.locator('#cms-page-3').getByRole('link', { name: 'Terms and conditions of use' }).click();
    await page.getByRole('link', { name: 'id' }).click();
    await page.locator('#cms-page-3').getByRole('link', { name: 'syarat dan ketentuan' }).click();
    await page.locator('span').filter({ hasText: 'syarat dan ketentuan' }).click();
    await page.locator('#main header').getByRole('heading', { name: 'syarat dan ketentuan' }).click();
    await page.locator('#content').getByRole('heading', { name: 'syarat dan ketentuan' }).click();
    await page.getByRole('heading', { name: 'Aturan 1' }).click();
    await page.getByText('Keamanan Data: Penyedia').click();
    await page.getByRole('heading', { name: 'Aturan 2' }).click();
    await page.getByText('Penggunaan dan Batasan').click();
    await page.getByRole('heading', { name: 'Aturan 3' }).click();
    await page.getByText('Pembatalan dan kompensasi:').click();
});
test('ID18', async ({ page }) => {
    await page.goto('http://localhost:8080/gb/');
    await page.locator('#cms-page-4').getByRole('link', { name: 'About us' }).click();
    await page.getByRole('link', { name: 'id' }).click();
    await page.locator('#cms-page-4').getByRole('link', { name: 'Tentang kami' }).click();
    await page.locator('span').filter({ hasText: 'Tentang kami' }).click();
    await page.getByText('Tentang kami Tentang kami').click();
    await page.locator('#main header').getByRole('heading', { name: 'Tentang kami' }).click();
    await page.locator('#content').getByRole('heading', { name: 'Tentang kami' }).click();
    await page.getByRole('heading', { name: 'Perusahaan kita' }).click();
    await page.getByText('Saya minta maaf untuk').click();
    await page.getByText('Rasa sakit itu sendiri sangat penting untuk mencapai penambahan berat badan').click();
    await page.getByText('Produk kualitas terbaik').click();
    await page.getByText('Jaminan uang kembali 30 hari').click();
    await page.getByText('Layanan pelanggan terbaik').click();
    await page.getByRole('heading', { name: 'Tim kita' }).click();
    await page.getByText('Kelompok pelanggan tidak').click();
    await page.getByText('Pada saat yang sama, beberapa').click();
    await page.getByRole('heading', { name: 'Testimonial' }).click();
    await page.getByText('“Sebenarnya rasa sakit itu').click();
    await page.getByText('“Jika mereka tidak dibutakan').click();
});

test('ID19', async ({ page }) => {
    await page.goto('http://localhost:8080/gb/');
    await page.getByRole('link', { name: 'All products ' }).click();
    await page.getByRole('link', { name: 'id' }).click();
    await page.getByRole('heading', { name: 'Beranda' }).click();
    await page.getByRole('heading', { name: 'Sub kategori' }).click();
    await page.getByText('Ada 3 produk.').click();
    await page.getByText('Sortir menurut:').click();
    await page.getByLabel('Urutkan berdasarkan pilihan').click();
    await page.getByRole('link', { name: 'Nama, A ke Z' }).click();
    await page.locator('#js-product-list').getByText('Menunjukkan 1-3 dari 3 barang').click();
  });

  test('ID20', async ({ page }) => {
    await page.goto('http://localhost:8080/gb/');
    await page.getByRole('link', { name: 'Prices drop' }).click();
    await page.getByRole('link', { name: 'id' }).click();
    await page.locator('span').filter({ hasText: 'Turun harga' }).click();
    await page.getByRole('heading', { name: 'Turun harga' }).click();
    await page.getByText('Ada 2 produk.').click();
    await page.getByText('Sortir menurut:').click();
    await page.getByLabel('Urutkan berdasarkan pilihan').click();
    await page.getByRole('link', { name: 'Nama, Z ke A' }).click();
    await page.locator('#js-product-list').getByText('Menunjukkan 1-2 dari 2 barang').click();
  });

  test('ID21', async ({ page }) => {
    await page.goto('http://localhost:8080/gb/');
    await page.getByRole('link', { name: 'New products' }).click();
    await page.getByRole('link', { name: 'id' }).click();
    await page.locator('#wrapper li').filter({ hasText: 'Produk baru' }).click();
    await page.getByRole('heading', { name: 'Produk baru' }).click();
    await page.getByText('Ada 3 produk.').click();
    await page.getByText('Sortir menurut:').click();
    await page.getByLabel('Urutkan berdasarkan pilihan').click();
    await page.getByRole('link', { name: 'Tanggal ditambahkan, terlama' }).click();
    await page.locator('#js-product-list').getByText('Menunjukkan 1-3 dari 3 barang').click();
  });