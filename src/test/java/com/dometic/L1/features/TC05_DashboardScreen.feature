Feature: Verifying application Dashboard screen in Dometic LMC/ERIBA application

  @First @sanity
  Scenario: Verifying application Dashboard screen functionality
    Then I enter Valid Email.
    Then I enter Valid Password.
    Then I Tap on an Login button.
    Then I Wait short period for Page to Load
    Then I entered into Home Page.
    Then I Wait short period for Page to Load
    Then I Tap on Marine Tile.
    Then I Wait short period for Page to Load
    Then I Wait until Landing screen is displayed.
#    Then I entered into On boarding screen
#    Then I Wait short period for Page to Load
#    Then I Tap on Yes button
#    Then Landing screen is displayed

#  @sanity
#  Scenario: Verifying application Dynamic logo change functionality
#    Then I Validate the application logo On boarding screen
#    Then I Wait short period for Page to Load
#    Then I Validate the application logo Landing screen