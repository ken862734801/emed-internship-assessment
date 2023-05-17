import LoginPage from '../pageobjects/login.page.js'


describe('The Login Page', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
    
        expect(await browser.getUrl()).toEqual('https://www.saucedemo.com/inventory.html');
    })

    it('should display the error message with invalid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login("false_user", "false_sauce")

        const isErrorMessageDisplayed = await LoginPage.errorMessage.isDisplayed();
        expect(isErrorMessageDisplayed).toEqual(true)

    })
})


