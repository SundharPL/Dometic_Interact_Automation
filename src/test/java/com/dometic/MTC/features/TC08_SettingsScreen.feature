Feature: Testing an Dometic LMC application

  @First @sanity
  Scenario: Verifying application Settings screen UI
    Then I verify hamburger menu in landing screen
    Then I Tap on hamburger menu in landing screen
    Then I Wait short period for Page to Load
    Then I verify settings screen back button
    Then I verify user profile photo is displayed
    Then I verify username is displayed
    Then I verify user email is displayed
    Then I verify View Edit Account text is displayed
    Then I verify Home text is displayed
    Then I verify Notification Settings text is displayed
    Then I verify Device Management is displayed
    Then I verify App Settings is displayed
    Then I verify Logout is displayed
    Then I verify Version 1.6 is displayed
    Then I Wait short period for Page to Load

  @sanity
  Scenario: Verifying application Settings screen Functionality
    Then I Tap on Home in Settings screen
    Then I Tap on hamburger menu in landing screen
    Then I Wait short period for Page to Load
    Then I Tap on Notification Settings
    Then I Wait short period for Page to Load
    Then I Tap on Back Button
    Then I Tap on hamburger menu in landing screen
    Then I Wait short period for Page to Load
    Then I Tap on Device Management
    Then I Wait short period for Page to Load
    Then I Tap on Back Button
    Then I Tap on hamburger menu in landing screen
    Then I Wait short period for Page to Load
    Then I Tap on App Settings
    Then I Wait short period for Page to Load
    Then I Tap on Back Button
    Then I Tap on hamburger menu in landing screen
    Then I Wait short period for Page to Load
#    Then I Tap on Logout in Settings screen

  @sanity
  Scenario: Verifying application Settings screen(Account settings) UI
    Then I Tap on View Edit Account link in Settings screen
    Then I Wait short period for Page to Load
    Then I Verify the account setting header
    Then I verify the account holder photo
    Then I verify the user name in account setting
    Then I verify the user mail id
    Then I Verify the profile text
    Then I Verify the Subscription text

  @sanity
  Scenario: Verifying application Settings screen(Account settings)Functionality
    Then I Navigate to the Profile page
    Then I Tap on Back Button
    Then I Wait for Page to Load
    Then I Navigate to Subscription page
    Then I Wait short period for Page to Load

  @sanity
  Scenario: Verifying application Settings screen(Subscriptions) UI& Functionality
    Then I verify if subscription title is displayed
    Then I verify if subscription back button is available
    Then I Tap on Back Button
    Then I Wait short period for Page to Load
    Then I Tap on Back Button
    Then I Tap on hamburger menu in landing screen

  @sanity
  Scenario:Verifying application Settings screen(Device Management) UI
    Then I Wait short period for Page to Load
    Then I Tap on Device Management
    Then I Wait short period for Page to Load
    Then I verify the Device Management Header
    Then I verify the Device Management Logo
    Then I verify the Device Management right icon
    Then I verify the Add New Button text
#    Then I Tap on the Add New button
#    Then I Wait for Page to Load
#    Then I Verify the OnBoarding Header
#    Then I Verify the close button in Onboarding Page
#    Then I Verify the Attention image
#    Then I Verify the Bluetooth Pairing Message
#    Then I verify the Search Again Text
#    Then I Tap on close button

  @sanity
  Scenario: Verifying application Settings screen(View/Edit Account) Functionality
    Then I Tap on Back Button
    Then I Tap on hamburger menu in landing screen
    Then I Wait for Page to Load
    Then I Tap on View Edit Account link in Settings screen
    Then I Wait short period for Page to Load
    Then I Tap on Profile in Account Setting Screen
    Then I Wait short period for Page to Load
    Then I Scroll up the page
    Then I Verify Profile header text
    Then I verify user profile image is displayed
    Then I verify Personal Information text is displayed
    Then I verify Name Label is displayed
    Then I Verify Name value is displayed
    Then I verify E-mail Label is displayed
    Then I verify E-mail value is displayed
    Then I verify Mobile Label is displayed
    Then I Verify Mobile value is displayed
    Then I verify Address Label is displayed
    Then I verify Address value is displayed
    Then I verify Edit profile text is displayed
    Then I verify Edit profile arrow is displayed
    Then I verify Security text is displayed
    Then I verify Password text is displayed
    Then I verify Renew text is displayed
    Then I verify Renew arrow is displayed
    Then I Wait short period for Page to Load

  @sanity
  Scenario: Verifying application Settings screen Edit profile screen UI
    Then I Tap on Edit profile in profile screen
    Then I Wait short period for Page to Load
    Then I verify Edit profile header text
    Then I verify user profile photo in edit profile screen
    Then I verify user email value is displayed
    Then I verify Firstname label is displayed
    Then I verify Firstname Value is displayed
    Then I verify Lastname label is displayed
    Then I verify Lastname Value is displayed
    Then I verify Primary Mobile label is displayed
    Then I verify Primary Mobile Value is displayed
    Then I verify Address label is displayed in Edit profile screen
    Then I verify Address value is displayed in Edit profile screen
    Then I verify Save Button is displayed

  @sanity
  Scenario: Verifying application Settings screen Edit profile screen(Checking text field allowing Empty text) Functionality
    Then I Wait short period for Page to Load
    Then I enter an empty in First name Field in Edit profile screen
    Then I enter an empty in Last name Field in Edit profile screen
    Then I enter an empty in Primary Field Mobile in Edit profile screen
    Then I enter an empty in Address field in Edit profile screen
    Then I Wait short period for Page to Load
    Then I Tap on Save button
    Then I Wait short period for Page to Load
    Then I Tap on Ok button

  @sanity
  Scenario: Verifying application Settings screen Edit profile screen(Checking text field allowing Emoji's) Functionality
    Then I Wait short period for Page to Load
    Then I enter an Emoji's in First name Field in Edit profile screen
    Then I enter an Emoji's in Last name Field in Edit profile screen
    Then I enter an Primary Mobile in Edit profile screen
    Then I enter an Emoji's in Address field in Edit profile screen
    Then I Wait short period for Page to Load
    Then I Tap on Save button
    Then I Wait short period for Page to Load
    Then I Tap on Ok button
    Then I Wait short period for Page to Load
    Then I Tap on Back Button
    Then I Wait short period for Page to Load
    Then I Tap on Back Button
    Then I Wait short period for Page to Load
    Then I Tap on Back Button
    Then I Wait short period for Page to Load
#    Then I Tap on Marine Tile
    Then I Tap on hamburger menu in landing screen
    Then I Wait short period for Page to Load
    Then I Tap on View Edit Account link in Settings screen
    Then I Wait short period for Page to Load
    Then I Tap on Profile in Account Setting Screen
    Then I Wait short period for Page to Load
    Then I Tap on Edit profile in profile screen

  @sanity
  Scenario: Verifying application Settings screen Edit profile screen(Checking text field allowing Special Characters) Functionality
    Then I Wait short period for Page to Load
    Then I enter an Special character in First name Field in Edit profile screen
    Then I enter an Special character in Last name Field in Edit profile screen
    Then I enter an Primary Mobile in Edit profile screen
    Then I enter an Special character in Address field in Edit profile screen
    Then I Wait short period for Page to Load
    Then I Tap on Save button
    Then I Wait short period for Page to Load
    Then I Tap on Ok button
    Then I Wait short period for Page to Load
    Then I Tap on Back Button
    Then I Wait short period for Page to Load
    Then I Tap on Back Button
    Then I Wait short period for Page to Load
    Then I Tap on Back Button
    Then I Wait short period for Page to Load
#    Then I Tap on Marine Tile
    Then I Tap on hamburger menu in landing screen
    Then I Wait short period for Page to Load
    Then I Tap on View Edit Account link in Settings screen
    Then I Wait short period for Page to Load
    Then I Tap on Profile in Account Setting Screen
    Then I Wait short period for Page to Load
    Then I Tap on Edit profile in profile screen

  @sanity
  Scenario: Verifying application Settings screen Edit profile screen Functionality
    Then I Wait short period for Page to Load
    Then I enter an First name in Edit profile screen
    Then I enter an Last name in Edit profile screen
    Then I enter an Primary Mobile in Edit profile screen
    Then I enter an Address in Edit profile screen
    Then I Wait short period for Page to Load
    Then I Tap on Save button
    Then I Wait short period for Page to Load
    Then I Tap on Ok button
    Then I Wait short period for Page to Load
    Then I Tap on Back Button
    Then I Wait short period for Page to Load
    Then I Tap on Back Button
    Then I Wait short period for Page to Load
    Then I Tap on Back Button
    Then I Wait short period for Page to Load
    Then I Tap on Marine Tile


  @sanity
  Scenario: Verifying application Settings screen App Settings screen UI
    Then I Tap on hamburger menu in landing screen
    Then I Wait short period for Page to Load
    Then I Tap on App Settings
    Then I Wait short period for Page to Load
    Then I verify App Settings Header text
    Then I verify Language text in App Settings page
    Then I verify selected language is displayed
    Then I verify Temperature text in App Settings page
    Then I verify celsiusText is displayed
    Then I verify fahrenheitText is displayed
    Then I verify Unit text is displayed
    Then I verify selected unit text is displayed
    Then I verify App version text is displayed

  @sanity
  Scenario: Verifying application Settings screen App Settings screen Functionality
    Then I Wait short period for Page to Load
    Then I Tap on Language in App Settings page
    Then I Wait short period for Page to Load
    Then I Tap on Back Button
    Then I Wait short period for Page to Load
    Then I Tap on Units in App Settings page
    Then I Wait short period for Page to Load
    Then I Tap on Back Button
    Then I Wait short period for Page to Load
    Then I Tap on Back Button








