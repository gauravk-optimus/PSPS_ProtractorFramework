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
describe('To test Order Details', function () {
	logger.info('Executing suite: To test Order Details');
	beforeEach(function () {
		logger.info('Navigating to URL');
		browser.get('http://172.16.0.46/PSPSUIBuild/login');
		//browser.get('http://172.16.1.95:4200/login');
		browser.driver.manage().window().maximize();
		browser.getCurrentUrl().then(function _logValue(url) {
			logger.info("Current url is " + url);
		});
	});

	//Order Details page, Creater filter and Search order 
	it('To verify Creater filter and Search order', function () {
		browser.ignoreSynchronization = true
		try {
			var orderName;
			logger.info('Executing Test: To verify Creater filter and Search order');
			keywords.enterFieldValue(elements.usernameId, data.username);
			keywords.enterFieldValue(elements.passwordId, data.password);
			keywords.clickButton(elements.loginButtonId);

			var targetEle = element(by.xpath('/html/body/app-root/app-nav/nav/ul[1]/li[2]/a/div'));
			var EC_TIMEOUT = 5000;
			browser.wait(EC.visibilityOf(targetEle), EC_TIMEOUT).then(function () {
				element(By.xpath('/html/body/app-root/app-nav/nav/ul[1]/li[2]/a/div')).click();
			});

			var targetElex = element(by.xpath('//*[@id="accordion"]/div[1]/app-order-filter/span/a/img'));
			var EC_TIMEOUT = 5000;
			browser.wait(EC.visibilityOf(targetElex), EC_TIMEOUT).then(function () {
				element(By.xpath('//*[@id="accordion"]/div[1]/app-order-filter/span/a/img')).click();
				element(By.xpath('//*[@id="order-list-filter"]/div[2]/span[2]/select')).sendKeys('All');
				element(By.xpath('/html/body/app-root/app-nav/nav/ul[1]/li[2]/a/div')).click();
				element(By.xpath('//*[@id="accordion"]/div[2]/div[1]/div[1]')).click();
				element(By.xpath('//*[@id="page-search"]')).sendKeys('Green');
				element(By.xpath('//*[@id="accordion"]/div[2]/div[1]/div[1]')).click();
				expect(element(By.xpath('//*[@id="0"]/div/table/tbody/tr/td[2]')).getText()).toEqual('GREEN HARVEST');
			});
		} catch (err) {
			console.log("Test Exception message: " + err.message);
			logger.info("Test Exception message: " + err.message);
		}
	});
	//Order Details page, Sorting filter
	it('To verify Sorting filter', function () {
		browser.ignoreSynchronization = true
		try {
			var orderName;
			logger.info('Executing Test: To verify Sorting filter');
			keywords.enterFieldValue(elements.usernameId, data.username);
			keywords.enterFieldValue(elements.passwordId, data.password);
			keywords.clickButton(elements.loginButtonId);

			var targetEle = element(by.xpath('/html/body/app-root/app-nav/nav/ul[1]/li[2]/a/div'));
			var EC_TIMEOUT = 5000;
			browser.wait(EC.visibilityOf(targetEle), EC_TIMEOUT).then(function () {
				element(By.xpath('/html/body/app-root/app-nav/nav/ul[1]/li[2]/a/div')).click();
			});

			var targetElex = element(by.xpath('//*[@id="accordion"]/div[1]/app-order-filter/span/a/img'));
			var EC_TIMEOUT = 15000;
			browser.wait(EC.visibilityOf(targetElex), EC_TIMEOUT).then(function () {
				element(By.xpath('//*[@id="accordion"]/div[1]/app-order-filter/span/a/img')).click();
				element(By.xpath('//*[@id="order-list-filter"]/div[2]/span[2]/select')).sendKeys('All');
				element(By.xpath('//*[@id="order-list-filter"]/div[1]/span[2]/select')).sendKeys('Availability');
				element(By.xpath('/html/body/app-root/app-nav/nav/ul[1]/li[2]/a/div')).click();
				var targetElexa = element(by.xpath('//*[@id="accordion"]/div[2]/div[1]/div[1]/span[1]'));
				var EC_TIMEOUT = 15000;
				browser.wait(EC.visibilityOf(targetElexa), EC_TIMEOUT).then(function () {
					expect(element(By.xpath('//*[@id="accordion"]/div[2]/div[1]/div[1]/span[1]')).getText()).toEqual('Available');
				});
			});
		} catch (err) {
			console.log("Test Exception message: " + err.message);
			logger.info("Test Exception message: " + err.message);
		}
	});
	//Order Details page, Sorting filter
	it('To verify Sorting filter', function () {
		browser.ignoreSynchronization = true
		try {
			var orderName;
			logger.info('Executing Test: To verify Creater filter and Search order');
			keywords.enterFieldValue(elements.usernameId, data.username);
			keywords.enterFieldValue(elements.passwordId, data.password);
			keywords.clickButton(elements.loginButtonId);

			var targetEle = element(by.xpath('/html/body/app-root/app-nav/nav/ul[1]/li[2]/a/div'));
			var EC_TIMEOUT = 5000;
			browser.wait(EC.visibilityOf(targetEle), EC_TIMEOUT).then(function () {
				element(By.xpath('/html/body/app-root/app-nav/nav/ul[1]/li[2]/a/div')).click();
			});

			var targetElex = element(by.xpath('//*[@id="accordion"]/div[1]/app-order-filter/span/a/img'));
			var EC_TIMEOUT = 5000;
			browser.wait(EC.visibilityOf(targetElex), EC_TIMEOUT).then(function () {
				element(By.xpath('//*[@id="accordion"]/div[1]/app-order-filter/span/a/img')).click();
				element(By.xpath('//*[@id="order-list-filter"]/div[2]/span[2]/select')).sendKeys('All');
				element(By.xpath('/html/body/app-root/app-nav/nav/ul[1]/li[2]/a/div')).click();

			});
		} catch (err) {
			console.log("Test Exception message: " + err.message);
			logger.info("Test Exception message: " + err.message);
		}
	});
});

