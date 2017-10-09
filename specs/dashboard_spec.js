describe('To test login', function() {
	
	beforeEach(function(){
		browser.get('http://localhost/PSPSUIFirstBuild/login');
		browser.driver.manage().window().maximize();
	});
	
	var login_page = require('../pageTestCases/login_page.js');
	var data = require('../pages/data.js');
	it('Should be able login', function(){
		login_page.enterFieldValue(data.username);
		login_page.enterFieldValue2(data.password);
		login_page.clickContinueButton();	
	});
});