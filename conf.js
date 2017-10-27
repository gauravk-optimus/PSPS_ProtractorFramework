var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
  dest: 'Reports',
  filename: 'my-report.html'
});

exports.config = {
  //allScriptsTimeout: 15000,
  framework: 'jasmine',
  restartBrowserAfterTests: true,
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['specs/login_spec.js'],

 

  // Setup the report before any tests start
   beforeLaunch: function() {
      return new Promise(function(resolve){
        console.log('resolve');
      
        reporter.beforeLaunch(resolve);
      });
   },

   // Assign the test reporter to each running instance
   onPrepare: function() {
      jasmine.getEnv().addReporter(reporter);
      
   },

   // Close the report after all tests finish
   afterLaunch: function(exitCode) {
      return new Promise(function(resolve){
         console.log('resolve');
    
        reporter.afterLaunch(resolve.bind(this, exitCode));
    });
  }
} 