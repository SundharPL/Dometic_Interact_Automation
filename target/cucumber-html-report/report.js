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
  "name": "I verify successfully navigated to Dash Board screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iVerifySuccessfullyNavigatedToOnBoardingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify if user has navigated to the homescreen",
  "keyword": "Then "
});
formatter.match({
  "location": "OnboardingScreen.iVerifyIfUserHasNavigatedToTheHomescreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify if an empty homescreen is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "OnboardingScreen.iVerifyIfAnEmptyHomescreenIsDisplayed()"
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
  "name": "I Tap on Logout in Settings screen",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iTapOnLogoutInSettingsScreen()"
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
formatter.uri("src/test/java/com/dometic/MTC/features/TC08_SettingsScreen.feature");
formatter.feature({
  "name": "Testing an Dometic LMC application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying application Settings screen UI",
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
  "name": "I verify settings screen back button",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iVerifySettingsScreenBackButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify user profile photo is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iVerifyUserProfilePhotoIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify username is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iVerifyUsernameIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify user email is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iVerifyUserEmailIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify View Edit Account text is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iVerifyViewEditAccountTextIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Home text is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iVerifyHomeTextIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Notification Settings text is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iVerifyNotificationSettingsTextIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Device Management is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iVerifyDeviceManagementIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify App Settings is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iVerifyAppSettingsIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Logout is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iVerifyLogoutIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Version 1.6 is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iVerifyVersionIsDisplayed(double)"
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
  "name": "Verifying application Settings screen App Settings screen UI",
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
  "name": "I Tap on App Settings",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iTapOnAppSettings()"
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
  "name": "I verify App Settings Header text",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iVerifyAppSettingsHeaderText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Language text in App Settings page",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iVerifyLanguageTextInAppSettingsPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify selected language is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iVerifySelectedLanguageIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Temperature text in App Settings page",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iVerifyTemperatureTextInAppSettingsPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify celsiusText is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iVerifyCelsiusTextIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify fahrenheitText is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iVerifyFahrenheitTextIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Unit text is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iVerifyUnitTextIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify selected unit text is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iVerifySelectedUnitTextIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify App version text is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iVerifyAppVersionTextIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application Settings screen App Settings screen Functionality",
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
  "name": "I Tap on Language in App Settings page",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iTapOnLanguageInAppSettingsPage()"
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
  "name": "I Tap on Units in App Settings page",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iTapOnUnitsInAppSettingsPage()"
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
});