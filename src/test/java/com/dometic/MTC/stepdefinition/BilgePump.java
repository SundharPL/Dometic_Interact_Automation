package com.dometic.MTC.stepdefinition;

import com.dometic.MTC.qa.Pages.Constant_BilgePump_MTC;
import com.dometic.MTC.qa.util.Baseclass;
import cucumber.api.java.en.Then;
import org.testng.Assert;

public class BilgePump extends Baseclass {
    @Then("I Tap on Bilge Pump tile on landing screen")
    public void iTapOnBilgePumpTileOnLandingScreen() {
        Taponbutton(Constant_BilgePump_MTC.mtc_Bilge_Pump_tile_xpath);
    }

    @Then("I verify Bilge Pump header text")
    public void iVerifyBilgePumpHeaderText() throws Throwable {
        asserttextValidationAccessibility(Constant_BilgePump_MTC.mtc_Bilge_Pump,Constant_BilgePump_MTC.mtc_Bilge_Pump_Title_Access_ID);
    }

    @Then("I verify Bilge Pump status")
    public void iVerifyBilgePumpStatus() {
        Assert.assertTrue(iselementdisplayedaccessabilityId(Constant_BilgePump_MTC.mtc_Bilge_Pump_status_Access_ID));
    }

    @Then("I verify Run Cycles text")
    public void iVerifyRunCyclesText() throws Throwable {
        asserttextValidation(Constant_BilgePump_MTC.mtc_Bilge_Pump_Runcycles_text,Constant_BilgePump_MTC.mtc_Bilge_Pump_RunCycles_xpath);
    }

    @Then("I Tap on Run Cycles down arrow")
    public void iTapOnRunCyclesDownArrow() {
        Taponbutton(Constant_BilgePump_MTC.mtc_Bilge_Pump_RunCyclesGraph_arrow_xpath);
    }

    @Then("I Tap on week in Run Cycles Graph")
    public void iTapOnWeekInRunCyclesGraph() {
        Taponbutton(Constant_BilgePump_MTC.mtc_Bilge_Pump_WEEKText_xpath);
    }

    @Then("I Tap on month in Run Cycles Graph")
    public void iTapOnYearInRunCyclesGraph() {
        Taponbutton(Constant_BilgePump_MTC.mtc_Bilge_Pump_MONTHText_xpath);
    }

    @Then("I verify Alert-Max Cycle\\/Hour Text")
    public void iVerifyAlertMaxCycleHourText() throws Throwable {
        asserttextValidation(Constant_BilgePump_MTC.mtc_Bilge_Pump_Alerts_Max_Cycle_Hour,Constant_BilgePump_MTC.mtc_Bilge_Pump_Alerts_Max_Cycle_Hour_xpath);
    }

    @Then("I Tap on Alert-Max Cycle\\/Hour")
    public void iTapOnAlertMaxCycleHour() {
        Taponbutton(Constant_BilgePump_MTC.mtc_Bilge_Pump_Alerts_Max_Cycle_Hour_xpath);
    }

    @Then("I verify Alert-Max Daily Cycle Text")
    public void iVerifyAlertMaxDailyCycleText() throws Throwable {
        asserttextValidation(Constant_BilgePump_MTC.mtc_Bilge_Pump_Alerts_Max_Daily_Cycle,Constant_BilgePump_MTC.mtc_Bilge_Pump_Alerts_Max_Daily_Cycle_xpath);
    }

    @Then("I Tap on Alert-Max Daily Cycle")
    public void iTapOnAlertMaxDailyCycle() {
        Taponbutton(Constant_BilgePump_MTC.mtc_Bilge_Pump_Alerts_Max_Daily_Cycle_xpath);
    }

    @Then("I verify Continuous Text")
    public void iVerifyContinuousText() throws Throwable {
        asserttextValidation(Constant_BilgePump_MTC.mtc_Bilge_Pump_Alerts_Continuous,Constant_BilgePump_MTC.mtc_Bilge_Pump_Alerts_Continuous_xpath);
    }

    @Then("I Tap on Continuous")
    public void iTapOnContinuous() {
        Taponbutton(Constant_BilgePump_MTC.mtc_Bilge_Pump_Alerts_Continuous_xpath);
    }

    @Then("I verify Warnings-Max Daily Cycle Text")
    public void iVerifyWarningsMaxDailyCycleText() throws Throwable {
        asserttextValidation(Constant_BilgePump_MTC.mtc_Bilge_Pump_Alerts_Max_Cycle_Hour,Constant_BilgePump_MTC.mtc_Bilge_Pump_Warnings_Max_Cycle_Hour_xpath);
    }

    @Then("I Tap on Warnings-Max Daily Cycle")
    public void iTapOnWarningsMaxDailyCycle() {
        Taponbutton(Constant_BilgePump_MTC.mtc_Bilge_Pump_Warnings_Max_Daily_Cycle_xpath);
    }

    @Then("I Tap on Warnings-Max Cycle\\/Hour")
    public void iTapOnWarningsMaxCycleHour() {
        Taponbutton(Constant_BilgePump_MTC.mtc_Bilge_Pump_Warnings_Max_Cycle_Hour_xpath);
    }

    @Then("I verify Alert-Max Cycle Hour Text")
    public void iVerifyAlertMaxCycleHourText1() throws Throwable {
        asserttextValidation(Constant_BilgePump_MTC.mtc_Bilge_Pump_Alerts_Max_Cycle_Hour,Constant_BilgePump_MTC.mtc_Bilge_Pump_Alerts_Max_Cycle_Hour_xpath);
    }

    @Then("I Tap on Alert-Max Cycle Hour")
    public void iTapOnAlertMaxCycleHour1() {
        Taponbutton(Constant_BilgePump_MTC.mtc_Bilge_Pump_Alerts_Max_Cycle_Hour_xpath);
    }

    @Then("I verify Warnings-Max Cycle Hour Text")
    public void iVerifyWarningsMaxCycleHourText() throws Throwable {
        asserttextValidation(Constant_BilgePump_MTC.mtc_Bilge_Pump_Alerts_Max_Cycle_Hour,Constant_BilgePump_MTC.mtc_Bilge_Pump_Warnings_Max_Cycle_Hour_xpath);
    }

    @Then("I Tap on Warnings-Max Cycle Hour")
    public void iTapOnWarningsMaxCycleHour1() {
        Taponbutton(Constant_BilgePump_MTC.mtc_Bilge_Pump_Warnings_Max_Cycle_Hour_xpath);
    }

    @Then("I Tap on Warnings-Continuous")
    public void iTapOnWarningsContinuous() {
        Taponbutton(Constant_BilgePump_MTC.mtc_Bilge_Pump_Warnings_Continuous_xpath);
    }
}
