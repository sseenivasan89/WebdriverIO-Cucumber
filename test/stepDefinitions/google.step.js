const { Given, When, Then } = require('cucumber');
const googlePage = require('../pages/google.page');
const page  = new googlePage();

Given(/^I open Google$/, () => {
    console.log("************GOOGLE************")
    page.launchGooglePage()
});

Then(/^I see "([^"]*)" in the title$/, (title) => {
    page.titleMacth(title)  
});

Then(/^I Search "([^"]*)"$/, (keyword) => {
   page.performSearch(keyword)
})