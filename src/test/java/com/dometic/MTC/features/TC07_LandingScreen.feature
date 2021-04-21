Feature: Testing an Dometic LMC application

  @First @sanity
  Scenario: Verifying application Landing Screen functionality
    Then I Tap on the access this location pop up
    Then I Tap on LATER Button
    Then I Tap on cancel button in Upgrade Firmware

  @sanity
  Scenario: Verifying application Bottom Layout screen functionality
    Then I Verify the All option in the Bottom layout of Landing screen
    Then I Verify the Device option in the Bottom  layout of Landing screen
    Then I Verify the Tanks option in the Bottom  layout of Landing screen
    Then I Verify the climate option in the Bottom  layout of Landing screen
    Then I Verify the Scene option in the Bottom  layout of Landing screen
    Then I Wait short period for Page to Load
    Then I Tap on climate option in the Bottom  layout of Landing screen
#    Then I Validated Corresponding Climate tile is displayed
    Then I Wait short period for Page to Load
    Then I Tap on Device option in the Bottom  layout of Landing screen
#    Then I Validate Corresponding Devices tile is displayed
    Then I Tap on Tanks option in the Bottom  layout of Landing screen
#    Then I Validate Corresponding Tank tile is displayed
    Then I Tap on Scene option in the Bottom  layout of Landing screen
    Then I Wait short period for Page to Load
    Then I Tap on Back Button
    Then I Wait short period for Page to Load
    Then I Tap on All option in the Bottom layout of Landing screen

  @sanity
  Scenario: Verifying application Bottom Layout screen with ViewOption(Tile View-All Devices) functionality
    Then I Wait short period for Page to Load
    Then I Tap on View option button in landing screen
    Then I Wait short period for Page to Load
    Then I Tap on Tile View Options
    Then I Tap on All Devices
    Then I Tap on Cancel Button
    Then I Wait short period for Page to Load
    Then I Verify the All option in the Bottom layout of Landing screen
    Then I Verify the Device option in the Bottom  layout of Landing screen
    Then I Verify the Tanks option in the Bottom  layout of Landing screen
    Then I Verify the climate option in the Bottom  layout of Landing screen
    Then I Verify the Scene option in the Bottom  layout of Landing screen
    Then I Wait short period for Page to Load
    Then I Tap on climate option in the Bottom  layout of Landing screen
#    Then I Validated Corresponding Climate tile is displayed
    Then I Wait short period for Page to Load
    Then I Tap on Device option in the Bottom  layout of Landing screen
#    Then I Validate Corresponding Devices tile is displayed
    Then I Tap on Tanks option in the Bottom  layout of Landing screen
#    Then I Validate Corresponding Tank tile is displayed
    Then I Tap on Scene option in the Bottom  layout of Landing screen
    Then I Tap on Back Button
    Then I Wait short period for Page to Load
    Then I Tap on All option in the Bottom layout of Landing screen

  @sanity
  Scenario: Verifying application Bottom Layout screen with ViewOption(Tile View-Connected Devices) functionality
    Then I Tap on View option button in landing screen
    Then I Tap on Connected Devices
    Then I Tap on Cancel Button
    Then I Wait short period for Page to Load
    Then I Verify the All option in the Bottom layout of Landing screen
    Then I Verify the Device option in the Bottom  layout of Landing screen
    Then I Verify the Tanks option in the Bottom  layout of Landing screen
    Then I Verify the climate option in the Bottom  layout of Landing screen
    Then I Verify the Scene option in the Bottom  layout of Landing screen
    Then I Wait short period for Page to Load
    Then I Tap on climate option in the Bottom  layout of Landing screen
#    Then I Validated Corresponding Climate tile is displayed
    Then I Wait short period for Page to Load
    Then I Tap on Device option in the Bottom  layout of Landing screen
#    Then I Validate Corresponding Devices tile is displayed
    Then I Tap on Tanks option in the Bottom  layout of Landing screen
#    Then I Validate Corresponding Tank tile is displayed
    Then I Tap on Scene option in the Bottom  layout of Landing screen
    Then I Tap on Back Button
    Then I Wait short period for Page to Load
    Then I Tap on All option in the Bottom layout of Landing screen

  @sanity
  Scenario: Verifying application Bottom Layout screen with ViewOption(Tile View-Non Connected Devices) functionality
    Then I Tap on View option button in landing screen
    Then I Tap on Non Connected Devices
    Then I Tap on Cancel Button
    Then I Wait short period for Page to Load
    Then I Verify the All option in the Bottom layout of Landing screen
    Then I Verify the Device option in the Bottom  layout of Landing screen
    Then I Verify the Tanks option in the Bottom  layout of Landing screen
    Then I Verify the climate option in the Bottom  layout of Landing screen
    Then I Verify the Scene option in the Bottom  layout of Landing screen
    Then I Tap on Device option in the Bottom  layout of Landing screen
    Then I Tap on Tanks option in the Bottom  layout of Landing screen
    Then I Tap on Scene option in the Bottom  layout of Landing screen
    Then I Wait short period for Page to Load
    Then I Tap on Back Button
    Then I Wait short period for Page to Load
    Then I Tap on All option in the Bottom layout of Landing screen

  @sanity
  Scenario: Verifying application Bottom Layout screen with ViewOption(List View-All Devices) functionality
    Then I Tap on View option button in landing screen
    Then I Tap on List View Options
    Then I Tap on All Devices
    Then I Tap on Cancel Button
    Then I Verify the All option in the Bottom layout of Landing screen
    Then I Verify the Device option in the Bottom  layout of Landing screen
    Then I Verify the Tanks option in the Bottom  layout of Landing screen
    Then I Verify the climate option in the Bottom  layout of Landing screen
    Then I Verify the Scene option in the Bottom  layout of Landing screen
    Then I Wait short period for Page to Load
    Then I Tap on climate option in the Bottom  layout of Landing screen
#    Then I Validated Corresponding Climate tile is displayed
    Then I Wait short period for Page to Load
    Then I Tap on Device option in the Bottom  layout of Landing screen
#    Then I Validate Corresponding Devices tile is displayed
    Then I Tap on Tanks option in the Bottom  layout of Landing screen
#    Then I Validate Corresponding Tank tile is displayed
    Then I Tap on Scene option in the Bottom  layout of Landing screen
    Then I Tap on Back Button
    Then I Wait short period for Page to Load
    Then I Tap on All option in the Bottom layout of Landing screen

  @sanity
  Scenario: Verifying application Bottom Layout screen with ViewOption(List View-Connected Devices) functionality
    Then I Tap on View option button in landing screen
    Then I Tap on Connected Devices
    Then I Tap on Cancel Button
    Then I Verify the All option in the Bottom layout of Landing screen
    Then I Verify the Device option in the Bottom  layout of Landing screen
    Then I Verify the Tanks option in the Bottom  layout of Landing screen
    Then I Verify the climate option in the Bottom  layout of Landing screen
    Then I Verify the Scene option in the Bottom  layout of Landing screen
    Then I Wait short period for Page to Load
    Then I Tap on climate option in the Bottom  layout of Landing screen
#    Then I Validated Corresponding Climate tile is displayed
    Then I Wait short period for Page to Load
    Then I Tap on Device option in the Bottom  layout of Landing screen
#    Then I Validate Corresponding Devices tile is displayed
    Then I Tap on Tanks option in the Bottom  layout of Landing screen
#    Then I Validate Corresponding Tank tile is displayed
    Then I Tap on Scene option in the Bottom  layout of Landing screen
    Then I Tap on Back Button
    Then I Wait short period for Page to Load
    Then I Tap on All option in the Bottom layout of Landing screen

  @sanity
  Scenario: Verifying application Bottom Layout screen with ViewOption(List View-Non Connected Devices) functionality
    Then I Tap on View option button in landing screen
    Then I Tap on Non Connected Devices
    Then I Tap on Cancel Button
    Then I Verify the All option in the Bottom layout of Landing screen
    Then I Verify the Device option in the Bottom  layout of Landing screen
    Then I Verify the Tanks option in the Bottom  layout of Landing screen
    Then I Verify the climate option in the Bottom  layout of Landing screen
    Then I Verify the Scene option in the Bottom  layout of Landing screen
    Then I Wait short period for Page to Load
    Then I Tap on Device option in the Bottom  layout of Landing screen
    Then I Wait short period for Page to Load
    Then I Tap on Tanks option in the Bottom  layout of Landing screen
    Then I Wait short period for Page to Load
    Then I Tap on Scene option in the Bottom  layout of Landing screen
    Then I Tap on Back Button
    Then I Wait short period for Page to Load
    Then I Tap on All option in the Bottom layout of Landing screen
    Then I Wait short period for Page to Load
    Then I Tap on View option button in landing screen
    Then I Wait short period for Page to Load
    Then I Tap on Tile View Options
    Then I Tap on All Devices
    Then I Tap on Cancel Button
    Then I Wait short period for Page to Load

  @sanity1
  Scenario: Verifying application Climate screen functionality
    Then I Tap on Climate in Landing screen
    Then I Wait short period for Page to Load
    Then I verified inside text is displayed in Ac climate screen
    Then I verified outside text is displayed in Ac climate screen
    Then I Wait short period for Page to Load
    Then I verify power text climate main screen
    Then I verify fan speed text climate main screen
    Then I verify Auto-fan speed text climate main screen
    Then I Tap on Auto-fan speed navigation in climate main screen
    Then I verify the AutoSpeed text inside the Auto-fan mode
    Then I verify the AutoCont text inside the Auto-fan mode
    Then I Scroll up the page
    Then I verify the climate mode text in climate main screen
    Then I verify the Eco modifier text in climate main screen
    Then I verify the Sleep modifier text in climate main screen
    Then I verify the Scheduler text in climate main screen
    Then I Wait short period for Page to Load
    Then I Tap on Auto-fan speed info icon climate main screen
    Then I Wait short period for Page to Load
    Then I tap on Device back button
    Then I Wait short period for Page to Load
    Then I tap on Eco modifier tool tip in climate main screen
    Then I Wait short period for Page to Load
    Then I tap on Device back button
    Then I Wait short period for Page to Load
    Then I Tap on the Sleep modifier tool tip in climate main screen
    Then I Wait short period for Page to Load
    Then I tap on Device back button
    Then I Wait short period for Page to Load
#    Then I Scroll Right to Left of the screen
#    Then I Scroll Right to Left of the screen
#    Then I Wait short period for Page to Load
#    Then I Tap on Apply button in climate screen
#    Then I Wait for Page to Load
#    Then I verified Power text is displayed Ac climate screen
#    Then I verified Fan speed text is displayed Ac climate screen
#    Then I verified Climate Mode text is displayed Ac climate screen
#    Then I verified Climate AGS text is displayed Ac climate screen
#    Then I verified Air Conditioner text is displayed Ac climate screen
#    Then I verified Scheduler text is displayed Ac climate screen
#    Then I Tap on Fan speed in climate screen
#    Then I scroll up the screen in AC Fan Speed
#    Then I Wait short period for Page to Load
#    Then I Tap on Apply button in AC Fan Speed
#    Then I Wait short period for Page to Load
#    Then I Wait short period for Page to Load
#    Then I Tap on Climate mode in climate screen
#    Then I Wait short period for Page to Load
#    Then I scroll up the screen in Climate Mode
#    Then I Tap on Apply button in AC Climate Mode
#    Then I Wait short period for Page to Load
#    Then I Tap on Scheduled At in climate screen
#    Then I Wait short period for Page to Load
#    Then I Scroll up the hours in Scheduled At
#    Then I Scroll up the minutes in Scheduled At
#    Then I Tap on apply button in Scheduled At
    Then I Tap on Back Button
    Then I Wait short period for Page to Load



