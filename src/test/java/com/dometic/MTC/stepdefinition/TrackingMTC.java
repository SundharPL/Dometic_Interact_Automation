package com.dometic.MTC.stepdefinition;

import com.aventstack.extentreports.GherkinKeyword;
import com.dometic.MTC.qa.Pages.Constant_Batteries_MTC;
import com.dometic.MTC.qa.Pages.Constant_BilgePump_MTC;
import com.dometic.MTC.qa.Pages.Constant_Tracking_MTC;
import com.dometic.MTC.qa.util.Baseclass;
import cucumber.api.java.en.Then;
import io.appium.java_client.TouchAction;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.touch.WaitOptions;
import io.appium.java_client.touch.offset.PointOption;
import org.openqa.selenium.By;
import org.testng.Assert;

import java.time.Duration;
import java.util.ArrayList;
import java.util.List;

public class TrackingMTC extends Baseclass {
    public static List<String> radiusFromCenter,alertLatency;
    @Then("I Tap on Tracking tile")
    public void iTapOnTrackingTile() {
        Taponbutton(Constant_Tracking_MTC.mtc_Tracking_Tile_Xpath);
    }

    @Then("I Verify Tracking Header title")
    public void iVerifyTrackingHeaderTitle() throws Throwable {
        asserttextValidationAccessibility(Constant_Tracking_MTC.mtc_Tracking, Constant_Tracking_MTC.mtc_Tracking_Title_Access_ID);
    }


    @Then("I Verify Boat Location text is displayed")
    public void iVerifyBoatLocationTextIsDisplayed() throws Throwable {
        asserttextValidationAccessibility(Constant_Tracking_MTC.mtc_Tracking_Boat_Location, Constant_Tracking_MTC.mtc_Tracking_Boat_Location_Access_ID);
    }

    @Then("I Verify Latitude text is displayed")
    public void iVerifyLatitudeTextIsDisplayed() throws Throwable {
        asserttextValidationAccessibility(Constant_Tracking_MTC.mtc_Tracking_latitude, Constant_Tracking_MTC.mtc_Tracking_latitude_Access_ID);
    }

    @Then("I Verify Longitude text is displayed")
    public void iVerifyLongitudeTextIsDisplayed() throws Throwable {
        asserttextValidationAccessibility(Constant_Tracking_MTC.mtc_Tracking_longitude, Constant_Tracking_MTC.mtc_Tracking_longitude_Access_ID);
    }

    @Then("I Verify Geo Fencing text is displayed")
    public void iVerifyGeoFencingTextIsDisplayed() throws Throwable {
        asserttextValidationAccessibility(Constant_Tracking_MTC.mtc_Tracking_geofencing_cardTitle, Constant_Tracking_MTC.mtc_Tracking_geofencing_cardTitle_Access_ID);
    }

    @Then("I Verify Geo Fencing-toggle status is displayed")
    public void iVerifyGeoFencingToggleStatusIsDisplayed() {
        String gioFencingToggleStatus = driver.findElementByAccessibilityId(Constant_Tracking_MTC.mtc_Tracking_Toggle_Status_Access_ID).getText();
        if (gioFencingToggleStatus.equalsIgnoreCase("OFF")) {
            System.out.println("Text comparison is Successful");
        }
        else if (gioFencingToggleStatus.equalsIgnoreCase("ON")) {
            System.out.println("Text comparison is Successful");
        }
    }

    @Then("I Verify Geo Fencing-toggle is displayed")
    public void iVerifyGeoFencingToggleIsDisplayed() {
        Assert.assertTrue(iselementdisplayedaccessabilityId(Constant_Tracking_MTC.mtc_Tracking_Toggle_Access_ID));
    }

    @Then("I Tap on Gio Fencing toggle if it's already in OFF state")
    public void iTapOnGioFencingToggleIfItSAlreadyInOFFState() throws InterruptedException {
        String gioFencingToggleStatus = driver.findElementByAccessibilityId(Constant_Tracking_MTC.mtc_Tracking_Toggle_Status_Access_ID).getText();
        if (gioFencingToggleStatus.equalsIgnoreCase("OFF")) {
            TaponbuttonaccessabilityID(Constant_Tracking_MTC.mtc_Tracking_Toggle_Access_ID);
            Thread.sleep(10000);
        }
    }

    @Then("I Verify Radius from center text is displayed")
    public void iVerifyRadiusFromCenterTextIsDisplayed() throws Throwable {
        asserttextValidationAccessibility(Constant_Tracking_MTC.mtc_Tracking_Radius_cardTitle, Constant_Tracking_MTC.mtc_Tracking_Radius_cardTitle_Access_ID);
    }

    @Then("I Verify Radius from center expandIcon is displayed")
    public void iVerifyRadiusFromCenterExpandIconIsDisplayed() {
        Assert.assertTrue(iselementdisplayedaccessabilityId(Constant_Tracking_MTC.mtc_Tracking_Radius_expandIcon_Access_ID));
    }

    @Then("I Verify Alert Latency text is displayed")
    public void iVerifyAlertLatencyTextIsDisplayed() throws Throwable {
        asserttextValidationAccessibility(Constant_Tracking_MTC.mtc_Tracking_Alert_Latency_cardTitle, Constant_Tracking_MTC.mtc_Tracking_Alert_Latency_cardTitle_Access_ID);
    }

    @Then("I Verify Alert Latency expandIcon is displayed")
    public void iVerifyAlertLatencyExpandIconIsDisplayed() {
        Assert.assertTrue(iselementdisplayedaccessabilityId(Constant_Tracking_MTC.mtc_Tracking_Alert_Latency_expandIcon_Access_ID));
    }

    @Then("I Tap on Radius from center")
    public void iTapOnRadiusFromCenter() {
        TaponbuttonaccessabilityID(Constant_Tracking_MTC.mtc_Tracking_Radius_cardTitle_Access_ID);
    }

    @Then("I Scroll up the screen in Radius from center")
    public void iScrollUpTheScreenInRadiusFromCenter() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I scroll up the screen in Warnings-Max Daily Cycle");
        TouchAction action = new TouchAction(driver);
        action.press(PointOption.point(530, 1575)).waitAction(WaitOptions.waitOptions(Duration.ofSeconds(1)))
                .moveTo(PointOption.point(530, 1450)).release().perform();
        System.out.println("Scrolling up the Page");
    }

    @Then("I Verify Apply button in Radius from center")
    public void iVerifyApplyButtonInRadiusFromCenter() {
        radiusFromCenter=new ArrayList<>();
        radiusFromCenter.add(driver.findElement(By.xpath(Constant_Tracking_MTC.mtc_Tracking_Radius_First_Value_Xpath)).getText());
        radiusFromCenter.add(driver.findElement(By.xpath(Constant_Tracking_MTC.mtc_Tracking_Radius_Second_Value_Xpath)).getText());
        radiusFromCenter.add(driver.findElement(By.xpath(Constant_Tracking_MTC.mtc_Tracking_Radius_Third_Value_Xpath)).getText());
    }

    @Then("I Tap on Apply button in Radius from center")
    public void iTapOnApplyButtonInRadiusFromCenter() {
        TaponbuttonaccessabilityID(Constant_Tracking_MTC.mtc_Tracking_Radius_Apply_Button_Access_ID);
    }

    @Then("I validated applied minutes is displayed in Radius from center")
    public void iValidatedAppliedMinutesIsDisplayedInRadiusFromCenter() {
        if (radiusFromCenter.get(0).contains(driver.findElementByAccessibilityId(Constant_Tracking_MTC.mtc_Tracking_Radius_cardSubText_Access_ID).getText())) {
            System.out.println("Text comparison is Successful");
        } else if (radiusFromCenter.get(1).contains(driver.findElementByAccessibilityId(Constant_Tracking_MTC.mtc_Tracking_Radius_cardSubText_Access_ID).getText())) {
            System.out.println("Text comparison is Successful");
        } else if (radiusFromCenter.get(2).contains(driver.findElementByAccessibilityId(Constant_Tracking_MTC.mtc_Tracking_Radius_cardSubText_Access_ID).getText())) {
            System.out.println("Text comparison is Successful");
        } else {
            System.out.println("Both Actual and Expected text is mismatching");
        }
    }

    @Then("I Tap On Alert Latency")
    public void iTapOnAlertLatency() {
        TaponbuttonaccessabilityID(Constant_Tracking_MTC.mtc_Tracking_Alert_Latency_cardTitle_Access_ID);
    }

    @Then("I Scroll up the screen in Alert Latency")
    public void iScrollUpTheScreenInAlertLatency() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I scroll up the screen in Warnings-Max Daily Cycle");
        TouchAction action = new TouchAction(driver);
        action.press(PointOption.point(530, 1725)).waitAction(WaitOptions.waitOptions(Duration.ofSeconds(1)))
                .moveTo(PointOption.point(530, 1590)).release().perform();
        System.out.println("Scrolling up the Page");
    }

    @Then("I Verify Apply button in Alert Latency")
    public void iVerifyApplyButtonInAlertLatency() {
        alertLatency=new ArrayList<>();
        alertLatency.add(driver.findElement(By.xpath(Constant_Tracking_MTC.mtc_Tracking_Alert_Latency_First_Value_Xpath)).getText());
        alertLatency.add(driver.findElement(By.xpath(Constant_Tracking_MTC.mtc_Tracking_Alert_Latency_Second_Value_Xpath)).getText());
        alertLatency.add(driver.findElement(By.xpath(Constant_Tracking_MTC.mtc_Tracking_Alert_Latency_Third_Value_Xpath)).getText());

    }

    @Then("I Tap on Apply button in Alert Latency")
    public void iTapOnApplyButtonInAlertLatency() {
        TaponbuttonaccessabilityID(Constant_Tracking_MTC.mtc_Tracking_Alert_Latency_Apply_Button_Access_ID);
    }

    @Then("I validated applied minutes is displayed in Alert Latency")
    public void iValidatedAppliedMinutesIsDisplayedInAlertLatency() {
        if (alertLatency.get(0).contains(driver.findElementByAccessibilityId(Constant_Tracking_MTC.mtc_Tracking_Alert_Latency_cardSubText_Access_ID).getText())) {
            System.out.println("Text comparison is Successful");
        } else if (alertLatency.get(1).contains(driver.findElementByAccessibilityId(Constant_Tracking_MTC.mtc_Tracking_Alert_Latency_cardSubText_Access_ID).getText())) {
            System.out.println("Text comparison is Successful");
        } else if (alertLatency.get(2).contains(driver.findElementByAccessibilityId(Constant_Tracking_MTC.mtc_Tracking_Alert_Latency_cardSubText_Access_ID).getText())) {
            System.out.println("Text comparison is Successful");
        } else {
            System.out.println("Both Actual and Expected text is mismatching");
        }
    }
}
