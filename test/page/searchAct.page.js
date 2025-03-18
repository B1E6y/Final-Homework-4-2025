
class searchActPage {
        get clickOnSearchInput() {return $('.search-input')}
        get setAct() {return $('#query-builder-test')}
        get act() {return $('[data-testid="results-list"] a[href*="/act"]') }
        
        
            async clickOnSearch () {
                await this.clickOnSearchInput.click();
            }
            async setText(value) {
                await this.setAct.setValue(value);
         
            }
            async searchAct() {
                let attr = this.act.getAttribute('href')
                console.log("Act is there: " + await attr); 
            }
    
    }


module.exports = new searchActPage()