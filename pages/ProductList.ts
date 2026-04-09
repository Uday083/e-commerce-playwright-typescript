//This page includes the elements of product list, product details page, image of the product list page and the details page, information in the product list page vs details page, etc...
//scenarios include the addiion/removal of the products to the cart from the product list or product detals page.

import { Page, test, Locator } from '@playwright/test';

//locators
//constructor
//Action methods
export class ProductList {

    readonly page: Page;
    readonly products: Locator;
    readonly productDetails: Locator;
    readonly productCount: Locator;
    readonly productImage: Locator;
    readonly productInfo: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.products = page.getByText('Products');
        this.productCount = page.locator('.inventory_item_name');
        this.productDetails = page.locator('.product-details');
        this.productImage = page.locator('.product-image');
        this.productInfo = page.locator('.product-info');
    }
    async isPageExist(){

        let title=await this.page.title();
        if (title =='Swag Labs'){
            return true;
        }
        else{            return false;
        }
    }
    async productsExist(){
        let Count = await this.productCount.count();
        if (Count > 0){
            for (let i = 0; i < Count; i++) {
                let productName = await this.productCount.nth(i).textContent();
                console.log(`Product ${i + 1}: ${productName}`);
            }
            return true;
        }
        else{            return false;
        }
    }

    async clickProductDetails(){
        await this.productDetails.click();
    }   
    async clickProductImage(){
        await this.productImage.click();
    }
    async clickProductInfo(){
        await this.productInfo.click();
    }


}