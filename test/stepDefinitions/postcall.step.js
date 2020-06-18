const { Given, When, Then } = require("cucumber");
const {postMethod} = require("../pages/postcall.page");

Given(/^I am doing post call$/, async() => {
  console.log("************POST-CALL************");
  await postMethod()
});
