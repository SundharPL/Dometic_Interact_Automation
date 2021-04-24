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
    },
    {
      "name": "@Device1"
    },
    {
      "name": "@Device2"
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
      "name": "@First1"
    },
    {
      "name": "@sanity1"
    },
    {
      "name": "@Device1"
    },
    {
      "name": "@Device2"
    }
  ]
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
formatter.uri("src/test/java/com/dometic/MTC/features/TC05_LoginScreen.feature");
formatter.feature({
  "name": "Testing an Dometic LMC application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying application Login Functionality with valid credentials",
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
  "name": "I enter Valid Email in Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iEnterValidEmailInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Valid Password in Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iEnterValidPasswordInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on an Login button in Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iTapOnAnLoginButtonInLoginPage()"
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
  "name": "I verify successfully navigated to On boarding screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iVerifySuccessfullyNavigatedToOnBoardingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/java/com/dometic/MTC/features/TC06_OnboardingScreen.feature");
formatter.feature({
  "name": "Testing an Dometic LMC application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying application On boarding screen functionality",
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
  "name": "I entered into On boarding screen",
  "keyword": "Then "
});
formatter.match({
  "location": "OnboardingScreen.iEnteredIntoOnBoardingScreen()"
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
  "name": "I Tap on Yes button",
  "keyword": "Then "
});
formatter.match({
  "location": "OnboardingScreen.iTapOnYesButton()"
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
  "name": "I Tap on the MTC Thing I\u0027d",
  "keyword": "Then "
});
formatter.match({
  "location": "OnboardingScreen.iTapOnTheMTCThingID()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Landing screen is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "OnboardingScreen.landingScreenIsDisplayed()"
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
formatter.uri("src/test/java/com/dometic/MTC/features/TC11_Tracking_GioFencingScreenMTC.feature");
formatter.feature({
  "name": "Testing an Dometic LMC application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying application Tracking(Gio Fencing) screen UI \u0026 Functionality",
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
formatter.uri("src/test/java/com/dometic/MTC/features/TC12_BottomLayoutScreenMTC.feature");
formatter.feature({
  "name": "Testing an Dometic LMC application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying application Bottom Layout screen UI",
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
  "name": "I Verify Home option in Bottom layout",
  "keyword": "Then "
});
formatter.match({
  "location": "BottomLayoutMTC.iVerifyHomeOptionInBottomLayout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Home option in Bottom layout",
  "keyword": "Then "
});
formatter.match({
  "location": "BottomLayoutMTC.iTapOnHomeOptionInBottomLayout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Areas option in Bottom layout",
  "keyword": "Then "
});
formatter.match({
  "location": "BottomLayoutMTC.iVerifyAreasOptionInBottomLayout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Areas option in Bottom layout",
  "keyword": "Then "
});
formatter.match({
  "location": "BottomLayoutMTC.iTapOnAreasOptionInBottomLayout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Proride option in Bottom layout",
  "keyword": "Then "
});
formatter.match({
  "location": "BottomLayoutMTC.iVerifyProrideOptionInBottomLayout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Proride option in Bottom layout",
  "keyword": "Then "
});
formatter.match({
  "location": "BottomLayoutMTC.iTapOnProrideOptionInBottomLayout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Switching option in Bottom layout",
  "keyword": "Then "
});
formatter.match({
  "location": "BottomLayoutMTC.iVerifySwitchingOptionInBottomLayout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Switching option in Bottom layout",
  "keyword": "Then "
});
formatter.match({
  "location": "BottomLayoutMTC.iTapOnSwitchingOptionInBottomLayout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Modes option in Bottom layout",
  "keyword": "Then "
});
formatter.match({
  "location": "BottomLayoutMTC.iVerifyModesOptionInBottomLayout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Modes option in Bottom layout",
  "keyword": "Then "
});
formatter.match({
  "location": "BottomLayoutMTC.iTapOnModesOptionInBottomLayout()"
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
  "name": "Verifying application Bottom Layout screen UI",
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
  "name": "I Tap on Home option in Bottom layout",
  "keyword": "Then "
});
formatter.match({
  "location": "BottomLayoutMTC.iTapOnHomeOptionInBottomLayout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Areas option in Bottom layout",
  "keyword": "Then "
});
formatter.match({
  "location": "BottomLayoutMTC.iTapOnAreasOptionInBottomLayout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Proride option in Bottom layout",
  "keyword": "Then "
});
formatter.match({
  "location": "BottomLayoutMTC.iTapOnProrideOptionInBottomLayout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Switching option in Bottom layout",
  "keyword": "Then "
});
formatter.match({
  "location": "BottomLayoutMTC.iTapOnSwitchingOptionInBottomLayout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Validate Switching option is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "BottomLayoutMTC.iValidateSwitchingOptionIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Modes option in Bottom layout",
  "keyword": "Then "
});
formatter.match({
  "location": "BottomLayoutMTC.iTapOnModesOptionInBottomLayout()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Validate Modes option is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "BottomLayoutMTC.iValidateModesOptionIsDisplayed()"
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
formatter.uri("src/test/java/com/dometic/MTC/features/TC24_Settings.feature");
formatter.feature({
  "name": "Testing an Dometic LMC application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying application Settings screen functionality",
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
  "name": "I verify hamburger menu in landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iVerifyHamburgerMenuInLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on hamburger menu in landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iTapOnHamburgerMenuInLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify SETTINGS Text displayed in the top of the app",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iVerifySETTINGSTextDisplayedInTheTopOfTheApp()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:496)\r\n\tat org.testng.Assert.assertTrue(Assert.java:42)\r\n\tat org.testng.Assert.assertTrue(Assert.java:52)\r\n\tat com.dometic.MTC.qa.util.Baseclass.asserttext(Baseclass.java:91)\r\n\tat com.dometic.MTC.stepdefinition.Settings.iVerifySETTINGSTextDisplayedInTheTopOfTheApp(Settings.java:29)\r\n\tat ✽.I Verify SETTINGS Text displayed in the top of the app(src/test/java/com/dometic/MTC/features/TC24_Settings.feature:7)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify application Logout Functionality",
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
  "name": "I verify Log out is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iVerifyLogOutIsDisplayed()"
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
  "name": "I Tap on Logout in Settings",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iTapOnLogoutInSettings()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});