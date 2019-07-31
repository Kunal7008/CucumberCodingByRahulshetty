$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("can.feature");
formatter.feature({
  "line": 1,
  "name": "Search and place order",
  "description": "",
  "id": "search-and-place-order",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "search the items and validate the results",
  "description": "",
  "id": "search-and-place-order;search-the-items-and-validate-the-results",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "User is on greenkart landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User searched for Cucumber vegetable",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "\"Cucumber\"  result are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefination.user_is_on_greenkart_landing_page()"
});
formatter.result({
  "duration": 7355149900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber",
      "offset": 18
    }
  ],
  "location": "MyStepdefination.user_searched_for_something_vegetable(String)"
});
formatter.result({
  "duration": 271226600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber",
      "offset": 1
    }
  ],
  "location": "MyStepdefination.something_result_are_displayed(String)"
});
formatter.result({
  "duration": 42898300,
  "status": "passed"
});
formatter.after({
  "duration": 176727400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Search the items and proceed to checkout page",
  "description": "",
  "id": "search-and-place-order;search-the-items-and-proceed-to-checkout-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@SanityTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User is on greenkart landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User searched for \u003cName\u003e vegetable",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Added to the cart",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User proceed to checkout page for purchase",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Verify selected \u003cName\u003e items are displayed in Checkout page",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "search-and-place-order;search-the-items-and-proceed-to-checkout-page;",
  "rows": [
    {
      "cells": [
        "Name"
      ],
      "line": 17,
      "id": "search-and-place-order;search-the-items-and-proceed-to-checkout-page;;1"
    },
    {
      "cells": [
        "Brinjal"
      ],
      "line": 18,
      "id": "search-and-place-order;search-the-items-and-proceed-to-checkout-page;;2"
    },
    {
      "cells": [
        "Beetroot"
      ],
      "line": 19,
      "id": "search-and-place-order;search-the-items-and-proceed-to-checkout-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "Search the items and proceed to checkout page",
  "description": "",
  "id": "search-and-place-order;search-the-items-and-proceed-to-checkout-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@SanityTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User is on greenkart landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User searched for Brinjal vegetable",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Added to the cart",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User proceed to checkout page for purchase",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Verify selected Brinjal items are displayed in Checkout page",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefination.user_is_on_greenkart_landing_page()"
});
formatter.result({
  "duration": 6477039100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brinjal",
      "offset": 18
    }
  ],
  "location": "MyStepdefination.user_searched_for_something_vegetable(String)"
});
formatter.result({
  "duration": 218149800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefination.added_to_the_cart()"
});
formatter.result({
  "duration": 274683900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefination.user_proceed_to_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 171284800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brinjal",
      "offset": 16
    }
  ],
  "location": "MyStepdefination.verify_selected_items_are_displayed_in_checkout_page(String)"
});
formatter.result({
  "duration": 32886700,
  "status": "passed"
});
formatter.after({
  "duration": 144161700,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Search the items and proceed to checkout page",
  "description": "",
  "id": "search-and-place-order;search-the-items-and-proceed-to-checkout-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@SanityTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User is on greenkart landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User searched for Beetroot vegetable",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Added to the cart",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User proceed to checkout page for purchase",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Verify selected Beetroot items are displayed in Checkout page",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefination.user_is_on_greenkart_landing_page()"
});
formatter.result({
  "duration": 7572856300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Beetroot",
      "offset": 18
    }
  ],
  "location": "MyStepdefination.user_searched_for_something_vegetable(String)"
});
formatter.result({
  "duration": 273845100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefination.added_to_the_cart()"
});
formatter.result({
  "duration": 257033000,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d75.0.3770.142)\n  (Driver info: chromedriver\u003d2.46.628402 (536cd7adbad73a3783fdc2cab92ab2ba7ec361e1),platform\u003dWindows NT 10.0.18362 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.8.1\u0027, revision: \u00276e95a6684b\u0027, time: \u00272017-12-01T18:33:54.468Z\u0027\nSystem info: host: \u0027DESKTOP-0AA0O4F\u0027, ip: \u002710.0.75.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_102\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.46.628402 (536cd7adbad73a..., userDataDir: C:\\Users\\KUNALB~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:2068}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 75.0.3770.142, webStorageEnabled: true}\nSession ID: 8aa7b5efa98ccfd3917c83454f24636b\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat com.stepdefinations.MyStepdefination.added_to_the_cart(MyStepdefination.java:46)\r\n\tat ✽.And Added to the cart(can.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepdefination.user_proceed_to_checkout_page_for_purchase()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Beetroot",
      "offset": 16
    }
  ],
  "location": "MyStepdefination.verify_selected_items_are_displayed_in_checkout_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 123315600,
  "status": "passed"
});
});