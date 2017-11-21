var elements = function(){
   
    //Login Page Elements
    var usernameId;
    this.usernameId = 'userName';
    var passwordId;
    this.passwordId = 'password';    
    var loginButtonId;
    this.loginButtonId = 'Login';    
    var loginErrorXpath;
    this.loginErrorXpath = '//*[@class="dialog-box dialog-box-display-active"]/div[2]/span'; 
    var loginErrorOKBtnXpath;
    this.loginErrorOKBtnXpath = '//*[@class="dialog-box dialog-box-display-active"]/div[3]/button';
       
    //Dashboard Page Elements
    var userXpath;
    this.userXpath = 'html/body/app-root/app-nav/nav/ul[2]/li[1]/a/div/span';
    var logoutBtn;
    this.logoutBtn = '/html/body/app-root/app-nav/nav/ul[2]/li[2]/a/div/span';
    var addColumnBtnXpath;
    this.addColumnBtnXpath = 'html/body/app-root/div/app-dashboard/div/div/div[2]/div[1]/div/app-dashboard-filter/span/span';
    var columnNameInputXpath;
    this.columnNameInputXpath = '//*[@id="name"]';
    var columnSearchInputXpath;
    this.columnSearchInputXpath = '//*[@id="search"]';
    var columnSaveBtnXpath;
    this.columnSaveBtnXpath = '//*[@id="filter"]/form/div[10]/button';
    var columnFilterBtnXpath;
    this.columnFilterBtnXpath = '';
    var columnRemoveBtnXpath;
    this.columnRemoveBtnXpath = '';
    var bookmarkedColumnXpath;
    this.bookmarkedColumnXpath = './/*[.="Bookmarked"]';
    var colStartXpath = new String('/html/body/app-root/div/app-dashboard/div/div/div[1]/div[');
    var colEndXpath = new String(']/div/div[1]/h5');
    
};
module.exports = new elements();