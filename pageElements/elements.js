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

};
module.exports = new elements();