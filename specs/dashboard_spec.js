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
/*
	//Dashboard page, create new column
	it('To verify creating a new column', function () {
		browser.ignoreSynchronization = true
		try {
			logger.info('Executing Test: To verify creating a new column');
			keywords.enterFieldValue(elements.usernameId, data.username);
			keywords.enterFieldValue(elements.passwordId, data.password);
			keywords.clickButton(elements.loginButtonId);

			//waiting for Columns to come and click on add column button
			keywords.waitElementAndClickByXpath(elements.bookmarkedColumnXpath, elements.addColumnBtnXpath, 15000);

			//Creating new column
			keywords.enterFieldValueByXpath(elements.columnNameInputXpath, data.columnName);
			keywords.enterFieldValueByXpath(elements.columnSearchInputXpath, data.columnSearch);
			keywords.clickButtonByXpath(elements.columnSaveBtnXpath);

			var targetEle = element(by.xpath('.//*[.="New Columns"]'));
			var EC_TIMEOUT = 5000;
			browser.wait(EC.visibilityOf(targetEle), EC_TIMEOUT).then(function () {
				expect(targetEle.getText()).toEqual('New Columns');
			});

			var targetElex = element(by.xpath('/html/body/app-root/div/app-dashboard/div/div/div[1]/div[4]/div/div[1]/app-dashboard-filter/span/img'));
			var EC_TIMEOUT = 5000;
			browser.wait(EC.visibilityOf(targetElex), EC_TIMEOUT).then(function () {
				targetElex.click();
				element(by.xpath('//*[@id="filter"]/form/div[10]/button[1]')).click();
			});

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
			logger.info('Executing Test: To verify creating a new column');
			keywords.enterFieldValue(elements.usernameId, data.username);
			keywords.enterFieldValue(elements.passwordId, data.password);
			keywords.clickButton(elements.loginButtonId);

			//waiting for Columns to come and click on add column button
			keywords.waitElementAndClickByXpath(elements.bookmarkedColumnXpath, elements.addColumnBtnXpath, 15000);

			element(By.xpath('html/body/app-root/div/app-dashboard/div/div/div[1]/div[1]/div/div[3]/div[1]/div/div[1]/div[2]')).click();
			browser.sleep();

			var targetElexa = element(by.xpath('/html/body/app-root/div/app-header/div/div/div/breadcrumb/ul/li[1]/a'));
			var EC_TIMEOUT = 5000;
			browser.wait(EC.visibilityOf(targetElexa), EC_TIMEOUT).then(function () {
				expect(element(By.xpath('/html/body/app-root/div/app-header/div/div/div/breadcrumb/ul/li[1]/a')).getText()).toEqual('Orders');
			});	
			
		} catch (err) {
			console.log("Test Exception message: " + err.message);
			logger.info("Test Exception message: " + err.message);
		}
	});*/

	//Dashboard page, bookmark any item
	it('To verify bookmark any item', function () {
		browser.ignoreSynchronization = true
		try {
			var orderName;
			logger.info('Executing Test: To verify creating a new column');
			keywords.enterFieldValue(elements.usernameId, data.username);
			keywords.enterFieldValue(elements.passwordId, data.password);
			keywords.clickButton(elements.loginButtonId);

			//waiting for Columns to come and click on add column button
			keywords.waitElementAndClickByXpath(elements.bookmarkedColumnXpath, elements.addColumnBtnXpath, 15000);

			element(By.xpath('/html/body/app-root/div/app-dashboard/div/div/div[1]/div[1]/div/div[3]/div[1]/div/div[1]/div[2]/h5')).getText().then(function (text) {
				orderName = text;
			});
			element(By.xpath('/html/body/app-root/div/app-dashboard/div/div/div[1]/div[1]/div/div[3]/div[1]/div/div[2]/div[2]/span[1]')).click();


			var targetElexaw = element(by.xpath('/html/body/app-root/div/app-dashboard/div/div/div[1]/div[3]/div/div[3]/div/div/div[1]/div[2]/h5'));
			var EC_TIMEOUT = 5000;
			browser.wait(EC.visibilityOf(targetElexaw), EC_TIMEOUT).then(function () {
				expect(targetElexaw.getText()).toEqual(orderName);
				element(By.xpath('/html/body/app-root/div/app-dashboard/div/div/div[1]/div[3]/div/div[3]/div/div/div[2]/div[2]/span[1]')).click();
			});	

		} catch (err) {
			console.log("Test Exception message: " + err.message);
			logger.info("Test Exception message: " + err.message);
		}
	});
});

