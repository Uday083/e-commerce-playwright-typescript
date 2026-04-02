// This page includes the elements of the Login page, scenarios of right password, wrong password, and empty password, etc.
import { Page, expect, Locator } from '@playwright/test';
import { clearScreenDown } from 'node:readline';

export class LoginPage {

    private readonly page: Page;

    //locators
    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;

    //constructor
    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
    }

    //Action methods
    async isPageExist()
    {
        let title=await this.page.title();
        if (title){
            return true;
        }
        else
        {            
            return false;
        }
    }

    async loginToApp(username: string, password: string) 
    {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}