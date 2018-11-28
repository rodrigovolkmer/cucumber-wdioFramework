const chai = require('chai');
expect = chai.expect;
const po = require('../pageObjects/generalPO.js');
let greetings;

const {
  Given,
  When,
  Then
} = require('cucumber');

Given('I go to the LocalSearch homepage', function () {
  po.loadUrl('/');
});

When('Its morning|afternoon|evening', function () {
  const d = new Date();
  const hourOfTheDay = d.getHours();

  if (hourOfTheDay >= 18 && hourOfTheDay <= 23) {
    //  evening
    greetings = 'Good Evening';
  } else if (hourOfTheDay >= 0 && hourOfTheDay < 12) {
    // morning
    greetings = 'Good Morning';

  } else if (hourOfTheDay >= 12 && hourOfTheDay < 18) {
    // afternoon
    greetings = 'Good Afternoon';
  }

});

Then('I expect to see a welcome message', function () {
  expect(greetings).to.be.equal(po.localTimeGreetings.getText(),
    'expected greetings to mach time of the day');
});


When('I search for {string} on the search field', function (business) {
  // search for the business passed
  po.searchFor(business);
});

When('I get a list of results', function () {
  // wait for the list of results to load 
  po.resultsList.waitForVisible();
  const resultItemsAmount = po.resultsList.$$('div.ListItem__root').length;
  // and assert that it returned more than 0
  expect(resultItemsAmount).to.be.above(0,
    'no results found for the business searched');
});

When('I select the first result', function () {
  // select the first of the list of results
  po.resultsList.$('div.ListItem__root').waitForExist();
  po.resultsList.$('div.ListItem__root').click();
});

Then('I expect to see the business {string} details', function (detail) {
  // wait for the business detail page to load
  po.businessProfile.waitForVisible();
  // retreive the information required
  const isBusinessDetailsExisting = po.businessDetailPresent(detail);
  // assert 
  expect(isBusinessDetailsExisting).to.be.equal(true,
    `Business you searched does not have ${detail} details on our database`);
});