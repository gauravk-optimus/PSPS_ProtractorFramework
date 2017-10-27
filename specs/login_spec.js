//For Logging
var log4jsGen = require("../log4jsGen");
var logger = log4jsGen.getLogger();

//Reusable keywords, test data and elements locators
var keywords = require('../pageTestCases/keywords.js');
var data = require('../pages/data.js');
var elements = require('../pageElements/elements.js');
	
	//Login Page Test Suite
describe('To test login', function() {	
	logger.info('Executing suite: To test login');
	beforeEach(function(){	
		logger.info('Navigating to URL');
		browser.get('http://172.16.0.46/PSPSUIBuild/login');
		browser.driver.manage().window().maximize();
		browser.getCurrentUrl().then(function _logValue(url){
  		logger.info("Current url is " + url);
		});
   	});

	   //Login page, valid login
	it('To verify login with valid user', function(){	
		try{
			logger.info('Executing Test: To verify login with valid user');
			keywords.enterFieldValue(elements.usernameId, data.username);
			keywords.enterFieldValue(elements.passwordId, data.password);
			keywords.clickButton(elements.loginButtonId);
			var user = element(by.xpath(elements.userXpath));
			keywords.verifyText(user, data.loggedInuser);
			browser.executeScript('window.localStorage.clear();');
			//setTimeout(function(){element(by.xpath(elements.logoutBtn)).click();}, 4000);
		}catch(err){
			console.log("Test Exception message: "+err.message);
			logger.info("Test Exception message: "+err.message);
		}		
	});
/*
		//Login page, invalid login
	it('To verify login with invalid user', function(){	
		
		try {
		logger.info('Executing Test: To verify login with invalid user');
		keywords.enterFieldValue(elements.usernameId, data.username);
		keywords.enterFieldValue(elements.passwordId, data.wrongPassword);
		keywords.clickButton(elements.loginButtonId);	
		var error = element(by.xpath(elements.loginErrorXpath));
		keywords.verifyText(error, data.loginError);
		keywords.clickButtonByXpath(elements.loginErrorOKBtnXpath);	
		//var a = null;
		//var b = a.get();		
	
		}catch(err){
			console.log("Custom Exception ocuured "+err.message);
			browser.executeScript(function() {console.log('This is from  browser console.')});	
		}
	});*/
});