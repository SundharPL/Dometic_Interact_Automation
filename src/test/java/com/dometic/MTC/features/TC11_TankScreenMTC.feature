Feature: Testing an Dometic LMC application

  @First1 @sanity1
  Scenario: Verifying application Tank screen UI
    Then I Tap on Tank tile on landing screen
    Then I verify Tank header text
    Then I verify Alert text
    Then I Wait short period for Page to Load
    Then I Tap on Alert toggle if it's already in OFF state
    Then I Scroll up the page
    Then I verify Alert-Tank Level Above Text
    Then I Tap on Alert-Tank Level Above
    Then I Wait short period for Page to Load
    Then I Scroll the page
    Then I verify the apply button
    Then I Tap on Alert-Tank Level Above
    Then I verify Alert-Set Latency Text
    Then I Tap on Alert-Set Latency
    Then I Wait short period for Page to Load
    Then I Scroll the page
    Then I Tap on Alert-Set Latency
    Then I verify Warning text
    Then I Tap on Warnings toggle if it's already in OFF state
    Then I verify Warnings-Tank Level Above Text
    Then I Tap on Warnings-Tank Level Above
    Then I Wait short period for Page to Load
    Then I Scroll up the page
    Then I Tap on Warnings-Tank Level Above
    Then I verify Warnings-Set Latency Text
    Then I Tap on Warnings-Set Latency
    Then I Wait short period for Page to Load
    Then I Scroll up the page
    Then I Tap on Warnings-Set Latency
    Then I Wait short period for Page to Load
    Then I Tap on Back Button
