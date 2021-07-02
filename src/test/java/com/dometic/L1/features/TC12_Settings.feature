Feature: Verifying application Settings Screen in Dometic LMC/ERIBA application

  @First1 @sanity1
  Scenario: Verifying application Settings screen functionality
    Then I Wait short period for Page to Load
    Then I verify hamburger menu in landing screen
    Then I Tap on hamburger menu in landing screen
    Then I Tap on Logout in Settings screen
#    Then I Verify SETTINGS Text displayed in the top of the app

  @sanity1
  Scenario: Verify Language Functionality
    Then I verify Languages text is displayed
    Then I navigate to update language section in Settings
    Then I update language to German in settings
    And I verify on Language text updated with German translation
    And I verify on Temperature text updated with German translation
    And I verify on logout text updated with German translation
    Then I Wait short period for Page to Load
    Then I Tap on Back Button
    Then I Wait short period for Page to Load
    Then I Tap on Climate CTA in Landing screen
    Then I Wait short period for Page to Load
    Then I Tap on Back Button
    Then I Tap on PowerHouseBattery CTA in Landing screen
    Then I Wait short period for Page to Load
    Then I Tap on Back Button
    Then I Tap on hamburger menu in landing screen

  @sanity1
  Scenario: Verify Temperature Functionality
    Then I Verify Temperature unit text is displayed
    Then I update Temperature Unit in Settings
    Then I Tap on Back button from Settings
    Then I Tap on hamburger menu in landing screen

  @sanity1
  Scenario: Verify Version Functionality
    Then I verify Version is displayed

  @sanity1
  Scenario: Verify Logout Functionality
    Then I verify Log out is displayed
#    Then I Tap on Logout in Settings