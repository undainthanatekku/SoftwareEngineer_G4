import { test, expect } from '@playwright/test';

test('TC01', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.waitForTimeout(2000);
});

test('TC02', async ({ page }) => {
  await page.goto('http://localhost:8080/th/');
  await page.getByRole('link', { name: 'gb' }).click();
  await page.getByRole('heading', { name: 'Popular Products' }).click();
  await page.locator('p').filter({ hasText: 'Our company' }).click();
  await page.locator('p').filter({ hasText: 'Products' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: '© 2024 - Made for educational' }).click();
  const page1 = await page1Promise;
});

test('TC03', async ({ page }) => {
  await page.goto('http://localhost:8080/th/');
  await page.getByRole('link', { name: 'เสื้อผ้า' }).click();
  await page.locator('#countries').getByRole('list').click();
  await page.getByRole('link', { name: 'gb' }).click();
  await page.getByRole('link', { name: 'Clothes' }).click();
});

test('TC04', async ({ page }) => {
  await page.goto('http://localhost:8080/th/');
  await page.getByRole('link', { name: 'อุปกรณ์เสริม' }).click();
  await page.getByRole('link', { name: 'gb' }).click();
  await page.getByRole('link', { name: 'Accessories' }).click();
});

test('TC05', async ({ page }) => {
  await page.goto('http://localhost:8080/th/');
  await page.locator('#cms-page-1').getByRole('link', { name: 'การจัดส่งสินค้า' }).click();
  await page.getByRole('link', { name: 'gb' }).click();
  await page.locator('#cms-page-1').getByRole('link', { name: 'Delivery' }).click();
});

test('TC06', async ({ page }) => {
  await page.goto('http://localhost:8080/th/');
  await page.locator('#cms-page-3').getByRole('link', { name: 'ข้อกำหนดและเงื่อนไขการใช้งาน' }).click();
  await page.getByRole('link', { name: 'gb' }).click();
  await page.locator('#cms-page-3').getByRole('link', { name: 'Terms and conditions of use' }).click();
});

test('TC07', async ({ page }) => {
  await page.goto('http://localhost:8080/th/');
  await page.locator('#cms-page-4').getByRole('link', { name: 'เกี่ยวกับเรา' }).click();
  await page.getByRole('link', { name: 'gb' }).click();
  await page.locator('#cms-page-4').getByRole('link', { name: 'About us' }).click();
});

test('TC08', async ({ page }) => {
  await page.goto('http://localhost:8080/th/');
await page.getByRole('link', { name: 'gb' }).click();
await page.getByText('brick colored kku coat').click();
await page.getByRole('link', { name: 'project_G4' }).click();
await page.getByText('polo shirt kku brick color').click();
await page.getByRole('link', { name: 'project_G4' }).click();
await page.getByText('Yeti water glass KKU').click();
});

test('TC09', async ({ page }) => {
  await page.goto('http://localhost:8080/th/');
  await page.getByRole('link', { name: 'gb' }).click();
  await page.getByText('brick colored kku coat').click();
  await page.locator('span').filter({ hasText: 'brick colored kku coat' }).click();
  await page.getByRole('heading', { name: 'brick colored kku coat' }).click();
  await page.getByText('Save 20%').click();
  await page.getByText('VAT included').click();
  await page.locator('#product-description-short-1').getByText('The Brick KKU Coat is a').click();
  await page.getByText('Size: S').click();
  await page.getByText('Quantity').click();
  await page.getByRole('button', { name: ' Add to basket' }).click();
  await page.getByRole('tab', { name: 'Description' }).click();
  await page.getByText('The brick-colored KKU coat is').click();
  await page.getByRole('tab', { name: 'Product Details' }).click();
  await page.getByRole('heading', { name: '1 other product in the same' }).click();
});

test('TC10', async ({ page }) => {
  await page.goto('http://localhost:8080/th/');
  await page.getByRole('link', { name: 'gb' }).click();
  await page.getByText('polo shirt kku brick color').click();
  await page.locator('span').filter({ hasText: 'polo shirt kku brick color' }).click();
  await page.getByRole('heading', { name: 'polo shirt kku brick color' }).click();
  await page.getByText('Save 20%').click();
  await page.getByText('VAT included').click();
  await page.locator('#product-description-short-2').getByText('Kku polo shirt, brick color,').click();
  await page.getByText('Size: S').click();
  await page.getByText('Color: Type').click();
  await page.getByText('Quantity').click();
  await page.getByRole('button', { name: ' Add to basket' }).click();
  await page.getByRole('tab', { name: 'Description' }).click();
  await page.getByText('KKU polo shirts in brick').click();
  await page.getByRole('tab', { name: 'Product Details' }).click();
  await page.getByText('In stock').click();
  await page.getByText('Items').click();
  await page.getByRole('heading', { name: '1 other product in the same' }).click();
});

test('TC11', async ({ page }) => {
  await page.goto('http://localhost:8080/th/');
  await page.getByRole('link', { name: 'gb' }).click();
  await page.getByText('Yeti water glass KKU').click();
  await page.locator('span').filter({ hasText: 'Yeti water glass KKU' }).click();
  await page.getByRole('heading', { name: 'Yeti water glass KKU' }).click();
  await page.getByText('VAT included').click();
  await page.locator('#product-description-short-6').getByText('Suitable for use when').click();
  await page.getByText('Quantity').click();
  await page.getByRole('button', { name: ' Add to basket' }).click();
  await page.getByRole('tab', { name: 'Description' }).click();
  await page.getByText('White KKU glass is a product').click();
  await page.getByRole('tab', { name: 'Product Details' }).click();
  await page.getByText('In stock').click();
  await page.getByText('Items').click();
  await page.getByText('Data sheet').click();
  await page.getByText('Composition').click();
  await page.getByText('glass', { exact: true }).click();
});

test('TC12', async ({ page }) => {
  await page.goto('http://localhost:8080/th/');
  await page.getByRole('link', { name: 'gb' }).click();
  await page.locator('p').filter({ hasText: 'Our company' }).click();
  await page.locator('p').filter({ hasText: 'Products' }).click();
  await page.locator('li').filter({ hasText: 'Prices drop' }).click();
  await page.getByRole('link', { name: 'New products' }).click();
  await page.getByRole('link', { name: 'project_G4' }).click();
  await page.getByTitle('Our terms and conditions of delivery').click();
  await page.getByRole('link', { name: 'project_G4' }).click();
  await page.getByTitle('Our terms and conditions of use').click();
  await page.getByRole('link', { name: 'project_G4' }).click();
  await page.getByTitle('Learn more about us').click();
  await page.getByRole('link', { name: 'project_G4' }).click();
  await page.getByRole('link', { name: 'All products ' }).click();
  await page.getByRole('link', { name: 'project_G4' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: '© 2024 - Made for educational' }).click();
  const page1 = await page1Promise;
});

test('TC13', async ({ page }) => {
  await page.goto('http://localhost:8080/th/');
  await page.getByRole('link', { name: ' เปิดหน้าต่างย่อ' }).first().click();
  await page.getByLabel('ปิด').click();
  await page.getByRole('link', { name: 'gb' }).click();
  await page.getByRole('link', { name: ' Quick view' }).first().click();
  await page.locator('#quickview-modal-1-48').getByRole('heading', { name: 'brick colored kku coat' }).click();
  await page.getByText('Save 20%').click();
  await page.getByText('VAT included').click();
  await page.getByText('The Brick KKU Coat is a').click();
  await page.getByText('Size: S').click();
  await page.getByText('Quantity').click();
  await page.getByRole('button', { name: ' Add to basket' }).click();
  await page.getByRole('link', { name: ' Quick view' }).nth(1).click();
  await page.locator('#quickview-modal-2-40').getByRole('heading', { name: 'polo shirt kku brick color' }).click();
  await page.getByText('Save 20%').click();
  await page.getByText('VAT included').click();
  await page.getByText('Kku polo shirt, brick color,').click();
  await page.getByText('Size: S').click();
  await page.getByText('Color: Type').click();
  await page.getByText('Quantity').click();
  await page.getByRole('button', { name: ' Add to basket' }).click();
  await page.getByRole('link', { name: ' Quick view' }).nth(2).click();
  await page.locator('#quickview-modal-6-0').getByRole('heading', { name: 'Yeti water glass KKU' }).click();
  await page.getByText('VAT included').click();
  await page.getByText('Suitable for use when').click();
  await page.getByText('Quantity').click();
  await page.getByRole('button', { name: ' Add to basket' }).click();
});


test('TC14', async ({ page }) => {
  await page.goto('http://localhost:8080/th/');
  await page.getByRole('link', { name: 'เสื้อผ้า' }).click();
  await page.getByRole('link', { name: 'gb' }).click();
  await page.getByRole('heading', { name: 'Clothes' }).click();
  await page.getByText('Search for clothing belonging').click();
  await page.getByText('Sort by:').click();
  await page.getByText('There are 2 products.').click();
  await page.locator('#js-product-list').getByText('Showing 1-2 of 2 item(s)').click();
  await page.locator('span').filter({ hasText: 'Clothes' }).click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('link', { name: 'Clothes' }).click();
  await page.getByLabel('Sort by selection').click();
  await page.getByRole('link', { name: 'Relevance' }).click();
  await page.getByText('Clothes Search for clothing belonging to the Faculty of Computer Science. There').click();
  await page.locator('#wrapper').getByRole('link', { name: 'Clothes' }).click();
  await page.getByLabel('Sort by selection').click();
  await page.getByRole('link', { name: 'Name, A to Z' }).click();
  await page.getByLabel('Sort by selection').click();
});

test('TC15', async ({ page }) => {
  await page.goto('http://localhost:8080/th/');
  await page.getByRole('link', { name: 'อุปกรณ์เสริม' }).click();
  await page.getByRole('link', { name: 'gb' }).click();
  await page.getByRole('heading', { name: 'Accessories' }).click();
  await page.getByText('Items and accessories Faculty').click();
  await page.getByText('There is 1 product.').click();
  await page.getByText('Sort by:').click();
  await page.getByLabel('Sort by selection').click();
  await page.getByRole('link', { name: 'Relevance' }).click();
  await page.getByLabel('Sort by selection').click();
});

test('TC16', async ({ page }) => {
  await page.goto('http://localhost:8080/th/');
  await page.locator('#cms-page-1').getByRole('link', { name: 'การจัดส่งสินค้า' }).click();
  await page.getByRole('link', { name: 'gb' }).click();
  await page.getByRole('heading', { name: 'Delivery' }).click();
  await page.locator('ol').getByText('Delivery').click();
  await page.getByRole('heading', { name: 'Shipments and returns' }).click();
  await page.getByRole('heading', { name: 'Your pack shipment' }).click();
  await page.locator('p').filter({ hasText: 'Packages are generally' }).click();
  await page.getByText('Shipping fees include').click();
  await page.getByText('Boxes are amply sized and').click();
});

test('TC17', async ({ page }) => {
  await page.goto('http://localhost:8080/th/');
  await page.locator('#cms-page-3').getByRole('link', { name: 'ข้อกำหนดและเงื่อนไขการใช้งาน' }).click();
  await page.getByRole('link', { name: 'gb' }).click();
  await page.locator('div').filter({ hasText: 'Clothes Accessories Delivery' }).nth(2).click();
  await page.locator('#cms-page-3').getByRole('link', { name: 'Terms and conditions of use' }).click();
  await page.locator('span').filter({ hasText: 'Terms and conditions of use' }).click();
  await page.locator('#main header').getByRole('heading', { name: 'Terms and conditions of use' }).click();
  await page.locator('#content').getByRole('heading', { name: 'Terms and conditions of use' }).click();
  await page.getByRole('heading', { name: 'Rule 1' }).click();
  await page.getByText('Data Security: The service').click();
  await page.getByRole('heading', { name: 'Rule 2' }).click();
  await page.getByText('Use and Limitation of').click();
  await page.getByRole('heading', { name: 'Rule 3' }).click();
  await page.getByText('Cancellation and compensation').click();
});

test('TC18', async ({ page }) => {
  await page.goto('http://localhost:8080/th/');
  await page.locator('#cms-page-4').getByRole('link', { name: 'เกี่ยวกับเรา' }).click();
  await page.getByRole('link', { name: 'gb' }).click();
  await page.locator('#cms-page-4').getByRole('link', { name: 'About us' }).click();
  await page.locator('span').filter({ hasText: 'About us' }).click();
  await page.locator('#main header').getByRole('heading', { name: 'About us' }).click();
  await page.locator('#content').getByRole('heading', { name: 'About us' }).click();
  await page.getByRole('heading', { name: 'Our company' }).click();
  await page.getByText('I am sorry to say that it is').click();
  await page.getByText('The pain itself is very important to achieve a healthy weight gain, but at the').click();
  await page.getByText('Top quality products').click();
  await page.getByText('Best customer service').click();
  await page.getByText('-days money back guarantee').click();
  await page.getByRole('heading', { name: 'Our team' }).click();
  await page.getByText('The customer set should not').click();
  await page.getByText('At the same time, some great').click();
  await page.getByRole('heading', { name: 'Testimonials' }).click();
  await page.getByText('"The truth is that the pain').click();
  await page.getByText('The customer is very smart').click();
  await page.getByText('"Except they be blinded by').click();
});

test('TC19', async ({ page }) => {
  await page.goto('http://localhost:8080/th/');
  await page.getByRole('link', { name: 'สินค้าทั้งหมด ' }).click();
  await page.getByRole('link', { name: 'gb' }).click();
  await page.getByRole('heading', { name: 'Home' }).click();
  await page.getByRole('heading', { name: 'Subcategories' }).click();
  await page.getByRole('heading', { name: 'Clothes' }).getByRole('link').click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('link', { name: 'All products ' }).click();
  await page.getByRole('heading', { name: 'Accessories' }).getByRole('link').click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('link', { name: 'All products ' }).click();
  await page.getByText('There are 3 products.').click();
  await page.getByText('Sort by:').click();
  await page.locator('#js-product-list').getByText('Showing 1-3 of 3 item(s)').click();
});

test('TC20', async ({ page }) => {
  await page.goto('http://localhost:8080/th/');
  await page.getByRole('link', { name: 'ลดราคา' }).click();
  await page.getByRole('link', { name: 'gb' }).click();
  await page.getByRole('heading', { name: 'Prices drop' }).click();
  await page.getByText('There are 2 products.').click();
  await page.getByText('Sort by:').click();
  await page.getByLabel('Sort by selection').click();
  await page.getByRole('link', { name: 'Name, A to Z' }).click();
  await page.getByLabel('Sort by selection').click();
  await page.getByRole('link', { name: 'Name, Z to A' }).click();
  await page.getByLabel('Sort by selection').click();
  await page.getByRole('link', { name: 'Price, low to high' }).click();
  await page.getByLabel('Sort by selection').click();
  await page.getByRole('link', { name: 'Price, high to low' }).click();
  await page.locator('#js-product-list').getByText('Showing 1-2 of 2 item(s)').click();
});

test('TC21', async ({ page }) => {
  await page.goto('http://localhost:8080/th/');
  await page.getByRole('link', { name: 'สินค้าใหม่' }).click();
  await page.getByRole('link', { name: 'gb' }).click();
  await page.locator('span').filter({ hasText: 'New products' }).click();
  await page.getByRole('heading', { name: 'New products' }).click();
  await page.getByText('There are 3 products.').click();
  await page.getByText('Sort by:').click();
  await page.getByLabel('Sort by selection').click();
  await page.getByRole('link', { name: 'Date added, newest to oldest' }).click();
  await page.locator('#js-product-list').getByText('Showing 1-3 of 3 item(s)').click();
});