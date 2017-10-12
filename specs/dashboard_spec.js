var login_page = require('../pageTestCases/login_page.js');
var data = require('../pages/data.js');
var elements = require('../pageElements/elements.js');
	
describe('To test login', function() {	
	beforeEach(function(){
		browser.get('http://localhost/PSPSUIFirstBuild/login');
		browser.driver.manage().window().maximize();
	});	
	
	it('Should be able login', function(){
		login_page.enterFieldValue(elements.usernameId, data.username);
		login_page.enterFieldValue(elements.passwordId, data.password);
		login_page.clickContinueButton(elements.loginButtonId);	
	});
});