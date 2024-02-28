import { test, expect } from '@playwright/test';

test('ID01', async ({ page }) => {
    await page.goto('http://localhost:8080/');
    await page.waitForTimeout(2000);
});

test('TH02', async ({ page }) => {
  await page.goto('http://localhost:8080/gb/');
  await page.getByRole('link', { name: 'th', exact: true }).click();
  await page.getByRole('heading', { name: 'สินค้ายอดนิยม' }).click();
  await page.getByText('ใหม่').first().click();
  await page.getByText('ใหม่').nth(1).click();
  await page.locator('article').filter({ hasText: ' เปิดหน้าต่างย่อ แก้วน้ำเยติ KKU ฿90.00 ใหม่' }).getByRole('listitem').click();
  await page.locator('p').filter({ hasText: 'สินค้า' }).click();
  await page.locator('p').filter({ hasText: 'บริษัท ของเรา' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: '© 2024' }).click();
  const page1 = await page1Promise;
});

test('TH03', async ({ page }) => {
  await page.goto('http://localhost:8080/gb/');
  await page.getByRole('link', { name: 'Clothes' }).click();
  await page.getByRole('link', { name: 'th', exact: true }).click();
  await page.getByRole('link', { name: 'เสื้อผ้า' }).click();
});

test('TH04', async ({ page }) => {
  await page.goto('http://localhost:8080/gb/');
  await page.getByRole('link', { name: 'Accessories' }).click();
  await page.getByRole('link', { name: 'th', exact: true }).click();
  await page.getByRole('link', { name: 'อุปกรณ์เสริม' }).click();
});

test('TH05', async ({ page }) => {
  await page.goto('http://localhost:8080/gb/');
  await page.locator('#cms-page-1').getByRole('link', { name: 'Delivery' }).click();
  await page.getByRole('link', { name: 'th', exact: true }).click();
  await page.locator('#cms-page-1').getByRole('link', { name: 'การจัดส่งสินค้า' }).click();
});

test('TH06', async ({ page }) => {
  await page.goto('http://localhost:8080/gb/');
  await page.locator('#cms-page-3').getByRole('link', { name: 'Terms and conditions of use' }).click();
  await page.getByRole('link', { name: 'th', exact: true }).click();
  await page.locator('#cms-page-3').getByRole('link', { name: 'ข้อกำหนดและเงื่อนไขการใช้งาน' }).click();
});

test('TH07', async ({ page }) => {
  await page.goto('http://localhost:8080/gb/');
  await page.locator('#cms-page-4').getByRole('link', { name: 'About us' }).click();
  await page.getByRole('link', { name: 'th', exact: true }).click();
  await page.locator('#cms-page-4').getByRole('link', { name: 'เกี่ยวกับเรา' }).click();
});


test('TH08', async ({ page }) => {
  await page.goto('http://localhost:8080/gb/');
  await page.getByRole('link', { name: 'th', exact: true }).click();
  await page.getByText('เสื้อโค้ท kku สีอิฐ').click();
  await page.getByRole('link', { name: 'project_G4' }).click();
  await page.getByText('เสื้อโปโล kku สีอิฐ').click();
  await page.getByRole('link', { name: 'project_G4' }).click();
  await page.getByText('แก้วน้ำเยติ KKU').click();
});

test('TH09', async ({ page }) => {
  await page.goto('http://localhost:8080/gb/');
  await page.getByRole('link', { name: 'th', exact: true }).click();
  await page.getByText('เสื้อโค้ท kku สีอิฐ').click();
  await page.locator('span').filter({ hasText: 'เสื้อโค้ท kku สีอิฐ' }).click();
  await page.locator('#content').getByText('ใหม่').click();
  await page.getByRole('heading', { name: 'เสื้อโค้ท kku สีอิฐ' }).click();
  await page.getByText('ประหยัด 20%').click();
  await page.getByText('รวมภาษีแล้ว').click();
  await page.locator('#product-description-short-1').getByText('เสื้อโค้ท KKU').click();
  await page.getByText('ขนาด: S').click();
  await page.getByText('จำนวน').click();
  await page.getByRole('button', { name: ' หยิบใส่ตะกร้า' }).click();
  await page.getByRole('tab', { name: 'รายละเอียด', exact: true }).click();
  await page.locator('#description').getByText('เสื้อโค้ท KKU').click();
  await page.getByRole('tab', { name: 'รายละเอียดสินค้า' }).click();
  await page.getByText('สินค้ามีในสต็อค').click();
  await page.getByText('รายการ').click();
  await page.getByRole('heading', { name: '1' }).click();
  await page.getByRole('article').getByText('ใหม่').click();
});

test('TH10', async ({ page }) => {
  await page.goto('http://localhost:8080/gb/');
  await page.getByRole('link', { name: 'th', exact: true }).click();
  await page.getByText('เสื้อโปโล kku สีอิฐ').click();
  await page.locator('span').filter({ hasText: 'เสื้อโปโล kku สีอิฐ' }).click();
  await page.getByRole('heading', { name: 'เสื้อโปโล kku สีอิฐ' }).click();
  await page.getByText('ประหยัด 20%').click();
  await page.getByText('รวมภาษีแล้ว').click();
  await page.locator('#product-description-short-2').getByText('เสื้อโปโล kku สีอิฐ ลาย 30').click();
  await page.getByText('ขนาด: S').click();
  await page.getByText('สี: Type').click();
  await page.getByText('จำนวน').click();
  await page.getByRole('button', { name: ' หยิบใส่ตะกร้า' }).click();
  await page.getByRole('tab', { name: 'รายละเอียด', exact: true }).click();
  await page.locator('#description').getByText('เสื้อโปโล KKU').click();
  await page.getByRole('tab', { name: 'รายละเอียดสินค้า' }).click();
  await page.getByText('สินค้ามีในสต็อค').click();
  await page.getByRole('heading', { name: '1' }).click();
  await page.getByRole('article').getByText('ใหม่').click();
});

test('TH11', async ({ page }) => {
  await page.goto('http://localhost:8080/gb/');
  await page.locator('.col-md-7').click();
  await page.getByRole('link', { name: 'th', exact: true }).click();
  await page.getByText('แก้วน้ำเยติ KKU').click();
  await page.locator('span').filter({ hasText: 'แก้วน้ำเยติ KKU' }).click();
  await page.getByText('ใหม่', { exact: true }).click();
  await page.getByRole('heading', { name: 'แก้วน้ำเยติ KKU' }).click();
  await page.getByText('รวมภาษีแล้ว').click();
  await page.locator('#product-description-short-6').getByText('แก้ว KKU').click();
  await page.getByText('จำนวน').click();
  await page.getByRole('button', { name: ' หยิบใส่ตะกร้า' }).click();
  await page.getByRole('tab', { name: 'รายละเอียด', exact: true }).click();
  await page.locator('#description').getByText('แก้ว KKU').click();
  await page.getByRole('tab', { name: 'รายละเอียดสินค้า' }).click();
  await page.getByText('สินค้ามีในสต็อค').click();
  await page.getByText('รายการ').click();
  await page.getByText('ข้อมูลสินค้า').click();
  await page.getByText('แก้ว', { exact: true }).click();
  await page.getByText('Composition').click();
});


test('TH12', async ({ page }) => {
  await page.goto('http://localhost:8080/gb/');
  await page.getByRole('link', { name: 'th', exact: true }).click();
  await page.locator('p').filter({ hasText: 'สินค้า' }).click();
  await page.locator('p').filter({ hasText: 'บริษัท ของเรา' }).click();
  await page.getByRole('link', { name: 'ลดราคา' }).click();
  await page.getByRole('link', { name: 'สินค้าใหม่' }).click();
  await page.locator('p').filter({ hasText: 'บริษัท ของเรา' }).click();
  await page.getByTitle('ข้อกำหนดและเงื่อนไขในการจัดส่งของเรา').click();
  await page.getByTitle('ข้อกำหนดและเงื่อนไขการใช้งานของเรา').click();
  await page.getByTitle('เรียนรู้เพิ่มเติมเกี่ยวกับเรา').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: '© 2024' }).click();
  const page1 = await page1Promise;
});

test('TH13', async ({ page }) => {
  await page.goto('http://localhost:8080/gb/');
  await page.getByRole('link', { name: 'th', exact: true }).click();
  await page.getByRole('link', { name: ' เปิดหน้าต่างย่อ' }).first().click();
  await page.locator('#quickview-modal-1-48').getByRole('heading', { name: 'เสื้อโค้ท kku สีอิฐ' }).click();
  await page.getByText('ประหยัด 20%').click();
  await page.getByText('รวมภาษีแล้ว').click();
  await page.locator('#product-description-short').getByText('เสื้อโค้ท KKU').click();
  await page.getByText('ขนาด: S').click();
  await page.getByText('จำนวน').click();
  await page.getByRole('button', { name: ' หยิบใส่ตะกร้า' }).click();
  await page.getByRole('link', { name: ' เปิดหน้าต่างย่อ' }).nth(1).click();
  await page.locator('#quickview-modal-2-40').getByRole('heading', { name: 'เสื้อโปโล kku สีอิฐ' }).click();
  await page.getByText('ประหยัด 20%').click();
  await page.getByText('รวมภาษีแล้ว').click();
  await page.getByText('เสื้อโปโล kku สีอิฐ ลาย 30').click();
  await page.getByText('ขนาด: S').click();
  await page.getByText('ขนาด: S S M L XL สี: Type 1').click();
  await page.getByText('สี: Type').click();
  await page.getByText('จำนวน').click();
  await page.getByRole('button', { name: ' หยิบใส่ตะกร้า' }).click();
  await page.getByRole('link', { name: ' เปิดหน้าต่างย่อ' }).nth(2).click();
  await page.locator('#quickview-modal-6-0').getByRole('heading', { name: 'แก้วน้ำเยติ KKU' }).click();
  await page.getByText('รวมภาษีแล้ว').click();
  await page.getByText('แก้ว KKU').click();
  await page.getByText('จำนวน').click();
  await page.getByRole('button', { name: ' หยิบใส่ตะกร้า' }).click();
});

test('TH14', async ({ page }) => {
  await page.goto('http://localhost:8080/gb/');
  await page.getByRole('link', { name: 'Clothes' }).click();
  await page.getByRole('link', { name: 'th', exact: true }).click();
  await page.getByRole('link', { name: 'เสื้อผ้า' }).click();
  await page.locator('span').filter({ hasText: 'เสื้อผ้า' }).click();
  await page.getByRole('heading', { name: 'เสื้อผ้า' }).click();
  await page.getByText('ค้นหาเสื้อผ้าของคณะวิทยาการคอมพิวเตอร์').click();
  await page.getByText('มีสินค้า 2 รายการ').click();
  await page.getByText('สิ่งที่เกี่ยวข้อง  สิ่งที่เกี่ยวข้อง ตามชื่อ A ถึง Z ตามชื่อ Z ถึง A').click();
  await page.getByText('เรียงตาม:').click();
  await page.getByLabel('จัดเรียงตามการเลือก').click();
  await page.getByRole('link', { name: 'ตามชื่อ A ถึง Z' }).click();
  await page.locator('#js-product-list').getByText('แสดง 1-2 จาก 2 รายการ').click();
});

test('TH15', async ({ page }) => {
  await page.goto('http://localhost:8080/gb/');
  await page.getByRole('link', { name: 'Accessories' }).click();
  await page.getByRole('link', { name: 'th', exact: true }).click();
  await page.getByRole('link', { name: 'อุปกรณ์เสริม' }).click();
  await page.locator('span').filter({ hasText: 'อุปกรณ์เสริม' }).click();
  await page.getByRole('heading', { name: 'อุปกรณ์เสริม' }).click();
  await page.getByText('รายการและอุปกรณ์เสริมของ คณะวิทยาการคอมพิวเตอร์ มาหลัยขอนแก่น').click();
  await page.getByText('มีสินค้า 1 จำนวน').click();
  await page.getByText('เรียงตาม:').click();
  await page.getByLabel('จัดเรียงตามการเลือก').click();
  await page.getByRole('link', { name: 'ตามชื่อ A ถึง Z' }).click();
  await page.locator('#js-product-list').getByText('แสดง 1-1 จาก 1 รายการ').click();
});

test('TH16', async ({ page }) => {
  await page.goto('http://localhost:8080/gb/');
  await page.locator('#countries').getByRole('list').click();
  await page.locator('#cms-page-1').getByRole('link', { name: 'การจัดส่งสินค้า' }).click();
  await page.locator('span').filter({ hasText: 'การจัดส่งสินค้า' }).click();
  await page.getByRole('heading', { name: 'การจัดส่งสินค้า' }).click();
  await page.getByRole('heading', { name: 'การจัดส่งและการคืนสินค้า' }).click();
  await page.getByRole('heading', { name: 'การจัดส่งพัสดุของคุณ' }).click();
  await page.getByText('โดยทั่วไปพัสดุจะถูกจัดส่งภายใน 2 วันหลังจากได้รับการชำระเงิน และจัดส่งผ่าน UPS').click();
  await page.getByText('ค่าธรรมเนียมการจัดส่งรวมค่าธรรมเนียมการจัดการและบรรจุภัณฑ์ตลอดจนค่าไปรษณีย์ ค่าธ').click();
  await page.getByText('กล่องมีขนาดพอเหมาะและสิ่งของของคุณได้รับการปกป้องอย่างดี').click();
});

test('TH17', async ({ page }) => {
  await page.goto('http://localhost:8080/gb/');
  await page.locator('#cms-page-1').getByRole('link', { name: 'Delivery' }).click();
  await page.getByRole('link', { name: 'th', exact: true }).click();
  await page.locator('#cms-page-1').getByRole('link', { name: 'การจัดส่งสินค้า' }).click();
  await page.locator('span').filter({ hasText: 'การจัดส่งสินค้า' }).click();
  await page.getByRole('heading', { name: 'การจัดส่งสินค้า' }).click();
  await page.getByRole('heading', { name: 'การจัดส่งและการคืนสินค้า' }).click();
  await page.getByRole('heading', { name: 'การจัดส่งพัสดุของคุณ' }).click();
  await page.getByText('โดยทั่วไปพัสดุจะถูกจัดส่งภายใน 2 วันหลังจากได้รับการชำระเงิน และจัดส่งผ่าน UPS').click();
  await page.getByText('ค่าธรรมเนียมการจัดส่งรวมค่าธรรมเนียมการจัดการและบรรจุภัณฑ์ตลอดจนค่าไปรษณีย์ ค่าธ').click();
  await page.getByText('กล่องมีขนาดพอเหมาะและสิ่งของของคุณได้รับการปกป้องอย่างดี').click();
});

test('TH18', async ({ page }) => {
  await page.goto('http://localhost:8080/gb/');
  await page.locator('#cms-page-3').getByRole('link', { name: 'Terms and conditions of use' }).click();
  await page.getByRole('link', { name: 'th', exact: true }).click();
  await page.locator('#cms-page-3').getByRole('link', { name: 'ข้อกำหนดและเงื่อนไขการใช้งาน' }).click();
  await page.locator('span').filter({ hasText: 'ข้อกำหนดและเงื่อนไขการใช้งาน' }).click();
  await page.locator('#main header').getByRole('heading', { name: 'ข้อกำหนดและเงื่อนไขการใช้งาน' }).click();
  await page.locator('#content').getByRole('heading', { name: 'ข้อกำหนดและเงื่อนไขการใช้งาน' }).click();
  await page.getByRole('heading', { name: 'กฎข้อที่ 1' }).click();
  await page.getByText('การรักษาความปลอดภัยของข้อมูล: ผู้ให้บริการมีความรับผิดชอบที่จะรักษาความปลอดภัยขอ').click();
  await page.getByRole('heading', { name: 'กฎข้อที่ 2' }).click();
  await page.getByText('การใช้งานและการจำกัดความรับผิด: ผู้ใช้ตกลงว่าจะใช้บริการเพื่อวัตถุประสงค์ที่ถูกต').click();
  await page.getByRole('heading', { name: 'กฎข้อที่ 3' }).click();
  await page.getByText('การยกเลิกและการชดเชย: ผู้ให้บริการขอสงวนสิทธิ์ในการยกเลิกบริการหรือระงับบัญชีผู้').click();
});

test('TH19', async ({ page }) => {
  await page.goto('http://localhost:8080/gb/');
  await page.getByRole('link', { name: 'th', exact: true }).click();
  await page.getByRole('link', { name: 'สินค้าทั้งหมด ' }).click();
  await page.getByRole('heading', { name: 'หน้าหลัก' }).click();
  await page.getByRole('heading', { name: 'หมวดย่อย' }).click();
  await page.getByText('มีสินค้า 3 รายการ').click();
  await page.getByText('เรียงตาม:').click();
  await page.getByLabel('จัดเรียงตามการเลือก').click();
  await page.getByRole('link', { name: 'ตามชื่อ A ถึง Z' }).click();
  await page.locator('#js-product-list').getByText('แสดง 1-3 จาก 3 รายการ').click();
});

test('TH20', async ({ page }) => {
  await page.goto('http://localhost:8080/gb/');
  await page.getByRole('link', { name: 'th', exact: true }).click();
  await page.getByRole('link', { name: 'ลดราคา' }).click();
  await page.locator('span').filter({ hasText: 'ลดราคา' }).click();
  await page.getByRole('heading', { name: 'ลดราคา' }).click();
  await page.getByText('มีสินค้า 2 รายการ').click();
  await page.getByText('เรียงตาม:').click();
  await page.getByLabel('จัดเรียงตามการเลือก').click();
  await page.getByRole('link', { name: 'ตามชื่อ Z ถึง A' }).click();
  await page.locator('#js-product-list').getByText('แสดง 1-2 จาก 2 รายการ').click();
});

test('TH21', async ({ page }) => {
  await page.goto('http://localhost:8080/gb/');
  await page.getByRole('link', { name: 'th', exact: true }).click();
  await page.getByRole('link', { name: 'สินค้าใหม่' }).click();
  await page.locator('span').filter({ hasText: 'สินค้าใหม่' }).click();
  await page.getByRole('heading', { name: 'สินค้าใหม่' }).click();
  await page.getByText('มีสินค้า 3 รายการ').click();
  await page.getByText('เรียงตาม:').click();
  await page.getByLabel('จัดเรียงตามการเลือก').click();
  await page.getByRole('link', { name: 'วันที่เพิ่ม เก่าสุดไปใหม่สุด' }).click();
  await page.locator('#js-product-list').getByText('แสดง 1-3 จาก 3 รายการ').click();
});