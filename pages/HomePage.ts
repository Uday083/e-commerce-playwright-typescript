//only the elements of the Home page without the products. This will include Hamburger menu, filters, Cart icon, Social media icons, etc...

import { Page, expect, Locator } from '@playwright/test';
export class Home {

    private readonly page: Page;    
    //locators
    private readonly hamburgerMenu: Locator;
    private readonly filterButton: Locator;
    private readonly cartIcon: Locator
    private readonly twitterIcon: Locator;
    private readonly facebookIcon: Locator;
    private readonly logoutButton: Locator;
    //constructor
    constructor(page: Page) {
        this.page = page;
        this.hamburgerMenu = page.locator('#react-burger-menu-btn');
        this.filterButton = page.locator('.product_sort_container');
        this.cartIcon = page.locator('.shopping_cart_link');
        this.twitterIcon = page.locator('.social_twitter');
        this.facebookIcon = page.locator('.social_facebook');
        this.logoutButton = page.locator('#logout_sidebar_link');
    }
    //Action methods
    async isPageExist(){

        let title=await this.page.title();
        if (title){
            return true;
        }
        else{            return false;
        }
    }
    async clickHamburgerMenu(){
        await this.hamburgerMenu.click();
    }
    async clickFilterButton(){
        await this.filterButton.click();
    }
    async clickCartIcon(){
        await this.cartIcon.click();
    }
    async clickLogoutButton(){
        await this.logoutButton.click();
    }
    }