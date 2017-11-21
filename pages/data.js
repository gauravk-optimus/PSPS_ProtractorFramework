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
    

};
module.exports = new data();