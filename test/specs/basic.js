const searchActPage = require('../page/searchAct.page.js')



describe("Should find the attibute on Github website (Final homework4)" , async () => {
    
    it('Go to website github.com', async () => {
        await browser.url('https://github.com/');
        await browser.maximizeWindow();
        await browser.pause(100)
        })

    it('Should go to Github, set in Input text: "act" and click Enter. After should find an attribute, which has word "act"', async () => {
        await searchActPage.clickOnSearch();
        await browser.pause(100)

        await searchActPage.setText('Act');
        await browser.pause(100)
        await browser.keys('Enter')
        await browser.pause(100)

        await searchActPage.searchAct()
        await browser.pause(100)

        })
    }
)
