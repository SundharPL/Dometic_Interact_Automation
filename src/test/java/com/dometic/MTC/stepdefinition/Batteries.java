package com.dometic.MTC.stepdefinition;

import com.aventstack.extentreports.GherkinKeyword;
import com.dometic.MTC.qa.Pages.Constant_Batteries_MTC;
import com.dometic.MTC.qa.util.Baseclass;
import cucumber.api.java.en.Then;
import io.appium.java_client.android.AndroidElement;
import org.openqa.selenium.By;
import org.testng.Assert;

import java.util.List;

public class Batteries extends Baseclass {
    @Then("I Tap on Batteries tile on landing screen")
    public void iTapOnBatteriesTileOnLandingScreen() {
        Taponbutton(Constant_Batteries_MTC.mtc_Batteries_xpath);
    }

    @Then("I verify Batteries header text")
    public void iVerifyBatteriesHeaderText() throws Throwable {
        asserttextValidationAccessibility(Constant_Batteries_MTC.mtc_Batteries, Constant_Batteries_MTC.mtc_Climate_Title_Access_ID);
    }

    @Then("I verify Battery status")
    public void iVerifyBatteryStatus() {
        Assert.assertTrue(iselementdisplayedaccessabilityId(Constant_Batteries_MTC.mtc_Batteries_Status_Access_ID));
    }

    @Then("I verify Voltage Graph text")
    public void iVerifyVoltageGraphText() throws Throwable {
        asserttextValidation(Constant_Batteries_MTC.mtc_Batteries_VoltageGraph_text, Constant_Batteries_MTC.mtc_Batteries_VoltageGraph_xpath);
    }

    @Then("I Tap on Voltage Graph down arrow")
    public void iTapOnVoltageGraphDownArrow() {
        Taponbutton(Constant_Batteries_MTC.mtc_Batteries_VoltageGraph_xpath);
    }

    @Then("I verify Voltage text")
    public void iVerifyVoltageText() throws Throwable {
        asserttextValidation(Constant_Batteries_MTC.mtc_Batteries_VoltageText_text, Constant_Batteries_MTC.mtc_Batteries_VoltageText_xpath);
    }

    @Then("I verify History text")
    public void iVerifyHistoryText() throws Throwable {
        asserttextValidation(Constant_Batteries_MTC.mtc_Batteries_HistoryText_text, Constant_Batteries_MTC.mtc_Batteries_HistoryText_xpath);
    }

    @Then("I verify Day text")
    public void iVerifyDayText() throws Throwable {
        asserttextValidation(Constant_Batteries_MTC.mtc_Batteries_DAYText_text, Constant_Batteries_MTC.mtc_Batteries_DAYText_xpath);
    }

    @Then("I verify WEEK text")
    public void iVerifyWEEKText() throws Throwable {
        asserttextValidation(Constant_Batteries_MTC.mtc_Batteries_WEEKText_text, Constant_Batteries_MTC.mtc_Batteries_WEEKText_xpath);
    }

    @Then("I verify MONTH text")
    public void iVerifyMONTHText() throws Throwable {
        asserttextValidation(Constant_Batteries_MTC.mtc_Batteries_MONTHText_text, Constant_Batteries_MTC.mtc_Batteries_MONTHText_xpath);
    }

    @Then("I verify Alerts text")
    public void iVerifyAlertsText() throws Throwable {
        asserttextValidation(Constant_Batteries_MTC.mtc_Batteries_AlertsText, Constant_Batteries_MTC.mtc_Batteries_AlertsText_xpath);
    }

    @Then("I Tap on Alert toggle if it's already in OFF state")
    public void iTapOnAlertToggleIfItSAlreadyInOFFState() throws InterruptedException {
//        if (driver.findElement(By.xpath(Constant_Batteries_MTC.mtc_Batteries_Alerts_Status_Text_xpath)).getText().equalsIgnoreCase(Constant_Batteries_MTC.mtc_Climate_Tile_Power_toggle_Status)) {
        List<AndroidElement> elements = driver.findElements(By.xpath(Constant_Batteries_MTC.mtc_Batteries_Alerts_Status_Text_xpath));
        if(elements.size()!=0){
            Taponbutton(Constant_Batteries_MTC.mtc_Batteries_Alerts_toggle_xpath);
            Thread.sleep(10000);

        }
    }

    @Then("I verify Alert-Battery Voltage Below Text")
    public void iVerifyAlertBatteryVoltageBelowTextText() throws Throwable {
        List<AndroidElement> elements = driver.findElements(By.xpath(Constant_Batteries_MTC.mtc_Batteries_Alerts_Status_On_Text_xpath));
        if (elements.size() != 0) {
            asserttextValidation(Constant_Batteries_MTC.mtc_Batteries_Alerts_Battery_Voltage_BelowText, Constant_Batteries_MTC.mtc_Batteries_Alerts_Battery_Voltage_BelowText_xpath);
        }
    }

    @Then("I Tap on Alert-Battery Voltage Below")
    public void iTapOnAlertBatteryVoltageBelow() {
        List<AndroidElement> elements = driver.findElements(By.xpath(Constant_Batteries_MTC.mtc_Batteries_Alerts_Status_On_Text_xpath));
        if (elements.size() != 0) {
            Taponbutton(Constant_Batteries_MTC.mtc_Batteries_Alerts_Battery_Voltage_BelowText_xpath);
        }
    }

    @Then("I Tap on apply button in Alert-Battery Voltage Below")
    public void iTapOnApplyButtonInAlertBatteryVoltageBelow() {
        List<AndroidElement> elements = driver.findElements(By.xpath(Constant_Batteries_MTC.mtc_Batteries_Alerts_Status_On_Text_xpath));
        if (elements.size() != 0) {
            Taponbutton(Constant_Batteries_MTC.mtc_Batteries_Alerts_Battery_Voltage_BelowText_Apply_xpath);
        }
    }

    @Then("I verify Alert-Set Latency Text")
    public void iVerifyAlertSetLatencyTextText() throws Throwable {
        List<AndroidElement> elements = driver.findElements(By.xpath(Constant_Batteries_MTC.mtc_Batteries_Alerts_Status_On_Text_xpath));
        if (elements.size() != 0) {
            asserttextValidation(Constant_Batteries_MTC.mtc_Batteries_Set_LatencyText, Constant_Batteries_MTC.mtc_Batteries_Set_LatencyText_xpath);
        }
    }

    @Then("I Tap on Alert-Set Latency")
    public void iTapOnAlertSetLatency() {
        List<AndroidElement> elements = driver.findElements(By.xpath(Constant_Batteries_MTC.mtc_Batteries_Alerts_Status_On_Text_xpath));
        if (elements.size() != 0) {
            Taponbutton(Constant_Batteries_MTC.mtc_Batteries_Set_LatencyText_xpath);
        }
    }

    @Then("I Tap on apply button in Alert-Set Latency")
    public void iTapOnApplyButtonInAlertSetLatency() {
        List<AndroidElement> elements = driver.findElements(By.xpath(Constant_Batteries_MTC.mtc_Batteries_Alerts_Status_On_Text_xpath));
        if (elements.size() != 0) {
            Taponbutton(Constant_Batteries_MTC.mtc_Batteries_Alerts_Battery_Voltage_BelowText_Apply_xpath);
        }
    }

    @Then("I verify Warnings text")
    public void iVerifyWarningsText() throws Throwable {
        asserttextValidation(Constant_Batteries_MTC.mtc_Batteries_WarningsText, Constant_Batteries_MTC.mtc_Batteries_WarningsText_xpath);
    }

    @Then("I Tap on Warnings toggle if it's already in OFF state")
    public void iTapOnWarningsToggleIfItSAlreadyInOFFState() throws InterruptedException {
//        if (driver.findElement(By.xpath(Constant_Batteries_MTC.mtc_Batteries_Warnings_Status_Text_xpath)).getText().equalsIgnoreCase(Constant_Batteries_MTC.mtc_Climate_Tile_Power_toggle_Status)) {
//            System.out.println(driver.findElement(By.xpath(Constant_Batteries_MTC.mtc_Batteries_Warnings_Status_Text_xpath)).getText());
        List<AndroidElement> elements = driver.findElements(By.xpath(Constant_Batteries_MTC.mtc_Batteries_Warnings_Status_Text_xpath));
        if(elements.size()!=0){
            Taponbutton(Constant_Batteries_MTC.mtc_Batteries_Warnings_toggle_xpath);
            Thread.sleep(10000);
        }

//        }
    }

    @Then("I verify Warnings-Battery Voltage Below Text")
    public void iVerifyWarningsBatteryVoltageBelowTextText() throws Throwable {
        List<AndroidElement> elements = driver.findElements(By.xpath(Constant_Batteries_MTC.mtc_Batteries_Warnings_Status_On_Text_xpath));
        if (elements.size() != 0) {
            asserttextValidation(Constant_Batteries_MTC.mtc_Batteries_Alerts_Battery_Voltage_BelowText, Constant_Batteries_MTC.mtc_Batteries_Warnings_Battery_Voltage_BelowText_xpath);
        }
    }

    @Then("I Tap on Warnings-Battery Voltage Below")
    public void iTapOnWarningsBatteryVoltageBelow() {
        List<AndroidElement> elements = driver.findElements(By.xpath(Constant_Batteries_MTC.mtc_Batteries_Warnings_Status_On_Text_xpath));
        if (elements.size() != 0) {
            Taponbutton(Constant_Batteries_MTC.mtc_Batteries_Warnings_Battery_Voltage_BelowText_xpath);
        }
    }

    @Then("I Tap on apply button in Warnings-Battery Voltage Below")
    public void iTapOnApplyButtonInWarningsBatteryVoltageBelow() {
        List<AndroidElement> elements = driver.findElements(By.xpath(Constant_Batteries_MTC.mtc_Batteries_Warnings_Status_On_Text_xpath));
        if (elements.size() != 0) {
            Taponbutton(Constant_Batteries_MTC.mtc_Batteries_Alerts_Battery_Voltage_BelowText_Apply_xpath);
        }
    }

    @Then("I verify Warnings-Set Latency Text")
    public void iVerifyWarningsSetLatencyTextText() throws Throwable {
        List<AndroidElement> elements = driver.findElements(By.xpath(Constant_Batteries_MTC.mtc_Batteries_Warnings_Status_On_Text_xpath));
        if (elements.size() != 0) {
            asserttextValidation(Constant_Batteries_MTC.mtc_Batteries_Set_LatencyText, Constant_Batteries_MTC.mtc_Batteries_Warnings_Set_LatencyText_xpath);
        }
    }

    @Then("I Tap on Warnings-Set Latency")
    public void iTapOnWarningsSetLatency() {
        List<AndroidElement> elements = driver.findElements(By.xpath(Constant_Batteries_MTC.mtc_Batteries_Warnings_Status_On_Text_xpath));
        if (elements.size() != 0) {
            Taponbutton(Constant_Batteries_MTC.mtc_Batteries_Warnings_Set_LatencyText_xpath);
        }
    }

    @Then("I Tap on apply button in Warnings-Set Latency")
    public void iTapOnApplyButtonInWarningsSetLatency() {
        List<AndroidElement> elements = driver.findElements(By.xpath(Constant_Batteries_MTC.mtc_Batteries_Warnings_Status_On_Text_xpath));
        if (elements.size() != 0) {
            Taponbutton(Constant_Batteries_MTC.mtc_Batteries_Alerts_Battery_Voltage_BelowText_Apply_xpath);
        }
    }

    @Then("I Scroll the page")
    public void iScrollThePage() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Scroll up the page");
        Basestepdefinition.verticalSwipe(0.6, 0.2, 0.5);
    }

    @Then("I verify the apply button")
    public void iVerifyTheApplyButton() {
        List<AndroidElement> elements = driver.findElements(By.xpath(Constant_Batteries_MTC.mtc_Batteries_Warnings_Battery_Voltage_BelowText_Apply_xpath));
        if(elements.size()!=0){
            iselementdisplayed(Constant_Batteries_MTC.mtc_Batteries_Warnings_Battery_Voltage_BelowText_Apply_xpath);
        }
    }

    @Then("I Tap on week in voltage Graph")
    public void iTapOnWeekInVoltageGraph() {
        Taponbutton(Constant_Batteries_MTC.mtc_Batteries_WEEKText_xpath);
    }

    @Then("I Tap on year in voltage Graph")
    public void iTapOnYearInVoltageGraph() {
        Taponbutton(Constant_Batteries_MTC.mtc_Batteries_MONTHText_xpath);
    }
}
