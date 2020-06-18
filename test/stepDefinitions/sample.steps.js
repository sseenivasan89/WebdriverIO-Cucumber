const { Given, When, Then } = require('cucumber');
const samplePage = require('../pages/sample.page');
const page  = new samplePage();

Given(/^I am launching webdriverio page$/, () => {
    page.launchWebdriverPage();
    console.log("************SAMPLE************")
});

When(/^I search for keyword$/, () => {
   page.searchForKeyword();
});

Then(/^I navigate to some pages$/, () => {
   page.pageNavigation();
});