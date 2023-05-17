import LoginPage from '../pageobjects/login.page.js'


describe('My Login Application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
    
        expect(await browser.getUrl()).toEqual('https://www.saucedemo.com/inventory.html');

    })
})


