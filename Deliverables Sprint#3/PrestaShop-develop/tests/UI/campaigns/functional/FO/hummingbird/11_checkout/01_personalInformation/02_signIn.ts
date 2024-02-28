// Import utils
import testContext from '@utils/testContext';
import helper from '@utils/helpers';
import files from '@utils/files';

// Import common tests
import {installHummingbird, uninstallHummingbird} from '@commonTests/FO/hummingbird';

// Import pages
import homePage from '@pages/FO/hummingbird/home';
import productPage from '@pages/FO/hummingbird/product';
import cartPage from '@pages/FO/hummingbird/cart';
import checkoutPage from '@pages/FO/hummingbird/checkout';

// Import data
import Customers from '@data/demo/customers';
import CustomerData from '@data/faker/customer';

import {expect} from 'chai';
import type {BrowserContext, Page} from 'playwright';

const baseContext: string = 'functional_FO_hummingbird_checkout_personalInformation_signIn';

/*
Pre-condition:
- Install hummingbird them
Scenario:
- Open FO page
- Add first product to the cart
- Proceed to checkout and validate the cart
- Enter an invalid credentials
- Login by default customer
- Logout
Post-condition:
- Uninstall hummingbird theme
 */
describe('FO - Checkout - Personal information : Sign in', async () => {
  let browserContext: BrowserContext;
  let page: Page;

  const credentialsData: CustomerData = new CustomerData();

  // Pre-condition : Install Hummingbird
  installHummingbird(`${baseContext}_preTest`);

  // before and after functions
  before(async function () {
    browserContext = await helper.createBrowserContext(this.browser);
    page = await helper.newTab(browserContext);
  });

  after(async () => {
    await helper.closeBrowserContext(browserContext);
    await files.deleteFile('../../admin-dev/hummingbird.zip');
  });

  describe('Sign from Personal information step', async () => {
    it('should open FO page', async function () {
      await testContext.addContextItem(this, 'testIdentifier', 'openFO', baseContext);

      await homePage.goToFo(page);
      await homePage.changeLanguage(page, 'en');

      const isHomePage = await homePage.isHomePage(page);
      expect(isHomePage, 'Fail to open FO home page').to.eq(true);
    });

    it('should add product to cart', async function () {
      await testContext.addContextItem(this, 'testIdentifier', 'addProductToCart', baseContext);

      await homePage.goToProductPage(page, 1);
      await productPage.addProductToTheCart(page, 1);

      const pageTitle = await cartPage.getPageTitle(page);
      expect(pageTitle).to.equal(cartPage.pageTitle);
    });

    it('should proceed to checkout validate the cart', async function () {
      await testContext.addContextItem(this, 'testIdentifier', 'validateCart', baseContext);

      await cartPage.clickOnProceedToCheckout(page);

      const isCheckoutPage = await checkoutPage.isCheckoutPage(page);
      expect(isCheckoutPage).to.eq(true);
    });

    it('should enter an invalid credentials', async function () {
      await testContext.addContextItem(this, 'testIdentifier', 'enterInvalidCredentials', baseContext);

      await checkoutPage.clickOnSignIn(page);

      const isCustomerConnected = await checkoutPage.customerLogin(page, credentialsData);
      expect(isCustomerConnected, 'Customer is connected').to.eq(false);

      const loginError = await checkoutPage.getLoginError(page);
      expect(loginError).to.contains(checkoutPage.authenticationErrorMessage);
    });

    it('should sign in with customer credentials', async function () {
      await testContext.addContextItem(this, 'testIdentifier', 'signIn', baseContext);

      const isCustomerConnected = await checkoutPage.customerLogin(page, Customers.johnDoe);
      expect(isCustomerConnected, 'Customer is not connected').to.eq(true);
    });

    it('should click on edit Personal information step and get the identity of the customer', async function () {
      await testContext.addContextItem(this, 'testIdentifier', 'checkCustomerIdentity', baseContext);

      await checkoutPage.clickOnEditPersonalInformationStep(page);

      const customerIdentity = await checkoutPage.getCustomerIdentity(page);
      expect(customerIdentity).to.equal(`${Customers.johnDoe.firstName} ${Customers.johnDoe.lastName}`);
    });

    it('should check the existence of the text message \'If you sign out now, your cart will be emptied.\'', async function () {
      await testContext.addContextItem(this, 'testIdentifier', 'checkMessage', baseContext);

      const message = await checkoutPage.getLogoutMessage(page);
      expect(message).to.equal(checkoutPage.messageIfYouSignOut);
    });

    it('should logout and check that the customer is no longer connected', async function () {
      await testContext.addContextItem(this, 'testIdentifier', 'logout', baseContext);

      const isCustomerConnected = await checkoutPage.logOutCustomer(page);
      expect(isCustomerConnected, 'Customer is still connected').to.eq(false);
    });

    it('should check the message \'There are no more items in your cart\' in shopping cart page', async function () {
      await testContext.addContextItem(this, 'testIdentifier', 'checkNoItemsNumber', baseContext);

      const message = await cartPage.getNoItemsInYourCartMessage(page);
      expect(message).to.equal(cartPage.noItemsInYourCartMessage);
    });
  });

  // Post-condition : Uninstall Hummingbird
  uninstallHummingbird(`${baseContext}_postTest`);
});
