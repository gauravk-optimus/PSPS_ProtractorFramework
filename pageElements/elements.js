var elements = function(){
    var usernameId;
    this.usernameId = 'userName';
    var passwordId;
    this.passwordId = 'password';    
    var loginButtonId;
    this.loginButtonId = 'Login';    
    var userXpath;
    this.userXpath = 'html/body/app-root/app-nav/nav/ul[2]/li[1]/a/div/span';
    var logoutBtn;
    this.logoutBtn = '/html/body/app-root/app-nav/nav/ul[2]/li[2]/a/div/span';
    var loginErrorXpath;
    this.loginErrorXpath = '//*[@class="dialog-box dialog-box-display-active"]/div[2]/span'; 
    var loginErrorOKBtnXpath;
    this.loginErrorOKBtnXpath = '//*[@class="dialog-box dialog-box-display-active"]/div[3]/button';

};
module.exports = new elements();