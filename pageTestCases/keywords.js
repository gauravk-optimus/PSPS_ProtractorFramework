//For Logging
var log4jsGen = require("../log4jsGen");
var logger = log4jsGen.getLogger();
var EC=protractor.ExpectedConditions;

//Reusable Methods
var keywords = function(){

	//Enter text in textbox
	this.enterFieldValue = function(object, value){
		try{
			logger.info("Entering text "+ value)
			element(by.id(object)).sendKeys(value);
		}catch(err){
			//console("Keywords Exception message: "+err.message);
			logger.info("Keywords Exception message: "+err.message);
		}
	};		

	//Click button using Name
	this.clickButton = function(object){
		try{
			logger.info("Clicking on button")
			element(by.buttonText(object)).click();
		}catch(err){
			//console("Keywords Exception message: "+err.message);
			logger.info("Keywords Exception message: "+err.message);
		}
	};

	//Verify the text at element
	this.verifyText = function(object, value){
		try{
			logger.info("Verifying text "+ value)
			expect(object.getText()).toEqual(value);
		}catch(err){
			//console("Keywords Exception message: "+err.message);
			logger.info("Keywords Exception message: "+err.message);
		}
	};

	//Click button using xpath
	this.clickButtonByXpath = function(object){
		try{
			logger.info("Clicking on button");
			element(by.xpath(object)).click();
		}catch(err){
			//console("Keywords Exception message: "+err.message);
			logger.info("Keywords Exception message: "+err.message);
		}
	};

	//Click any element after Waiting for any element to appear
	this.waitElementAndClickByXpath = function(waitForObject, clickOnObject, timeout){
		try{
			logger.info("Waiting for "+ waitForObject)
			var targetEleToWait = element(by.xpath(waitForObject));
			var targetEleToClick = element(by.xpath(clickOnObject));
			browser.wait(EC.visibilityOf(targetEleToWait), timeout).then(function(){
				targetEleToClick.click();
				logger.info("clicked the button successfully");
			});	
		}catch(err){
			//console("Keywords Exception message: "+err.message);
			logger.info("Keywords Exception message: "+err.message);
		}
	};
	
	//Enter text in textbox
	this.enterFieldValueByXpath = function(object, value){
		try{
			logger.info("Entering text "+ value)
			element(by.xpath(object)).sendKeys(value);
		}catch(err){
			//console("Keywords Exception message: "+err.message);
			logger.info("Keywords Exception message: "+err.message);
		}
	};		

	//Click any element after Waiting for any element to appear
	this.waitElementAndVerifyTextByXpath = function(waitForObject, value, timeout){
		try{
			logger.info("Waiting for element");
			var targetEleToWait = element(by.xpath(waitForObject));			
			browser.wait(EC.visibilityOf(targetEleToWait), timeout).then(function(){
				expect(targetEleToWait.getText()).toEqual(value);
				logger.info("Expected and Actual values matched");
			});	
		}catch(err){
			//console("Keywords Exception message: "+err.message);
			logger.info("Keywords Exception message: "+err.message);
		}
	};
};
module.exports= new keywords();