//invoking protractor reports
var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
  framework: 'jasmine',
  restartBrowserAfterTests: true,
  seleniumAddress: 'http://localhost:4444/wd/hub',
  //allScriptsTimeout: 15000,
  //spec files for all the pages
  specs: ['specs/dashboard_spec.js'],

  //browser
  capabilities: { 'browserName': 'chrome' },
  
  onPrepare: function() {

    //Screenshot reporter and store screenshots 
    jasmine.getEnv().addReporter(new HtmlReporter({
       baseDirectory: 'Reports',
       screenshotsSubfolder: 'images',
       jsonsSubfolder: 'jsons',
       docTitle: 'my reporter',
       docName: 'index.html'
    }).getJasmine2Reporter());
   }}