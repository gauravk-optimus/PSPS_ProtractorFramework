var keywords = require('../pageTestCases/keywords.js');
var data = require('../pages/data.js');
var elements = require('../pageElements/elements.js');
	
describe('To test login', function() {	
	beforeEach(function(){
		browser.get('http://172.16.2.47:4200/login');
		browser.driver.manage().window().maximize();
	});	
	
	it('To verify login', function(){
		keywords.enterFieldValue(elements.usernameId, data.username);
		keywords.enterFieldValue(elements.passwordId, data.password);
		keywords.clickButton(elements.loginButtonId);	
		var user= element(by.xpath(elements.userXpath));
		keywords.verifyText(user, data.loggedInuser);
		//element(by.xpath('/html/body/app-root/app-nav/nav/ul[2]/li[2]/a/div/span')).clickButton();

	});
});