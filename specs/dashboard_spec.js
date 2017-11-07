//For Logging
var log4jsGen = require("../log4jsGen");
var logger = log4jsGen.getLogger();
var EC=protractor.ExpectedConditions;
//Reusable keywords, test data and elements locators
var keywords = require('../pageTestCases/keywords.js');
var data = require('../pages/data.js');
var elements = require('../pageElements/elements.js');
	
var wait = require("wait");

//Dashboard Page Test Suite
describe('To test dashboard', function() {	
	logger.info('Executing suite: To test dashboard');
	beforeEach(function(){	
		logger.info('Navigating to URL');
		browser.get('http://172.16.0.46/PSPSUIBuild/login');
		browser.driver.manage().window().maximize();
		browser.getCurrentUrl().then(function _logValue(url){
  		logger.info("Current url is " + url);
		});
    });

//Dashboard page, create new column
it('To verify creating a new column', function(){	
	browser.ignoreSynchronization = true
	try{
		logger.info('Executing Test: To verify creating a new column');
		keywords.enterFieldValue(elements.usernameId, data.username);
		keywords.enterFieldValue(elements.passwordId, data.password);
		keywords.clickButton(elements.loginButtonId);

		//waiting for Columns to come
		var targetEle = element(by.xpath('/html/body/app-root/div/app-dashboard/div/div/div[1]/div[2]/div/div[1]/h5'));
		var EC_TIMEOUT = 15000;
		browser.wait(EC.visibilityOf(targetEle), EC_TIMEOUT).then(function(){
			element(by.xpath('html/body/app-root/div/app-dashboard/div/div/div[2]/div[1]/div/app-dashboard-filter/span/span')).click();	
		});

		//Creating new column
		element(by.xpath('//*[@id="name"]')).sendKeys("New Column");
		element(by.xpath('//*[@id="search"]')).sendKeys("New Column");
		element(by.xpath('//*[@id="filter"]/form/div[10]/button')).click();
		keywords.verifyText(element(by.xpath('/html/body/app-root/div/app-dashboard/div/div/div[1]/div[3]/div/div[1]/h5')),'New Column');
		element(by.xpath('/html/body/app-root/div/app-dashboard/div/div/div[1]/div[3]/div/div[1]/app-dashboard-filter/span')).click();
		element(by.xpath('//*[@id="filter"]/form/div[10]/button[1]')).click();
		//Removing the column
		//var colXpath = '/html/body/app-root/div/app-dashboard/div/div/div[1]/div[';		
		//var colXpathEnd = ']/div/div[1]/h5';
		//for (var i = 1; i < 6; i++) {					}
		


		browser.executeScript('window.localStorage.clear();');
	}catch(err){
		console.log("Test Exception message: "+err.message);
		logger.info("Test Exception message: "+err.message);
		}		
	});
});