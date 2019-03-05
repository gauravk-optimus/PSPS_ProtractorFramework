var data = function(){
    var username;
    this.username = '';
    var password;
    this.password = '';    	
    var wrongPassword;
    this.wrongPassword = '';    	
    var loggedInuser;
    this.loggedInuser = ''; 
    var loginError;
    this.loginError = 'Please enter valid username and password!';     
};
module.exports = new data();