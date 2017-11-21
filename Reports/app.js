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
        "message": "Failed: unknown error: Element <span _ngcontent-yfx-15=\"\">...</span> is not clickable at point (226, 89). Other element would receive the click: <div _ngcontent-yfx-6=\"\" class=\"row c-dashboard-column-header c-dashboard-row\">...</div>\n  (Session info: chrome=61.0.3163.100)\n  (Driver info: chromedriver=2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform=Windows NT 10.0.15063 x86_64)",
        "trace": "WebDriverError: unknown error: Element <span _ngcontent-yfx-15=\"\">...</span> is not clickable at point (226, 89). Other element would receive the click: <div _ngcontent-yfx-6=\"\" class=\"row c-dashboard-column-header c-dashboard-row\">...</div>\n  (Session info: chrome=61.0.3163.100)\n  (Driver info: chromedriver=2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform=Windows NT 10.0.15063 x86_64)\n    at WebDriverError (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:27:5)\n    at Object.checkLegacyResponse (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:505:15)\n    at parseHttpResponse (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\http.js:509:13)\n    at doSend.then.response (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\http.js:440:13)\n    at process._tickCallback (internal/process/next_tick.js:109:7)\nFrom: Task: WebElement.click()\n    at thenableWebDriverProxy.schedule (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:816:17)\n    at WebElement.schedule_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:1921:25)\n    at WebElement.click (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:2002:17)\n    at actionFn (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\element.ts:94:34)\n    at Array.map (native)\n    at actionResults.getWebElements.then (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\element.ts:484:67)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1366:14)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n    at asyncRun (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2813:27)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\element.ts:482:23)\n    at ElementArrayFinder.(anonymous function) [as click] (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\element.ts:96:21)\n    at ElementFinder.(anonymous function) [as click] (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\element.ts:873:14)\n    at UserContext.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:45:121)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1067:7)\n    at ControlFlow.promise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2396:12)\n    at schedulerExecute (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\nFrom: Task: Run it(\"To verify creating a new column\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2565:10)\n    at shutdownTask_.MicroTask (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2490:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:25:1)\n    at addSpecsToSuite (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:13:1)\n    at Module._compile (module.js:570:32)\n    at Object.Module._extensions..js (module.js:579:10)\n    at Module.load (module.js:487:32)\n    at tryModuleLoad (module.js:446:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1510116573730,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00020026-00d0-0037-001c-005e00ff0015.png",
        "duration": 13141
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
        "message": "Failed: unknown error: Element <span _ngcontent-xqs-15=\"\">...</span> is not clickable at point (105, 89). Other element would receive the click: <div _ngcontent-xqs-6=\"\" class=\"row c-dashboard-column-header c-dashboard-row\">...</div>\n  (Session info: chrome=61.0.3163.100)\n  (Driver info: chromedriver=2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform=Windows NT 10.0.15063 x86_64)",
        "trace": "WebDriverError: unknown error: Element <span _ngcontent-xqs-15=\"\">...</span> is not clickable at point (105, 89). Other element would receive the click: <div _ngcontent-xqs-6=\"\" class=\"row c-dashboard-column-header c-dashboard-row\">...</div>\n  (Session info: chrome=61.0.3163.100)\n  (Driver info: chromedriver=2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform=Windows NT 10.0.15063 x86_64)\n    at WebDriverError (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:27:5)\n    at Object.checkLegacyResponse (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:505:15)\n    at parseHttpResponse (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\http.js:509:13)\n    at doSend.then.response (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\http.js:440:13)\n    at process._tickCallback (internal/process/next_tick.js:109:7)\nFrom: Task: WebElement.click()\n    at thenableWebDriverProxy.schedule (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:816:17)\n    at WebElement.schedule_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:1921:25)\n    at WebElement.click (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:2002:17)\n    at actionFn (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\element.ts:94:34)\n    at Array.map (native)\n    at actionResults.getWebElements.then (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\element.ts:484:67)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1366:14)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n    at asyncRun (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2813:27)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\element.ts:482:23)\n    at ElementArrayFinder.(anonymous function) [as click] (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\element.ts:96:21)\n    at ElementFinder.(anonymous function) [as click] (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\element.ts:873:14)\n    at UserContext.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:45:121)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1067:7)\n    at ControlFlow.promise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2396:12)\n    at schedulerExecute (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\nFrom: Task: Run it(\"To verify creating a new column\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2565:10)\n    at shutdownTask_.MicroTask (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2490:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:25:1)\n    at addSpecsToSuite (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:13:1)\n    at Module._compile (module.js:570:32)\n    at Object.Module._extensions..js (module.js:579:10)\n    at Module.load (module.js:487:32)\n    at tryModuleLoad (module.js:446:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1510116675631,
                "type": ""
            }
        ],
        "screenShotFile": "images\\000700e0-0002-0005-004b-0079000e001f.png",
        "duration": 12558
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
        "message": "Failed: Wait timed out after 15001ms",
        "trace": "TimeoutError: Wait timed out after 15001ms\n    at WebDriverError (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:27:5)\n    at TimeoutError (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:238:5)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2107:17\n    at ManagedPromise.invokeCallback_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1366:14)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n    at asyncRun (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2813:27)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:676:7\n    at process._tickCallback (internal/process/next_tick.js:109:7)\nFrom: Task: <anonymous wait>\n    at scheduleWait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2094:20)\n    at ControlFlow.wait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2408:12)\n    at thenableWebDriverProxy.wait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:943:29)\n    at run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:66:27)\n    at ProtractorBrowser.to.(anonymous function) [as wait] (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:74:12)\n    at UserContext.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:36:11)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1067:7)\n    at ControlFlow.promise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2396:12)\n    at schedulerExecute (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\nFrom: Task: Run it(\"To verify creating a new column\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2565:10)\n    at shutdownTask_.MicroTask (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2490:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:25:1)\n    at addSpecsToSuite (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:13:1)\n    at Module._compile (module.js:570:32)\n    at Object.Module._extensions..js (module.js:579:10)\n    at Module.load (module.js:487:32)\n    at tryModuleLoad (module.js:446:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1510118463008,
                "type": ""
            }
        ],
        "screenShotFile": "images\\000c00f4-0003-006e-0012-003900da000c.png",
        "duration": 20927
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
        "message": "Expected 'Bookmarked' to equal 'New Column'.",
        "trace": "Error: Failed expectation\n    at keywords.verifyText (D:\\Automation POCs\\PSPS_ProtractorFramework\\pageTestCases\\keywords.js:34:29)\n    at D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:47:13\n    at ManagedPromise.invokeCallback_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1366:14)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n    at asyncRun (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2813:27)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:676:7\n    at process._tickCallback (internal/process/next_tick.js:109:7)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1510119388895,
                "type": ""
            }
        ],
        "screenShotFile": "images\\009f0047-00fc-006d-0025-00ea009e0085.png",
        "duration": 9546
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
                "timestamp": 1510119427943,
                "type": ""
            }
        ],
        "screenShotFile": "images\\007c00b5-004e-006d-00b8-008100920098.png",
        "duration": 7697
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
                "timestamp": 1510119573415,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00e000cb-0041-00cc-00ee-001f00c20037.png",
        "duration": 7694
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
        "message": "Failed: Wait timed out after 15002ms",
        "trace": "TimeoutError: Wait timed out after 15002ms\n    at WebDriverError (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:27:5)\n    at TimeoutError (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:238:5)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2107:17\n    at ManagedPromise.invokeCallback_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1366:14)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n    at asyncRun (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2813:27)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:676:7\n    at process._tickCallback (internal/process/next_tick.js:109:7)\nFrom: Task: <anonymous wait>\n    at scheduleWait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2094:20)\n    at ControlFlow.wait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2408:12)\n    at thenableWebDriverProxy.wait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:943:29)\n    at run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:66:27)\n    at ProtractorBrowser.to.(anonymous function) [as wait] (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:74:12)\n    at UserContext.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:37:11)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1067:7)\n    at ControlFlow.promise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2396:12)\n    at schedulerExecute (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\nFrom: Task: Run it(\"To verify creating a new column\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2565:10)\n    at shutdownTask_.MicroTask (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2490:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:25:1)\n    at addSpecsToSuite (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:13:1)\n    at Module._compile (module.js:570:32)\n    at Object.Module._extensions..js (module.js:579:10)\n    at Module.load (module.js:487:32)\n    at tryModuleLoad (module.js:446:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1510119604591,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00d6000d-0032-00b2-00e2-00730090003d.png",
        "duration": 21039
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
                "timestamp": 1510122914013,
                "type": ""
            }
        ],
        "screenShotFile": "images\\005500c3-00a1-00af-002f-0047009d001b.png",
        "duration": 7323
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
        "message": "Failed: Wait timed out after 15008ms",
        "trace": "TimeoutError: Wait timed out after 15008ms\n    at WebDriverError (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:27:5)\n    at TimeoutError (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:238:5)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2107:17\n    at ManagedPromise.invokeCallback_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1366:14)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n    at asyncRun (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2813:27)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:676:7\n    at process._tickCallback (internal/process/next_tick.js:109:7)\nFrom: Task: <anonymous wait>\n    at scheduleWait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2094:20)\n    at ControlFlow.wait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2408:12)\n    at thenableWebDriverProxy.wait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:943:29)\n    at run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:66:27)\n    at ProtractorBrowser.to.(anonymous function) [as wait] (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:74:12)\n    at UserContext.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:47:11)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1067:7)\n    at ControlFlow.promise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2396:12)\n    at schedulerExecute (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\nFrom: Task: Run it(\"To verify creating a new column\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2565:10)\n    at shutdownTask_.MicroTask (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2490:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:25:1)\n    at addSpecsToSuite (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:13:1)\n    at Module._compile (module.js:570:32)\n    at Object.Module._extensions..js (module.js:579:10)\n    at Module.load (module.js:487:32)\n    at tryModuleLoad (module.js:446:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1510122992270,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00e6005a-0081-00d6-005b-004a00a60013.png",
        "duration": 22324
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
                "timestamp": 1510123031222,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00cc00f5-0023-009f-0024-00b800cb0027.png",
        "duration": 7242
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
        "message": "Failed: Wait timed out after 15009ms",
        "trace": "TimeoutError: Wait timed out after 15009ms\n    at WebDriverError (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:27:5)\n    at TimeoutError (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:238:5)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2107:17\n    at ManagedPromise.invokeCallback_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1366:14)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n    at asyncRun (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2813:27)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:676:7\n    at process._tickCallback (internal/process/next_tick.js:109:7)\nFrom: Task: <anonymous wait>\n    at scheduleWait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2094:20)\n    at ControlFlow.wait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2408:12)\n    at thenableWebDriverProxy.wait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:943:29)\n    at run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:66:27)\n    at ProtractorBrowser.to.(anonymous function) [as wait] (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:74:12)\n    at UserContext.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:47:11)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1067:7)\n    at ControlFlow.promise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2396:12)\n    at schedulerExecute (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\nFrom: Task: Run it(\"To verify creating a new column\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2565:10)\n    at shutdownTask_.MicroTask (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2490:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:25:1)\n    at addSpecsToSuite (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:13:1)\n    at Module._compile (module.js:570:32)\n    at Object.Module._extensions..js (module.js:579:10)\n    at Module.load (module.js:487:32)\n    at tryModuleLoad (module.js:446:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1510123169760,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00730023-001d-0075-00da-003f00ad00a7.png",
        "duration": 22437
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
                "timestamp": 1510123435517,
                "type": ""
            }
        ],
        "screenShotFile": "images\\0052009b-005b-009f-0013-00a2007e003e.png",
        "duration": 7924
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
        "message": "Failed: Wait timed out after 15010ms",
        "trace": "TimeoutError: Wait timed out after 15010ms\n    at WebDriverError (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:27:5)\n    at TimeoutError (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:238:5)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2107:17\n    at ManagedPromise.invokeCallback_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1366:14)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n    at asyncRun (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2813:27)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:676:7\n    at process._tickCallback (internal/process/next_tick.js:109:7)\nFrom: Task: <anonymous wait>\n    at scheduleWait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2094:20)\n    at ControlFlow.wait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2408:12)\n    at thenableWebDriverProxy.wait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:943:29)\n    at run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:66:27)\n    at ProtractorBrowser.to.(anonymous function) [as wait] (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:74:12)\n    at UserContext.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:47:11)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1067:7)\n    at ControlFlow.promise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2396:12)\n    at schedulerExecute (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\nFrom: Task: Run it(\"To verify creating a new column\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2565:10)\n    at shutdownTask_.MicroTask (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2490:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:25:1)\n    at addSpecsToSuite (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:13:1)\n    at Module._compile (module.js:570:32)\n    at Object.Module._extensions..js (module.js:579:10)\n    at Module.load (module.js:487:32)\n    at tryModuleLoad (module.js:446:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1510123458534,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00c10083-00cc-00af-00fc-0079007e0055.png",
        "duration": 22379
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
        "message": "Failed: Wait timed out after 15009ms",
        "trace": "TimeoutError: Wait timed out after 15009ms\n    at WebDriverError (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:27:5)\n    at TimeoutError (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:238:5)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2107:17\n    at ManagedPromise.invokeCallback_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1366:14)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n    at asyncRun (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2813:27)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:676:7\n    at process._tickCallback (internal/process/next_tick.js:109:7)\nFrom: Task: <anonymous wait>\n    at scheduleWait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2094:20)\n    at ControlFlow.wait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2408:12)\n    at thenableWebDriverProxy.wait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:943:29)\n    at run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:66:27)\n    at ProtractorBrowser.to.(anonymous function) [as wait] (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:74:12)\n    at UserContext.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:50:11)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1067:7)\n    at ControlFlow.promise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2396:12)\n    at schedulerExecute (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\nFrom: Task: Run it(\"To verify creating a new column\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2565:10)\n    at shutdownTask_.MicroTask (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2490:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:25:1)\n    at addSpecsToSuite (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:13:1)\n    at Module._compile (module.js:570:32)\n    at Object.Module._extensions..js (module.js:579:10)\n    at Module.load (module.js:487:32)\n    at tryModuleLoad (module.js:446:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1510124752671,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00f10047-0054-0027-00df-007c009800b9.png",
        "duration": 21945
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
        "message": "Expected 'egy' to equal 'New Column'.",
        "trace": "Error: Failed expectation\n    at keywords.verifyText (D:\\Automation POCs\\PSPS_ProtractorFramework\\pageTestCases\\keywords.js:34:29)\n    at D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:48:13\n    at ManagedPromise.invokeCallback_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1366:14)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n    at asyncRun (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2813:27)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:676:7\n    at process._tickCallback (internal/process/next_tick.js:109:7)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1510125024690,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00110040-0014-00f7-008a-008200180034.png",
        "duration": 7543
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
        "message": "Failed: No element found using locator: By(xpath, /html/body/app-root/div/app-dashboard/div/div/div[1]/div[2]/div/div[1]/h5)",
        "trace": "NoSuchElementError: No element found using locator: By(xpath, /html/body/app-root/div/app-dashboard/div/div/div[1]/div[2]/div/div[1]/h5)\n    at WebDriverError (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:27:5)\n    at NoSuchElementError (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:168:5)\n    at elementArrayFinder.getWebElements.then (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\element.ts:851:17)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1366:14)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n    at asyncRun (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2813:27)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:676:7\n    at process._tickCallback (internal/process/next_tick.js:109:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\element.ts:482:23)\n    at ElementArrayFinder.(anonymous function) [as getText] (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\element.ts:96:21)\n    at ElementFinder.(anonymous function) [as getText] (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\element.ts:873:14)\n    at keywords.verifyText (D:\\Automation POCs\\PSPS_ProtractorFramework\\pageTestCases\\keywords.js:34:18)\n    at UserContext.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:44:12)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1067:7)\n    at ControlFlow.promise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2396:12)\n    at schedulerExecute (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\nFrom: Task: Run it(\"To verify creating a new column\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2565:10)\n    at shutdownTask_.MicroTask (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2490:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:25:1)\n    at addSpecsToSuite (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:13:1)\n    at Module._compile (module.js:570:32)\n    at Object.Module._extensions..js (module.js:579:10)\n    at Module.load (module.js:487:32)\n    at tryModuleLoad (module.js:446:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1510125104937,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00e90082-00e4-007f-0091-00ff003d0011.png",
        "duration": 6982
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
                "timestamp": 1510125378202,
                "type": ""
            }
        ],
        "screenShotFile": "images\\001800c0-00cc-00db-00d7-0044005f003a.png",
        "duration": 7124
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
        "message": "Failed: invalid argument: 'value' must be a string\n  (Session info: chrome=61.0.3163.100)\n  (Driver info: chromedriver=2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform=Windows NT 10.0.15063 x86_64)",
        "trace": "WebDriverError: invalid argument: 'value' must be a string\n  (Session info: chrome=61.0.3163.100)\n  (Driver info: chromedriver=2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform=Windows NT 10.0.15063 x86_64)\n    at WebDriverError (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:27:5)\n    at Object.checkLegacyResponse (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:505:15)\n    at parseHttpResponse (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\http.js:509:13)\n    at doSend.then.response (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\http.js:440:13)\n    at process._tickCallback (internal/process/next_tick.js:109:7)\nFrom: Task: WebDriver.findElements(By(xpath, undefined))\n    at thenableWebDriverProxy.schedule (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:816:17)\n    at thenableWebDriverProxy.findElements (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:1057:22)\n    at ptor.waitForAngular.then (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\element.ts:166:36)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1366:14)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n    at asyncRun (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2813:27)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:676:7\n    at process._tickCallback (internal/process/next_tick.js:109:7)\nFrom: Task: <anonymous>\n    at pollCondition (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2101:19)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2097:7\n    at new ManagedPromise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1067:7)\n    at ControlFlow.promise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2396:12)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2096:22\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n    at asyncRun (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2813:27)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:676:7\n    at process._tickCallback (internal/process/next_tick.js:109:7)\nFrom: Task: <anonymous wait>\n    at scheduleWait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2094:20)\n    at ControlFlow.wait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2408:12)\n    at thenableWebDriverProxy.wait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:943:29)\n    at run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:66:27)\n    at ProtractorBrowser.to.(anonymous function) [as wait] (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:74:12)\n    at keywords.waitElementAndVerifyTextByXpath (D:\\Automation POCs\\PSPS_ProtractorFramework\\pageTestCases\\keywords.js:84:12)\n    at UserContext.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:46:12)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1067:7)\n    at ControlFlow.promise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2396:12)\nFrom: Task: Run it(\"To verify creating a new column\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2565:10)\n    at shutdownTask_.MicroTask (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2490:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:25:1)\n    at addSpecsToSuite (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:13:1)\n    at Module._compile (module.js:570:32)\n    at Object.Module._extensions..js (module.js:579:10)\n    at Module.load (module.js:487:32)\n    at tryModuleLoad (module.js:446:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1510131350342,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00d70050-0078-00ac-00bd-0039002a00b9.png",
        "duration": 7091
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
        "message": "Failed: invalid argument: 'value' must be a string\n  (Session info: chrome=61.0.3163.100)\n  (Driver info: chromedriver=2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform=Windows NT 10.0.15063 x86_64)",
        "trace": "WebDriverError: invalid argument: 'value' must be a string\n  (Session info: chrome=61.0.3163.100)\n  (Driver info: chromedriver=2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform=Windows NT 10.0.15063 x86_64)\n    at WebDriverError (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:27:5)\n    at Object.checkLegacyResponse (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:505:15)\n    at parseHttpResponse (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\http.js:509:13)\n    at doSend.then.response (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\http.js:440:13)\n    at process._tickCallback (internal/process/next_tick.js:109:7)\nFrom: Task: WebDriver.findElements(By(xpath, undefined))\n    at thenableWebDriverProxy.schedule (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:816:17)\n    at thenableWebDriverProxy.findElements (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:1057:22)\n    at ptor.waitForAngular.then (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\element.ts:166:36)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1366:14)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n    at asyncRun (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2813:27)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:676:7\n    at process._tickCallback (internal/process/next_tick.js:109:7)\nFrom: Task: <anonymous>\n    at pollCondition (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2101:19)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2097:7\n    at new ManagedPromise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1067:7)\n    at ControlFlow.promise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2396:12)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2096:22\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n    at asyncRun (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2813:27)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:676:7\n    at process._tickCallback (internal/process/next_tick.js:109:7)\nFrom: Task: <anonymous wait>\n    at scheduleWait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2094:20)\n    at ControlFlow.wait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2408:12)\n    at thenableWebDriverProxy.wait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:943:29)\n    at run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:66:27)\n    at ProtractorBrowser.to.(anonymous function) [as wait] (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:74:12)\n    at keywords.waitElementAndVerifyTextByXpath (D:\\Automation POCs\\PSPS_ProtractorFramework\\pageTestCases\\keywords.js:84:12)\n    at UserContext.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:46:12)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1067:7)\n    at ControlFlow.promise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2396:12)\nFrom: Task: Run it(\"To verify creating a new column\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2565:10)\n    at shutdownTask_.MicroTask (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2490:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:25:1)\n    at addSpecsToSuite (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:13:1)\n    at Module._compile (module.js:570:32)\n    at Object.Module._extensions..js (module.js:579:10)\n    at Module.load (module.js:487:32)\n    at tryModuleLoad (module.js:446:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1510131392250,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00fa00a0-00bc-0046-0096-001800e5001e.png",
        "duration": 8133
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
        "message": "Failed: invalid argument: 'value' must be a string\n  (Session info: chrome=61.0.3163.100)\n  (Driver info: chromedriver=2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform=Windows NT 10.0.15063 x86_64)",
        "trace": "WebDriverError: invalid argument: 'value' must be a string\n  (Session info: chrome=61.0.3163.100)\n  (Driver info: chromedriver=2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform=Windows NT 10.0.15063 x86_64)\n    at WebDriverError (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:27:5)\n    at Object.checkLegacyResponse (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:505:15)\n    at parseHttpResponse (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\http.js:509:13)\n    at doSend.then.response (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\http.js:440:13)\n    at process._tickCallback (internal/process/next_tick.js:109:7)\nFrom: Task: WebDriver.findElements(By(xpath, undefined))\n    at thenableWebDriverProxy.schedule (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:816:17)\n    at thenableWebDriverProxy.findElements (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:1057:22)\n    at ptor.waitForAngular.then (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\element.ts:166:36)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1366:14)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n    at asyncRun (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2813:27)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:676:7\n    at process._tickCallback (internal/process/next_tick.js:109:7)\nFrom: Task: <anonymous>\n    at pollCondition (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2101:19)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2097:7\n    at new ManagedPromise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1067:7)\n    at ControlFlow.promise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2396:12)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2096:22\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n    at asyncRun (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2813:27)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:676:7\n    at process._tickCallback (internal/process/next_tick.js:109:7)\nFrom: Task: <anonymous wait>\n    at scheduleWait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2094:20)\n    at ControlFlow.wait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2408:12)\n    at thenableWebDriverProxy.wait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:943:29)\n    at run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:66:27)\n    at ProtractorBrowser.to.(anonymous function) [as wait] (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:74:12)\n    at keywords.waitElementAndVerifyTextByXpath (D:\\Automation POCs\\PSPS_ProtractorFramework\\pageTestCases\\keywords.js:84:12)\n    at UserContext.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:40:12)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1067:7)\n    at ControlFlow.promise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2396:12)\nFrom: Task: Run it(\"To verify creating a new column\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2565:10)\n    at shutdownTask_.MicroTask (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2490:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:25:1)\n    at addSpecsToSuite (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:13:1)\n    at Module._compile (module.js:570:32)\n    at Object.Module._extensions..js (module.js:579:10)\n    at Module.load (module.js:487:32)\n    at tryModuleLoad (module.js:446:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1510131654033,
                "type": ""
            }
        ],
        "screenShotFile": "images\\001a0095-00a0-00df-0088-002500ba0040.png",
        "duration": 7128
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
        "message": "Failed: invalid argument: 'value' must be a string\n  (Session info: chrome=61.0.3163.100)\n  (Driver info: chromedriver=2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform=Windows NT 10.0.15063 x86_64)",
        "trace": "WebDriverError: invalid argument: 'value' must be a string\n  (Session info: chrome=61.0.3163.100)\n  (Driver info: chromedriver=2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform=Windows NT 10.0.15063 x86_64)\n    at WebDriverError (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:27:5)\n    at Object.checkLegacyResponse (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:505:15)\n    at parseHttpResponse (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\http.js:509:13)\n    at doSend.then.response (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\http.js:440:13)\n    at process._tickCallback (internal/process/next_tick.js:109:7)\nFrom: Task: WebDriver.findElements(By(xpath, undefined))\n    at thenableWebDriverProxy.schedule (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:816:17)\n    at thenableWebDriverProxy.findElements (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:1057:22)\n    at ptor.waitForAngular.then (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\element.ts:166:36)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1366:14)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n    at asyncRun (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2813:27)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:676:7\n    at process._tickCallback (internal/process/next_tick.js:109:7)\nFrom: Task: <anonymous>\n    at pollCondition (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2101:19)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2097:7\n    at new ManagedPromise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1067:7)\n    at ControlFlow.promise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2396:12)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2096:22\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n    at asyncRun (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2813:27)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:676:7\n    at process._tickCallback (internal/process/next_tick.js:109:7)\nFrom: Task: <anonymous wait>\n    at scheduleWait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2094:20)\n    at ControlFlow.wait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2408:12)\n    at thenableWebDriverProxy.wait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:943:29)\n    at run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:66:27)\n    at ProtractorBrowser.to.(anonymous function) [as wait] (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:74:12)\n    at keywords.waitElementAndVerifyTextByXpath (D:\\Automation POCs\\PSPS_ProtractorFramework\\pageTestCases\\keywords.js:84:12)\n    at UserContext.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:40:12)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1067:7)\n    at ControlFlow.promise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2396:12)\nFrom: Task: Run it(\"To verify creating a new column\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2565:10)\n    at shutdownTask_.MicroTask (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2490:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:25:1)\n    at addSpecsToSuite (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:13:1)\n    at Module._compile (module.js:570:32)\n    at Object.Module._extensions..js (module.js:579:10)\n    at Module.load (module.js:487:32)\n    at tryModuleLoad (module.js:446:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1510131732616,
                "type": ""
            }
        ],
        "screenShotFile": "images\\0007009a-00ad-002f-006e-00dc0020000c.png",
        "duration": 7059
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
                "timestamp": 1510131826723,
                "type": ""
            }
        ],
        "screenShotFile": "images\\004f0059-0007-00f6-0044-006b00d70012.png",
        "duration": 7295
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
                "timestamp": 1510225573316,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00d000a3-0067-0037-0071-005a005d0077.png",
        "duration": 7695
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
                "timestamp": 1510225669274,
                "type": ""
            }
        ],
        "screenShotFile": "images\\008e0027-00e4-0054-00a5-007d00f3004b.png",
        "duration": 7611
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
                "timestamp": 1510225709195,
                "type": ""
            }
        ],
        "screenShotFile": "images\\001000cd-0070-00f7-009c-000e00180003.png",
        "duration": 6911
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
                "timestamp": 1510225975400,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00df008f-0088-00f3-00a9-0011008c002d.png",
        "duration": 7493
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
                "timestamp": 1510226195539,
                "type": ""
            }
        ],
        "screenShotFile": "images\\007a00af-00e0-0034-0043-001e00a200fb.png",
        "duration": 7754
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
        "message": "Expected 'New Columns' to equal 'New Columnds'.",
        "trace": "Error: Failed expectation\n    at D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:48:32\n    at ManagedPromise.invokeCallback_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1366:14)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n    at asyncRun (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2813:27)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:676:7\n    at process._tickCallback (internal/process/next_tick.js:109:7)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1510226238650,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00be00f8-00a3-0054-005d-000200400021.png",
        "duration": 7783
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
                "timestamp": 1510226464812,
                "type": ""
            }
        ],
        "screenShotFile": "images\\004e00f7-0033-0070-005b-003b006c009c.png",
        "duration": 7783
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
                "timestamp": 1510226571283,
                "type": ""
            }
        ],
        "screenShotFile": "images\\006d0062-00f8-0073-00ee-00b9005900ae.png",
        "duration": 7586
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
                "timestamp": 1510226652623,
                "type": ""
            }
        ],
        "screenShotFile": "images\\003e0024-005d-0032-005c-00b4003600b5.png",
        "duration": 8257
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
                "timestamp": 1510226872710,
                "type": ""
            }
        ],
        "screenShotFile": "images\\008e0005-00a7-000f-00de-001600c90072.png",
        "duration": 7889
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
                "timestamp": 1510226942499,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00130098-00d5-00cd-00a0-003000f500bd.png",
        "duration": 8275
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
                "timestamp": 1510227094184,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00bc0076-0076-00d9-0047-00e1001f00a8.png",
        "duration": 7481
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
                "timestamp": 1510227167250,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00410027-00ff-008f-006c-0057004b007d.png",
        "duration": 7196
    },
    {
        "description": "To verify removing a new column|To test dashboard",
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
                "timestamp": 1510227173506,
                "type": ""
            }
        ],
        "screenShotFile": "images\\005400b3-0007-007e-0015-006600440001.png",
        "duration": 4050
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
                "timestamp": 1510227801397,
                "type": ""
            }
        ],
        "screenShotFile": "images\\0082005e-00ea-001b-00b7-0097002b00dc.png",
        "duration": 7554
    },
    {
        "description": "To verify removing a new column|To test dashboard",
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
                "timestamp": 1510227807980,
                "type": ""
            }
        ],
        "screenShotFile": "images\\001400a5-00f4-0017-0056-00fa004500c3.png",
        "duration": 4151
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
                "timestamp": 1510227828675,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00b000c9-0046-001f-0007-00a8003d0090.png",
        "duration": 7175
    },
    {
        "description": "To verify removing a new column|To test dashboard",
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
                "timestamp": 1510227834833,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00500014-006a-001d-00bc-006e00920052.png",
        "duration": 4084
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
                "timestamp": 1510227921960,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00420018-0025-00e3-00a2-002100e700f2.png",
        "duration": 7989
    },
    {
        "description": "To verify removing a new column|To test dashboard",
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
                "timestamp": 1510227928915,
                "type": ""
            }
        ],
        "screenShotFile": "images\\001200b5-001d-0007-0057-00d7007900da.png",
        "duration": 4243
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
                "timestamp": 1510227979560,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00ed0022-00fd-007c-00d2-00b200fe0016.png",
        "duration": 7351
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
                "timestamp": 1510228014685,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00210046-005c-0075-0095-000900aa00ef.png",
        "duration": 7257
    },
    {
        "description": "To verify removing a new column|To test dashboard",
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
                "timestamp": 1510231717220,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00370095-00d7-00b8-0066-005b00f10036.png",
        "duration": 6541
    },
    {
        "description": "To verify removing a new column|To test dashboard",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "61.0.3163.100"
        },
        "message": "Failed: colXpath.getText is not a function",
        "trace": "TypeError: colXpath.getText is not a function\n    at D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:73:27\n    at ManagedPromise.invokeCallback_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1366:14)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n    at asyncRun (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2813:27)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:676:7\n    at process._tickCallback (internal/process/next_tick.js:109:7)\nFrom: Task: Run it(\"To verify removing a new column\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2565:10)\n    at shutdownTask_.MicroTask (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2490:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:56:1)\n    at addSpecsToSuite (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:13:1)\n    at Module._compile (module.js:570:32)\n    at Object.Module._extensions..js (module.js:579:10)\n    at Module.load (module.js:487:32)\n    at tryModuleLoad (module.js:446:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1510232945571,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00ca0077-004d-002f-00cf-00f600cc0052.png",
        "duration": 6708
    },
    {
        "description": "To verify removing a new column|To test dashboard",
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
                "timestamp": 1510233258765,
                "type": ""
            }
        ],
        "screenShotFile": "images\\000d0085-0077-008c-00c2-000700e0009e.png",
        "duration": 6348
    },
    {
        "description": "To verify removing a new column|To test dashboard",
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
                "timestamp": 1510233292967,
                "type": ""
            }
        ],
        "screenShotFile": "images\\0035002f-004a-006d-0053-005e004a008d.png",
        "duration": 6987
    },
    {
        "description": "To verify removing a new column|To test dashboard",
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
                "timestamp": 1510233435725,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00bb0042-004c-006a-00ea-008e0093002a.png",
        "duration": 6961
    },
    {
        "description": "To verify removing a new column|To test dashboard",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "61.0.3163.100"
        },
        "message": "Failed: string is not defined",
        "trace": "ReferenceError: string is not defined\n    at D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:72:20\n    at ManagedPromise.invokeCallback_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1366:14)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n    at asyncRun (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2813:27)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:676:7\n    at process._tickCallback (internal/process/next_tick.js:109:7)\nFrom: Task: Run it(\"To verify removing a new column\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2565:10)\n    at shutdownTask_.MicroTask (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2490:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:56:1)\n    at addSpecsToSuite (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:13:1)\n    at Module._compile (module.js:570:32)\n    at Object.Module._extensions..js (module.js:579:10)\n    at Module.load (module.js:487:32)\n    at tryModuleLoad (module.js:446:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1510234026624,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00200014-007b-004d-0054-00f100eb0097.png",
        "duration": 6247
    },
    {
        "description": "To verify removing a new column|To test dashboard",
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
                "timestamp": 1510234208323,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00ca0038-00f8-0033-0018-009a00bd00cb.png",
        "duration": 6777
    },
    {
        "description": "To verify removing a new column|To test dashboard",
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
                "timestamp": 1510234242608,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00b600a8-00d8-00d7-00f7-008d004000fb.png",
        "duration": 6844
    },
    {
        "description": "To verify removing a new column|To test dashboard",
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
                "timestamp": 1510234320536,
                "type": ""
            }
        ],
        "screenShotFile": "images\\006700bb-0015-00fe-000e-00ad00620009.png",
        "duration": 7564
    },
    {
        "description": "To verify removing a new column|To test dashboard",
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
                "timestamp": 1510234375877,
                "type": ""
            }
        ],
        "screenShotFile": "images\\001b0055-007a-003a-00dc-00e200560061.png",
        "duration": 7307
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
                "timestamp": 1510237635925,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00d200d5-003f-0082-00a1-00c700200087.png",
        "duration": 7354
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
        "message": "Failed: JS_HTML5_DND is not defined",
        "trace": "ReferenceError: JS_HTML5_DND is not defined\n    at D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:109:26\n    at ManagedPromise.invokeCallback_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1366:14)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n    at asyncRun (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2813:27)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:676:7\n    at process._tickCallback (internal/process/next_tick.js:109:7)\nFrom: Task: Run it(\"To verify creating a new column\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2565:10)\n    at shutdownTask_.MicroTask (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2490:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:96:1)\n    at addSpecsToSuite (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:13:1)\n    at Module._compile (module.js:570:32)\n    at Object.Module._extensions..js (module.js:579:10)\n    at Module.load (module.js:487:32)\n    at tryModuleLoad (module.js:446:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1510237940494,
                "type": ""
            }
        ],
        "screenShotFile": "images\\009d0031-00fd-00eb-0021-00cb008f00fe.png",
        "duration": 7075
    },
    {
        "description": "To verify removing a new column|To test dashboard",
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
                "timestamp": 1510291861438,
                "type": ""
            }
        ],
        "screenShotFile": "images\\002800b2-0091-009d-003e-006b00370069.png",
        "duration": 8403
    },
    {
        "description": "To verify removing a new column|To test dashboard",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "61.0.3163.100"
        },
        "message": "Failed: No element found using locator: By(xpath, /html/body/app-root/div/app-dashboard/div/div/div[1]/div[3]/div/div[1]/h5)",
        "trace": "NoSuchElementError: No element found using locator: By(xpath, /html/body/app-root/div/app-dashboard/div/div/div[1]/div[3]/div/div[1]/h5)\n    at WebDriverError (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:27:5)\n    at NoSuchElementError (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:168:5)\n    at elementArrayFinder.getWebElements.then (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\element.ts:851:17)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1366:14)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n    at asyncRun (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2813:27)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:676:7\n    at process._tickCallback (internal/process/next_tick.js:109:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\element.ts:482:23)\n    at ElementArrayFinder.(anonymous function) [as getText] (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\element.ts:96:21)\n    at ElementFinder.(anonymous function) [as getText] (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\element.ts:873:14)\n    at D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:74:21\n    at ManagedPromise.invokeCallback_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1366:14)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n    at asyncRun (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2813:27)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:676:7\n    at process._tickCallback (internal/process/next_tick.js:109:7)\nFrom: Task: Run it(\"To verify removing a new column\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2565:10)\n    at shutdownTask_.MicroTask (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2490:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:56:2)\n    at addSpecsToSuite (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:13:1)\n    at Module._compile (module.js:570:32)\n    at Object.Module._extensions..js (module.js:579:10)\n    at Module.load (module.js:487:32)\n    at tryModuleLoad (module.js:446:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1510292731912,
                "type": ""
            }
        ],
        "screenShotFile": "images\\002a004c-00db-007c-00e1-005400f60018.png",
        "duration": 7194
    },
    {
        "description": "To verify removing a new column|To test dashboard",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "61.0.3163.100"
        },
        "message": "Failed: element(...).size is not a function",
        "trace": "TypeError: element(...).size is not a function\n    at D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:70:92\n    at ManagedPromise.invokeCallback_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1366:14)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n    at asyncRun (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2813:27)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:676:7\n    at process._tickCallback (internal/process/next_tick.js:109:7)\nFrom: Task: Run it(\"To verify removing a new column\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2565:10)\n    at shutdownTask_.MicroTask (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2490:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:56:2)\n    at addSpecsToSuite (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:13:1)\n    at Module._compile (module.js:570:32)\n    at Object.Module._extensions..js (module.js:579:10)\n    at Module.load (module.js:487:32)\n    at tryModuleLoad (module.js:446:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1510295731917,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00700040-008e-0095-00e7-00ff005600d4.png",
        "duration": 6593
    },
    {
        "description": "To verify removing a new column|To test dashboard",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "61.0.3163.100"
        },
        "message": "Failed: Wait timed out after 5010ms",
        "trace": "TimeoutError: Wait timed out after 5010ms\n    at WebDriverError (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:27:5)\n    at TimeoutError (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:238:5)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2107:17\n    at ManagedPromise.invokeCallback_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1366:14)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n    at asyncRun (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2813:27)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:676:7\n    at process._tickCallback (internal/process/next_tick.js:109:7)\nFrom: Task: <anonymous wait>\n    at scheduleWait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2094:20)\n    at ControlFlow.wait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2408:12)\n    at thenableWebDriverProxy.wait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:943:29)\n    at run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:66:27)\n    at ProtractorBrowser.to.(anonymous function) [as wait] (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:74:12)\n    at UserContext.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:69:12)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1067:7)\n    at ControlFlow.promise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2396:12)\n    at schedulerExecute (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\nFrom: Task: Run it(\"To verify removing a new column\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2565:10)\n    at shutdownTask_.MicroTask (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2490:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:56:2)\n    at addSpecsToSuite (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:13:1)\n    at Module._compile (module.js:570:32)\n    at Object.Module._extensions..js (module.js:579:10)\n    at Module.load (module.js:487:32)\n    at tryModuleLoad (module.js:446:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1510723105047,
                "type": ""
            }
        ],
        "screenShotFile": "images\\007800da-001c-008a-0030-00d6005b001a.png",
        "duration": 16744
    },
    {
        "description": "To verify removing a new column|To test dashboard",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "61.0.3163.100"
        },
        "message": "Failed: element(...).size is not a function",
        "trace": "TypeError: element(...).size is not a function\n    at D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:70:92\n    at ManagedPromise.invokeCallback_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1366:14)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n    at asyncRun (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2813:27)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:676:7\n    at process._tickCallback (internal/process/next_tick.js:109:7)\nFrom: Task: Run it(\"To verify removing a new column\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2565:10)\n    at shutdownTask_.MicroTask (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2490:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:56:2)\n    at addSpecsToSuite (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:13:1)\n    at Module._compile (module.js:570:32)\n    at Object.Module._extensions..js (module.js:579:10)\n    at Module.load (module.js:487:32)\n    at tryModuleLoad (module.js:446:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1510741474827,
                "type": ""
            }
        ],
        "screenShotFile": "images\\001f0041-007d-004a-00e4-000400410030.png",
        "duration": 7902
    },
    {
        "description": "To verify removing a new column|To test dashboard",
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
                "timestamp": 1510893869846,
                "type": ""
            }
        ],
        "screenShotFile": "images\\005800e6-0051-007e-00f4-002100d60027.png",
        "duration": 7792
    },
    {
        "description": "To verify removing a new column|To test dashboard",
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
                "timestamp": 1510894045558,
                "type": ""
            }
        ],
        "screenShotFile": "images\\003000fb-007d-0061-00ef-00ce005d00f3.png",
        "duration": 7833
    },
    {
        "description": "To verify removing a new column|To test dashboard",
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
                "timestamp": 1510894127031,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00c80048-0062-00ab-0065-00dc00d2007b.png",
        "duration": 7466
    },
    {
        "description": "To verify removing a new column|To test dashboard",
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
                "timestamp": 1510894152729,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00f300b7-0059-0084-003e-00f3002200b9.png",
        "duration": 8028
    },
    {
        "description": "To verify removing a new column|To test dashboard",
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
                "timestamp": 1510894314918,
                "type": ""
            }
        ],
        "screenShotFile": "images\\008800ce-0045-000c-0046-00d3009e00ac.png",
        "duration": 7009
    },
    {
        "description": "To verify removing a new column|To test dashboard",
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
                "timestamp": 1510894370529,
                "type": ""
            }
        ],
        "screenShotFile": "images\\009400e0-00dd-0053-00ee-00c700660005.png",
        "duration": 7163
    },
    {
        "description": "To verify removing a new column|To test dashboard",
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
                "timestamp": 1510894435288,
                "type": ""
            }
        ],
        "screenShotFile": "images\\000d0040-00ff-0079-003a-006e00af006e.png",
        "duration": 7391
    },
    {
        "description": "To verify removing a new column|To test dashboard",
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
                "timestamp": 1510895517375,
                "type": ""
            }
        ],
        "screenShotFile": "images\\006300a4-0083-00c4-0078-005000cd0046.png",
        "duration": 7135
    },
    {
        "description": "To verify removing a new column|To test dashboard",
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
                "timestamp": 1510895572196,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00800095-00f9-0049-00f2-00f8001300cf.png",
        "duration": 7795
    },
    {
        "description": "To verify removing a new column|To test dashboard",
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
                "timestamp": 1510904221484,
                "type": ""
            }
        ],
        "screenShotFile": "images\\007700da-0008-007a-0087-0075007200c3.png",
        "duration": 7459
    },
    {
        "description": "To verify removing a new column|To test dashboard",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "62.0.3202.94"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1511172251215,
                "type": ""
            }
        ],
        "screenShotFile": "images\\0050006b-0036-00fb-00a4-0083001c005f.png",
        "duration": 7304
    },
    {
        "description": "To verify removing a new column|To test dashboard",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "62.0.3202.94"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1511172284366,
                "type": ""
            }
        ],
        "screenShotFile": "images\\003700fd-002b-00a5-0008-002900fa0079.png",
        "duration": 7304
    },
    {
        "description": "To verify removing a new column|To test dashboard",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "62.0.3202.94"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1511172434046,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00470046-0001-000c-000d-00b6002400b3.png",
        "duration": 7362
    },
    {
        "description": "To verify removing a new column|To test dashboard",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "62.0.3202.94"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1511176671788,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00a90068-0040-004f-00e8-002a00e400d3.png",
        "duration": 7578
    },
    {
        "description": "To verify creating a new column|To test dashboard",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "62.0.3202.94"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1511179682616,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00c700b9-0027-00df-0054-004f00600016.png",
        "duration": 13656
    },
    {
        "description": "To verify creating a new column|To test dashboard",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "62.0.3202.94"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1511182118815,
                "type": ""
            }
        ],
        "screenShotFile": "images\\002c0057-0052-00a6-0095-00f600e70067.png",
        "duration": 6416
    },
    {
        "description": "To verify creating a new column|To test dashboard",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "62.0.3202.94"
        },
        "message": "Failed: unknown error: 'script' must be a string\n  (Session info: chrome=62.0.3202.94)\n  (Driver info: chromedriver=2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform=Windows NT 10.0.15063 x86_64)",
        "trace": "WebDriverError: unknown error: 'script' must be a string\n  (Session info: chrome=62.0.3202.94)\n  (Driver info: chromedriver=2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform=Windows NT 10.0.15063 x86_64)\n    at WebDriverError (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:27:5)\n    at Object.checkLegacyResponse (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:505:15)\n    at parseHttpResponse (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\http.js:509:13)\n    at doSend.then.response (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\http.js:440:13)\n    at process._tickCallback (internal/process/next_tick.js:109:7)\nFrom: Task: WebDriver.executeScript()\n    at thenableWebDriverProxy.schedule (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:816:17)\n    at thenableWebDriverProxy.executeScript (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:887:16)\n    at run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:66:27)\n    at ProtractorBrowser.to.(anonymous function) [as executeScript] (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:74:12)\n    at D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:130:13\n    at ManagedPromise.invokeCallback_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1366:14)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n    at asyncRun (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2813:27)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:676:7\nFrom: Task: Run it(\"To verify creating a new column\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2565:10)\n    at shutdownTask_.MicroTask (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2490:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:115:2)\n    at addSpecsToSuite (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:15:1)\n    at Module._compile (module.js:570:32)\n    at Object.Module._extensions..js (module.js:579:10)\n    at Module.load (module.js:487:32)\n    at tryModuleLoad (module.js:446:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1511183136896,
                "type": ""
            }
        ],
        "screenShotFile": "images\\0008005f-0049-00c6-00a9-002000a9003b.png",
        "duration": 6153
    },
    {
        "description": "To verify creating a new column|To test dashboard",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "62.0.3202.94"
        },
        "message": "Failed: unknown error: 'script' must be a string\n  (Session info: chrome=62.0.3202.94)\n  (Driver info: chromedriver=2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform=Windows NT 10.0.15063 x86_64)",
        "trace": "WebDriverError: unknown error: 'script' must be a string\n  (Session info: chrome=62.0.3202.94)\n  (Driver info: chromedriver=2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform=Windows NT 10.0.15063 x86_64)\n    at WebDriverError (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:27:5)\n    at Object.checkLegacyResponse (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:505:15)\n    at parseHttpResponse (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\http.js:509:13)\n    at doSend.then.response (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\http.js:440:13)\n    at process._tickCallback (internal/process/next_tick.js:109:7)\nFrom: Task: WebDriver.executeScript()\n    at thenableWebDriverProxy.schedule (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:816:17)\n    at thenableWebDriverProxy.executeScript (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:887:16)\n    at run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:66:27)\n    at ProtractorBrowser.to.(anonymous function) [as executeScript] (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:74:12)\n    at D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:130:13\n    at ManagedPromise.invokeCallback_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1366:14)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n    at asyncRun (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2813:27)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:676:7\nFrom: Task: Run it(\"To verify creating a new column\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2565:10)\n    at shutdownTask_.MicroTask (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2490:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:115:2)\n    at addSpecsToSuite (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:15:1)\n    at Module._compile (module.js:570:32)\n    at Object.Module._extensions..js (module.js:579:10)\n    at Module.load (module.js:487:32)\n    at tryModuleLoad (module.js:446:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1511183218164,
                "type": ""
            }
        ],
        "screenShotFile": "images\\007c0013-00a9-0049-0061-00b1004d00c7.png",
        "duration": 6366
    },
    {
        "description": "To verify creating a new column|To test dashboard",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "62.0.3202.94"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1511185384365,
                "type": ""
            }
        ],
        "screenShotFile": "images\\008d00d1-00d1-0046-0083-004f003200bc.png",
        "duration": 10583
    },
    {
        "description": "To verify creating a new column|To test dashboard",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "62.0.3202.94"
        },
        "message": "Failed: unknown error: Element <span _ngcontent-mdj-15=\"\">...</span> is not clickable at point (838, 89). Other element would receive the click: <app-dashboard-filter _ngcontent-mdj-6=\"\" class=\"c-dashboard-filter\" _nghost-mdj-15=\"\" ng-reflect-column-id=\"137\" ng-reflect-page-height=\"782\" ng-reflect-current-user-id=\"9\" ng-reflect-input-creators=\"[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]\" ng-reflect-input-unit-data=\"[object Object],[object Object],[object Object],[object Object]\" ng-reflect-input-department-data=\"[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]\" ng-reflect-filter-settings=\"[object Object]\">...</app-dashboard-filter>\n  (Session info: chrome=62.0.3202.94)\n  (Driver info: chromedriver=2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform=Windows NT 10.0.15063 x86_64)",
        "trace": "WebDriverError: unknown error: Element <span _ngcontent-mdj-15=\"\">...</span> is not clickable at point (838, 89). Other element would receive the click: <app-dashboard-filter _ngcontent-mdj-6=\"\" class=\"c-dashboard-filter\" _nghost-mdj-15=\"\" ng-reflect-column-id=\"137\" ng-reflect-page-height=\"782\" ng-reflect-current-user-id=\"9\" ng-reflect-input-creators=\"[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]\" ng-reflect-input-unit-data=\"[object Object],[object Object],[object Object],[object Object]\" ng-reflect-input-department-data=\"[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]\" ng-reflect-filter-settings=\"[object Object]\">...</app-dashboard-filter>\n  (Session info: chrome=62.0.3202.94)\n  (Driver info: chromedriver=2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform=Windows NT 10.0.15063 x86_64)\n    at WebDriverError (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:27:5)\n    at Object.checkLegacyResponse (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:505:15)\n    at parseHttpResponse (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\http.js:509:13)\n    at doSend.then.response (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\http.js:440:13)\n    at process._tickCallback (internal/process/next_tick.js:109:7)\nFrom: Task: WebElement.click()\n    at thenableWebDriverProxy.schedule (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:816:17)\n    at WebElement.schedule_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:1921:25)\n    at WebElement.click (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:2002:17)\n    at actionFn (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\element.ts:94:34)\n    at Array.map (native)\n    at actionResults.getWebElements.then (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\element.ts:484:67)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1366:14)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n    at asyncRun (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2813:27)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\element.ts:482:23)\n    at ElementArrayFinder.(anonymous function) [as click] (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\element.ts:96:21)\n    at ElementFinder.(anonymous function) [as click] (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\element.ts:873:14)\n    at D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:54:16\n    at ManagedPromise.invokeCallback_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1366:14)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n    at asyncRun (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2813:27)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:676:7\n    at process._tickCallback (internal/process/next_tick.js:109:7)\nFrom: Task: Run it(\"To verify creating a new column\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2565:10)\n    at shutdownTask_.MicroTask (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2490:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:29:2)\n    at addSpecsToSuite (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:15:1)\n    at Module._compile (module.js:570:32)\n    at Object.Module._extensions..js (module.js:579:10)\n    at Module.load (module.js:487:32)\n    at tryModuleLoad (module.js:446:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1511186163852,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00c70067-00ef-0044-00bc-00e400bf00cc.png",
        "duration": 11142
    },
    {
        "description": "To verify creating a new column|To test dashboard",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "62.0.3202.94"
        },
        "message": "Failed: unknown error: Element <span _ngcontent-jhx-15=\"\">...</span> is not clickable at point (1443, 89). Other element would receive the click: <app-dashboard-filter _ngcontent-jhx-6=\"\" class=\"c-dashboard-filter\" _nghost-jhx-15=\"\" ng-reflect-column-id=\"139\" ng-reflect-page-height=\"782\" ng-reflect-current-user-id=\"9\" ng-reflect-input-creators=\"[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]\" ng-reflect-input-unit-data=\"[object Object],[object Object],[object Object],[object Object]\" ng-reflect-input-department-data=\"[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]\" ng-reflect-filter-settings=\"[object Object]\">...</app-dashboard-filter>\n  (Session info: chrome=62.0.3202.94)\n  (Driver info: chromedriver=2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform=Windows NT 10.0.15063 x86_64)",
        "trace": "WebDriverError: unknown error: Element <span _ngcontent-jhx-15=\"\">...</span> is not clickable at point (1443, 89). Other element would receive the click: <app-dashboard-filter _ngcontent-jhx-6=\"\" class=\"c-dashboard-filter\" _nghost-jhx-15=\"\" ng-reflect-column-id=\"139\" ng-reflect-page-height=\"782\" ng-reflect-current-user-id=\"9\" ng-reflect-input-creators=\"[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]\" ng-reflect-input-unit-data=\"[object Object],[object Object],[object Object],[object Object]\" ng-reflect-input-department-data=\"[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]\" ng-reflect-filter-settings=\"[object Object]\">...</app-dashboard-filter>\n  (Session info: chrome=62.0.3202.94)\n  (Driver info: chromedriver=2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform=Windows NT 10.0.15063 x86_64)\n    at WebDriverError (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:27:5)\n    at Object.checkLegacyResponse (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:505:15)\n    at parseHttpResponse (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\http.js:509:13)\n    at doSend.then.response (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\http.js:440:13)\n    at process._tickCallback (internal/process/next_tick.js:109:7)\nFrom: Task: WebElement.click()\n    at thenableWebDriverProxy.schedule (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:816:17)\n    at WebElement.schedule_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:1921:25)\n    at WebElement.click (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:2002:17)\n    at actionFn (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\element.ts:94:34)\n    at Array.map (native)\n    at actionResults.getWebElements.then (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\element.ts:484:67)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1366:14)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n    at asyncRun (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2813:27)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\element.ts:482:23)\n    at ElementArrayFinder.(anonymous function) [as click] (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\element.ts:96:21)\n    at ElementFinder.(anonymous function) [as click] (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\element.ts:873:14)\n    at D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:54:16\n    at ManagedPromise.invokeCallback_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1366:14)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n    at asyncRun (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2813:27)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:676:7\n    at process._tickCallback (internal/process/next_tick.js:109:7)\nFrom: Task: Run it(\"To verify creating a new column\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2565:10)\n    at shutdownTask_.MicroTask (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2490:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:29:2)\n    at addSpecsToSuite (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:15:1)\n    at Module._compile (module.js:570:32)\n    at Object.Module._extensions..js (module.js:579:10)\n    at Module.load (module.js:487:32)\n    at tryModuleLoad (module.js:446:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1511186777520,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00b800ad-0082-0041-0096-003e0093004e.png",
        "duration": 11735
    },
    {
        "description": "To verify creating a new column|To test dashboard",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "62.0.3202.94"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1511186818167,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00fb006a-0001-00b0-00b3-00ed00e500a5.png",
        "duration": 11939
    },
    {
        "description": "To verify creating a new column|To test dashboard",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "62.0.3202.94"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1511188873024,
                "type": ""
            }
        ],
        "screenShotFile": "images\\0034002b-0070-0078-00dd-00b3001200a0.png",
        "duration": 10826
    },
    {
        "description": "To verify creating a new column|To test dashboard",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "62.0.3202.94"
        },
        "message": "Expected '' to equal 'Orders'.",
        "trace": "Error: Failed expectation\n    at UserContext.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:79:112)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1067:7)\n    at ControlFlow.promise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2396:12)\n    at schedulerExecute (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n    at asyncRun (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2860:25)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:676:7",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1511192855151,
                "type": ""
            }
        ],
        "screenShotFile": "images\\0059004f-00cd-00e0-00d1-005800dd000f.png",
        "duration": 10663
    },
    {
        "description": "To verify creating a new column|To test dashboard",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "62.0.3202.94"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1511192951139,
                "type": ""
            }
        ],
        "screenShotFile": "images\\009c0080-002b-0053-0078-0031001e00b8.png",
        "duration": 10333
    },
    {
        "description": "To verify creating a new column|To test dashboard",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "62.0.3202.94"
        },
        "message": "Expected 'Orders' to equal 'Ordefrs'.",
        "trace": "Error: Failed expectation\n    at D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:83:113\n    at ManagedPromise.invokeCallback_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1366:14)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n    at asyncRun (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2813:27)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:676:7\n    at process._tickCallback (internal/process/next_tick.js:109:7)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1511192977171,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00d50088-0072-0089-0039-00d7001c0037.png",
        "duration": 10301
    },
    {
        "description": "To verify creating a new column|To test dashboard",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "62.0.3202.94"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1511193085370,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00b20069-006d-00ec-0006-004800300030.png",
        "duration": 11039
    },
    {
        "description": "To verify creating a new column|To test dashboard",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "62.0.3202.94"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1511193095163,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00cd008b-00d0-0011-0048-002d00a4004d.png",
        "duration": 7501
    },
    {
        "description": "To verify bookmark any item|To test dashboard",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "62.0.3202.94"
        },
        "message": "Passed",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1511193631105,
                "type": ""
            }
        ],
        "screenShotFile": "images\\004e0018-0026-00db-00d1-00a500a10033.png",
        "duration": 9960
    },
    {
        "description": "To verify bookmark any item|To test dashboard",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "62.0.3202.94"
        },
        "message": "Failed: Wait timed out after 5001ms",
        "trace": "TimeoutError: Wait timed out after 5001ms\n    at WebDriverError (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:27:5)\n    at TimeoutError (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\error.js:238:5)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2107:17\n    at ManagedPromise.invokeCallback_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1366:14)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n    at asyncRun (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2813:27)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:676:7\n    at process._tickCallback (internal/process/next_tick.js:109:7)\nFrom: Task: <anonymous wait>\n    at scheduleWait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2094:20)\n    at ControlFlow.wait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2408:12)\n    at thenableWebDriverProxy.wait (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:943:29)\n    at run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:66:27)\n    at ProtractorBrowser.to.(anonymous function) [as wait] (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\lib\\browser.ts:74:12)\n    at UserContext.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:113:12)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1067:7)\n    at ControlFlow.promise (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2396:12)\n    at schedulerExecute (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\nFrom: Task: Run it(\"To verify bookmark any item\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2565:10)\n    at shutdownTask_.MicroTask (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2490:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:93:2)\n    at addSpecsToSuite (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:15:1)\n    at Module._compile (module.js:570:32)\n    at Object.Module._extensions..js (module.js:579:10)\n    at Module.load (module.js:487:32)\n    at tryModuleLoad (module.js:446:12)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1511194105166,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00950030-0027-0094-0006-00100076009b.png",
        "duration": 15055
    },
    {
        "description": "To verify bookmark any item|To test dashboard",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "62.0.3202.94"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1511194125563,
                "type": ""
            }
        ],
        "screenShotFile": "images\\004c0083-0027-00d2-00a9-0062006200ca.png",
        "duration": 11076
    },
    {
        "description": "To verify bookmark any item|To test dashboard",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "62.0.3202.94"
        },
        "message": "Expected 'WONDERFUL WORLD' to equal 'orderName'.",
        "trace": "Error: Failed expectation\n    at D:\\Automation POCs\\PSPS_ProtractorFramework\\specs\\dashboard_spec.js:114:36\n    at ManagedPromise.invokeCallback_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1366:14)\n    at TaskQueue.execute_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n    at TaskQueue.executeNext_ (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n    at asyncRun (C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2813:27)\n    at C:\\Users\\optimus32\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:676:7\n    at process._tickCallback (internal/process/next_tick.js:109:7)",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1511194172718,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00f000eb-008b-0084-0044-00db00b000a5.png",
        "duration": 10309
    },
    {
        "description": "To verify bookmark any item|To test dashboard",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "browser": {
            "name": "chrome",
            "version": "62.0.3202.94"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "http://172.16.0.46/PSPSUIBuild/login - This page includes a password or credit card input in a non-secure context. A warning has been added to the URL bar. For more information, see https://goo.gl/zmWq3m.",
                "timestamp": 1511194235292,
                "type": ""
            }
        ],
        "screenShotFile": "images\\00180033-00c6-00ec-0044-009100d80072.png",
        "duration": 10983
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