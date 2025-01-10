// page object class for Login Page 

exports.LoginPage = 
class LoginPage {

    constructor(page){
        this.page = page;
        this.loginLink = '#login2';
        this.usernameInput = '#loginusername';
        this.passowrdInput = '#loginpassword';
        this.loginButton = '//*[@id="logInModal"]/div/div/div[3]/button[2]';
        
    }

    async gotoLoginPage () {
        await this.page.goto('https://demoblaze.com/index.html');

    }

    async login(username, password){ //login method -- which is equivalent to function in C or calling another prorgram in COBOL 
        await this.page.locator(this.loginLink).click();
        await this.page.locator(this.usernameInput).fill(username);
        await this.page.locator(this.passowrdInput).fill(password);
        await this.page.locator(this.loginButton).click();
    }

}
