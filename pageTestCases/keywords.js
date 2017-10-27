//For Logging
var log4jsGen = require("../log4jsGen");
var logger = log4jsGen.getLogger();

//Reusable Methods
var keywords = function(){

	//Enter text in textbox
	this.enterFieldValue = function(object, value){
		try{
			logger.info("Entering text "+ value)
			element(by.id(object)).sendKeys(value);
		}catch(err){
			console("Keywords Exception message: "+err.message);
			logger.info("Keywords Exception message: "+err.message);
		}
	};		

	//Click button using Name
	this.clickButton = function(object){
		try{
			logger.info("Clicking on button")
			element(by.buttonText(object)).click();
		}catch(err){
			console("Keywords Exception message: "+err.message);
			logger.info("Keywords Exception message: "+err.message);
		}
	};

	//Verify the text at element
	this.verifyText = function(object, value){
		try{
			logger.info("Verifying text "+ value)
			expect(object.getText()).toEqual(value);
		}catch(err){
			console("Keywords Exception message: "+err.message);
			logger.info("Keywords Exception message: "+err.message);
		}
	};

	//Click button using xpath
	this.clickButtonByXpath = function(object){
		try{
			logger.info("Entering text "+ value)
			element(by.xpath(object)).click();
		}catch(err){
			console("Keywords Exception message: "+err.message);
			logger.info("Keywords Exception message: "+err.message);
		}
	};
};
module.exports= new keywords();