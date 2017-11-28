var data = function(){
    //Login page
    var username;
    this.username = 'SIMGROUP\\Optimus';
    var password;
    this.password = 'Newuser1';    	
    var wrongPassword;
    this.wrongPassword = 'Newuser2';    	
    var loginError;
    this.loginError = 'Please enter valid username and password!';   
    
    //Dashboard page
    var loggedInuser;
    this.loggedInuser = 'OPTIMUS INFORMATION'; 
    var columnName;
    this.columnName = 'New Columns'; 
    var columnSearch;
    this.columnSearch = 'New Columns'; 

    //Picklist Details Page
    var OrderLinkText;
    this.OrderLinkText = 'Orders';
    
    //Timeout
    var EC_TIMEOUT;
    this.EC_TIMEOUT = 5000;
    var EC_TIMEOUT_BIG;
    this.EC_TIMEOUT_BIG = 15000;

};
module.exports = new data();