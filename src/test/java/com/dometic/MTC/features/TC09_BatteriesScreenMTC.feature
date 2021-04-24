Feature: Testing an Dometic LMC application

  @First1 @sanity1
  Scenario: Verifying application Batteries screen UI
    Then I Tap on Batteries tile on landing screen
    Then I verify Batteries header text
    Then I verify Battery status
    Then I verify Voltage Graph text
    Then I Tap on Voltage Graph down arrow
    Then I verify Voltage text
    Then I verify History text
    Then I Scroll up the page
    Then I verify Day text
    Then I verify WEEK text
    Then I verify MONTH text
    Then I Tap on week in voltage Graph
    Then I Wait short period for Page to Load
    Then I Tap on year in voltage Graph
    Then I Wait short period for Page to Load
    Then I verify Alerts text
    Then I Tap on Alert toggle if it's already in OFF state
    Then I verify Alert-Battery Voltage Below Text
    Then I Tap on Alert-Battery Voltage Below
    Then I Wait short period for Page to Load
    Then I Scroll the page
    Then I verify the apply button
    Then I Tap on Alert-Battery Voltage Below
    Then I verify Alert-Set Latency Text
    Then I Tap on Alert-Set Latency
    Then I Wait short period for Page to Load
    Then I Scroll the page
    Then I Tap on Alert-Set Latency
    Then I verify Warnings text
    Then I Tap on Warnings toggle if it's already in OFF state
    Then I verify Warnings-Battery Voltage Below Text
    Then I Tap on Warnings-Battery Voltage Below
    Then I Wait short period for Page to Load
    Then I Scroll up the page
    Then I Tap on Warnings-Battery Voltage Below
    Then I verify Warnings-Set Latency Text
    Then I Tap on Warnings-Set Latency
    Then I Wait short period for Page to Load
    Then I Scroll up the page
    Then I Tap on Warnings-Set Latency
    Then I Wait short period for Page to Load
    Then I Tap on Back Button

