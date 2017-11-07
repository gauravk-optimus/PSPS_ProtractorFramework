var app = angular.module('reportingApp', []);

app.controller('ScreenshotReportController', function ($scope) {
    $scope.searchSettings = {
        description: '',
        passed: true,
        failed: true,
        pending: true,
        withLog: true,
    };

    $scope.inlineScreenshots = false;
    this.showSmartStackTraceHighlight = true;

    this.chooseAllTypes = function () {
        $scope.searchSettings.passed = true;
        $scope.searchSettings.failed = true;
        $scope.searchSettings.pending = true;
        $scope.searchSettings.withLog = true;
    };

    this.getParent = function (str) {
        var arr = str.split('|');
        str = "";
        for (var i = arr.length - 2; i > 0; i--) {
            str += arr[i] + " > ";
        }
        return str.slice(0, -3);
    };

    this.specLevel = function (str) {
        var arr = str.split('|');
        str = "";
        if (arr.length < 3) {
            return true;
        }
        return false;
    };

    this.getSpec = function (str) {
        return getSpec(str);
    };


    this.getShortDescription = function (str) {
        return str.split('|')[0];
    };


    this.nToBr = function (str) {
        return str.replace(/(?:\r\n|\r|\n)/g, '<br />');
    };


    this.convertTimestamp = function (timestamp) {
        var d = new Date(timestamp),
            yyyy = d.getFullYear(),
            mm = ('0' + (d.getMonth() + 1)).slice(-2),
            dd = ('0' + d.getDate()).slice(-2),
            hh = d.getHours(),
            h = hh,
            min = ('0' + d.getMinutes()).slice(-2),
            ampm = 'AM',
            time;

        if (hh > 12) {
            h = hh - 12;
            ampm = 'PM';
        } else if (hh === 12) {
            h = 12;
            ampm = 'PM';
        } else if (hh == 0) {
            h = 12;
        }

        // ie: 2013-02-18, 8:35 AM
        time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;

        return time;
    };


    this.round = function (number, roundVal) {
        return (parseFloat(number)/1000).toFixed(roundVal);
    };


    this.passCount = function () {
        var passCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.passed) {passCount++};
        }
        return passCount;
    };


    this.pendingCount = function () {
        var pendingCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.pending) {pendingCount++};
        }
        return pendingCount;
    };


    this.failCount = function () {
        var failCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (!result.passed && !result.pending) {failCount++}
        }
        return failCount;
    };

    this.applySmartHighlight = function (line) {
        if (this.showSmartStackTraceHighlight) {
            if (line.indexOf('node_modules') > -1) {
                return 'greyout';
            }
            if (line.indexOf('  at ') === -1) {
                return '';
            }

            return 'highlight';
        }
        return true;
    };


    this.results =[
    {
        "description": "To verify login with valid user|To test login",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "61.0.3163.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1509363433882,
                "type": ""
            }
        ],
        "screenShotFile": "images\\002700bc-00f6-00d7-0085-00f6005b00da.png",
        "duration": 8520
    },
    {
        "description": "To verify login with valid user|To test login",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "61.0.3163.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1509363860943,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00450014-0081-00b2-0023-0095000600f1.png",
        "duration": 8017
    },
    {
        "description": "To verify login with valid user|To test login",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "61.0.3163.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1509427428649,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00df001a-00dd-005d-00dc-005600a0003c.png",
        "duration": 6669
    },
    {
        "description": "To verify login with valid user|To test login",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "61.0.3163.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1509427934392,
                "type": ""
            }
        ],
        "screenShotFile": "images\\0005005b-00ad-0029-002e-0076006d00b2.png",
        "duration": 6378
    },
    {
        "description": "To verify creating a new column|To test dashboard",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "61.0.3163.100"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1509427956805,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00d900e0-00ce-0020-0001-005500b400ee.png",
        "duration": 6217
    },
    {
        "description": "To verify creating a new column|To test dashboard",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "61.0.3163.100"
        },
        "message": "Failed: Timed out waiting for asynchronous Angular tasks to finish after 11 seconds. This may be because the current page is not an Angular application. Please see the FAQ for more details: https://github.com/angular/protractor/blob/master/docs/timeouts.md#waiting-for-angular\nWhile waiting for element with locator - Locator: By(xpath, html/body/app-root/div/app-dashboard/div/div/div[1]/div[3]/div/div[1]/h5)",
        "trace": "ScriptTimeoutError: asynchronous script timeout: result was not received in 11 seconds\n  (Session info: chrome=61.0.3163.100)\n  (Driver info: chromedriver=2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform=Windows NT 10.0.15063 x86_64)\n    at WebDriverError (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:27:5)\n    at ScriptTimeoutError (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:203:5)\n    at Object.checkLegacyResponse (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:505:15)\n    at parseHttpResponse (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\http.js:509:13)\n    at doSend.then.response (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\http.js:440:13)\n    at process._tickCallback (internal/process/next_tick.js:109:7)\nFrom: Task: Protractor.waitForAngular() - Locator: By(xpath, html/body/app-root/div/app-dashboard/div/div/div[1]/div[3]/div/div[1]/h5)\n    at thenableWebDriverProxy.schedule (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:816:17)\n    at ProtractorBrowser.executeAsyncScript_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:609:24)\n    at angularAppRoot.then (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:643:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1366:14)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n    at asyncRun (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2813:27)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:676:7\nFrom: Task: <anonymous>\n    at Timeout.pollCondition [as _onTimeout] (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2101:19)\n    at ontimeout (timers.js:386:11)\n    at tryOnTimeout (timers.js:250:5)\n    at Timer.listOnTimeout (timers.js:214:5)\nFrom: Task: Element taking too long to appear in the DOM\n    at scheduleWait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2094:20)\n    at ControlFlow.wait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2408:12)\n    at thenableWebDriverProxy.wait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:943:29)\n    at run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:66:27)\n    at ProtractorBrowser.to.(anonymous function) [as wait] (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:74:12)\n    at UserContext.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:31:11)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1067:7)\n    at ControlFlow.promise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2396:12)\n    at schedulerExecute (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\nFrom: Task: Run it(\"To verify creating a new column\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2565:10)\n    at shutdownTask_.MicroTask (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2490:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:23:1)\n    at addSpecsToSuite (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:11:1)\n    at Module._compile (module.js:570:32)\n    at Object.Module._extensions..js (module.js:579:10)\n    at Module.load (module.js:487:32)\n    at tryModuleLoad (module.js:446:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1509453759070,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00ed0039-0037-00db-00fe-00eb002e00d9.png",
        "duration": 19015
    },
    {
        "description": "To verify creating a new column|To test dashboard",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "61.0.3163.100"
        },
        "message": "Failed: Timed out waiting for asynchronous Angular tasks to finish after 11 seconds. This may be because the current page is not an Angular application. Please see the FAQ for more details: https://github.com/angular/protractor/blob/master/docs/timeouts.md#waiting-for-angular\nWhile waiting for element with locator - Locator: By(xpath, html/body/app-root/div/app-dashboard/div/div/div[1]/div[3]/div/div[1]/h5)",
        "trace": "ScriptTimeoutError: asynchronous script timeout: result was not received in 11 seconds\n  (Session info: chrome=61.0.3163.100)\n  (Driver info: chromedriver=2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform=Windows NT 10.0.15063 x86_64)\n    at WebDriverError (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:27:5)\n    at ScriptTimeoutError (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:203:5)\n    at Object.checkLegacyResponse (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:505:15)\n    at parseHttpResponse (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\http.js:509:13)\n    at doSend.then.response (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\http.js:440:13)\n    at process._tickCallback (internal/process/next_tick.js:109:7)\nFrom: Task: Protractor.waitForAngular() - Locator: By(xpath, html/body/app-root/div/app-dashboard/div/div/div[1]/div[3]/div/div[1]/h5)\n    at thenableWebDriverProxy.schedule (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:816:17)\n    at ProtractorBrowser.executeAsyncScript_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:609:24)\n    at angularAppRoot.then (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:643:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1366:14)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n    at asyncRun (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2813:27)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:676:7\nFrom: Task: <anonymous>\n    at Timeout.pollCondition [as _onTimeout] (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2101:19)\n    at ontimeout (timers.js:386:11)\n    at tryOnTimeout (timers.js:250:5)\n    at Timer.listOnTimeout (timers.js:214:5)\nFrom: Task: Element taking too long to appear in the DOM\n    at scheduleWait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2094:20)\n    at ControlFlow.wait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2408:12)\n    at thenableWebDriverProxy.wait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:943:29)\n    at run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:66:27)\n    at ProtractorBrowser.to.(anonymous function) [as wait] (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:74:12)\n    at UserContext.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:31:11)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1067:7)\n    at ControlFlow.promise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2396:12)\n    at schedulerExecute (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\nFrom: Task: Run it(\"To verify creating a new column\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2565:10)\n    at shutdownTask_.MicroTask (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2490:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:23:1)\n    at addSpecsToSuite (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:11:1)\n    at Module._compile (module.js:570:32)\n    at Object.Module._extensions..js (module.js:579:10)\n    at Module.load (module.js:487:32)\n    at tryModuleLoad (module.js:446:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1509454237261,
                "type": ""
            }
        ],
        "screenShotFile": "images\\007e00b5-0077-0087-0005-00b400af00ba.png",
        "duration": 18234
    },
    {
        "description": "To verify creating a new column|To test dashboard",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "61.0.3163.100"
        },
        "message": "Failed: Timed out waiting for asynchronous Angular tasks to finish after 11 seconds. This may be because the current page is not an Angular application. Please see the FAQ for more details: https://github.com/angular/protractor/blob/master/docs/timeouts.md#waiting-for-angular\nWhile waiting for element with locator - Locator: By(xpath, html/body/app-root/div/app-dashboard/div/div/div[1]/div[3]/div/div[1]/h5)",
        "trace": "ScriptTimeoutError: asynchronous script timeout: result was not received in 11 seconds\n  (Session info: chrome=61.0.3163.100)\n  (Driver info: chromedriver=2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform=Windows NT 10.0.15063 x86_64)\n    at WebDriverError (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:27:5)\n    at ScriptTimeoutError (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:203:5)\n    at Object.checkLegacyResponse (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:505:15)\n    at parseHttpResponse (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\http.js:509:13)\n    at doSend.then.response (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\http.js:440:13)\n    at process._tickCallback (internal/process/next_tick.js:109:7)\nFrom: Task: Protractor.waitForAngular() - Locator: By(xpath, html/body/app-root/div/app-dashboard/div/div/div[1]/div[3]/div/div[1]/h5)\n    at thenableWebDriverProxy.schedule (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:816:17)\n    at ProtractorBrowser.executeAsyncScript_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:609:24)\n    at angularAppRoot.then (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:643:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1366:14)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n    at asyncRun (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2813:27)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:676:7\nFrom: Task: <anonymous>\n    at Timeout.pollCondition [as _onTimeout] (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2101:19)\n    at ontimeout (timers.js:386:11)\n    at tryOnTimeout (timers.js:250:5)\n    at Timer.listOnTimeout (timers.js:214:5)\nFrom: Task: <anonymous wait>\n    at scheduleWait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2094:20)\n    at ControlFlow.wait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2408:12)\n    at thenableWebDriverProxy.wait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:943:29)\n    at run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:66:27)\n    at ProtractorBrowser.to.(anonymous function) [as wait] (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:74:12)\n    at D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:33:12\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:947:14\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n    at asyncRun (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2860:25)\nFrom: Task: <anonymous>\n    at pollCondition (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2101:19)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2097:7\n    at new ManagedPromise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1067:7)\n    at ControlFlow.promise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2396:12)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2096:22\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n    at asyncRun (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2813:27)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:676:7\n    at process._tickCallback (internal/process/next_tick.js:109:7)\nFrom: Task: <anonymous wait>\n    at scheduleWait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2094:20)\n    at ControlFlow.wait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2408:12)\n    at thenableWebDriverProxy.wait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:943:29)\n    at UserContext.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:32:18)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1067:7)\n    at ControlFlow.promise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2396:12)\n    at schedulerExecute (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\nFrom: Task: Run it(\"To verify creating a new column\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2565:10)\n    at shutdownTask_.MicroTask (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2490:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:23:1)\n    at addSpecsToSuite (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:11:1)\n    at Module._compile (module.js:570:32)\n    at Object.Module._extensions..js (module.js:579:10)\n    at Module.load (module.js:487:32)\n    at tryModuleLoad (module.js:446:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1509455113136,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00f200aa-00fc-0061-00fb-006c00f200bf.png",
        "duration": 18624
    },
    {
        "description": "To verify creating a new column|To test dashboard",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "61.0.3163.100"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1509455396228,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00b300da-003d-006b-0066-009c00e400da.png",
        "duration": 7250
    },
    {
        "description": "To verify creating a new column|To test dashboard",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "61.0.3163.100"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1509698126560,
                "type": ""
            }
        ],
        "screenShotFile": "images\\004c0060-0066-0028-00aa-009300cb0010.png",
        "duration": 6781
    },
    {
        "description": "To verify creating a new column|To test dashboard",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "61.0.3163.100"
        },
        "message": "Failed: element not visible\n  (Session info: chrome=61.0.3163.100)\n  (Driver info: chromedriver=2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform=Windows NT 10.0.15063 x86_64)",
        "trace": "ElementNotVisibleError: element not visible\n  (Session info: chrome=61.0.3163.100)\n  (Driver info: chromedriver=2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform=Windows NT 10.0.15063 x86_64)\n    at WebDriverError (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:27:5)\n    at ElementNotVisibleError (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:53:5)\n    at Object.checkLegacyResponse (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:505:15)\n    at parseHttpResponse (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\http.js:509:13)\n    at doSend.then.response (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\http.js:440:13)\n    at process._tickCallback (internal/process/next_tick.js:109:7)\nFrom: Task: WebElement.click()\n    at thenableWebDriverProxy.schedule (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:816:17)\n    at WebElement.schedule_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:1921:25)\n    at WebElement.click (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:2002:17)\n    at actionFn (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\element.ts:94:34)\n    at Array.map (native)\n    at actionResults.getWebElements.then (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\element.ts:484:67)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1366:14)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n    at asyncRun (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2813:27)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\element.ts:482:23)\n    at ElementArrayFinder.(anonymous function) [as click] (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\element.ts:96:21)\n    at ElementFinder.(anonymous function) [as click] (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\element.ts:873:14)\n    at UserContext.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:36:122)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1067:7)\n    at ControlFlow.promise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2396:12)\n    at schedulerExecute (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\nFrom: Task: Run it(\"To verify creating a new column\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2565:10)\n    at shutdownTask_.MicroTask (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2490:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:29:1)\n    at addSpecsToSuite (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:16:1)\n    at Module._compile (module.js:570:32)\n    at Object.Module._extensions..js (module.js:579:10)\n    at Module.load (module.js:487:32)\n    at tryModuleLoad (module.js:446:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1509704478144,
                "type": ""
            }
        ],
        "screenShotFile": "images\\0063005f-006e-004d-0096-005800e300ed.png",
        "duration": 7601
    },
    {
        "description": "To verify creating a new column|To test dashboard",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "61.0.3163.100"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1509704536756,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00fb00a4-0096-0031-000e-004500000028.png",
        "duration": 6661
    },
    {
        "description": "To verify creating a new column|To test dashboard",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "61.0.3163.100"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1509945678885,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00a700b0-0032-0091-0034-00ae00ef006c.png",
        "duration": 6641
    },
    {
        "description": "To verify creating a new column|To test dashboard",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "61.0.3163.100"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1509945862132,
                "type": ""
            }
        ],
        "screenShotFile": "images\\001b003b-005d-0013-0060-003a007300ff.png",
        "duration": 6965
    },
    {
        "description": "To verify creating a new column|To test dashboard",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "61.0.3163.100"
        },
        "message": "Failed: Timed out waiting for asynchronous Angular tasks to finish after 11 seconds. This may be because the current page is not an Angular application. Please see the FAQ for more details: https://github.com/angular/protractor/blob/master/docs/timeouts.md#waiting-for-angular\nWhile waiting for element with locator - Locator: By(xpath, html/body/app-root/div/app-dashboard/div/div/div[2]/div[1]/div/app-dashboard-filter/span/span/img)",
        "trace": "ScriptTimeoutError: asynchronous script timeout: result was not received in 11 seconds\n  (Session info: chrome=61.0.3163.100)\n  (Driver info: chromedriver=2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform=Windows NT 10.0.15063 x86_64)\n    at WebDriverError (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:27:5)\n    at ScriptTimeoutError (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:203:5)\n    at Object.checkLegacyResponse (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:505:15)\n    at parseHttpResponse (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\http.js:509:13)\n    at doSend.then.response (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\http.js:440:13)\n    at process._tickCallback (internal/process/next_tick.js:109:7)\nFrom: Task: Protractor.waitForAngular() - Locator: By(xpath, html/body/app-root/div/app-dashboard/div/div/div[2]/div[1]/div/app-dashboard-filter/span/span/img)\n    at thenableWebDriverProxy.schedule (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:816:17)\n    at ProtractorBrowser.executeAsyncScript_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:609:24)\n    at angularAppRoot.then (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:643:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1366:14)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n    at asyncRun (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2813:27)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:676:7\n    at process._tickCallback (internal/process/next_tick.js:109:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\element.ts:482:23)\n    at ElementArrayFinder.(anonymous function) [as click] (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\element.ts:96:21)\n    at ElementFinder.(anonymous function) [as click] (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\element.ts:873:14)\n    at UserContext.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:34:122)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1067:7)\n    at ControlFlow.promise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2396:12)\n    at schedulerExecute (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\nFrom: Task: Run it(\"To verify creating a new column\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2565:10)\n    at shutdownTask_.MicroTask (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2490:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:25:1)\n    at addSpecsToSuite (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:13:1)\n    at Module._compile (module.js:570:32)\n    at Object.Module._extensions..js (module.js:579:10)\n    at Module.load (module.js:487:32)\n    at tryModuleLoad (module.js:446:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1509946089526,
                "type": ""
            }
        ],
        "screenShotFile": "images\\003d007c-00a9-00ec-00a1-00f900cc0040.png",
        "duration": 17622
    },
    {
        "description": "To verify creating a new column|To test dashboard",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "61.0.3163.100"
        },
        "message": "Failed: Timed out waiting for asynchronous Angular tasks to finish after 11 seconds. This may be because the current page is not an Angular application. Please see the FAQ for more details: https://github.com/angular/protractor/blob/master/docs/timeouts.md#waiting-for-angular\nWhile waiting for element with locator - Locator: By(xpath, html/body/app-root/div/app-dashboard/div/div/div[2]/div[1]/div/app-dashboard-filter/span/span/img)",
        "trace": "ScriptTimeoutError: asynchronous script timeout: result was not received in 11 seconds\n  (Session info: chrome=61.0.3163.100)\n  (Driver info: chromedriver=2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform=Windows NT 10.0.15063 x86_64)\n    at WebDriverError (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:27:5)\n    at ScriptTimeoutError (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:203:5)\n    at Object.checkLegacyResponse (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:505:15)\n    at parseHttpResponse (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\http.js:509:13)\n    at doSend.then.response (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\http.js:440:13)\n    at process._tickCallback (internal/process/next_tick.js:109:7)\nFrom: Task: Protractor.waitForAngular() - Locator: By(xpath, html/body/app-root/div/app-dashboard/div/div/div[2]/div[1]/div/app-dashboard-filter/span/span/img)\n    at thenableWebDriverProxy.schedule (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:816:17)\n    at ProtractorBrowser.executeAsyncScript_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:609:24)\n    at angularAppRoot.then (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:643:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1366:14)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n    at asyncRun (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2813:27)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:676:7\n    at process._tickCallback (internal/process/next_tick.js:109:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\element.ts:482:23)\n    at ElementArrayFinder.(anonymous function) [as click] (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\element.ts:96:21)\n    at ElementFinder.(anonymous function) [as click] (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\element.ts:873:14)\n    at UserContext.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:34:122)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1067:7)\n    at ControlFlow.promise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2396:12)\n    at schedulerExecute (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\nFrom: Task: Run it(\"To verify creating a new column\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2565:10)\n    at shutdownTask_.MicroTask (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2490:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:25:1)\n    at addSpecsToSuite (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:13:1)\n    at Module._compile (module.js:570:32)\n    at Object.Module._extensions..js (module.js:579:10)\n    at Module.load (module.js:487:32)\n    at tryModuleLoad (module.js:446:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1509947258532,
                "type": ""
            }
        ],
        "screenShotFile": "images\\006d00d0-0054-00bb-0032-006a00460009.png",
        "duration": 17514
    },
    {
        "description": "To verify creating a new column|To test dashboard",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "61.0.3163.100"
        },
        "message": "Expected true to be false.",
        "trace": "Error: Failed expectation\n    at UserContext.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:33:142)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1067:7)\n    at ControlFlow.promise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2396:12)\n    at schedulerExecute (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n    at asyncRun (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2860:25)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:676:7",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1509947302794,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00bf0041-0044-0024-0001-009f00e800ee.png",
        "duration": 17390
    },
    {
        "description": "To verify creating a new column|To test dashboard",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "61.0.3163.100"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1509948425650,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00e20045-00d0-00f6-00f4-00ad0033007e.png",
        "duration": 6933
    },
    {
        "description": "To verify creating a new column|To test dashboard",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "61.0.3163.100"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1509948447281,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00bc0083-00c0-0030-0011-004f00b200c0.png",
        "duration": 7230
    },
    {
        "description": "To verify creating a new column|To test dashboard",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "61.0.3163.100"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1509948631573,
                "type": ""
            }
        ],
        "screenShotFile": "images\\001d00e4-001d-0012-009a-004d00aa006d.png",
        "duration": 6502
    },
    {
        "description": "To verify creating a new column|To test dashboard",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "61.0.3163.100"
        },
        "message": "Failed: Timed out waiting for asynchronous Angular tasks to finish after 11 seconds. This may be because the current page is not an Angular application. Please see the FAQ for more details: https://github.com/angular/protractor/blob/master/docs/timeouts.md#waiting-for-angular\nWhile waiting for element with locator - Locator: By(xpath, html/body/app-root/div/app-dashboard/div/div/div[2]/div[1]/div/app-dashboard-filter/span/span/img)",
        "trace": "ScriptTimeoutError: asynchronous script timeout: result was not received in 11 seconds\n  (Session info: chrome=61.0.3163.100)\n  (Driver info: chromedriver=2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform=Windows NT 10.0.15063 x86_64)\n    at WebDriverError (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:27:5)\n    at ScriptTimeoutError (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:203:5)\n    at Object.checkLegacyResponse (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:505:15)\n    at parseHttpResponse (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\http.js:509:13)\n    at doSend.then.response (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\http.js:440:13)\n    at process._tickCallback (internal/process/next_tick.js:109:7)\nFrom: Task: Protractor.waitForAngular() - Locator: By(xpath, html/body/app-root/div/app-dashboard/div/div/div[2]/div[1]/div/app-dashboard-filter/span/span/img)\n    at thenableWebDriverProxy.schedule (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:816:17)\n    at ProtractorBrowser.executeAsyncScript_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:609:24)\n    at angularAppRoot.then (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:643:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1366:14)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n    at asyncRun (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2813:27)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:676:7Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\element.ts:482:23)\n    at ElementArrayFinder.(anonymous function) [as click] (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\element.ts:96:21)\n    at ElementFinder.(anonymous function) [as click] (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\element.ts:873:14)\n    at UserContext.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:35:122)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1067:7)\n    at ControlFlow.promise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2396:12)\n    at schedulerExecute (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\nFrom: Task: Run it(\"To verify creating a new column\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2565:10)\n    at shutdownTask_.MicroTask (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2490:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:26:1)\n    at addSpecsToSuite (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:13:1)\n    at Module._compile (module.js:570:32)\n    at Object.Module._extensions..js (module.js:579:10)\n    at Module.load (module.js:487:32)\n    at tryModuleLoad (module.js:446:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1509968062818,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00e700df-0007-00dd-009b-00620007000b.png",
        "duration": 27598
    },
    {
        "description": "To verify creating a new column|To test dashboard",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "61.0.3163.100"
        },
        "message": "Failed: Timed out waiting for asynchronous Angular tasks to finish after 11 seconds. This may be because the current page is not an Angular application. Please see the FAQ for more details: https://github.com/angular/protractor/blob/master/docs/timeouts.md#waiting-for-angular\nWhile waiting for element with locator - Locator: By(xpath, //*[@id=\"name\"])",
        "trace": "ScriptTimeoutError: asynchronous script timeout: result was not received in 11 seconds\n  (Session info: chrome=61.0.3163.100)\n  (Driver info: chromedriver=2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform=Windows NT 10.0.15063 x86_64)\n    at WebDriverError (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:27:5)\n    at ScriptTimeoutError (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:203:5)\n    at Object.checkLegacyResponse (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:505:15)\n    at parseHttpResponse (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\http.js:509:13)\n    at doSend.then.response (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\http.js:440:13)\n    at process._tickCallback (internal/process/next_tick.js:109:7)\nFrom: Task: Protractor.waitForAngular() - Locator: By(xpath, //*[@id=\"name\"])\n    at thenableWebDriverProxy.schedule (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:816:17)\n    at ProtractorBrowser.executeAsyncScript_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:609:24)\n    at angularAppRoot.then (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:643:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1366:14)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n    at asyncRun (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2813:27)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:676:7\n    at process._tickCallback (internal/process/next_tick.js:109:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\element.ts:482:23)\n    at ElementArrayFinder.(anonymous function) [as sendKeys] (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\element.ts:96:21)\n    at ElementFinder.(anonymous function) [as sendKeys] (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\element.ts:873:14)\n    at UserContext.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:35:40)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1067:7)\n    at ControlFlow.promise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2396:12)\n    at schedulerExecute (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\nFrom: Task: Run it(\"To verify creating a new column\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2565:10)\n    at shutdownTask_.MicroTask (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2490:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:25:1)\n    at addSpecsToSuite (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:13:1)\n    at Module._compile (module.js:570:32)\n    at Object.Module._extensions..js (module.js:579:10)\n    at Module.load (module.js:487:32)\n    at tryModuleLoad (module.js:446:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1509972142637,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00330035-00d6-004d-003f-00e1000200af.png",
        "duration": 18127
    },
    {
        "description": "To verify creating a new column|To test dashboard",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "61.0.3163.100"
        },
        "message": "Failed: Timed out waiting for asynchronous Angular tasks to finish after 11 seconds. This may be because the current page is not an Angular application. Please see the FAQ for more details: https://github.com/angular/protractor/blob/master/docs/timeouts.md#waiting-for-angular\nWhile waiting for element with locator - Locator: By(xpath, /html/body/app-root/div/app-dashboard/div/div/div[1]/div[3]/div/div[1]/h5)",
        "trace": "ScriptTimeoutError: asynchronous script timeout: result was not received in 11 seconds\n  (Session info: chrome=61.0.3163.100)\n  (Driver info: chromedriver=2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform=Windows NT 10.0.15063 x86_64)\n    at WebDriverError (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:27:5)\n    at ScriptTimeoutError (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:203:5)\n    at Object.checkLegacyResponse (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:505:15)\n    at parseHttpResponse (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\http.js:509:13)\n    at doSend.then.response (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\http.js:440:13)\n    at process._tickCallback (internal/process/next_tick.js:109:7)\nFrom: Task: Protractor.waitForAngular() - Locator: By(xpath, /html/body/app-root/div/app-dashboard/div/div/div[1]/div[3]/div/div[1]/h5)\n    at thenableWebDriverProxy.schedule (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:816:17)\n    at ProtractorBrowser.executeAsyncScript_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:609:24)\n    at angularAppRoot.then (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:643:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1366:14)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n    at asyncRun (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2813:27)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:676:7\nFrom: Task: <anonymous>\n    at Timeout.pollCondition [as _onTimeout] (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2101:19)\n    at ontimeout (timers.js:386:11)\n    at tryOnTimeout (timers.js:250:5)\n    at Timer.listOnTimeout (timers.js:214:5)\nFrom: Task: <anonymous wait>\n    at scheduleWait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2094:20)\n    at ControlFlow.wait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2408:12)\n    at thenableWebDriverProxy.wait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:943:29)\n    at run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:66:27)\n    at ProtractorBrowser.to.(anonymous function) [as wait] (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:74:12)\n    at UserContext.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:38:11)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1067:7)\n    at ControlFlow.promise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2396:12)\n    at schedulerExecute (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\nFrom: Task: Run it(\"To verify creating a new column\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2565:10)\n    at shutdownTask_.MicroTask (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2490:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:26:1)\n    at addSpecsToSuite (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:14:1)\n    at Module._compile (module.js:570:32)\n    at Object.Module._extensions..js (module.js:579:10)\n    at Module.load (module.js:487:32)\n    at tryModuleLoad (module.js:446:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1510030061436,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00bd001e-009a-000f-00c2-00ad00ee0089.png",
        "duration": 18093
    },
    {
        "description": "To verify creating a new column|To test dashboard",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "61.0.3163.100"
        },
        "message": "Failed: Timed out waiting for asynchronous Angular tasks to finish after 11 seconds. This may be because the current page is not an Angular application. Please see the FAQ for more details: https://github.com/angular/protractor/blob/master/docs/timeouts.md#waiting-for-angular\nWhile waiting for element with locator - Locator: By(xpath, /html/body/app-root/div/app-dashboard/div/div/div[1]/div[3]/div/div[1]/h5)",
        "trace": "ScriptTimeoutError: asynchronous script timeout: result was not received in 11 seconds\n  (Session info: chrome=61.0.3163.100)\n  (Driver info: chromedriver=2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform=Windows NT 10.0.15063 x86_64)\n    at WebDriverError (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:27:5)\n    at ScriptTimeoutError (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:203:5)\n    at Object.checkLegacyResponse (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:505:15)\n    at parseHttpResponse (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\http.js:509:13)\n    at doSend.then.response (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\http.js:440:13)\n    at process._tickCallback (internal/process/next_tick.js:109:7)\nFrom: Task: Protractor.waitForAngular() - Locator: By(xpath, /html/body/app-root/div/app-dashboard/div/div/div[1]/div[3]/div/div[1]/h5)\n    at thenableWebDriverProxy.schedule (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:816:17)\n    at ProtractorBrowser.executeAsyncScript_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:609:24)\n    at angularAppRoot.then (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:643:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1366:14)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n    at asyncRun (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2813:27)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:676:7\nFrom: Task: <anonymous>\n    at Timeout.pollCondition [as _onTimeout] (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2101:19)\n    at ontimeout (timers.js:386:11)\n    at tryOnTimeout (timers.js:250:5)\n    at Timer.listOnTimeout (timers.js:214:5)\nFrom: Task: <anonymous wait>\n    at scheduleWait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2094:20)\n    at ControlFlow.wait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2408:12)\n    at thenableWebDriverProxy.wait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:943:29)\n    at run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:66:27)\n    at ProtractorBrowser.to.(anonymous function) [as wait] (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:74:12)\n    at UserContext.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:38:11)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1067:7)\n    at ControlFlow.promise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2396:12)\n    at schedulerExecute (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\nFrom: Task: Run it(\"To verify creating a new column\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2565:10)\n    at shutdownTask_.MicroTask (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2490:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:26:1)\n    at addSpecsToSuite (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:14:1)\n    at Module._compile (module.js:570:32)\n    at Object.Module._extensions..js (module.js:579:10)\n    at Module.load (module.js:487:32)\n    at tryModuleLoad (module.js:446:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1510030843809,
                "type": ""
            }
        ],
        "screenShotFile": "images\\005200d2-0095-00af-00f7-001c000d0052.png",
        "duration": 17940
    },
    {
        "description": "To verify creating a new column|To test dashboard",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "61.0.3163.100"
        },
        "message": "Failed: Timed out waiting for asynchronous Angular tasks to finish after 15 seconds. This may be because the current page is not an Angular application. Please see the FAQ for more details: https://github.com/angular/protractor/blob/master/docs/timeouts.md#waiting-for-angular\nWhile waiting for element with locator - Locator: By(xpath, /html/body/app-root/div/app-dashboard/div/div/div[1]/div[3]/div/div[1]/h5)",
        "trace": "ScriptTimeoutError: asynchronous script timeout: result was not received in 15 seconds\n  (Session info: chrome=61.0.3163.100)\n  (Driver info: chromedriver=2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform=Windows NT 10.0.15063 x86_64)\n    at WebDriverError (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:27:5)\n    at ScriptTimeoutError (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:203:5)\n    at Object.checkLegacyResponse (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:505:15)\n    at parseHttpResponse (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\http.js:509:13)\n    at doSend.then.response (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\http.js:440:13)\n    at process._tickCallback (internal/process/next_tick.js:109:7)\nFrom: Task: Protractor.waitForAngular() - Locator: By(xpath, /html/body/app-root/div/app-dashboard/div/div/div[1]/div[3]/div/div[1]/h5)\n    at thenableWebDriverProxy.schedule (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:816:17)\n    at ProtractorBrowser.executeAsyncScript_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:609:24)\n    at angularAppRoot.then (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:643:23)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1366:14)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n    at asyncRun (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2813:27)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:676:7\nFrom: Task: <anonymous>\n    at Timeout.pollCondition [as _onTimeout] (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2101:19)\n    at ontimeout (timers.js:386:11)\n    at tryOnTimeout (timers.js:250:5)\n    at Timer.listOnTimeout (timers.js:214:5)\nFrom: Task: <anonymous wait>\n    at scheduleWait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2094:20)\n    at ControlFlow.wait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2408:12)\n    at thenableWebDriverProxy.wait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:943:29)\n    at run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:66:27)\n    at ProtractorBrowser.to.(anonymous function) [as wait] (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:74:12)\n    at UserContext.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:38:11)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1067:7)\n    at ControlFlow.promise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2396:12)\n    at schedulerExecute (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\nFrom: Task: Run it(\"To verify creating a new column\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2565:10)\n    at shutdownTask_.MicroTask (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2490:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:26:1)\n    at addSpecsToSuite (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:14:1)\n    at Module._compile (module.js:570:32)\n    at Object.Module._extensions..js (module.js:579:10)\n    at Module.load (module.js:487:32)\n    at tryModuleLoad (module.js:446:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1510035688198,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00fe0028-0014-0027-002a-007d008d00de.png",
        "duration": 22773
    },
    {
        "description": "To verify creating a new column|To test dashboard",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "61.0.3163.100"
        },
        "message": "Error: Timeout - Async callback was not invoked within timeout specified by jasmine.DEFAULT_TIMEOUT_INTERVAL.",
        "trace": "Error: Timeout - Async callback was not invoked within timeout specified by jasmine.DEFAULT_TIMEOUT_INTERVAL.\n    at Timeout._onTimeout (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4281:23)\n    at ontimeout (timers.js:386:11)\n    at tryOnTimeout (timers.js:250:5)\n    at Timer.listOnTimeout (timers.js:214:5)",
        "browserLogs": [],
        "screenShotFile": "images\\004700cc-0085-0070-006c-006a00be004c.png",
        "duration": 95303
    },
    {
        "description": "To verify creating a new column|To test dashboard",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "61.0.3163.100"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1510036499385,
                "type": ""
            }
        ],
        "screenShotFile": "images\\007300b0-00a3-007e-00a1-00f000e500ff.png",
        "duration": 8178
    },
    {
        "description": "To verify login with valid user|To test login",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "61.0.3163.100"
        },
        "message": "Error: Timeout - Async callback was not invoked within timeout specified by jasmine.DEFAULT_TIMEOUT_INTERVAL.",
        "trace": "Error: Timeout - Async callback was not invoked within timeout specified by jasmine.DEFAULT_TIMEOUT_INTERVAL.\n    at Timeout._onTimeout (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4281:23)\n    at ontimeout (timers.js:386:11)\n    at tryOnTimeout (timers.js:250:5)\n    at Timer.listOnTimeout (timers.js:214:5)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1510046550594,
                "type": ""
            },
            {
                "level": "SEVERE",
                "message": "http://172.16.0.46/PSPSUIBuild/api/User/Login - Failed to load resource: the server responded with a status of 500 (Internal Server Error)",
                "timestamp": 1510046594728,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00f700ae-00e0-00e7-0033-0039004300bf.png",
        "duration": 48175
    },
    {
        "description": "To verify login with valid user|To test login",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "61.0.3163.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1510046742183,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00a6003c-009a-00f1-009d-006500d2009f.png",
        "duration": 7565
    },
    {
        "description": "To verify creating a new column|To test dashboard",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "61.0.3163.100"
        },
        "message": "Failed: Wait timed out after 5007ms",
        "trace": "TimeoutError: Wait timed out after 5007ms\n    at WebDriverError (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:27:5)\n    at TimeoutError (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:238:5)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2107:17\n    at ManagedPromise.invokeCallback_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1366:14)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n    at asyncRun (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2813:27)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:676:7\n    at process._tickCallback (internal/process/next_tick.js:109:7)\nFrom: Task: <anonymous wait>\n    at scheduleWait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2094:20)\n    at ControlFlow.wait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2408:12)\n    at thenableWebDriverProxy.wait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:943:29)\n    at run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:66:27)\n    at ProtractorBrowser.to.(anonymous function) [as wait] (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:74:12)\n    at UserContext.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:38:11)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1067:7)\n    at ControlFlow.promise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2396:12)\n    at schedulerExecute (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\nFrom: Task: Run it(\"To verify creating a new column\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2565:10)\n    at shutdownTask_.MicroTask (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2490:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:25:1)\n    at addSpecsToSuite (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:13:1)\n    at Module._compile (module.js:570:32)\n    at Object.Module._extensions..js (module.js:579:10)\n    at Module.load (module.js:487:32)\n    at tryModuleLoad (module.js:446:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1510060557943,
                "type": ""
            }
        ],
        "screenShotFile": "images\\002600ce-00f1-00e3-00c9-0064001e0066.png",
        "duration": 11808
    },
    {
        "description": "To verify creating a new column|To test dashboard",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "61.0.3163.100"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1510060736200,
                "type": ""
            }
        ],
        "screenShotFile": "images\\001f0061-0026-009f-002b-0062005d0090.png",
        "duration": 11456
    },
    {
        "description": "To verify creating a new column|To test dashboard",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "61.0.3163.100"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1510060927803,
                "type": ""
            }
        ],
        "screenShotFile": "images\\000900c3-002f-0052-00ab-0069006100b5.png",
        "duration": 9841
    },
    {
        "description": "To verify creating a new column|To test dashboard",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "61.0.3163.100"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1510061553693,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00cd00df-00b7-0012-0041-00cb000f00fb.png",
        "duration": 10185
    },
    {
        "description": "To verify creating a new column|To test dashboard",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "61.0.3163.100"
        },
        "message": "Failed: unknown error: Element <span _ngcontent-tgv-15=\"\">...</span> is not clickable at point (831, 89). Other element would receive the click: <div _ngcontent-tgv-6=\"\" class=\"row c-dashboard-column-header c-dashboard-row\">...</div>\n  (Session info: chrome=61.0.3163.100)\n  (Driver info: chromedriver=2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform=Windows NT 10.0.15063 x86_64)",
        "trace": "WebDriverError: unknown error: Element <span _ngcontent-tgv-15=\"\">...</span> is not clickable at point (831, 89). Other element would receive the click: <div _ngcontent-tgv-6=\"\" class=\"row c-dashboard-column-header c-dashboard-row\">...</div>\n  (Session info: chrome=61.0.3163.100)\n  (Driver info: chromedriver=2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform=Windows NT 10.0.15063 x86_64)\n    at WebDriverError (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:27:5)\n    at Object.checkLegacyResponse (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:505:15)\n    at parseHttpResponse (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\http.js:509:13)\n    at doSend.then.response (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\http.js:440:13)\n    at process._tickCallback (internal/process/next_tick.js:109:7)\nFrom: Task: WebElement.click()\n    at thenableWebDriverProxy.schedule (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:816:17)\n    at WebElement.schedule_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:1921:25)\n    at WebElement.click (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:2002:17)\n    at actionFn (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\element.ts:94:34)\n    at Array.map (native)\n    at actionResults.getWebElements.then (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\element.ts:484:67)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1366:14)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n    at asyncRun (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2813:27)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\element.ts:482:23)\n    at ElementArrayFinder.(anonymous function) [as click] (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\element.ts:96:21)\n    at ElementFinder.(anonymous function) [as click] (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\element.ts:873:14)\n    at UserContext.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:45:121)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1067:7)\n    at ControlFlow.promise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2396:12)\n    at schedulerExecute (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\nFrom: Task: Run it(\"To verify creating a new column\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2565:10)\n    at shutdownTask_.MicroTask (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2490:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:25:1)\n    at addSpecsToSuite (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:13:1)\n    at Module._compile (module.js:570:32)\n    at Object.Module._extensions..js (module.js:579:10)\n    at Module.load (module.js:487:32)\n    at tryModuleLoad (module.js:446:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1510063351903,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00fc00ef-00da-0057-00a6-00ce005e0095.png",
        "duration": 12034
    }
];
});

app.filter('bySearchSettings', function () {
    return function (items, searchSettings) {
        var filtered = [];
        var prevItem = null;

        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.displaySpecName = false;

            countLogMessages(item);

            var hasLog = searchSettings.withLog && item.browserLogs && item.browserLogs.length > 0;
            if (searchSettings.description === '' ||
                (item.description && item.description.toLowerCase().indexOf(searchSettings.description.toLowerCase()) > -1)) {

                if (searchSettings.passed && item.passed || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    var prevItem = item;
                } else if (searchSettings.failed && !item.passed && !item.pending || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    var prevItem = item;
                } else if (searchSettings.pending && item.pending || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    var prevItem = item;
                }

            }
        }

        return filtered;
    };
});

var checkIfShouldDisplaySpecName = function (prevItem, item) {
    if (!prevItem) {
        item.displaySpecName = true;
        return;
    }

    if (getSpec(item.description) != getSpec(prevItem.description)) {
        item.displaySpecName = true;
        return;
    }
};

var getSpec = function (str) {
    var describes = str.split('|');
    return describes[describes.length-1];
};

var countLogMessages = function (item) {
    if ((!item.logWarnings || !item.logErrors) && item.browserLogs && item.browserLogs.length > 0) {
        item.logWarnings = 0;
        item.logErrors = 0;
        for (var logNumber = 0; logNumber < item.browserLogs.length; logNumber++) {
            var logEntry = item.browserLogs[logNumber];
            if (logEntry.level === 'SEVERE') {
                item.logErrors++;
            }
            if (logEntry.level === 'WARNING') {
                item.logWarnings++;
            }
        }
    }
};