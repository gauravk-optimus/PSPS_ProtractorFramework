var data = function(){
    var username;
    this.username = 'SIMGROUP\\Optimus';
    var password;
    this.password = 'Newuser1';    	
    var wrongPassword;
    this.wrongPassword = 'Newuser2';    	
    var loggedInuser;
    this.loggedInuser = 'OPTIMUS INFORMATION'; 
    var loginError;
    this.loginError = 'Please enter valid username and password!';     
};
module.exports = new data();