exports.HomePage = 
class HomePage {
    constructor(page) {
      this.page = page;
      this.productLists = '//*[@id="tbodyid"]/div/div/div/h4/a'; // XPath selector
      this.addToCartBtnSelector = 'Add to cart';  // Button selector
      this.cartSelector = '#cartur'; // CSS selector
    }
  
    async addProductToCart(productName) {
      const productList = await this.page.$$(this.productLists);
      for (const product of productList) {
        const productText = await product.textContent();
        if (productText.trim() === productName) {
          await product.click();
          break;
        }
      }
  
      await this.page.on('dialog', async (dialog) => {
        if (dialog.message().includes('added')) {
          await dialog.accept();
        }
      });
  
      await this.page.getByText(this.addToCartBtnSelector).click();
    }
  
    async gotoCart() {
      await this.page.locator(this.cartSelector).click();
    }
  }