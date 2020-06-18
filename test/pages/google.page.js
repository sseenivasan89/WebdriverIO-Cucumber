const jsonData = require('../utils/data.js');

class googlePage {
  get searchBox() { return $('[name="q"]'); }

  launchGooglePage() {
    browser.url(jsonData['googleUrl']);
    browser.pause(100);
    browser.maximizeWindow();
    browser.setWindowSize(1080, 720);
  }
  titleMacth(title) {
    expect(browser).toHaveTitle(title);
    //browser.getTitle().should.equal(title);
    console.log(browser.getTitle())
  }
  performSearch(keyword) {
    expect(this.searchBox).toBeDisplayed()
    this.searchBox.setValue(keyword);
    browser.pause(1000);
  }
}

module.exports = googlePage;
