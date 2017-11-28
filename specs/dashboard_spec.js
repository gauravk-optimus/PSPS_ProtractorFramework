//For Logging
var log4jsGen = require("../log4jsGen");
var logger = log4jsGen.getLogger();
var EC = protractor.ExpectedConditions;
//Reusable keywords, test data and elements locators
var keywords = require('../pageTestCases/keywords.js');
var data = require('../pages/data.js');
var elements = require('../pageElements/elements.js');
var dragNDrop = require('../drag.js');
var wait = require("wait");

//add a delay of 100ms before each queued action
var origFn = browser.driver.controlFlow().execute;
browser.driver.controlFlow().execute = function() {
  var args = arguments;
  // queue 100ms wait
  origFn.call(browser.driver.controlFlow(), function() {
    return protractor.promise.delayed(100);
  });
  return origFn.apply(browser.driver.controlFlow(), args);
};

//Dashboard Page Test Suite
describe('To test dashboard', function () {
	logger.info('Executing suite: To test dashboard');
	beforeEach(function () {
		logger.info('Navigating to URL');
		browser.get('http://172.16.0.46/PSPSUIBuild/login');
		//browser.get('http://172.16.1.95:4200/login');
		browser.driver.manage().window().maximize();
		browser.getCurrentUrl().then(function _logValue(url) {
			logger.info("Current url is " + url);
		});
	});

	//Dashboard page, create new column
	it('To verify creating a new column', function () {
		browser.ignoreSynchronization = true
		try {
			logger.info('Executing Test: To verify creating a new column');
			keywords.enterFieldValue(elements.usernameId, data.username);
			keywords.enterFieldValue(elements.passwordId, data.password);
			keywords.clickButton(elements.loginButtonId);

			//waiting for Columns to come and click on add column button
			keywords.waitElementAndClickByXpath(elements.bookmarkedColumnXpath, elements.addColumnBtnXpath, data.EC_TIMEOUT_BIG);

			//Creating new column
			keywords.enterFieldValueByXpath(elements.columnNameInputXpath, data.columnName);
			keywords.enterFieldValueByXpath(elements.columnSearchInputXpath, data.columnSearch);
			keywords.clickButtonByXpath(elements.columnSaveBtnXpath);

			//wait and verify the name of newly created column
			keywords.waitElementAndVerifyTextByXpath(elements.newColumnXpath, data.columnName, data.EC_TIMEOUT);		

			//remove the newly created column
			keywords.waitElementAndClickByXpath(elements.columnFilterBtnXpath, elements.columnFilterBtnXpath, data.EC_TIMEOUT);
			keywords.waitElementAndClickByXpath(elements.columnRemoveBtnXpath, elements.columnRemoveBtnXpath, data.EC_TIMEOUT);
		
			//keywords.waitElementAndVerifyTextByXpath(targetEle2, data.columnName, 5000);
			browser.executeScript('window.localStorage.clear();');			
		} catch (err) {
			console.log("Test Exception message: " + err.message);
			logger.info("Test Exception message: " + err.message);
		}
	});

	//Dashboard page, Open order/picklist details page from dashboard page
	it('To verify Open order/picklist details page from dashboard page', function () {
		browser.ignoreSynchronization = true
		try {
			logger.info('Executing Test: To verify open picklist from dashboard page');
			keywords.enterFieldValue(elements.usernameId, data.username);
			keywords.enterFieldValue(elements.passwordId, data.password);
			keywords.clickButton(elements.loginButtonId);

			//waiting for Columns to come and click on any order/picklist
			keywords.waitElementAndClickByXpath(elements.bookmarkedColumnXpath, elements.dashboardFirstPicklist, data.EC_TIMEOUT_BIG);		
		
			//wait for Picklist Details page to open and verify order link text
			keywords.waitElementAndVerifyTextByXpath(elements.orderLinkXpath, data.OrderLinkText, data.EC_TIMEOUT);			
			
			browser.executeScript('window.localStorage.clear();');
		} catch (err) {
			console.log("Test Exception message: " + err.message);
			logger.info("Test Exception message: " + err.message);
		}
	});
	
	//Dashboard page, bookmark any item
	it('To verify bookmark any item', function () {
		browser.ignoreSynchronization = true
		try {
			var orderName;
			logger.info('Executing Test: To verify bookmark a column');
			browser.sleep(6000);
			keywords.enterFieldValue(elements.usernameId, data.username);
			keywords.enterFieldValue(elements.passwordId, data.password);
			keywords.clickButton(elements.loginButtonId);

			//waiting for Columns to come			
			var targetElexa = element(by.xpath(elements.bookmarkedColumnXpath));					
			browser.wait(EC.visibilityOf(targetElexa), data.EC_TIMEOUT).then(function () {				
			});	

			//Save the Order to be bookmarked to a variable
			element(By.xpath(elements.orderToBeBookmarkedXpath)).getText().then(function (text) {
				orderName = text;
				logger.info('Save the order name');
			});
			
			//click on bookmark button
			keywords.clickButtonByXpath(elements.bookmarkButtonXpath);
			logger.info('Clicked on bookmark button');

			//Verifying the bookmarked item is correct
			var targetElexaw = element(by.xpath(elements.orderToBeUnBookmarkedXpath));					
			browser.wait(EC.visibilityOf(targetElexaw), data.EC_TIMEOUT).then(function () {
				expect(targetElexaw.getText()).toEqual(orderName);
				element(By.xpath(elements.UnBookmarkButtonXpath)).click();					
				logger.info('Verified and Unbookmarked the item')			  ;
			});	

			browser.executeScript('window.localStorage.clear();');
		} catch (err) {
			console.log("Test Exception message: " + err.message);
			logger.info("Test Exception message: " + err.message);
		}
	});
});

