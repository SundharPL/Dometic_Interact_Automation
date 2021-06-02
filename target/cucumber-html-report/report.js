$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/dometic/MTC/features/TC01_LaunchScreen.feature");
formatter.feature({
  "name": "Testing Login page in Dometic LMC application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Launching the application",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@First"
    },
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I Launch the application",
  "keyword": "Given "
});
formatter.match({
  "location": "Basestepdefinition.iLaunchTheApplicationOn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/java/com/dometic/MTC/features/TC02_SplashScreen.feature");
formatter.feature({
  "name": "Testing Login page in Dometic LMC application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying application Splash screen Functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@First"
    },
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Allow button in Permission popup in Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.tap_on_Allow_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Welcome Text is displaying in Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.assert_Welcome()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Page title is displayed in Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.Login_Page_Title()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/java/com/dometic/MTC/features/TC06_DashboardScreen.feature");
formatter.feature({
  "name": "Testing an Dometic LMC application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying application Dash Board screen functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@First"
    },
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I enter Valid Email",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iEnterValidEmail()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Valid Password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iEnterValidPassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on an Login button",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iTapOnAnLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I entered into Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "OnboardingScreen.iEnteredIntoHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Marine Tile",
  "keyword": "Then "
});
formatter.match({
  "location": "OnboardingScreen.iTapOnMarineTile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait until Landing screen is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "OnboardingScreen.iWaitUntilLandingScreenIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/java/com/dometic/MTC/features/TC07_LandingScreen.feature");
formatter.feature({
  "name": "Testing an Dometic LMC application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying application Landing Screen functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@First"
    },
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on the access this location pop up",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnTheAccessThisLocationPopUp()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on LATER Button",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnLATERButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on cancel button in Upgrade Firmware",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnCancelButtonInUpgradeFirmware()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/java/com/dometic/MTC/features/TC19_TankScreenMTC.feature");
formatter.feature({
  "name": "Testing an Dometic LMC application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying application Tank screen UI",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@First"
    },
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Tank tile on landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "TankMTC.iTapOnTankTileOnLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Tank header text",
  "keyword": "Then "
});
formatter.match({
  "location": "TankMTC.iVerifyTankHeaderText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Alert text",
  "keyword": "Then "
});
formatter.match({
  "location": "TankMTC.iVerifyAlertText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Tank Alert toggle if it\u0027s already in OFF state",
  "keyword": "Then "
});
formatter.match({
  "location": "TankMTC.iTapOnTankAlertToggleIfItSAlreadyInOFFState()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Scroll up the page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iScrollUpThePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Alert-Tank Level Above Text",
  "keyword": "Then "
});
formatter.match({
  "location": "TankMTC.iVerifyAlertTankLevelAboveText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Alert-Tank Level Above",
  "keyword": "Then "
});
formatter.match({
  "location": "TankMTC.iTapOnAlertTankLevelAbove()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Scroll the page",
  "keyword": "Then "
});
formatter.match({
  "location": "Batteries.iScrollThePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the apply button",
  "keyword": "Then "
});
formatter.match({
  "location": "Batteries.iVerifyTheApplyButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Alert-Tank Level Above",
  "keyword": "Then "
});
formatter.match({
  "location": "TankMTC.iTapOnAlertTankLevelAbove()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Alert-Set Latency Text",
  "keyword": "Then "
});
formatter.match({
  "location": "Batteries.iVerifyAlertSetLatencyTextText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Alert-Set Latency",
  "keyword": "Then "
});
formatter.match({
  "location": "Batteries.iTapOnAlertSetLatency()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Scroll the page",
  "keyword": "Then "
});
formatter.match({
  "location": "Batteries.iScrollThePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Alert-Set Latency",
  "keyword": "Then "
});
formatter.match({
  "location": "Batteries.iTapOnAlertSetLatency()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Warning text",
  "keyword": "Then "
});
formatter.match({
  "location": "TankMTC.iVerifyWarningText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Tank Warnings toggle if it\u0027s already in OFF state",
  "keyword": "Then "
});
formatter.match({
  "location": "TankMTC.iTapOnTankWarningsToggleIfItSAlreadyInOFFState()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Warnings-Tank Level Above Text",
  "keyword": "Then "
});
formatter.match({
  "location": "TankMTC.iVerifyWarningsTankLevelAboveText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Warnings-Tank Level Above",
  "keyword": "Then "
});
formatter.match({
  "location": "TankMTC.iTapOnWarningsTankLevelAbove()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Scroll up the page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iScrollUpThePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Warnings-Tank Level Above",
  "keyword": "Then "
});
formatter.match({
  "location": "TankMTC.iTapOnWarningsTankLevelAbove()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Warnings-Set Latency Text",
  "keyword": "Then "
});
formatter.match({
  "location": "Batteries.iVerifyWarningsSetLatencyTextText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Warnings-Set Latency",
  "keyword": "Then "
});
formatter.match({
  "location": "Batteries.iTapOnWarningsSetLatency()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Scroll up the page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iScrollUpThePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Warnings-Set Latency",
  "keyword": "Then "
});
formatter.match({
  "location": "Batteries.iTapOnWarningsSetLatency()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Back Button",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.i_Tap_on_Back_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application Tank screen(Alert-Tank Level Above) Functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Tank tile on landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "TankMTC.iTapOnTankTileOnLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Scroll up the page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iScrollUpThePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Alert-Tank Level Above",
  "keyword": "Then "
});
formatter.match({
  "location": "TankMTC.iTapOnAlertTankLevelAbove()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I scroll up the screen in Alert-Tank Level Above",
  "keyword": "Then "
});
formatter.match({
  "location": "TankMTC.iScrollUpTheScreenInAlertTankLevelAbove()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Apply button in Alert-Tank Level Above",
  "keyword": "Then "
});
formatter.match({
  "location": "TankMTC.iVerifyApplyButtonInAlertTankLevelAbove()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Apply button in Alert-Tank Level Above",
  "keyword": "Then "
});
formatter.match({
  "location": "TankMTC.iTapOnApplyButtonInAlertTankLevelAbove()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Ok button",
  "keyword": "Then "
});
formatter.match({
  "location": "Batteries.iTapOnOkButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Validate Applied percentage in Tank Level Above is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "TankMTC.iValidateAppliedPercentageInTankLevelAboveIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Back Button",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.i_Tap_on_Back_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application Tank screen(Alert-Set Latency) Functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Tank tile on landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "TankMTC.iTapOnTankTileOnLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Scroll up the page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iScrollUpThePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Alert-Set Latency",
  "keyword": "Then "
});
formatter.match({
  "location": "Batteries.iTapOnAlertSetLatency()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I scroll up the screen in Alert-Set Latency(Tank screen)",
  "keyword": "Then "
});
formatter.match({
  "location": "TankMTC.iScrollUpTheScreenInAlertSetLatencyTankScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Apply button in Alert-Set Latency(Tank screen)",
  "keyword": "Then "
});
formatter.match({
  "location": "TankMTC.iVerifyApplyButtonInAlertSetLatencyTankScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Apply button in Alert-Set Latency(Tank screen)",
  "keyword": "Then "
});
formatter.match({
  "location": "TankMTC.iTapOnApplyButtonInAlertSetLatencyTankScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Ok button",
  "keyword": "Then "
});
formatter.match({
  "location": "Batteries.iTapOnOkButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Validate Applied minutes in Alert-Set Latency(Tank screen) is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "TankMTC.iValidateAppliedMinutesInAlertSetLatencyTankScreenIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Back Button",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.i_Tap_on_Back_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application Tank screen(Warnings-Tank Level Above) Functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Tank tile on landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "TankMTC.iTapOnTankTileOnLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Scroll up the page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iScrollUpThePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Warnings-Tank Level Above",
  "keyword": "Then "
});
formatter.match({
  "location": "TankMTC.iTapOnWarningsTankLevelAbove()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Scroll up the page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iScrollUpThePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I scroll up the screen in Warnings-Tank Level Above",
  "keyword": "Then "
});
formatter.match({
  "location": "TankMTC.iScrollUpTheScreenInWarningsTankLevelAbove()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Apply button in Warnings-Tank Level Above",
  "keyword": "Then "
});
formatter.match({
  "location": "TankMTC.iVerifyApplyButtonInWarningsTankLevelAbove()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Apply button in Warnings-Tank Level Above",
  "keyword": "Then "
});
formatter.match({
  "location": "TankMTC.iTapOnApplyButtonInWarningsTankLevelAbove()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Ok button",
  "keyword": "Then "
});
formatter.match({
  "location": "Batteries.iTapOnOkButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Validate Applied minutes in Warnings-Tank Level Above is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "TankMTC.iValidateAppliedMinutesInWarningsTankLevelAboveIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Back Button",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.i_Tap_on_Back_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application Tank screen(Warnings-Set Latency) Functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Tank tile on landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "TankMTC.iTapOnTankTileOnLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Scroll up the page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iScrollUpThePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Warnings-Set Latency",
  "keyword": "Then "
});
formatter.match({
  "location": "Batteries.iTapOnWarningsSetLatency()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Scroll up the page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iScrollUpThePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I scroll up the screen in Warnings-Set Latency(Tank screen)",
  "keyword": "Then "
});
formatter.match({
  "location": "TankMTC.iScrollUpTheScreenInWarningsSetLatencyTankScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Apply button in Warnings-Set Latency(Tank screen)",
  "keyword": "Then "
});
formatter.match({
  "location": "TankMTC.iVerifyApplyButtonInWarningsSetLatencyTankScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Apply button in Warnings-Set Latency(Tank screen)",
  "keyword": "Then "
});
formatter.match({
  "location": "TankMTC.iTapOnApplyButtonInWarningsSetLatencyTankScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Ok button",
  "keyword": "Then "
});
formatter.match({
  "location": "Batteries.iTapOnOkButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Validate Applied minutes in Warnings-Set Latency(Tank screen) is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "TankMTC.iValidateAppliedMinutesInWarningsSetLatencyTankScreenIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Back Button",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.i_Tap_on_Back_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/java/com/dometic/MTC/features/TC27_SecurityScreenMTC.feature");
formatter.feature({
  "name": "Testing an Dometic LMC application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying application Security screen UI",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@First"
    },
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Security Tile on landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "Security.iTapOnSecurityTileOnLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Security Header text is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Security.iVerifySecurityHeaderTextIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Security Arm Icon is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Security.iVerifySecurityArmIconIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Security current status is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Security.iVerifySecurityCurrentStatusIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Arm button is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Security.iVerifyArmButtonIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Arm button label is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Security.iVerifyArmButtonLabelIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Geo Fencing text is displayed in Security screen",
  "keyword": "Then "
});
formatter.match({
  "location": "Security.iVerifyGeoFencingTextIsDisplayedInSecurityScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Geo Fencing-toggle status is displayed in Security screen",
  "keyword": "Then "
});
formatter.match({
  "location": "Security.iVerifyGeoFencingToggleStatusIsDisplayedInSecurityScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Geo Fencing-toggle is displayed in Security screen",
  "keyword": "Then "
});
formatter.match({
  "location": "Security.iVerifyGeoFencingToggleIsDisplayedInSecurityScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Gio Fencing Radius from center toggle if it\u0027s already in OFF state",
  "keyword": "Then "
});
formatter.match({
  "location": "Security.iTapOnGioFencingRadiusFromCenterToggleIfItSAlreadyInOFFState()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Geo Fencing Radius from center text is displayed in Security screen",
  "keyword": "Then "
});
formatter.match({
  "location": "Security.iVerifyGeoFencingRadiusFromCenterTextIsDisplayedInSecurityScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Geo Fencing Radius from center Expand Icon is displayed in Security screen",
  "keyword": "Then "
});
formatter.match({
  "location": "Security.iVerifyGeoFencingRadiusFromCenterExpandIconIsDisplayedInSecurityScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Geo Fencing Alert Latency text is displayed in Security screen",
  "keyword": "Then "
});
formatter.match({
  "location": "Security.iVerifyGeoFencingAlertLatencyTextIsDisplayedInSecurityScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Geo Fencing Alert Latency Expand Icon is displayed in Security screen",
  "keyword": "Then "
});
formatter.match({
  "location": "Security.iVerifyGeoFencingAlertLatencyExpandIconIsDisplayedInSecurityScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Scroll up the page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iScrollUpThePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Door Window Alert toggle if it\u0027s already in OFF state",
  "keyword": "Then "
});
formatter.match({
  "location": "Security.iTapOnDoorWindowAlertToggleIfItSAlreadyInOFFState()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Door Window Alert text is displayed in Security screen",
  "keyword": "Then "
});
formatter.match({
  "location": "Security.iVerifyDoorWindowAlertTextIsDisplayedInSecurityScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Door Window Alert-toggle status is displayed in Security screen",
  "keyword": "Then "
});
formatter.match({
  "location": "Security.iVerifyDoorWindowAlertToggleStatusIsDisplayedInSecurityScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Door Window Alert-toggle is displayed in Security screen",
  "keyword": "Then "
});
formatter.match({
  "location": "Security.iVerifyDoorWindowAlertToggleIsDisplayedInSecurityScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Door Window Alert Alert Latency text is displayed in Security screen",
  "keyword": "Then "
});
formatter.match({
  "location": "Security.iVerifyDoorWindowAlertAlertLatencyTextIsDisplayedInSecurityScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Door Window Alert Alert Latency Expand Icon is displayed in Security screen",
  "keyword": "Then "
});
formatter.match({
  "location": "Security.iVerifyDoorWindowAlertAlertLatencyExpandIconIsDisplayedInSecurityScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Scroll up the page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iScrollUpThePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Theft Alert toggle if it\u0027s already in OFF state",
  "keyword": "Then "
});
formatter.match({
  "location": "Security.iTapOnTheftAlertToggleIfItSAlreadyInOFFState()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Theft Alert text is displayed in Security screen",
  "keyword": "Then "
});
formatter.match({
  "location": "Security.iVerifyTheftAlertTextIsDisplayedInSecurityScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Theft Alert-toggle status is displayed in Security screen",
  "keyword": "Then "
});
formatter.match({
  "location": "Security.iVerifyTheftAlertToggleStatusIsDisplayedInSecurityScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Theft Alert-toggle is displayed in Security screen",
  "keyword": "Then "
});
formatter.match({
  "location": "Security.iVerifyTheftAlertToggleIsDisplayedInSecurityScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Theft Alert Alert Latency text is displayed in Security screen",
  "keyword": "Then "
});
formatter.match({
  "location": "Security.iVerifyTheftAlertAlertLatencyTextIsDisplayedInSecurityScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Theft Alert Alert Latency Expand Icon is displayed in Security screen",
  "keyword": "Then "
});
formatter.match({
  "location": "Security.iVerifyTheftAlertAlertLatencyExpandIconIsDisplayedInSecurityScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Back Button",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.i_Tap_on_Back_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application Security screen(Gio Fencing-Radius From Center) Functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Security Tile on landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "Security.iTapOnSecurityTileOnLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Scroll up the page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iScrollUpThePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Radius from center in Gio Fencing Security",
  "keyword": "Then "
});
formatter.match({
  "location": "Security.iTapOnRadiusFromCenterInGioFencingSecurity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Scroll up the screen in Radius from center in Gio Fencing",
  "keyword": "Then "
});
formatter.match({
  "location": "Security.iScrollUpTheScreenInRadiusFromCenterInGioFencing()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify apply button is displayed in Radius from center in Gio Fencing",
  "keyword": "Then "
});
formatter.match({
  "location": "Security.iVerifyApplyButtonIsDisplayedInRadiusFromCenterInGioFencing()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Apply button in Radius from center in Gio Fencing",
  "keyword": "Then "
});
formatter.match({
  "location": "Security.iTapOnApplyButtonInRadiusFromCenterInGioFencing()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validated applied minutes is displayed in Radius from center in Gio Fencing",
  "keyword": "Then "
});
formatter.match({
  "location": "Security.iValidatedAppliedMinutesIsDisplayedInRadiusFromCenterInGioFencing()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Back Button",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.i_Tap_on_Back_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application Security screen(Gio Fencing-Alert Latency) Functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Security Tile on landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "Security.iTapOnSecurityTileOnLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Scroll up the page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iScrollUpThePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Alert Latency in Gio Fencing Security",
  "keyword": "Then "
});
formatter.match({
  "location": "Security.iTapOnAlertLatencyInGioFencingSecurity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Scroll up the screen in Alert Latency in Gio Fencing",
  "keyword": "Then "
});
formatter.match({
  "location": "Security.iScrollUpTheScreenInAlertLatencyInGioFencing()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify apply button is displayed in Alert Latency in Gio Fencing",
  "keyword": "Then "
});
formatter.match({
  "location": "Security.iVerifyApplyButtonIsDisplayedInAlertLatencyInGioFencing()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Apply button in Alert Latency in Gio Fencing",
  "keyword": "Then "
});
formatter.match({
  "location": "Security.iTapOnApplyButtonInAlertLatencyInGioFencing()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validated applied minutes is displayed in Alert Latency in Gio Fencing",
  "keyword": "Then "
});
formatter.match({
  "location": "Security.iValidatedAppliedMinutesIsDisplayedInAlertLatencyInGioFencing()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Back Button",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.i_Tap_on_Back_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application Security screen(Door/Window Alert-Alert Latency) Functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Security Tile on landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "Security.iTapOnSecurityTileOnLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Alert Latency in Door Window Alert Security",
  "keyword": "Then "
});
formatter.match({
  "location": "Security.iTapOnAlertLatencyInDoorWindowAlertSecurity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Scroll up the page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iScrollUpThePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Scroll up the screen in Alert Latency in Door Window Alert",
  "keyword": "Then "
});
formatter.match({
  "location": "Security.iScrollUpTheScreenInAlertLatencyInDoorWindowAlert()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify apply button is displayed in Alert Latency in Door Window Alert",
  "keyword": "Then "
});
formatter.match({
  "location": "Security.iVerifyApplyButtonIsDisplayedInAlertLatencyInDoorWindowAlert()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Apply button in Alert Latency in Door Window Alert",
  "keyword": "Then "
});
formatter.match({
  "location": "Security.iTapOnApplyButtonInAlertLatencyInDoorWindowAlert()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validated applied minutes is displayed in Alert Latency in Door Window Alert",
  "keyword": "Then "
});
formatter.match({
  "location": "Security.iValidatedAppliedMinutesIsDisplayedInAlertLatencyInDoorWindowAlert()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Back Button",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.i_Tap_on_Back_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application Security screen(Theft Alert-Alert Latency) Functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Security Tile on landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "Security.iTapOnSecurityTileOnLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Scroll up the page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iScrollUpThePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Alert Latency in Theft Alert Security",
  "keyword": "Then "
});
formatter.match({
  "location": "Security.iTapOnAlertLatencyInTheftAlertSecurity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Scroll up the page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iScrollUpThePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Scroll up the screen in Alert Latency in Theft Alert",
  "keyword": "Then "
});
formatter.match({
  "location": "Security.iScrollUpTheScreenInAlertLatencyInTheftAlert()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify apply button is displayed in Alert Latency in Theft Alert",
  "keyword": "Then "
});
formatter.match({
  "location": "Security.iVerifyApplyButtonIsDisplayedInAlertLatencyInTheftAlert()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Apply button in Alert Latency in Theft Alert",
  "keyword": "Then "
});
formatter.match({
  "location": "Security.iTapOnApplyButtonInAlertLatencyInTheftAlert()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validated applied minutes is displayed in Alert Latency in Theft Alert",
  "keyword": "Then "
});
formatter.match({
  "location": "Security.iValidatedAppliedMinutesIsDisplayedInAlertLatencyInTheftAlert()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Back Button",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.i_Tap_on_Back_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/java/com/dometic/MTC/features/TC28_Tracking_GioFencingScreenMTC.feature");
formatter.feature({
  "name": "Testing an Dometic LMC application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying application Tracking(Gio Fencing) screen UI",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@First"
    },
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Tracking tile",
  "keyword": "Then "
});
formatter.match({
  "location": "TrackingMTC.iTapOnTrackingTile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Tracking Header title",
  "keyword": "Then "
});
formatter.match({
  "location": "TrackingMTC.iVerifyTrackingHeaderTitle()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Boat Location text is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "TrackingMTC.iVerifyBoatLocationTextIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Latitude text is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "TrackingMTC.iVerifyLatitudeTextIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Longitude text is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "TrackingMTC.iVerifyLongitudeTextIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Geo Fencing text is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "TrackingMTC.iVerifyGeoFencingTextIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Geo Fencing-toggle status is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "TrackingMTC.iVerifyGeoFencingToggleStatusIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Geo Fencing-toggle is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "TrackingMTC.iVerifyGeoFencingToggleIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Gio Fencing toggle if it\u0027s already in OFF state",
  "keyword": "Then "
});
formatter.match({
  "location": "TrackingMTC.iTapOnGioFencingToggleIfItSAlreadyInOFFState()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Scroll up the page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iScrollUpThePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Radius from center text is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "TrackingMTC.iVerifyRadiusFromCenterTextIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Radius from center expandIcon is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "TrackingMTC.iVerifyRadiusFromCenterExpandIconIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Alert Latency text is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "TrackingMTC.iVerifyAlertLatencyTextIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Alert Latency expandIcon is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "TrackingMTC.iVerifyAlertLatencyExpandIconIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application Tracking(Gio Fencing) screen Functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Radius from center",
  "keyword": "Then "
});
formatter.match({
  "location": "TrackingMTC.iTapOnRadiusFromCenter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Scroll up the page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iScrollUpThePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Scroll up the screen in Radius from center",
  "keyword": "Then "
});
formatter.match({
  "location": "TrackingMTC.iScrollUpTheScreenInRadiusFromCenter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Apply button in Radius from center",
  "keyword": "Then "
});
formatter.match({
  "location": "TrackingMTC.iVerifyApplyButtonInRadiusFromCenter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Apply button in Radius from center",
  "keyword": "Then "
});
formatter.match({
  "location": "TrackingMTC.iTapOnApplyButtonInRadiusFromCenter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validated applied minutes is displayed in Radius from center",
  "keyword": "Then "
});
formatter.match({
  "location": "TrackingMTC.iValidatedAppliedMinutesIsDisplayedInRadiusFromCenter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Back Button",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.i_Tap_on_Back_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Tracking tile",
  "keyword": "Then "
});
formatter.match({
  "location": "TrackingMTC.iTapOnTrackingTile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap On Alert Latency",
  "keyword": "Then "
});
formatter.match({
  "location": "TrackingMTC.iTapOnAlertLatency()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Scroll up the page",
  "keyword": "Then "
});
formatter.match({
  "location": "SpanishLanguage.iScrollUpThePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Scroll up the screen in Alert Latency",
  "keyword": "Then "
});
formatter.match({
  "location": "TrackingMTC.iScrollUpTheScreenInAlertLatency()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Apply button in Alert Latency",
  "keyword": "Then "
});
formatter.match({
  "location": "TrackingMTC.iVerifyApplyButtonInAlertLatency()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Apply button in Alert Latency",
  "keyword": "Then "
});
formatter.match({
  "location": "TrackingMTC.iTapOnApplyButtonInAlertLatency()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Wait for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_for_Page_to_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validated applied minutes is displayed in Alert Latency",
  "keyword": "Then "
});
formatter.match({
  "location": "TrackingMTC.iValidatedAppliedMinutesIsDisplayedInAlertLatency()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Back Button",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.i_Tap_on_Back_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});