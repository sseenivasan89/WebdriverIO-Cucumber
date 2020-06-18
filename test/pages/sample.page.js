const jsonData = require('../utils/data.js');
class samplePage {
  get searchBox() {  return $('[id="search_input_react"]'); }
  get docsPage() {  return $('.//*[@class="nav-site nav-site-internal"]/li[1]'); }
  get blogsPage() {  return $('.//*[@class="nav-site nav-site-internal"]/li[5]'); }

  launchWebdriverPage() {
    browser.url(jsonData['wdioUrl'])
    browser.pause(1000)
    browser.maximizeWindow()
    browser.setWindowSize(1080, 720)
  }
  searchForKeyword() {
    expect(this.searchBox).toBeDisplayed()
    this.searchBox.waitForExist()
    this.searchBox.setValue("wait")
    browser.pause(1000)
  }
  pageNavigation() {
    this.docsPage.waitForExist()
    expect(this.docsPage).toBeDisplayed()
    this.docsPage.click()
    expect(this.blogsPage).toBeDisplayed()
    this.blogsPage.waitForDisplayed(1000)
    this.blogsPage.click()
    const blogPageText = this.blogsPage.getText()
    console.log(blogPageText)
    //assert.equal(blogPageText, 'blog');
    //expect(blogPageText).toHaveText("blog", { ignoreCase: true })
    browser.back()
    browser.pause(500)
    browser.forward()
  }
}

module.exports = samplePage;
