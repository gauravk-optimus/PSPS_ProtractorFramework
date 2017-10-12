var login_page = function(){
	this.enterFieldValue = function(object, value){
		element(by.id(object)).sendKeys(value);
	};
		
	this.clickContinueButton = function(object){
		element(by.buttonText(object)).click();
	};
};
module.exports= new login_page();