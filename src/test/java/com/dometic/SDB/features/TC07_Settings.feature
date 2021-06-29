Feature: Verifying application Setting Screen in Dometic SDB application

  @First @sanity
  Scenario: Verifying the device management Edit name UI
    Then I Tap on hamburger menu in landing screen
    Then I Tap on Device Management
    Then I tap on the right icon for SDB
    Then I verify the edit card tile name
    Then I tap on vessel edit card button
    Then I verify the vessel name card title
    Then I verify the save button text
    Then I tap on back button on edit screen
    Then I Wait short period for Page to Load
    Then I tap on back button on device management main screen
    Then I Wait short period for Page to Load
    Then I tap on back button on device management device selection page
    Then I Wait short period for Page to Load

  @sanity
  Scenario: Verifying the device management Edit name UI
    Then I Tap on hamburger menu in landing screen
    Then I Tap on Device Management
    Then I tap on the right icon for SDB
    Then I verify the edit card tile name
    Then I tap on vessel edit card button
    Then I verify the vessel name card title
    Then I enter the name for edit vessel
    Then I tap on save button in edit vessel screen
    Then I Wait short period for Page to Load
    Then I tap on back button on device management main screen
    Then I Wait short period for Page to Load
    Then I tap on back button on device management device selection page
    Then I Wait short period for Page to Load

  @sanity
  Scenario: Verifying the guest pin list UI
    Then I Tap on hamburger menu in landing screen
    Then I Tap on Device Management
    Then I tap on the right icon for SDB
    Then I tap on guest pin list right icon button
    Then I verify the back button for guest pin list page
    Then I verify the guest pin header text
    Then I verify the edit header text
    Then I tap on the edit text
    Then I verify the close symbol on edit guest list page
    Then I verify the add button symbol on edit guest list page
    Then I tap on the add button symbol on edit guest list page
    Then I verify the edit pin header text
    Then I verify the close symbol on edit pin page
    Then I verify the pin name text
    Then I verify the pin code text
    Then I verify the Mail box text
    Then I verify the Mail box toggle button
    Then I verify the refrigerated compartment text
    Then I verify the refrigerated compartment toggle button
    Then I tap on the close button symbol on edit pin page
    Then I tap on the close button symbol on guest list page
    Then I tap on the guest list right icon
    Then I tap on back button on device management main screen
    Then I Wait short period for Page to Load
    Then I tap on back button on device management device selection page
    Then I Wait short period for Page to Load

  @sanity
  Scenario: Verifying the guest pin list functionlity
    Then I Tap on hamburger menu in landing screen
    Then I Tap on Device Management
    Then I tap on the right icon for SDB
    Then I tap on guest pin list right icon button
    Then I tap on the edit text
    Then I tap on the add button symbol on edit guest list page
    Then I Wait short period for Page to Load
    Then I enter the name for pin name
    Then I enter the pincode
    Then I tap on the save button for edit pin
    Then I tap on the edit text
    Then I tap on the add button symbol on edit guest list page
    Then I enter the name for pin name
    Then I enter the pincode
    Then I tap on the save button for edit pin
    Then I tap on the edit text
    Then I tap on the add button symbol on edit guest list page
    Then I enter the combination for name field
    Then I enter the combination for pincode
    Then I tap on the save button for edit pin
    Then I tap on the edit text
    Then I tap on the add button symbol on edit guest list page
    Then I enter the long length for name field
    Then I enter the long length for pincode
    Then I tap on the save button for edit pin
    Then I tap on the edit text
    Then I tap on the add button symbol on edit guest list page
    Then I enter the short for name field
    Then I enter the short for pincode
    Then I tap on the save button for edit pin
    Then I tap on the guest list right icon
    Then I tap on back button on device management main screen
    Then I Wait short period for Page to Load
    Then I tap on back button on device management device selection page
    Then I Wait short period for Page to Load

# rISHUUUUUU
  @sanity
  Scenario: Verifying application Device Management Set Master Pin  screen functionality for SDB
    Then I Tap on hamburger menu in landing screen
    Then I Tap on Device Management
    Then I tap on the right icon for SDB
    Then I Tap on the Master PIN option

  @sanity
  Scenario: Master Pin Password blank field
    Then I Tap on the alert popup Enter button
    Then I tap on Alert Ok button

  @sanity
  Scenario: Master Pin Password with Wrong password
    Then I Tap on the Master PIN option
    Then I enter the wrong password in the Password field
    Then I Tap on the alert popup Enter button
    Then I tap on Alert Ok button

  @sanity
  Scenario: Master Pin Password with Correct password
    Then I Tap on the Master PIN option
    Then I enter the correct password
    Then I Tap on the alert popup Enter button

  @sanity
  Scenario: Set Master PIN functionality
    Then I Tap on the set master pin Input Field
    #Then I Enter the PIN less then 4 Digit
    #Then I Hide the Device Keypad
    #Then I Wait for Page to Load
    Then I Enter the PIN as 4 Digit
    Then I Wait for Page to Load
    Then I Verify the Text Message for Re-Enter PIN
    Then I Re-Enter the PIN as 4 Digit

  @sanity
  Scenario: Verifying application Device Management Set Master Pin  UI
    Then I Wait for Page to Load
    Then I Tap on the Master PIN option
    Then I Verified the Master PIN Password popup
    Then I enter the correct password
    Then I Tap on the alert popup Enter button
    Then I verify the Master PIn Header
    Then I Verify the Set Master Pin text
    Then I Verify the text "Pin Must be 4 digit"
    Then I have tap on the close button in master Pin Main screen
    Then I Wait short period for Page to Load
    Then I tap on back button on device management main screen
    Then I Wait short period for Page to Load
    Then I tap on back button on device management device selection page
