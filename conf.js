var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
  dest: 'Reports',
  filename: 'my-report.html'
});

exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['specs/dashboard_spec.js'],

  capabilities: {
    browserName: 'chrome'
  },
  // Setup the report before any tests start
   beforeLaunch: function() {
      return new Promise(function(resolve){
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
        reporter.afterLaunch(resolve.bind(this, exitCode));
    });
  }
} 