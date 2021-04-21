package com.dometic.MTC.stepdefinition;

import com.dometic.MTC.qa.Pages.Constant_Tank;
import com.dometic.MTC.qa.util.Baseclass;
import cucumber.api.java.en.Then;
import io.appium.java_client.TouchAction;
import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.touch.WaitOptions;
import io.appium.java_client.touch.offset.PointOption;
import org.openqa.selenium.By;

import java.time.Duration;
import java.util.List;

public class TankMTC extends Baseclass {
    @Then("Then I Tap on Tank Fuel tile in Landing Screen")
    public void thenITapOnTankFuelTileInLandingScreen() {
        List<AndroidElement> elements = driver.findElements(By.xpath(Constant_Tank.MTC_Tank_Fuel_xpath));
        while(elements.size()==0){
            TouchAction action = new TouchAction(driver);
            action.press(PointOption.point(125, 1000)).waitAction(WaitOptions.waitOptions(Duration.ofSeconds(1)))
                    .moveTo(PointOption.point(400, 1000));
            action.release().perform();
        }
        if(elements.size()!=0){
            Taponbutton(Constant_Tank.MTC_Tank_Fuel_xpath);
        }
    }

    @Then("Then I Tap on Tank Oil tile in Landing Screen")
    public void thenITapOnTankOilTileInLandingScreen() {
        List<AndroidElement> elements = driver.findElements(By.xpath(Constant_Tank.MTC_Tank_Oil_xpath));
        while(elements.size()==0){
            TouchAction action = new TouchAction(driver);
            action.press(PointOption.point(400, 1000)).waitAction(WaitOptions.waitOptions(Duration.ofSeconds(1)))
                    .moveTo(PointOption.point(125, 1000));
            action.release().perform();
        }
        if(elements.size()!=0){
            Taponbutton(Constant_Tank.MTC_Tank_Oil_xpath);
        }
    }

    @Then("Then I Tap on Tank Fresh tile in Landing Screen")
    public void thenITapOnTankFreshTileInLandingScreen() {
        List<AndroidElement> elements = driver.findElements(By.xpath(Constant_Tank.MTC_Tank_Fresh_xpath));
        while(elements.size()==0){
            TouchAction action = new TouchAction(driver);
            action.press(PointOption.point(400, 1000)).waitAction(WaitOptions.waitOptions(Duration.ofSeconds(1)))
                    .moveTo(PointOption.point(125, 1000));
            action.release().perform();
        }
        if(elements.size()!=0){
            Taponbutton(Constant_Tank.MTC_Tank_Fresh_xpath);
        }
    }

    @Then("Then I Tap on Tank Grey tile in Landing Screen")
    public void thenITapOnTankGreyTileInLandingScreen() {
        List<AndroidElement> elements = driver.findElements(By.xpath(Constant_Tank.MTC_Tank_Grey_xpath));
        while(elements.size()==0){
            TouchAction action = new TouchAction(driver);
            action.press(PointOption.point(400, 1000)).waitAction(WaitOptions.waitOptions(Duration.ofSeconds(1)))
                    .moveTo(PointOption.point(125, 1000));
            action.release().perform();
        }
        if(elements.size()!=0){
            Taponbutton(Constant_Tank.MTC_Tank_Grey_xpath);
        }
    }

    @Then("Then I Tap on Tank Black tile in Landing Screen")
    public void thenITapOnTankBlackTileInLandingScreen() {
        List<AndroidElement> elements = driver.findElements(By.xpath(Constant_Tank.MTC_Tank_Black_xpath));
        while(elements.size()==0){
            TouchAction action = new TouchAction(driver);
            action.press(PointOption.point(400, 1000)).waitAction(WaitOptions.waitOptions(Duration.ofSeconds(1)))
                    .moveTo(PointOption.point(125, 1000));
            action.release().perform();
        }
        if(elements.size()!=0){
            Taponbutton(Constant_Tank.MTC_Tank_Black_xpath);
        }
    }

    @Then("Then I Tap on Tank Live tile in Landing Screen")
    public void thenITapOnTankLiveTileInLandingScreen() {
        List<AndroidElement> elements = driver.findElements(By.xpath(Constant_Tank.MTC_Tank_Live_xpath));
        while(elements.size()==0){
            TouchAction action = new TouchAction(driver);
            action.press(PointOption.point(400, 1000)).waitAction(WaitOptions.waitOptions(Duration.ofSeconds(1)))
                    .moveTo(PointOption.point(125, 1000));
            action.release().perform();
        }
        if(elements.size()!=0){
            Taponbutton(Constant_Tank.MTC_Tank_Live_xpath);
        }
    }

    @Then("Then I Tap on Tank Bait tile in Landing Screen")
    public void thenITapOnTankBaitTileInLandingScreen() {
        List<AndroidElement> elements = driver.findElements(By.xpath(Constant_Tank.MTC_Tank_Bait_xpath));
        while(elements.size()==0){
            TouchAction action = new TouchAction(driver);
            action.press(PointOption.point(400, 1000)).waitAction(WaitOptions.waitOptions(Duration.ofSeconds(1)))
                    .moveTo(PointOption.point(125, 1000));
            action.release().perform();
        }
        if(elements.size()!=0){
            Taponbutton(Constant_Tank.MTC_Tank_Bait_xpath);
        }
    }

    @Then("I verify the Fuel Level text in the Tank screen")
    public void iVerifyTheFuelLevelTextInTheTankScreen() throws Throwable {
        asserttext(Constant_Tank.FUEL_LEVEL,Constant_Tank.FUEL_LEVEL_text_xpath);
    }

    @Then("I Tap on  the OIL option in the Tank screen")
    public void iTapOnTheOILOptionInTheTankScreen() {
        Taponbutton(Constant_Tank.MTC_Tank_Oil_xpath);
    }

    @Then("I verify the OIL Level text in the Tank screen")
    public void iVerifyTheOILLevelTextInTheTankScreen() throws Throwable {
        asserttext(Constant_Tank.oil_LEVEL_text,Constant_Tank.OIL_LEVEL_text_xpath);
    }

    @Then("I swipe the tank option from left to right")
    public void iSwipeTheTankOptionFromLeftToRight() {

        TouchAction action = new TouchAction(driver);
        action.press(PointOption.point(925, 1300)).waitAction(WaitOptions.waitOptions(Duration.ofSeconds(1)))
                .moveTo(PointOption.point(150, 1300));
        action.release().perform();
    }

    @Then("I tap on the Live option in the Tank screen")
    public void iTapOnTheLiveOptionInTheTankScreen() {
        Taponbutton(Constant_Tank.MTC_Tank_Live_xpath);
    }

    @Then("I verify the Live well Level text in the Tank screen")
    public void iVerifyTheLiveWellLevelTextInTheTankScreen() throws Throwable {
        asserttext(Constant_Tank.Live_LEVEL_text,Constant_Tank.Live_LEVEL_text_xpath);
    }

    @Then("I Tap on the BAIT text option in the Tank screen")
    public void iTapOnTheBAITTextOptionInTheTankScreen() {
        Taponbutton(Constant_Tank.MTC_Tank_Bait_xpath);
    }

    @Then("I verify the BAIT WELL LEVEL text in the Tank screen")
    public void iVerifyTheBAITWELLLEVELTextInTheTankScreen() throws Throwable {
        asserttext(Constant_Tank.Bait_LEVEL_text,Constant_Tank.Bait_LEVEL_text_xpath);
    }
}
