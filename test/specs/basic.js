const searchActPage = require('../page/searchAct.page.js')



describe("Should check subscribe feature (Final homework4)" , async () => {
    
    it('Go to website github.com', async () => {
        await browser.url('https://github.com/');
        await browser.maximizeWindow();
        await browser.pause(100)
        })

    it('Should go to Github, click on SignUp, set fake credentials, select country and check to exist expected text', async () => {
        await searchActPage.clickOnSearch();
        await browser.pause(100)

        await searchActPage.setText('Act');
        await browser.pause(100)
        await browser.keys('Enter')
        await browser.pause(100)

        await searchActPage.searchAct()
        await browser.pause(100)
        // await expect(searchActPage.act).toHaveAttribute("href", '/Act', 'Act', '/act', 'act')

        })
    }
)