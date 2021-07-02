$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/dometic/L1/features/TC01_LaunchScreen.feature");
formatter.feature({
  "name": "Verifying application Splash screen in Dometic LMC/ERIBA application",
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
  "location": "Basestepdefinition.i_Launch_the_application()"
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
formatter.uri("src/test/java/com/dometic/L1/features/TC02_Signup.feature");
formatter.feature({
  "name": "Verifying application Signup page in Dometic LMC/ERIBA application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying application Signup Screen UI",
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
  "name": "I Tap on signup link in login page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.iTapOnSignupLinkInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Email Inputbox is displayed in Signup Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.Signup_Page_EmailInputbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Password Inputbox is displayed in Signup Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.Signup_Page_Password_Inputbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Confirm Password Inputbox is displayed in Signup Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.Signup_Page_confirm_password_Inputbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Signup button is displayed in Signup Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.Signup_Page_Signupbutton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on term and conditions checkbox",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.iTapOnTermAndConditionsCheckbox()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Empty Email and Enter the password and verify password",
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
  "name": "I left the Email blank",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.iLeftTheEmailBlank()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Password in Signup Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.Signup_enter_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter confirm password in Signup Page",
  "keyword": "And "
});
formatter.match({
  "location": "Signup.Signup_enter_confirmpassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Signup button",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.iTapOnSignupButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Email field is required Error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.emailFieldIsRequiredErrorMessageIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Enter the Email and Empty password and verify password",
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
  "name": "I enter Email in Signup Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.Signup_enter_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I left the password blank",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.iLeftThePasswordBlank()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter confirm password in Signup Page",
  "keyword": "And "
});
formatter.match({
  "location": "Signup.Signup_enter_confirmpassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Signup button",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.iTapOnSignupButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The password field is required Error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.thePasswordFieldIsRequiredErrorMessageIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Doesn\u0027t match Error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.doesnTMatchErrorMessageIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Enter Valid email valid password and empty verify password",
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
  "name": "I enter Email in Signup Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.Signup_enter_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Password in Signup Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.Signup_enter_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I left the Verify password blank",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.iLeftTheVerifyPasswordBlank()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Signup button",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.iTapOnSignupButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The verify password field is required Error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.theVerifyPasswordFieldIsRequiredErrorMessageIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Enter inValid email, password and valid verify password",
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
  "name": "I enter Invalid Email in Signup Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.iEnterInvalidEmailInSignupPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Password in Signup Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.Signup_enter_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter confirm password in Signup Page",
  "keyword": "And "
});
formatter.match({
  "location": "Signup.Signup_enter_confirmpassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Signup button",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.iTapOnSignupButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The email must be a valid email address Error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.theEmailMustBeAValidEmailAddressErrorMessageIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Enter Valid email, invalid password and valid verify password",
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
  "name": "I enter Email in Signup Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.Signup_enter_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter invalid Password in Signup Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.iEnterInvalidPasswordInSignupPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter confirm password in Signup Page",
  "keyword": "And "
});
formatter.match({
  "location": "Signup.Signup_enter_confirmpassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Signup button",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.iTapOnSignupButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The password doesn\u0027t satisfy the conditions Error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.thePasswordDoesnTSatisfyTheConditionsErrorMessageIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Doesn\u0027t match Error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.doesnTMatchErrorMessageIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Enter Valid email, password and invalid verify password",
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
  "name": "I enter Email in Signup Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.Signup_enter_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Password in Signup Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.Signup_enter_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter invalid verify password password in Signup Page",
  "keyword": "And "
});
formatter.match({
  "location": "Signup.iEnterInvalidVerifyPasswordPasswordInSignupPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Signup button",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.iTapOnSignupButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Doesn\u0027t match Error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.doesnTMatchErrorMessageIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application Signup Screen Functionality with invalid credentials(Checking password text field with below 8 character)",
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
  "name": "I enter Email in Signup Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.Signup_enter_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter an password below 8 characters in Password Field in Signup Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.iEnterAnPasswordBelowCharactersInPasswordFieldInSignupPage(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter an password below 8 characters in confirm Password Field in Signup Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.iEnterAnPasswordBelowCharactersInConfirmPasswordFieldInSignupPage(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Signup button",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.iTapOnSignupButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The password doesn\u0027t satisfy the conditions Error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.thePasswordDoesnTSatisfyTheConditionsErrorMessageIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application Signup Screen Functionality with invalid credentials(Checking password text field with Above 8 character)",
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
  "name": "I enter Email in Signup Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.Signup_enter_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter an password above 8 characters in Password Field in Signup Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.iEnterAnPasswordAboveCharactersInPasswordFieldInSignupPage(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter an password above 8 characters in confirm Password Field in Signup Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.iEnterAnPasswordAboveCharactersInConfirmPasswordFieldInSignupPage(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Signup button",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.iTapOnSignupButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The password doesn\u0027t satisfy the conditions Error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.thePasswordDoesnTSatisfyTheConditionsErrorMessageIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application Signup Screen Functionality with invalid credentials(Checking text field allowing Emoji\u0027s)",
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
  "name": "I enter an Emoji\u0027s in Email Field in Signup Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.iEnterAnEmojiSInEmailFieldInSignupPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Password in Signup Page",
  "keyword": "And "
});
formatter.match({
  "location": "Signup.Signup_enter_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter confirm password in Signup Page",
  "keyword": "And "
});
formatter.match({
  "location": "Signup.Signup_enter_confirmpassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Send button in Signup Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.Signup_enter_signupbutton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The email must be a valid email address Error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.theEmailMustBeAValidEmailAddressErrorMessageIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application Signup Screen Functionality with invalid credentials(Checking text field allowing Special Character)",
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
  "name": "I enter an Special Character in Email Field in Signup Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.iEnterAnSpecialCharacterInEmailFieldInSignupPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Password in Signup Page",
  "keyword": "And "
});
formatter.match({
  "location": "Signup.Signup_enter_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter confirm password in Signup Page",
  "keyword": "And "
});
formatter.match({
  "location": "Signup.Signup_enter_confirmpassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Send button in Signup Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.Signup_enter_signupbutton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The email must be a valid email address Error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.theEmailMustBeAValidEmailAddressErrorMessageIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application Signup Functionality",
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
  "name": "I Tap on signup link in login page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.iTapOnSignupLinkInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Email in Signup Page",
  "keyword": "And "
});
formatter.match({
  "location": "Signup.Signup_enter_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Password in Signup Page",
  "keyword": "And "
});
formatter.match({
  "location": "Signup.Signup_enter_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter confirm password in Signup Page",
  "keyword": "And "
});
formatter.match({
  "location": "Signup.Signup_enter_confirmpassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Send button in Signup Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.Signup_enter_signupbutton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Ok button.",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.iTapOnOkButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on login link in signup page",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.iTapOnLoginLinkInSignupPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/java/com/dometic/L1/features/TC03_ForgotPassword.feature");
formatter.feature({
  "name": "Verifying application Forgot Password page in Dometic LMC/ERIBA application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying application Forgot Password Screen UI",
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
  "name": "I verify Forgot your password text is displayed in Forgot password Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Forgotpassword.iVerifyForgotYourPasswordTextIsDisplayeddInForgotPasswordPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Forgot your password content text is displayed in Forgot password Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Forgotpassword.iVerifyForgotYourPasswordContentTextIsDisplayedInForgotPasswordPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify E-mail (case sensitive) label is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Forgotpassword.iVerifyEMailCaseSensitiveLabelIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Forgot Email Input text field is displayed in Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Forgotpassword.Forgotpassword_Page_EmailInputbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify Send button is displayed in Forgot password Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Forgotpassword.Forgotpassword_Page_PasswordInputbox()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application Forgot Password Screen Functionality with invalid credentials(Checking password text field with below 8 character)",
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
  "name": "I enter less then 8 characters in Email Field in Forgot Password Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Forgotpassword.iEnterLessThenCharactersInEmailFieldInForgotPasswordPage(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Send button in Forgot Password Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Forgotpassword.Forgotpassword_enter_credentials_Forgotpassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The password doesn\u0027t satisfy the conditions Error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.thePasswordDoesnTSatisfyTheConditionsErrorMessageIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application Forgot Password Screen Functionality with invalid credentials(Checking password text field with Above 8 character)",
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
  "name": "I enter more then 8 characters in Email Field in Forgot Password Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Forgotpassword.iEnterMoreThenCharactersInEmailFieldInForgotPasswordPage(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Send button in Forgot Password Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Forgotpassword.Forgotpassword_enter_credentials_Forgotpassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The password doesn\u0027t satisfy the conditions Error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.thePasswordDoesnTSatisfyTheConditionsErrorMessageIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application Forgot Password Functionality(Checking text field allowing Emoji\u0027s)",
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
  "name": "I enter an Emoji\u0027s in Email Field in Forgot Password Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Forgotpassword.iEnterAnEmojiSInEmailFieldInForgotPasswordPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Send button in Forgot Password Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Forgotpassword.Forgotpassword_enter_credentials_Forgotpassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The email must be a valid email address Error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.theEmailMustBeAValidEmailAddressErrorMessageIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application Forgot Password Functionality(Checking text field allowing Special Character)",
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
  "name": "I enter an Special Character in Email Field in Forgot Password Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Forgotpassword.iEnterAnSpecialCharacterInEmailFieldInForgotPasswordPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Send button in Forgot Password Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Forgotpassword.Forgotpassword_enter_credentials_Forgotpassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The email must be a valid email address Error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.theEmailMustBeAValidEmailAddressErrorMessageIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application Forgot Password Functionality",
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
  "name": "I enter Email in Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "Forgotpassword.Forgotpassword_enter_invalid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Send button in Forgot Password Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Forgotpassword.Forgotpassword_enter_credentials_Forgotpassword()"
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
  "name": "I Tap on Ok button.",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.iTapOnOkButton()"
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
formatter.uri("src/test/java/com/dometic/L1/features/TC04_LoginScreen.feature");
formatter.feature({
  "name": "Verifying application Login screen in Dometic LMC/ERIBA application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying application Login Page",
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
  "name": "I verify Welcome! Text is displayed in login screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iVerifyWelcomeTextIsDisplayedInLoginScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Log In Text is displayed in login screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iVerifyLogInTextIsDisplayedInLoginScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify E-mail label is displayed in login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iVerifyEMailLabelIsDisplayedInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Password label is displayed in login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iVerifyPasswordLabelIsDisplayedInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Forgot password? link is displayed in login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iVerifyForgotPasswordLinkIsDisplayedInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Don\u0027t have an account? text is displayed in login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iVerifyDonTHaveAnAccountTextIsDisplayedInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Sign Up link is displayed in login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iVerifySignUpLinkIsDisplayedInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Login CTA is displayed in login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iVerifyLoginCTAIsDisplayedInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with blank email and blank password field",
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
  "name": "I verify black email in email text field",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iVerifyBlackEmailInEmailTextField()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify black password in password text field",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iVerifyBlackPasswordInPasswordTextField()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Login button in Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iTapOnLoginButtonInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Email field is required Error message is displayed in login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.theEmailFieldIsRequiredErrorMessageIsDisplayedInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Password field is required Error message is displayed in login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.thePasswordFieldIsRequiredErrorMessageIsDisplayedInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with Invalid Email with valid password",
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
  "name": "I enter Invalid Email in Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iEnterInvalidEmailInLoginPage()"
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
  "name": "I Tap on Login button in Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iTapOnLoginButtonInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.errorMessageIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with Valid email and invalid password",
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
  "name": "I enter an Invalid Password in Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iEnterAnInvalidPasswordInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Login button in Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iTapOnLoginButtonInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The password must be at least 8 characters. Error message is displayed in login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.thePasswordMustBeAtLeastCharactersErrorMessageIsDisplayedInLoginPage(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with Valid email and blank password",
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
  "name": "I verify black password in password text field",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iVerifyBlackPasswordInPasswordTextField()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Login button in Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iTapOnLoginButtonInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Password field is required Error message is displayed in login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.thePasswordFieldIsRequiredErrorMessageIsDisplayedInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with empty email and valid password",
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
  "name": "I verify black email in email text field",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iVerifyBlackEmailInEmailTextField()"
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
  "name": "I Tap on Login button in Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iTapOnLoginButtonInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Email field is required Error message is displayed in login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.theEmailFieldIsRequiredErrorMessageIsDisplayedInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application Login Functionality with invalid credentials",
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
  "name": "I enter Invalid Email in Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iEnterInvalidEmailInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter an Invalid Password in Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iEnterAnInvalidPasswordInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Login button in Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iTapOnLoginButtonInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.errorMessageIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application Login Functionality with invalid credentials(Checking text field allowing Emoji\u0027s)",
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
  "name": "I enter an Emoji\u0027s in Email Field in Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iEnterAnEmojiSInEmailFieldInLoginPage()"
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
  "name": "I Tap on Login button in Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iTapOnLoginButtonInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The email must be a valid email address Error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.theEmailMustBeAValidEmailAddressErrorMessageIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application Login Functionality with invalid credentials(Checking text field allowing Special Character)",
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
  "name": "I enter an Special Character in Email Field in Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iEnterAnSpecialCharacterInEmailFieldInLoginPage()"
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
  "name": "I Tap on Login button in Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iTapOnLoginButtonInLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The email must be a valid email address Error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Signup.theEmailMustBeAValidEmailAddressErrorMessageIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "I verify successfully navigated to DashBoard screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iVerifySuccessfullyNavigatedToOnBoardingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify if user has navigated to the homescreen.",
  "keyword": "Then "
});
formatter.match({
  "location": "OnboardingScreen.iVerifyIfUserHasNavigatedToTheHomescreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify if an empty homescreen is displayed.",
  "keyword": "Then "
});
formatter.match({
  "location": "OnboardingScreen.iVerifyIfAnEmptyHomescreenIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on hamburger menu in landing screen.",
  "keyword": "Then "
});
formatter.match({
  "location": "OnboardingScreen.iTapOnHamburgerMenuInLandingScreen()"
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
  "name": "I Tap on Logout in Settings screen.",
  "keyword": "Then "
});
formatter.match({
  "location": "OnboardingScreen.iTapOnLogoutInSettingsScreen()"
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
formatter.uri("src/test/java/com/dometic/L1/features/TC05_DashboardScreen.feature");
formatter.feature({
  "name": "Verifying application Dashboard screen in Dometic LMC/ERIBA application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying application Dashboard screen functionality",
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
  "name": "I enter Valid Email.",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iEnterValidEmail()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Valid Password.",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iEnterValidPassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on an Login button.",
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
  "name": "I entered into Home Page.",
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
  "name": "I Tap on Marine Tile.",
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
  "name": "I Wait until Landing screen is displayed.",
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
formatter.uri("src/test/java/com/dometic/L1/features/TC06_LandingScreen.feature");
formatter.feature({
  "name": "Verifying application Landing screen in Dometic LMC/ERIBA application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying application Landing screen functionality",
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
  "name": "I entered into Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingScreen.iEnteredIntoLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Climate Tile is displayed in Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingScreen.iVerifyClimateOFFIsDisplayedInLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Climate Aircondition text is displayed in landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingScreen.iVerifyClimateAirconditionTextIsDisplayedInLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Climate unit is displayed in landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingScreen.iVerifyClimateUnitIsDisplayedInLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Climate Outside is displayed in Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingScreen.iVerifyClimateOutsideIsDisplayedInLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Climate Outside text is displayed in Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingScreen.iVerifyClimateOutsideTextIsDisplayedInLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Climate unit in outside is displayed in landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingScreen.iVerifyClimateUnitInOutsideIsDisplayedInLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify PowerHouseBattery is displayed in Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingScreen.iVerifyPowerHouseBatteryIsDisplayedInLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Power HouseBattery text is displayed in landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingScreen.iVerifyPowerHouseBatteryTextIsDisplayedInLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Power percentage is displayed in landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingScreen.iVerifyPowerPercentageIsDisplayedInLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Tank Fresh Water is displayed in Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingScreen.iVerifyTankFreshWaterIsDisplayedInLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Tank FreshwaterTank text is displayed in landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingScreen.iVerifyTankFreshwaterTankTextIsDisplayedInLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Tank FreshwaterTank percentage is displayed in landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingScreen.iVerifyTankFreshwaterTankPercentageIsDisplayedInLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Greywater Tank is displayed in Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingScreen.iVerifyWaterHeaterTrumaIsDisplayedInLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Tank Greywater Tank text is displayed in landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingScreen.iVerifyTankGreywaterTankTextIsDisplayedInLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Tank Greywater Tank percentage is displayed in landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingScreen.iVerifyTankGreywaterTankPercentageIsDisplayedInLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/java/com/dometic/L1/features/TC07_ClimateScreen.feature");
formatter.feature({
  "name": "Verifying application Climate Screen in Dometic LMC/ERIBA application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying application Climate screen functionality",
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
  "name": "I Tap on Climate CTA in Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnClimateCTAInLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify climate text displayed in the top of the app",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyClimateTextPlacedInTheTopOfTheApp()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify climate inside field in climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyClimateInsideFieldInClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Climate outside field in climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyClimateOutsideFieldInClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify climate field in climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyClimateFieldInClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I swipe the screen left to right",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.iSwipeTheScreenLeftToRight()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I swipe the screen left to right",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.iSwipeTheScreenLeftToRight()"
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
  "name": "I verify Apply button is displayed in climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyApplyButtonIsDisplayedInClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Apply button  in climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnApplyBuutonInClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify fan icon is displayed in climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyFanIconIsDisplayedInClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify fan Speed is displayed in climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyFanSpeedIsDisplayedInClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Power container in climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyPowerInClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Power text displayed in climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyPowerTextDisplayedInClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Power toggle displayed in climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyPowerToggleDisplayedInClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i verify temperature in Climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyTemperatureInClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Temperature text displayed in climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyTemperatureTextDisplayedInClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Temperature toggle displayed in climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyTemperatureToggleDisplayedInClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify AC text displayed in climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyACTextDisplayedInClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Heater text displayed in climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyHeaterTextDisplayedInClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify AC Mode in climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyClimateModeInClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify AC Fan Speed in climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyFanSpeedInClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application Climate screen scroll up-to Maximum temperature functionality",
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
  "name": "I scroll maximum temperature in Climate AC",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iScrollMaximumTemperatureInClimateAC()"
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
  "name": "I verify Apply button is displayed in climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyApplyButtonIsDisplayedInClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Apply button  in climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnApplyBuutonInClimateScreen()"
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
  "name": "I validate applied temperature is displayed in temperature",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iValidateAppliedTemperatureIsDisplayedInTemperature()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying applied Climate Maximum temperature displayed on Ac Mode",
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
  "name": "I Tap on Ac Mode in Climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnAcModeInClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate applied temperature is displayed in Ac Mode",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iValidateAppliedTemperatureIsDisplayedInACMODE()"
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
  "name": "I Tap on Back Button in Ac Mode",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnBackButtonInAcMode()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying applied Climate Maximum temperature displayed on Ac Fan Speed",
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
  "name": "I Tap on AC Fan Speed in climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnACFanSpeedInClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate applied temperature is displayed in Ac Fan Speed",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iValidateAppliedTemperatureIsDisplayedInAcFanSpeed()"
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
  "name": "I Tap on Back Button in Ac Fan Speed",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnBackButtonInAcFanSpeed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying applied Climate Maximum temperature displayed on Climate Tile",
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
  "name": "I Tap on Back Button",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnBackButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate applied maximum temperature is displayed in Climate Tile",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iValidateAppliedMaximumTemperatureIsDisplayedInClimateTile()"
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
formatter.uri("src/test/java/com/dometic/L1/features/TC08_ClimateScreen-AC.feature");
formatter.feature({
  "name": "Verifying application Climate Screen-AC in Dometic LMC/ERIBA application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying application Climate screen scroll up to Minimum temperature functionality",
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
  "name": "I Tap on Climate CTA in Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnClimateCTAInLandingScreen()"
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
  "name": "I scroll minimum temperature in Climate AC",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iScrollMinimumTemperatureInClimateAC()"
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
  "name": "I verify Apply button is displayed in climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyApplyButtonIsDisplayedInClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Apply button  in climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnApplyBuutonInClimateScreen()"
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
  "name": "I validate minimum applied temperature is displayed in temperature",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iValidateMinimumAppliedTemperatureIsDisplayedInTemperature()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying applied Climate Minimum temperature displayed on Ac Mode",
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
  "name": "I Tap on Ac Mode in Climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnAcModeInClimateScreen()"
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
  "name": "I validate minimum applied temperature is displayed in Ac Mode",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iValidateMinimumAppliedTemperatureIsDisplayedInAcMode()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Back Button in Ac Mode",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnBackButtonInAcMode()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying applied Climate Minimum temperature displayed on Ac Fan Speed",
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
  "name": "I Tap on AC Fan Speed in climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnACFanSpeedInClimateScreen()"
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
  "name": "I validate minimum applied temperature is displayed in Ac Fan Speed",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iValidateMinimumAppliedTemperatureIsDisplayedInAcFanSpeed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Back Button in Ac Fan Speed",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnBackButtonInAcFanSpeed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying applied Climate Minimum temperature displayed on Climate Tile",
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
  "name": "I Tap on Back Button",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnBackButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate applied minimum temperature is displayed in Climate Tile",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iValidateAppliedMinimumTemperatureIsDisplayedInClimateTile()"
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
  "name": "Verifying application Climate(AC Mode) screen-last value Functionality",
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
  "name": "I Tap on Climate CTA in Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnClimateCTAInLandingScreen()"
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
  "name": "I Tap on Ac Mode in Climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnAcModeInClimateScreen()"
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
  "name": "I Scroll the page till the last value in AC Mode page",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingScreen.scrollThePageTillLastValueInACModePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Apply button is displayed in AC climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyApplyButtonIsDisplayedInACClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Apply button in AC climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnApplyButtonInACClimateScreen()"
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
  "name": "I validate Ac Mode value is displayed in AC climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iValidateAcModeValueIsDisplayedInACClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application Climate(AC Mode) screen-First value Functionality",
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
  "name": "I Tap on Ac Mode in Climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnAcModeInClimateScreen()"
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
  "name": "I Scroll the page till the First value in AC Mode page",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingScreen.scrollThePageTillTheFirstValueInACModePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Apply button is displayed in AC climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyApplyButtonIsDisplayedInACClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Apply button in AC climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnApplyButtonInACClimateScreen()"
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
  "name": "I validate Ac Mode value is displayed in AC climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iValidateAcModeValueIsDisplayedInACClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application Climate-AC Mode screen functionality",
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
  "name": "I Tap on Ac Mode in Climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnAcModeInClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Back Button displayed in left corner of the AC climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyBackButtonDisplayedInLeftCornerOfTheACClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify climate title is displayed in AC Climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyClimateTitleIsDisplayedInACClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify inside text is displayed in Ac climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyInsideTextIsDisplayedInAcClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify inside unit is displayed in Ac climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyInsideUnitIsDisplayedInAcClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify outside text is displayed in Ac climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyOusideTextIsDisplayedInAcClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify outside unit is displayed in Ac climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyOutsideUnitIsDisplayedInAcClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify AcMode-temperature is displayed in Ac climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyAcModeTemperatureIsDisplayedInAcClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify fan icon is displayed in AC climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyFanIconIsDisplayedInACClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify fan Speed is displayed in AC climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyFanSpeedIsDisplayedInACClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify AC MODE text is displayed in Ac climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyACMODETextIsDisplayedInAcClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I scroll up the screen",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.iScrollUpTheScreen()"
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
  "name": "I verify Apply button is displayed in AC climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyApplyButtonIsDisplayedInACClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Apply button in AC climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnApplyButtonInACClimateScreen()"
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
  "name": "I validate Ac Mode value is displayed in AC climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iValidateAcModeValueIsDisplayedInACClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application Climate(Fan Speed) screen-last value Functionality",
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
  "name": "I Tap on AC Fan Speed in climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnACFanSpeedInClimateScreen()"
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
  "name": "I Scroll the page till the last value in Fan Speed page",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingScreen.iScrollThePageTillTheLastValueInFanSpeedPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify apply button is displayed in AC Fan Speed in Ac Climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyApplyButtonIdDisplayedInACFanSpeedInAcClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Apply button in AC Fan Speed in Ac Climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnApplyButtonInACFanSpeedInAcClimateScreen()"
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
  "name": "I validate Ac Fan Speed value is displayed in AC climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iValidateAcFanSpeedValueIsDisplayedInACClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate updated value id displayed in AC climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iValidateUpdatedValueIdDisplayedInACClimateScreen()"
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
  "name": "I Tap on Ac Mode in Climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnAcModeInClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate updated value is displayed in AC Mode screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iValidateUpdatedValueIdDisplayedInACModeScreen()"
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
  "name": "I Tap on Back Button in Ac Mode",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnBackButtonInAcMode()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on AC Fan Speed in climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnACFanSpeedInClimateScreen()"
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
  "name": "I validate updated value id displayed in AC FanSpeed screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iValidateUpdatedValueIdDisplayedInACFanSpeedScreen()"
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
  "name": "I Tap on Back Button in Ac Fan Speed",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnBackButtonInAcFanSpeed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application Climate(Fan Speed) screen-First value Functionality",
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
  "name": "I Tap on AC Fan Speed in climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnACFanSpeedInClimateScreen()"
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
  "name": "I Scroll the page till the First value in Fan Speed page",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingScreen.iScrollThePageTillTheFirstValueInFanSpeedPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify apply button is displayed in AC Fan Speed in Ac Climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyApplyButtonIdDisplayedInACFanSpeedInAcClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Apply button in AC Fan Speed in Ac Climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnApplyButtonInACFanSpeedInAcClimateScreen()"
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
  "name": "I validate Ac Fan Speed value is displayed in AC climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iValidateAcFanSpeedValueIsDisplayedInACClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate updated value id displayed in AC climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iValidateUpdatedValueIdDisplayedInACClimateScreen()"
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
  "name": "I Tap on Ac Mode in Climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnAcModeInClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate updated value is displayed in AC Mode screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iValidateUpdatedValueIdDisplayedInACModeScreen()"
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
  "name": "I Tap on Back Button in Ac Mode",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnBackButtonInAcMode()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on AC Fan Speed in climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnACFanSpeedInClimateScreen()"
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
  "name": "I validate updated value id displayed in AC FanSpeed screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iValidateUpdatedValueIdDisplayedInACFanSpeedScreen()"
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
  "name": "I Tap on Back Button in Ac Fan Speed",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnBackButtonInAcFanSpeed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application Climate-Fan Speed screen functionality",
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
  "name": "I verify AC Fan Speed in climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyFanSpeedInClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on AC Fan Speed in climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnACFanSpeedInClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Climate title is displayed in AC Fan Speed in climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyClimateTitleIsDisplayedInACFanSpeedInClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify inside text is displayed in AC Fan Speed in Ac climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyInsideTextIsDisplayedInACFanSpeedInAcClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify inside unit is displayed in AC Fan Speed in Ac climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyInsideUnitIsDisplayedInACFanSpeedInAcClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify outside text is displayed in AC Fan Speed in Ac climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyOutsideTextIsDisplayedInACFanSpeedInAcClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify outside unit is displayed in AC Fan Speed in Ac climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyOutsideUnitIsDisplayedInACFanSpeedInAcClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Fanspeed-temperature is displayed in Ac climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyFanspeedTemperatureIsDisplayedInAcClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Fanspeed fan icon is displayed in AC climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyFanspeedFanIconIsDisplayedInACClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify fanSpeed-getAcFanSpeed is displayed in AC climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyFanSpeedGetAcFanSpeedIsDisplayedInACClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify AC FAN SPEED text is displayed in AC climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyACFANSPEEDTextIsDisplayedInACClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I scroll up the screen",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.iScrollUpTheScreen()"
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
  "name": "I verify apply button is displayed in AC Fan Speed in Ac Climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyApplyButtonIdDisplayedInACFanSpeedInAcClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Apply button in AC Fan Speed in Ac Climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnApplyButtonInACFanSpeedInAcClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating updated values Display in AC climate(Climate-Fan Speed) screen",
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
  "name": "I validate Ac Fan Speed value is displayed in AC climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iValidateAcFanSpeedValueIsDisplayedInACClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate updated value id displayed in AC climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iValidateUpdatedValueIdDisplayedInACClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating updated values Display in AC Mode(Climate-Fan Speed) screen",
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
  "name": "I Tap on Ac Mode in Climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnAcModeInClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I validate updated value is displayed in AC Mode screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iValidateUpdatedValueIdDisplayedInACModeScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Validating updated values Display in AC FanSpeed(Climate-Fan Speed) screen",
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
  "name": "I Tap on Back Button in Ac Mode",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnBackButtonInAcMode()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on AC Fan Speed in climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnACFanSpeedInClimateScreen()"
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
  "name": "I validate updated value id displayed in AC FanSpeed screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iValidateUpdatedValueIdDisplayedInACFanSpeedScreen()"
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
  "name": "I Tap on Back Button in Ac Fan Speed",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnBackButtonInAcFanSpeed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/java/com/dometic/L1/features/TC09_Climatescreen-Heater.feature");
formatter.feature({
  "name": "Verifying application Climate Screen-Heater in Dometic LMC/ERIBA application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying application Climate-Heater screen functionality",
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
  "name": "I Tap on Climate CTA in Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnClimateCTAInLandingScreen()"
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
  "name": "I Tap on Heater in climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnHeaterInClimateScreen()"
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
  "name": "I Tap on heater power",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnHeaterPower()"
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
  "name": "I verify climate title is displayed in Heater Climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyClimateTitleIsDisplayedInHeaterClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify inside text is displayed in Heater Climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyInsideTextIsDisplayedInHeaterClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify inside unit is displayed in Heater Climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyInsideUnitIsDisplayedInHeaterClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify outside text is displayed in Heater Climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyOutsideTextIsDisplayedInHeaterClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify outside unit is displayed in Heater Climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyOutsideUnitIsDisplayedInHeaterClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I swipe the screen right to left",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.i_swipe_the_right_left_screen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I swipe the screen right to left",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.i_swipe_the_right_left_screen()"
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
  "name": "I verify Apply button is displayed in Heater Climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingScreen.iVerifyApplyButtonIsDisplayedInHeaterClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Apply button in Climate Heater screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnApplyButtonInClimateHeaterScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Power text displayed in Heater climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyPowerTextDisplayedInHeaterClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Power toggle displayed Heater in climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyPowerToggleDisplayedHeaterInClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Temperature text displayed in Heater climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyTemperatureTextDisplayedInHeaterClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Temperature toggle displayed in Heater climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyTemperatureToggleDisplayedInHeaterClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Hot Water Level text is displayed in Heater climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyHotWaterLevelTextIsDisplayedInHeaterClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Hot Water Level Value is displayed in Heater climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyHotWaterLevelValueIsDisplayedInHeaterClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Energy text is displayed in Heater climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyEnergyTextIsDisplayedInHeaterClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Energy Value is displayed in Heater climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyEnergyValueIsDisplayedInHeaterClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application Climate-Heater(Hot Water Level)screen-last Value functionality",
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
  "name": "I Tap on Climate CTA in Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnClimateCTAInLandingScreen()"
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
  "name": "I Tap on Hot Water Level in Heater climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnHotWaterLevelInHeaterClimateScreen()"
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
  "name": "I Scroll the page till the last value in Hot Water Level page",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingScreen.iScrollThePageTillTheLastValueInHotWaterLevelPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify apply button is displayed in Hot Water Level Heater climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyApplyButtonIsDisplayedInHotWaterLevelHeaterClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on apply button in Hot Water Level Heater climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnApplyButtonInHotWaterLevelHeaterClimateScreen()"
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
  "name": "I Validate HotWaterLevel value is displayed in AC climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iValidateHotWaterLevelValueIsDisplayedInACClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application Climate-Heater(Hot Water Level)screen-First Value functionality",
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
  "name": "I Tap on Hot Water Level in Heater climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnHotWaterLevelInHeaterClimateScreen()"
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
  "name": "I Scroll the page till the First value in Hot Water Level page",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingScreen.iScrollThePageTillTheFirstValueInHotWaterLevelPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify apply button is displayed in Hot Water Level Heater climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyApplyButtonIsDisplayedInHotWaterLevelHeaterClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on apply button in Hot Water Level Heater climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnApplyButtonInHotWaterLevelHeaterClimateScreen()"
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
  "name": "I Validate HotWaterLevel value is displayed in AC climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iValidateHotWaterLevelValueIsDisplayedInACClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application Climate-Heater(Hot Water Level)screen functionality",
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
  "name": "I Tap on Hot Water Level in Heater climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnHotWaterLevelInHeaterClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Climate text displayed in Hot Water Level Heater climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyClimateTextDisplayedInHotWaterLevelHeaterClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify inside text is displayed in Hot Water Level Heater climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyInsideTextIsDisplayedInHotWaterLevelHeaterClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify inside unit is displayed in Hot Water Level Heater climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyInsideUnitIsDisplayedInHotWaterLevelHeaterClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify outside text is displayed in Hot Water Level Heater climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyOutsideTextIsDisplayedInHotWaterLevelHeaterClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify outside unit is displayed in Hot Water Level Heater climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyOutsideUnitIsDisplayedInHotWaterLevelHeaterClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Water Heater temperature is displayed in Hot Water Level Heater climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyWaterHeaterTemperatureIsDisplayedInHotWaterLevelHeaterClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify THERME text is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyTHERMETextIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I scroll up the screen",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.iScrollUpTheScreen()"
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
  "name": "I verify apply button is displayed in Hot Water Level Heater climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyApplyButtonIsDisplayedInHotWaterLevelHeaterClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on apply button in Hot Water Level Heater climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnApplyButtonInHotWaterLevelHeaterClimateScreen()"
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
  "name": "I Validate HotWaterLevel value is displayed in AC climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iValidateHotWaterLevelValueIsDisplayedInACClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application Climate-Heater(Energy)screen-Last Value functionality",
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
  "name": "I Tap on Energy in Heater climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnEnergyInHeaterClimateScreen()"
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
  "name": "I Scroll the page till the last value in Energy page",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingScreen.iScrollThePageTillTheLastValueInEnergyPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify apply button is displayed in Energy in Heater climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyApplyButtonIsDisplayedInEnergyInHeaterClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on apply button in Energy in Heater climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnApplyButtonInEnergyInHeaterClimateScreen()"
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
  "name": "I validate Energy value is displayed in AC climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iValidateEnergyValueIsDisplayedInACClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application Climate-Heater(Energy)screen-First Value functionality",
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
  "name": "I Tap on Energy in Heater climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnEnergyInHeaterClimateScreen()"
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
  "name": "I Scroll the page till the First value in Energy page",
  "keyword": "Then "
});
formatter.match({
  "location": "LandingScreen.iScrollThePageTillTheFirstValueInEnergyPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify apply button is displayed in Energy in Heater climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyApplyButtonIsDisplayedInEnergyInHeaterClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on apply button in Energy in Heater climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnApplyButtonInEnergyInHeaterClimateScreen()"
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
  "name": "I validate Energy value is displayed in AC climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iValidateEnergyValueIsDisplayedInACClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application Climate-Heater(Energy)screen functionality",
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
  "name": "I Tap on Energy in Heater climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnEnergyInHeaterClimateScreen()"
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
  "name": "I verify Climate text displayed in Energy in Heater climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyClimateTextDisplayedInEnergyInHeaterClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify inside text is displayed in Energy in Heater climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyInsideTextIsDisplayedInEnergyInHeaterClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify inside unit is displayed in Energy in Heater climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyInsideUnitIsDisplayedInEnergyInHeaterClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify outside text is displayed in Energy in Heater climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyOutsideTextIsDisplayedInEnergyInHeaterClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify outside unit is displayed in Energy in Heater climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyOutsideUnitIsDisplayedInEnergyInHeaterClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Water Heater temperature is displayed in Energy in Heater climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyWaterHeaterTemperatureIsDisplayedInEnergyInHeaterClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Verify ENERGY text is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyENERGYTextIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I scroll up the screen",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.iScrollUpTheScreen()"
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
  "name": "I verify apply button is displayed in Energy in Heater climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyApplyButtonIsDisplayedInEnergyInHeaterClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on apply button in Energy in Heater climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnApplyButtonInEnergyInHeaterClimateScreen()"
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
  "name": "I validate Energy value is displayed in AC climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iValidateEnergyValueIsDisplayedInACClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Back Button displayed in left corner of the climate screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iVerifyBackButtonDisplayedInLeftCornerOfTheClimateScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Back Button",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iTapOnBackButton()"
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
formatter.uri("src/test/java/com/dometic/L1/features/TC10_PowerHouseBattery.feature");
formatter.feature({
  "name": "Verifying application Power screen in Dometic LMC/ERIBA application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying application PowerHouseBattery screen functionality",
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
  "name": "I Tap on PowerHouseBattery CTA in Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "PowerHouseBattery.iTapOnPowerHouseBatteryCTAInLandingScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify POWER text displayed in the top of the app",
  "keyword": "Then "
});
formatter.match({
  "location": "PowerHouseBattery.iVerifyPOWERTextDisplayedInTheTopOfTheApp()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify power percentage is displayed in graphical format",
  "keyword": "Then "
});
formatter.match({
  "location": "PowerHouseBattery.iVerifyPowerPercentageIsDisplayedInGraphicalFormat()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify HOUSE BATTERY text is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "PowerHouseBattery.iVerifyHOUSEBATTERYTextIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify BatteryVoltage text is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "PowerHouseBattery.iVerifyBatteryVoltageIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify BatteryVoltage value is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "PowerHouseBattery.iVerifyBatteryVoltageValueIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Current text is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "PowerHouseBattery.iVerifyCurrentIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Current value is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "PowerHouseBattery.iVerifyCurrentValueIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Time text is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "PowerHouseBattery.iVerifyTimeIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Time value is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "PowerHouseBattery.iVerifyTimeValueIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify powerSource text is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "PowerHouseBattery.iVerifyPowerSourceIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify powerSource value is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "PowerHouseBattery.iVerifyPowerSourceValueIsDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify Back Button displayed in left corner of the Power house battery screen",
  "keyword": "Then "
});
formatter.match({
  "location": "PowerHouseBattery.iVerifyBackButtonDisplayedInLeftCornerOfThePowerHouseBatteryScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on Back Button in Power house battery screen",
  "keyword": "Then "
});
formatter.match({
  "location": "PowerHouseBattery.iTapOnBackButtonInPowerHouseBatteryScreen()"
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
formatter.uri("src/test/java/com/dometic/L1/features/TC11_ViewOption.feature");
formatter.feature({
  "name": "Verifying application View Options Screen in Dometic LMC/ERIBA application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying application ViewOption(Tile View-All Devices) functionality",
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
  "name": "I validate View option button in landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewOption.iValidateViewOptionButtonInLandingScreen()"
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
  "name": "I Validate the cancel button",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewOption.iValidateTheCancelButton()"
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application ViewOption(Tile View-Connected Devices) functionality",
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application ViewOption(Tile View-Non Connected Devices) functionality",
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application ViewOption(List View-All Devices) functionality",
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application ViewOption(List View-Connected Devices) functionality",
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application ViewOption(List View-Non Connected Devices) functionality",
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
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying application ViewOption functionality after Logout",
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
  "name": "I enter Valid Email.",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iEnterValidEmail()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Valid Password.",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iEnterValidPassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Tap on an Login button.",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginScreen.iTapOnAnLoginButton()"
});
formatter.result({
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
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //*[@resource-id\u003d\u0027android:id/parentPanel\u0027] (tried for 300 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:81)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:271)\r\n\tat com.dometic.L1.stepdefinition.OnboardingScreen.iEnteredIntoOnBoardingScreen(OnboardingScreen.java:23)\r\n\tat ✽.I entered into On boarding screen(src/test/java/com/dometic/L1/features/TC11_ViewOption.feature:53)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Cannot locate an element using By.xpath: //*[@resource-id\u003d\u0027android:id/parentPanel\u0027]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027NHCLPT520\u0027, ip: \u0027172.20.10.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.lambda$findElement$0(ExpectedConditions.java:896)\r\n\tat java.util.Optional.orElseThrow(Optional.java:290)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:895)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:206)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:202)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat com.dometic.L1.stepdefinition.OnboardingScreen.iEnteredIntoOnBoardingScreen(OnboardingScreen.java:23)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:49)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:63)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:49)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:44)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:40)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:68)\r\n\tat com.dometic.L1.androidrunner.L1_runner.feature(L1_runner.java:31)\r\n\tat sun.reflect.GeneratedMethodAccessor5.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:85)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:639)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:816)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1124)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:108)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:774)\r\n\tat org.testng.TestRunner.run(TestRunner.java:624)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:359)\r\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:39)\r\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:393)\r\n\tat org.testng.internal.thread.ThreadUtil$2.call(ThreadUtil.java:64)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\r\n\tat java.lang.Thread.run(Thread.java:748)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I entered into Home Page.",
  "keyword": "Then "
});
formatter.match({
  "location": "OnboardingScreen.iEnteredIntoHomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Tap on Marine Tile.",
  "keyword": "Then "
});
formatter.match({
  "location": "OnboardingScreen.iTapOnMarineTile()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Wait until Landing screen is displayed.",
  "keyword": "Then "
});
formatter.match({
  "location": "OnboardingScreen.iWaitUntilLandingScreenIsDisplayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Tap on View option button in landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewOption.iTapOnViewOptionButtonInLandingScreen()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Tap on Tile View Options",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewOption.iTapOnTileViewOptions()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Tap on Connected Devices",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewOption.iTapOnConnectedDevices()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Tap on Cancel Button",
  "keyword": "Then "
});
formatter.match({
  "location": "ViewOption.iTapOnCancelButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Wait short period for Page to Load",
  "keyword": "Then "
});
formatter.match({
  "location": "Basestepdefinition.I_Wait_short_for_Page_to_Load()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Tap on hamburger menu in landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iTapOnHamburgerMenuInLandingScreen()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Tap on Logout in Settings screen",
  "keyword": "Then "
});
formatter.match({
  "location": "Settings.iTapOnLogoutInSettingsScreen()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/java/com/dometic/L1/features/TC12_Settings.feature");
formatter.feature({
  "name": "Verifying application Settings Screen in Dometic LMC/ERIBA application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify Logout Functionality",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: An element could not be located on the page using the given search parameters.\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027NHCLPT520\u0027, ip: \u0027172.20.10.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: io.appium.java_client.android.AndroidDriver\nCapabilities {app: C:\\Users\\40012176.LNTIES\\Do..., appActivity: com.dometicapp.SplashActivity, appPackage: com.dometicapp, databaseEnabled: false, desired: {app: C:\\Users\\40012176.LNTIES\\Do..., appActivity: com.dometicapp.SplashActivity, appPackage: com.dometicapp, deviceName: Pixel 3a, fullReset: true, platformName: android, platformVersion: 11}, deviceApiLevel: 30, deviceManufacturer: Google, deviceModel: sdk_gphone_x86, deviceName: emulator-5554, deviceScreenDensity: 440, deviceScreenSize: 1080x2220, deviceUDID: emulator-5554, fullReset: true, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, pixelRatio: 2.75, platform: LINUX, platformName: LINUX, platformVersion: 11, statBarHeight: 66, takesScreenshot: true, viewportRect: {height: 2022, left: 0, top: 66, width: 1080}, warnings: {}, webStorageEnabled: false}\nSession ID: c9175c5c-bcc1-4ef1-8a7c-3ea4ef5fb63d\n*** Element info: {Using\u003dxpath, value\u003d//android.view.ViewGroup[@content-desc\u003d\u0027com.dometicapp:id/setting-logOutContainer\u0027]/android.view.ViewGroup}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:129)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\r\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:62)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElementByXPath(DefaultGenericMobileDriver.java:152)\r\n\tat io.appium.java_client.AppiumDriver.findElementByXPath(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElementByXPath(AndroidDriver.java:1)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat io.appium.java_client.DefaultGenericMobileDriver.findElement(DefaultGenericMobileDriver.java:58)\r\n\tat io.appium.java_client.AppiumDriver.findElement(AppiumDriver.java:1)\r\n\tat io.appium.java_client.android.AndroidDriver.findElement(AndroidDriver.java:1)\r\n\tat com.dometic.L1.qa.util.Baseclass.iselementdisplayed(Baseclass.java:37)\r\n\tat com.dometic.L1.stepdefinition.Settings.iVerifyLogOutIsDisplayed(Settings.java:59)\r\n\tat ✽.I verify Log out is displayed(src/test/java/com/dometic/L1/features/TC12_Settings.feature:43)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/java/com/dometic/L1/features/TC19_Filewriter.feature");
formatter.feature({
  "name": "Testing an Dometic LMC application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verifying application status",
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
  "name": "I write the status as Automation script is done once completed the execution",
  "keyword": "Then "
});
formatter.match({
  "location": "ClimateScreen.iWriteTheStatusAsAutomationScriptIsDoneOnceCompletedTheExecution()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});