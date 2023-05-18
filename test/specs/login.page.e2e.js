import LoginPage from '../pageobjects/login.page.js'


describe('The Login Page', () => {

    beforeEach(async () => {
        await LoginPage.open();
    })

    it('should display the error message with invalid credentials', async () => {
        await LoginPage.login("locked_out_user", "secret_sauce")

        const isErrorMessageDisplayed = await LoginPage.errorMessage.isDisplayed();
        expect(isErrorMessageDisplayed).toEqual(true)

    })

    it('should login with valid credentials', async () => {
        await LoginPage.login('standard_user', 'secret_sauce')
    
        expect(await browser.getUrl()).toEqual('https://www.saucedemo.com/inventory.html');
    })
})


