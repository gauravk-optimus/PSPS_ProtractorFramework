var keywords = require('../pageTestCases/keywords.js');
var data = require('../pages/data.js');
var elements = require('../pageElements/elements.js');
	
describe('To test login', function() {	
	beforeEach(function(){
	
		browser.get('http://172.16.0.46/PSPSUIBuild/login');
		browser.driver.manage().window().maximize();
	});	
	
	/*it('To verify login with valid user', function(){	
		keywords.enterFieldValue(elements.usernameId, data.username);
		keywords.enterFieldValue(elements.passwordId, data.password);
		keywords.clickButton(elements.loginButtonId);
		var user= element(by.xpath(elements.userXpath));
		keywords.verifyText(user, data.loggedInuser);
		browser.executeScript('window.localStorage.clear();');
		//element(by.xpath(elements.logoutBtn)).click();
		//setTimeout(function(){element(by.xpath(elements.logoutBtn)).click();}, 4000);
	});*/

	it('To verify login with invalid user', function(){	
		keywords.enterFieldValue(elements.usernameId, data.username);
		keywords.enterFieldValue(elements.passwordId, data.wrongPassword);
		keywords.clickButton(elements.loginButtonId);	
		var error = element(by.xpath(elements.loginErrorXpath));
		keywords.verifyText(error, data.loginError);
		keywords.clickButtonByXpath(elements.loginErrorOKBtnXpath);		
	});
});