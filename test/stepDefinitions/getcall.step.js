const { Given, When, Then } = require("cucumber");
const {getMethod} = require("../pages/getcall.page.js");

Given(/^I am doing get call$/, async() => {
  console.log("************GET CALL************");
  await getMethod()
});
