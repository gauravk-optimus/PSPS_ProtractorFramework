var login_page = function(){
	this.enterFieldValue = function(value){
		element(by.id('userName')).sendKeys(value);
	};
	this.enterFieldValue2 = function(value){
		element(by.id('password')).sendKeys(value);
	};
	
	this.clickContinueButton = function(){
		element(by.buttonText('Login')).click();
	};
};
module.exports= new login_page();