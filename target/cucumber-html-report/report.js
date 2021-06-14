$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/dometic/SDB/features/TC01_LaunchScreen.feature");
formatter.feature({
  "name": "Verifying application Splash screen in Dometic Marine application",
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
formatter.uri("src/test/java/com/dometic/SDB/features/TC02_SplashScreen.feature");
formatter.feature({
  "name": "Verifying application Splash screen in Dometic Marine application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying application Splash screen Functionality",
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
formatter.uri("src/test/java/com/dometic/SDB/features/TC05_LoginScreen.feature");
formatter.feature({
  "name": "Verifying application Login Screen in Dometic Marine application",
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
formatter.uri("src/test/java/com/dometic/SDB/features/TC06_DashboardScreen.feature");
formatter.feature({
  "name": "Verifying application DashBoard Screen in Dometic Marine application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying application DashBoard screen functionality",
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
});