var keywords = function(){
	this.enterFieldValue = function(object, value){
		element(by.id(object)).sendKeys(value);
	};
		
	this.clickButton = function(object){
		element(by.buttonText(object)).click();
	};
	this.verifyText = function(object, value){
	
		expect(object.getText()).toEqual(value);
	};
	this.clickButtonByXpath = function(object){
		element(by.xpath(object)).click();
	}
};
module.exports= new keywords();