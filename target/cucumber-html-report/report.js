$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/dometic/L2/features/TC01_LaunchScreen.feature");
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
formatter.uri("src/test/java/com/dometic/L2/features/TC02_SplashScreen.feature");
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
formatter.uri("src/test/java/com/dometic/L2/features/TC05_LoginScreen.feature");
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
formatter.uri("src/test/java/com/dometic/L2/features/TC06_OnboardingScreen.feature");
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
formatter.uri("src/test/java/com/dometic/L2/features/TC07_LandingScreen.feature");
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
formatter.scenario({
  "name": "Verifying application Bottom Layout screen functionality",
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
  "name": "I Verify the All option in the Bottom layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheAllOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Device option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheDeviceOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Tanks option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheTanksOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the climate option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheClimateOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Scene option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheSceneOptionInTheBottomLayoutOfLandingScreen()"
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
  "name": "I Tap on climate option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnClimateOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Validated Corresponding Climate tile is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iValidatedCorrespondingClimateTileIsDisplayed()"
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
  "name": "I Tap on Device option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnDeviceOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Validate Corresponding Devices tile is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iValidateCorrespondingDevicesTileIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Tanks option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnTanksOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Validate Corresponding Tank tile is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iValidateCorrespondingTankTileIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Scene option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnSceneOptionInTheBottomLayoutOfLandingScreen()"
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
  "name": "I Tap on All option in the Bottom layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnAllOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application Bottom Layout screen with ViewOption(Tile View-All Devices) functionality",
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
  "name": "I Tap on View option button in landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewOption.iTapOnViewOptionButtonInLandingScreen()"
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
  "name": "I Tap on Tile View Options",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewOption.iTapOnTileViewOptions()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on All Devices",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewOption.iTapOnAllDevices()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Cancel Button",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewOption.iTapOnCancelButton()"
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
  "name": "I Verify the All option in the Bottom layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheAllOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Device option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheDeviceOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Tanks option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheTanksOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the climate option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheClimateOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Scene option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheSceneOptionInTheBottomLayoutOfLandingScreen()"
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
  "name": "I Tap on climate option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnClimateOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Validated Corresponding Climate tile is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iValidatedCorrespondingClimateTileIsDisplayed()"
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
  "name": "I Tap on Device option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnDeviceOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Validate Corresponding Devices tile is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iValidateCorrespondingDevicesTileIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Tanks option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnTanksOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Validate Corresponding Tank tile is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iValidateCorrespondingTankTileIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Scene option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnSceneOptionInTheBottomLayoutOfLandingScreen()"
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
  "name": "I Tap on All option in the Bottom layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnAllOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application Bottom Layout screen with ViewOption(Tile View-Connected Devices) functionality",
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
  "name": "I Tap on View option button in landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewOption.iTapOnViewOptionButtonInLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Connected Devices",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewOption.iTapOnConnectedDevices()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Cancel Button",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewOption.iTapOnCancelButton()"
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
  "name": "I Verify the All option in the Bottom layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheAllOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Device option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheDeviceOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Tanks option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheTanksOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the climate option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheClimateOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Scene option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheSceneOptionInTheBottomLayoutOfLandingScreen()"
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
  "name": "I Tap on climate option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnClimateOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Validated Corresponding Climate tile is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iValidatedCorrespondingClimateTileIsDisplayed()"
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
  "name": "I Tap on Device option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnDeviceOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Validate Corresponding Devices tile is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iValidateCorrespondingDevicesTileIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Tanks option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnTanksOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Validate Corresponding Tank tile is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iValidateCorrespondingTankTileIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Scene option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnSceneOptionInTheBottomLayoutOfLandingScreen()"
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
  "name": "I Tap on All option in the Bottom layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnAllOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application Bottom Layout screen with ViewOption(Tile View-Non Connected Devices) functionality",
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
  "name": "I Tap on View option button in landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewOption.iTapOnViewOptionButtonInLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Non Connected Devices",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewOption.iTapOnNonConnectedDevices()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Cancel Button",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewOption.iTapOnCancelButton()"
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
  "name": "I Verify the All option in the Bottom layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheAllOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Device option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheDeviceOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Tanks option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheTanksOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the climate option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheClimateOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Scene option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheSceneOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Device option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnDeviceOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Tanks option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnTanksOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Scene option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnSceneOptionInTheBottomLayoutOfLandingScreen()"
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
  "name": "I Tap on All option in the Bottom layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnAllOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application Bottom Layout screen with ViewOption(List View-All Devices) functionality",
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
  "name": "I Tap on View option button in landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewOption.iTapOnViewOptionButtonInLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on List View Options",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewOption.iTapOnListViewOptions()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on All Devices",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewOption.iTapOnAllDevices()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Cancel Button",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewOption.iTapOnCancelButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the All option in the Bottom layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheAllOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Device option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheDeviceOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Tanks option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheTanksOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the climate option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheClimateOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Scene option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheSceneOptionInTheBottomLayoutOfLandingScreen()"
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
  "name": "I Tap on climate option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnClimateOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Validated Corresponding Climate tile is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iValidatedCorrespondingClimateTileIsDisplayed()"
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
  "name": "I Tap on Device option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnDeviceOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Validate Corresponding Devices tile is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iValidateCorrespondingDevicesTileIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Tanks option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnTanksOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Validate Corresponding Tank tile is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iValidateCorrespondingTankTileIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Scene option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnSceneOptionInTheBottomLayoutOfLandingScreen()"
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
  "name": "I Tap on All option in the Bottom layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnAllOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application Bottom Layout screen with ViewOption(List View-Connected Devices) functionality",
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
  "name": "I Tap on View option button in landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewOption.iTapOnViewOptionButtonInLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Connected Devices",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewOption.iTapOnConnectedDevices()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Cancel Button",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewOption.iTapOnCancelButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the All option in the Bottom layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheAllOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Device option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheDeviceOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Tanks option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheTanksOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the climate option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheClimateOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Scene option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheSceneOptionInTheBottomLayoutOfLandingScreen()"
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
  "name": "I Tap on climate option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnClimateOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Validated Corresponding Climate tile is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iValidatedCorrespondingClimateTileIsDisplayed()"
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
  "name": "I Tap on Device option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnDeviceOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Validate Corresponding Devices tile is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iValidateCorrespondingDevicesTileIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Tanks option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnTanksOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Validate Corresponding Tank tile is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iValidateCorrespondingTankTileIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Scene option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnSceneOptionInTheBottomLayoutOfLandingScreen()"
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
  "name": "I Tap on All option in the Bottom layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnAllOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application Bottom Layout screen with ViewOption(List View-Non Connected Devices) functionality",
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
  "name": "I Tap on View option button in landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewOption.iTapOnViewOptionButtonInLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Non Connected Devices",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewOption.iTapOnNonConnectedDevices()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Cancel Button",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewOption.iTapOnCancelButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the All option in the Bottom layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheAllOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Device option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheDeviceOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Tanks option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheTanksOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the climate option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheClimateOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the Scene option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheSceneOptionInTheBottomLayoutOfLandingScreen()"
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
  "name": "I Tap on Device option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnDeviceOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Tanks option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnTanksOptionInTheBottomLayoutOfLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Scene option in the Bottom  layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnSceneOptionInTheBottomLayoutOfLandingScreen()"
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
  "name": "I Tap on All option in the Bottom layout of Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnAllOptionInTheBottomLayoutOfLandingScreen()"
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
  "name": "I Tap on View option button in landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewOption.iTapOnViewOptionButtonInLandingScreen()"
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
  "name": "I Tap on Tile View Options",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewOption.iTapOnTileViewOptions()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on All Devices",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewOption.iTapOnAllDevices()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Cancel Button",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewOption.iTapOnCancelButton()"
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
formatter.uri("src/test/java/com/dometic/L2/features/TC08_PoweScreen.feature");
formatter.feature({
  "name": "Testing an Dometic LMC application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying application Power screen(Batteries) UI",
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
  "name": "I Tap on the Power in Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnThePowerInLandingScreen()"
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
  "name": "I Verify BATTERIES header text",
  "keyword": "Then "
});
formatter.match({
  "location": "Power.iVerifyBATTERIESHeaderText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify the battery voltage icon",
  "keyword": "Then "
});
formatter.match({
  "location": "Power.iVerifyTheBatteryVoltageIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Engine-1 text",
  "keyword": "Then "
});
formatter.match({
  "location": "Power.iVerifyTheEngineText(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the STBD text",
  "keyword": "Then "
});
formatter.match({
  "location": "Power.iVerifyTheSTBDText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the House text",
  "keyword": "Then "
});
formatter.match({
  "location": "Power.iVerifyTheHouseText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Measured voltage text",
  "keyword": "Then "
});
formatter.match({
  "location": "Power.iVerifyTheMeasuredVoltageText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Measured voltage value",
  "keyword": "Then "
});
formatter.match({
  "location": "Power.iVerifyTheMeasuredVoltageValue()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Status text",
  "keyword": "Then "
});
formatter.match({
  "location": "Power.iVerifyTheStatusText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Status value",
  "keyword": "Then "
});
formatter.match({
  "location": "Power.iVerifyTheStatusValue()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the UsageAnalysis text",
  "keyword": "Then "
});
formatter.match({
  "location": "Power.iVerifyTheUsageAnalysisText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the UsageAnalysis Down Arrow",
  "keyword": "Then "
});
formatter.match({
  "location": "Power.iVerifyTheUsageAnalysisDownArrow()"
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
  "name": "I verify the Alert text",
  "keyword": "Then "
});
formatter.match({
  "location": "Power.iVerifyTheAlertText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Alert toggle status",
  "keyword": "Then "
});
formatter.match({
  "location": "Power.iVerifyTheAlertToggleStatus()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Alert toggle",
  "keyword": "Then "
});
formatter.match({
  "location": "Power.iVerifyTheAlertToggle()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Notify Me text",
  "keyword": "Then "
});
formatter.match({
  "location": "Power.iVerifyTheNotifyMeText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Notify Me toggle status",
  "keyword": "Then "
});
formatter.match({
  "location": "Power.iVerifyTheNotifyMeToggleStatus()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Notify Me toggle",
  "keyword": "Then "
});
formatter.match({
  "location": "Power.iVerifyTheNotifyMeToggle()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Battery voltage text",
  "keyword": "Then "
});
formatter.match({
  "location": "Power.iVerifyTheBatteryVoltageText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the Battery voltage value",
  "keyword": "Then "
});
formatter.match({
  "location": "Power.iVerifyTheBatteryVoltageValue()"
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
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/java/com/dometic/L2/features/TC09_LightScreen.feature");
formatter.feature({
  "name": "Testing an Dometic LMC application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying application Light screen UI",
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
  "name": "I Tap on Light in Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnLightInLandingScreen()"
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
  "name": "I Verified Light screen header",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifiedLightScreenHeader()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verified Assist Handle Text",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifiedAssistHandleText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verified Utility center Text",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifiedUtilityCenterText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verified Accent Light Text",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifiedAccentLightText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verified Shower Text",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifiedShowerText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verified Ceiling Text",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifiedCeilingText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verified Bedroom ceiling Text",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifiedBedroomCeilingText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verified Galley Text",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifiedGalleyText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verified Lounge Text",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifiedLoungeText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verified Awning Light Text",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifiedAwningLightText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verified Bedroom Overhead Text",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifiedBedroomOverheadText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verified Porch Light Text",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifiedPorchLightText()"
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
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/java/com/dometic/L2/features/TC13_TankFreshWaterScreen.feature");
formatter.feature({
  "name": "Testing an Dometic LMC application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying application Tank Fresh Water screen UI",
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
  "name": "I Tap on Tank Fresh Water in Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iTapOnTankFreshWaterInLandingScreen()"
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
  "name": "I Verify the fresh water level text",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheFreshWaterLevelText()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the fresh text on button",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTheFreshTextOnButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the predictive data in Fresh water text",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyThePredictiveDataInFreshWaterText()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application Tank Fresh Water screen functionality",
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
  "name": "I verify Tank-progressIndicator in Tank Fresh Water",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iVerifyTankProgressIndicatorInTankFreshWater()"
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
  "name": "I Validated Tank-progressIndicator(Fresh Water) percentage is displayed in Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingPage.iValidatedTankProgressIndicatorFreshWaterPercentageIsDisplayedInLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/java/com/dometic/L2/features/TC17_Settings.feature");
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
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Zone Management UI validation",
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
  "name": "I verify Zone Management text is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iVerifyZoneManagementTextIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Zone Management in Settings",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iTapOnZoneManagementInSettings()"
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
  "name": "I Verify ALL ZONES in Zone Management",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iVerifyALLZONESInZoneManagement()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Edit text in Zone Management",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iVerifyEditTextInZoneManagement()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Limited to 4 Zones only text in Zone Management",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iVerifyLimitedToZonesOnlyTextInZoneManagement(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Add ZoneIcon in Zone Management",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iVerifyAddZoneIconInZoneManagement()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Zone Management Functionality with Empty Zone name",
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
  "name": "I Tap on Edit in ALL ZONES",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iTapOnEditInALLZONES()"
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
  "name": "I Tap on Rename in ALL ZONES",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iTapOnRenameInALLZONES()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on the Zone name",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iTapOnTheZoneName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I clear the previous zone name",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iClearThePreviousZoneName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I save the Zone",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iSaveTheZone()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Zone Name can not be empty message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iVerifyZoneNameCanNotBeEmptyMessageIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Zone Management Functionality with more then 10 character",
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
  "name": "I Enter the zone name more then the limit",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iEnterTheZoneNameMoreThenTheLimit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify \"10/10\" character message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iVerifyCharacterMessageIsDisplayed(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Zone Management Functionality with Zone name",
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
  "name": "I Tap on the Zone name",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iTapOnTheZoneName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I clear the previous zone name",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iClearThePreviousZoneName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter the Zone name",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iEnterTheZoneName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Save",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iTapOnSave()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Zone Management Delete Zone Functionality",
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
  "name": "I Tap on Edit in ALL ZONES",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iTapOnEditInALLZONES()"
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
  "name": "I Tap on the Delete Zone Icon",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iTapOnTheDeleteZoneIcon()"
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
  "name": "I Tap on YES, DELETE IT Button",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iTapOnYESDELETEITButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify Zone Management Add Zone Functionality",
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
  "name": "I Tap on the Add Zone Icon",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iTapOnTheAddZoneIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Select the zone",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iSelectTheZone()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Enter the New Zone name",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iEnterTheNewZoneName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I SAVE the Zone",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iSAVETheZone()"
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