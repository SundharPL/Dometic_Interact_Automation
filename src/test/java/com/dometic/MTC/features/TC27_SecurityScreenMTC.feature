Feature: Verifying application Security Screen in Dometic Marine application

  @First1 @sanity1
  Scenario: Verifying application Security screen UI
    Then I Wait short period for Page to Load
    Then I Tap on Security Tile on landing screen
    Then I verify Security Header text is displayed
    Then I verify Security Arm Icon is displayed
    Then I verify Security current status is displayed
    Then I verify Arm button is displayed
    Then I verify Arm button label is displayed
    Then I Verify Geo Fencing text is displayed in Security screen
    Then I Verify Geo Fencing-toggle status is displayed in Security screen
    Then I Verify Geo Fencing-toggle is displayed in Security screen
    Then I Tap on Gio Fencing Radius from center toggle if it's already in OFF state
    Then I Verify Geo Fencing Radius from center text is displayed in Security screen
    Then I Verify Geo Fencing Radius from center Expand Icon is displayed in Security screen
    Then I Verify Geo Fencing Alert Latency text is displayed in Security screen
    Then I Verify Geo Fencing Alert Latency Expand Icon is displayed in Security screen
    Then I Scroll up the page
    Then I Wait short period for Page to Load
    Then I Tap on Door Window Alert toggle if it's already in OFF state
    Then I Verify Door Window Alert text is displayed in Security screen
    Then I Verify Door Window Alert-toggle status is displayed in Security screen
    Then I Verify Door Window Alert-toggle is displayed in Security screen
    Then I Verify Door Window Alert Alert Latency text is displayed in Security screen
    Then I Verify Door Window Alert Alert Latency Expand Icon is displayed in Security screen
    Then I Scroll up the page
    Then I Wait short period for Page to Load
    Then I Tap on Theft Alert toggle if it's already in OFF state
    Then I Verify Theft Alert text is displayed in Security screen
    Then I Verify Theft Alert-toggle status is displayed in Security screen
    Then I Verify Theft Alert-toggle is displayed in Security screen
    Then I Verify Theft Alert Alert Latency text is displayed in Security screen
    Then I Verify Theft Alert Alert Latency Expand Icon is displayed in Security screen
    Then I Wait short period for Page to Load
    Then I Tap on Back Button

  @sanity1
  Scenario: Verifying application Security screen(Gio Fencing-Radius From Center) Functionality
    Then I Wait short period for Page to Load
    Then I Tap on Security Tile on landing screen
    Then I Wait short period for Page to Load
    Then I Scroll up the page
    Then I Tap on Radius from center in Gio Fencing Security
    Then I Wait short period for Page to Load
    Then I Scroll up the screen in Radius from center in Gio Fencing
    Then I verify apply button is displayed in Radius from center in Gio Fencing
    Then I Tap on Apply button in Radius from center in Gio Fencing
    Then I Wait for Page to Load
    Then I validated applied minutes is displayed in Radius from center in Gio Fencing
    Then I Wait short period for Page to Load
    Then I Tap on Back Button

  @sanity1
  Scenario: Verifying application Security screen(Gio Fencing-Alert Latency) Functionality
    Then I Wait short period for Page to Load
    Then I Tap on Security Tile on landing screen
    Then I Wait short period for Page to Load
    Then I Scroll up the page
    Then I Tap on Alert Latency in Gio Fencing Security
    Then I Wait short period for Page to Load
    Then I Scroll up the screen in Alert Latency in Gio Fencing
    Then I verify apply button is displayed in Alert Latency in Gio Fencing
    Then I Tap on Apply button in Alert Latency in Gio Fencing
    Then I Wait for Page to Load
    Then I validated applied minutes is displayed in Alert Latency in Gio Fencing
    Then I Wait short period for Page to Load
    Then I Tap on Back Button

  @sanity1
  Scenario: Verifying application Security screen(Door/Window Alert-Alert Latency) Functionality
    Then I Wait short period for Page to Load
    Then I Tap on Security Tile on landing screen
    Then I Wait short period for Page to Load
    Then I Tap on Alert Latency in Door Window Alert Security
    Then I Wait short period for Page to Load
    Then I Scroll up the page
    Then I Scroll up the screen in Alert Latency in Door Window Alert
    Then I verify apply button is displayed in Alert Latency in Door Window Alert
    Then I Tap on Apply button in Alert Latency in Door Window Alert
    Then I Wait for Page to Load
    Then I validated applied minutes is displayed in Alert Latency in Door Window Alert
    Then I Wait short period for Page to Load
    Then I Tap on Back Button

  @sanity1
  Scenario: Verifying application Security screen(Theft Alert-Alert Latency) Functionality
    Then I Wait short period for Page to Load
    Then I Tap on Security Tile on landing screen
    Then I Wait short period for Page to Load
    Then I Scroll up the page
    Then I Tap on Alert Latency in Theft Alert Security
    Then I Wait short period for Page to Load
    Then I Scroll up the page
    Then I Scroll up the screen in Alert Latency in Theft Alert
    Then I verify apply button is displayed in Alert Latency in Theft Alert
    Then I Tap on Apply button in Alert Latency in Theft Alert
    Then I Wait for Page to Load
    Then I validated applied minutes is displayed in Alert Latency in Theft Alert
    Then I Wait short period for Page to Load
    Then I Tap on Back Button


