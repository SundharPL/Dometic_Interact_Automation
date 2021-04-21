package com.dometic.MTC.stepdefinition;

import com.aventstack.extentreports.GherkinKeyword;
import com.dometic.MTC.qa.Pages.Constant_landingscreen;
import com.dometic.MTC.qa.util.Baseclass;
import cucumber.api.java.en.Then;
import io.appium.java_client.android.AndroidKeyCode;

public class ClimateMTC extends Baseclass {
    @Then("I verify power text climate main screen")
    public void iVerifyPowerTextClimateMainScreen() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify power text climate main screen");
        asserttextAccessibility(Constant_landingscreen.LandingPage_Climate_power_text,Constant_landingscreen.LandingPage_Climate_power_text_access_id);
    }

    @Then("I verify fan speed text climate main screen")
    public void iVerifyFanSpeedTextClimateMainScreen() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify fan speed text climate main screen");
        asserttext(Constant_landingscreen.LandingPage_Climate_fanspeed_text,Constant_landingscreen.LandingPage_Climate_fanspeed_text_xpath);

    }

    @Then("I verify Auto-fan speed text climate main screen")
    public void iVerifyAutoFanSpeedTextClimateMainScreen() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify Auto-fan speed text climate main screen");
        asserttext(Constant_landingscreen.LandingPage_Climate_autofanspeed_text,Constant_landingscreen.LandingPage_Climate_autofanspeed_text_xpath);

    }

    @Then("I Tap on Auto-fan speed navigation in climate main screen")
    public void iTapOnAutoFanSpeedNavigationInClimateMainScreen() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Tap on Auto-fan speed navigation in climate main screen");
        TaponbuttonaccessabilityID(Constant_landingscreen.LandingPage_Climate_autofanmode_navigation_access_id);
    }

    @Then("I verify the AutoSpeed text inside the Auto-fan mode")
    public void iVerifyTheAutoSpeedTextInsideTheAutoFanMode() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify the AutoSpeed text inside the Auto-fan mode");
        asserttext(Constant_landingscreen.LandingPage_Climate_autofanspeed_AutoSpeed_text,Constant_landingscreen.LandingPage_Climate_autofanspeed_AutoSpeed_text_xpath);

    }

    @Then("I verify the AutoCont text inside the Auto-fan mode")
    public void iVerifyTheAutoContTextInsideTheAutoFanMode() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify the AutoCont text inside the Auto-fan mode");
        asserttext(Constant_landingscreen.LandingPage_Climate_autofanspeed_AutoCont_text,Constant_landingscreen.LandingPage_Climate_autofanspeed_AutoCont_text_xpath);
    }

    @Then("I verify the climate mode text in climate main screen")
    public void iVerifyTheClimateModeTextInClimateMainScreen() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify the climate mode text in climate main screen");
        asserttext(Constant_landingscreen.LandingPage_Climate_climate_mode_text,Constant_landingscreen.LandingPage_Climate_climate_mode_text_xpath);
    }

    @Then("I verify the Eco modifier text in climate main screen")
    public void iVerifyTheEcoModifierTextInClimateMainScreen() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify the Eco modifier text in climate main screen");
        asserttext(Constant_landingscreen.LandingPage_Climate_Eco_modifier_text,Constant_landingscreen.LandingPage_Climate_Eco_modifier_text_xpath);
    }

    @Then("I verify the Sleep modifier text in climate main screen")
    public void iVerifyTheSleepModifierTextInClimateMainScreen() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify the Sleep modifier text in climate main screen");
        asserttext(Constant_landingscreen.LandingPage_Climate_sleep_modifier_text,Constant_landingscreen.LandingPage_Climate_sleep_modifier_text_xpath);
    }

    @Then("I verify the Scheduler text in climate main screen")
    public void iVerifyTheSchedulerTextInClimateMainScreen() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify the Scheduler text in climate main screen");
        asserttext(Constant_landingscreen.LandingPage_Climate_Scheduler_text,Constant_landingscreen.LandingPage_Climate_Scheduler_text_xpath);
    }

    @Then("I Tap on Auto-fan speed info icon climate main screen")
    public void iTapOnAutoFanSpeedInfoIconClimateMainScreen() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Tap on Auto-fan speed info icon climate main screen");
        Taponbutton(Constant_landingscreen.LandingPage_Climate_autofanspeed_infoicon_xpath);
    }

    @Then("I tap on Device back button")
    public void iTapOnDeviceBackButton() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I tap on Device back button");
        driver.pressKeyCode(AndroidKeyCode.BACK);
    }

    @Then("I tap on Eco modifier tool tip in climate main screen")
    public void iTapOnEcoModifierToolTipInClimateMainScreen() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I tap on Eco modifier tool tip in climate main screen");
        Taponbutton(Constant_landingscreen.LandingPage_Climate_Ecomodifier_infoicon_xpath);
    }

    @Then("I Tap on the Sleep modifier tool tip in climate main screen")
    public void iTapOnTheSleepModifierToolTipInClimateMainScreen() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Tap on the Sleep modifier tool tip in climate main screen");
        Taponbutton(Constant_landingscreen.LandingPage_Climate_sleepmodifier_infoicon_xpath);
    }
}
