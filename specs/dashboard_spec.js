//For Logging
var log4jsGen = require("../log4jsGen");
var logger = log4jsGen.getLogger();

//Reusable keywords, test data and elements locators
var keywords = require('../pageTestCases/keywords.js');
var data = require('../pages/data.js');
var elements = require('../pageElements/elements.js');
	
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
	try{
		logger.info('Executing Test: To verify creating a new column');
		keywords.enterFieldValue(elements.usernameId, data.username);
		keywords.enterFieldValue(elements.passwordId, data.password);
		keywords.clickButton(elements.loginButtonId);
		element(by.xpath('html/body/app-root/div/app-dashboard/div/div/div[2]/div[1]/div/app-dashboard-filter/span/span/img')).click();



		browser.executeScript('window.localStorage.clear();');
	}catch(err){
		console.log("Test Exception message: "+err.message);
		logger.info("Test Exception message: "+err.message);
	}		
});







});