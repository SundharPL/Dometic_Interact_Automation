package com.dometic.MTC.stepdefinition;

import com.aventstack.extentreports.GherkinKeyword;
import com.dometic.MTC.qa.Pages.*;
import com.dometic.MTC.qa.util.Baseclass;
import com.google.common.collect.ImmutableMap;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import io.appium.java_client.android.AndroidElement;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import java.util.List;

public class Settings extends Baseclass {
    @Then("I Tap on hamburger menu in landing screen")
    public void iTapOnHamburgerMenuInLandingScreen() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Tap on hamburger menu in landing screen");
        List<AndroidElement> id = driver.findElementsByAccessibilityId(Constant_landingscreen.LandingPage_hamburger_menu_access_id);
        if(id.size()!=0){
            TaponbuttonaccessabilityID(Constant_landingscreen.LandingPage_hamburger_menu_access_id);
        }
    }

    @Then("I Verify SETTINGS Text displayed in the top of the app")
    public void iVerifySETTINGSTextDisplayedInTheTopOfTheApp() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Verify SETTINGS Text displayed in the top of the app");
        asserttext("SETTINGS", Constant_settings.Settings_text_xpath);
    }

    @Then("I verify Languages text is displayed")
    public void iVerifyLanguagesIsDisplayed() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify Languages text is displayed");
        Assert.assertTrue(iselementdisplayedaccessabilityId(Constant_settings.Settings_languageContainer_access_id));
    }

    @Then("I Verify Temperature unit text is displayed")
    public void tVerifyTemperatureUnitIsDisplayed() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Verify Temperature unit text is displayed");
        Assert.assertTrue(iselementdisplayedaccessabilityId(Constant_settings.Settings_Temperature_unit_access_id));
    }

    @Then("I verify Upgrade Firmware is displayed")
    public void iVerifyUpgradeFirmwareIsDisplayed() {
        //  Assert.assertTrue(iselementdisplayed(Constant_settings.Settings_Upgrade_Firmware_xpath));
    }

    @Then("I verify Version is displayed")
    public void iVerifyVersionIsDisplayed() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify Version is displayed");
        List<AndroidElement> elementsByAccessibilityId = driver.findElementsByAccessibilityId(Constant_landingscreen.LandingPage_hamburger_menu_access_id);
        if (elementsByAccessibilityId.size() != 0) {
            TaponbuttonaccessabilityID(Constant_landingscreen.LandingPage_hamburger_menu_access_id);
        }
        Assert.assertTrue(iselementdisplayedaccessabilityId(Constant_settings.Settings_versionContainer_access_id));
    }

    @Then("I verify Log out is displayed")
    public void iVerifyLogOutIsDisplayed() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify Log out is displayed");
        Assert.assertTrue(iselementdisplayed(Constant_settings.Settings_Logout_xpath));
    }


    @Then("I verify hamburger menu in landing screen")
    public void iVerifyHamburgerMenuInLandingScreen() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify hamburger menu in landing screen");
        List<AndroidElement> elementsByAccessibilityId = driver.findElementsByAccessibilityId(Constant_climate_ac.CAC_M_power_Back_Button_access_id);
        if (elementsByAccessibilityId.size() != 0) {
            TaponbuttonaccessabilityID(Constant_climate_ac.CAC_M_power_Back_Button_access_id);
        }
        Assert.assertTrue(iselementdisplayedaccessabilityId(Constant_landingscreen.LandingPage_hamburger_menu_access_id));

    }

    @Then("I navigate to update language section in Settings")
    public void iNavigateToUpdateLanguageSectionInSettings() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I navigate to update language section in Settings");
        TaponbuttonaccessabilityID(Constant_settings.Settings_languageContainer_access_id);

    }

    @Then("I update language to German in settings")
    public void iUpdateLanguageToGermanInSettings() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I update language to German in settings");
        TaponbuttonaccessabilityID(Constant_settings.Settings_language_German_access_id);
    }

    @And("I verify on Language text updated with German translation")
    public void iVerifyOnLanguageTextUpdatedWithGermanTranslation() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify on Language text updated with German translation");
        asserttextAccessibility(Constant_settings.Settings_language_text_expected, Constant_settings.Settings_language_text_access_id);
    }

    @And("I verify on Temperature text updated with German translation")
    public void iVerifyOnTemperatureTextUpdatedWithGermanTranslation() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify on Temperature text updated with German translation");
        asserttextAccessibility(Constant_settings.Settings_Temperature_text_expected, Constant_settings.Settings_Temperature_text_access_id);
    }

    @And("I verify on logout text updated with German translation")
    public void iVerifyOnLogoutTextUpdatedWithGermanTranslation() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify on logout text updated with German translation");
        asserttextAccessibility(Constant_settings.Settings_logout_expected, Constant_settings.Settings_logout_text_access_id);
    }

    @Then("I update Temperature Unit in Settings")
    public void iUpdateTemperatureUnitInSettings() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I update Temperature Unit in Settings");
        TaponbuttonaccessabilityID(Constant_settings.Settings_fahrenheit_access_id);
    }

    @Then("I Tap on Back button from Settings")
    public void iTapOnBackButtonFromSettings() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Tap on Back button from Settings");
        TaponbuttonaccessabilityID(Constant_settings.Settings_Back_Button_access_id);
    }

    @Then("I update language to Spanish in settings")
    public void iUpdateLanguageToSpanishInSettings() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I update language to Spanish in settings");
        Taponbutton(Constant_settings.Settings_language_Spanish_xpath);
    }

    @And("I verify on Language text updated with Spanish translation")
    public void iVerifyOnLanguageTextUpdatedWithSpanishTranslation() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify on Language text updated with Spanish translation");
        asserttext(Constant_settings.Settings_language_Spanish_text_expected, Constant_settings.Settings_language_xpath);
    }

    @And("I verify on Temperature text updated with Spanish translation")
    public void iVerifyOnTemperatureTextUpdatedWithSpanishTranslation() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify on Temperature text updated with Spanish translation");
        asserttextAccessibility(Constant_settings.Settings_temperature_Spanish_text_expected, Constant_settings.Settings_Temperature_text_access_id);
    }

    @And("I verify on logout text updated with Spanish translation")
    public void iVerifyOnLogoutTextUpdatedWithSpanishTranslation() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify on logout text updated with Spanish translation");
        asserttextAccessibility(Constant_settings.Settings_logout_Spanish_text_expected, Constant_settings.Settings_logout_text_access_id);
    }

    @Then("I update language to French in settings")
    public void iUpdateLanguageToFrenchInSettings() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I update language to French in settings");
        Taponbutton(Constant_settings.Settings_language_French_xpath);
    }

    @And("I verify on Language text updated with French translation")
    public void iVerifyOnLanguageTextUpdatedWithFrenchTranslation() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify on Language text updated with French translation");
        asserttext(Constant_settings.Settings_language_French_text_expected, Constant_settings.Settings_language_xpath);
    }

    @And("I verify on Temperature text updated with French translation")
    public void iVerifyOnTemperatureTextUpdatedWithFrenchTranslation() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify on Temperature text updated with French translation");
        asserttextAccessibility(Constant_settings.Settings_temperature_French_text_expected, Constant_settings.Settings_Temperature_text_access_id);
    }

    @And("I verify on logout text updated with French translation")
    public void iVerifyOnLogoutTextUpdatedWithFrenchTranslation() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify on logout text updated with French translation");
        asserttextAccessibility(Constant_settings.Settings_logout_French_text_expected, Constant_settings.Settings_logout_text_access_id);
    }

    @Then("I verify Add ZoneIcon in Zone Management")
    public void iVerifyAddZoneIconInZoneManagement() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify Add ZoneIcon in Zone Management");
        Assert.assertTrue(iselementdisplayedaccessabilityId(Constant_settings.Settings_Zone_Management_addZoneIcon_access_id));
    }

    @Then("I verify Zone Management text is displayed")
    public void iVerifyZoneManagementTextIsDisplayed() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify Zone Management text is displayed");
        System.out.println(driver.findElement(By.xpath(Constant_settings.Settings_Zone_Management_xpath)).getText());
        asserttext(Constant_settings.Settings_Zone_Management_expected, Constant_settings.Settings_Zone_Management_xpath);
    }

    @Then("I Tap on Zone Management in Settings")
    public void iTapOnZoneManagementInSettings() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Tap on Zone Management in Settings");
        Taponbutton(Constant_settings.Settings_Zone_Management_xpath);
        WebDriverWait wait = new WebDriverWait(driver, 50);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(Constant_settings.Settings_Zone_Management_LimitedZones_xpath)));
    }

    @Then("I Verify ALL ZONES in Zone Management")
    public void iVerifyALLZONESInZoneManagement() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Verify ALL ZONES in Zone Management");
        WebDriverWait wait = new WebDriverWait(driver, 50);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(Constant_settings.Settings_Zone_Management_LimitedZones_xpath)));
        System.out.println(driver.findElementByAccessibilityId(Constant_settings.Settings_language_selectedName_access_id).getText());
        asserttextAccessibility(Constant_settings.Settings_Zone_Management_ALL_ZONES_text, Constant_settings.Settings_language_selectedName_access_id);
    }

    @Then("I verify Edit text in Zone Management")
    public void iVerifyEditTextInZoneManagement() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify Edit text in Zone Management");
        System.out.println(driver.findElement(By.xpath(Constant_settings.Settings_Zone_Management_edit_xpath)).getText());
        asserttext(Constant_settings.Settings_Zone_Management_edit_text, Constant_settings.Settings_Zone_Management_edit_xpath);
    }

    @Then("I verify Limited to {int} Zones only text in Zone Management")
    public void iVerifyLimitedToZonesOnlyTextInZoneManagement(int arg0) throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify Limited Zones only text in Zone Management");
        System.out.println(driver.findElement(By.xpath(Constant_settings.Settings_Zone_Management_LimitedZones_xpath)).getText());
        asserttext(Constant_settings.Settings_Zone_Management_LimitedZones_text, Constant_settings.Settings_Zone_Management_LimitedZones_xpath);
    }

    @Then("I Tap on Edit in ALL ZONES")
    public void iTapOnEditInALLZONES() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Tap on Edit in ALL ZONES");
        WebDriverWait wait = new WebDriverWait(driver, 50);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(Constant_settings.Settings_Zone_Management_LimitedZones_xpath)));
        Taponbutton(Constant_settings.Settings_Zone_Management_edit_xpath);
    }

    @Then("I Tap on Rename in ALL ZONES")
    public void iTapOnRenameInALLZONES() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Tap on Rename in ALL ZONES");
        WebDriverWait wait = new WebDriverWait(driver, 50);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(Constant_settings.Settings_Zone_Management_Rename_xpath)));
        List<AndroidElement> elements = driver.findElements(By.xpath(Constant_settings.Settings_Zone_Management_Rename_xpath));
        if (elements.size() != 0) {
            Taponbutton(Constant_settings.Settings_Zone_Management_Rename_xpath);
        }
    }

    @Then("I Tap on the Zone name")
    public void iTapOnTheZoneName() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Tap on the Zone name");
        WebDriverWait wait = new WebDriverWait(driver, 50);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(Constant_settings.Settings_Zone_Management_Rename_value_xpath)));
        List<AndroidElement> elements = driver.findElements(By.xpath(Constant_settings.Settings_Zone_Management_Rename_value_xpath));
        if (elements.size() != 0) {
            Taponbutton(Constant_settings.Settings_Zone_Management_Rename_value_xpath);
        }

    }

    @Then("I clear the previous zone name")
    public void iClearThePreviousZoneName() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I clear the previous zone name");
        List<AndroidElement> elements = driver.findElements(By.xpath(Constant_settings.Settings_Zone_Management_Rename_value_xpath));
        if (elements.size() != 0) {
            cleartext(Constant_settings.Settings_Zone_Management_Rename_value_xpath);
        }
    }

    @Then("I save the Zone")
    public void iSaveTheZone() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I save the Zone");
        List<AndroidElement> elements = driver.findElements(By.xpath(Constant_settings.Settings_Zone_Management_SAVE_Button_xpath));
        if (elements.size() != 0) {
            Taponbutton(Constant_settings.Settings_Zone_Management_SAVE_Button_xpath);
        }
    }

    @Then("I verify {string} message is displayed")
    public void iVerifyMessageIsDisplayed(String arg0) throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify Zone Management Zone_Name can not be empty message is displayed");
        List<AndroidElement> elements = driver.findElements(By.xpath(Constant_settings.Settings_Zone_Management_Zone_Name_can_not_be_empty_xpath));
        if (elements.size() != 0) {
            asserttext(Constant_settings.Settings_Zone_Management_Zone_Name_can_not_be_empty_text, Constant_settings.Settings_Zone_Management_Zone_Name_can_not_be_empty_xpath);
        }
    }

    @Then("I Enter the zone name more then the limit")
    public void iEnterTheZoneNameMoreThenTheLimit() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Enter the zone name more then the limit");
        List<AndroidElement> elements = driver.findElements(By.xpath(Constant_settings.Settings_Zone_Management_Rename_value_xpath));
        if (elements.size() != 0) {
            Taponbutton(Constant_settings.Settings_Zone_Management_Rename_value_xpath);
            entertext(Constant_settings.Settings_Zone_Management_value, Constant_settings.Settings_Zone_Management_Rename_value_xpath);
        }
    }

    @Then("I Enter the Zone name")
    public void iEnterTheZoneName() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Enter the Zone name");
        Taponbutton(Constant_settings.Settings_Zone_Management_Rename_value_xpath);
        entertext(Constant_settings.Settings_Zone_Management_Living_Room, Constant_settings.Settings_Zone_Management_Rename_value_xpath);
    }

    @Then("I Tap on the Delete Zone Icon")
    public void iTapOnTheDeleteZoneIcon() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Tap on the Delete Zone Icon");
        Taponbutton(Constant_settings.Settings_Zone_Management_flatListItem_xpath);
    }

    @Then("I Tap on YES, DELETE IT Button")
    public void iTapOnYESDELETEITButton() throws InterruptedException, ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Tap on YES, DELETE IT Button");
        Thread.sleep(2000);
        Taponbutton(Constant_settings.Settings_Zone_Management_deleteZone_xpath);
    }

    @Then("I Tap on the Add Zone Icon")
    public void iTapOnTheAddZoneIcon() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Tap on the Add Zone Icon");
        List<AndroidElement> elements = driver.findElements(By.xpath(Constant_settings.Settings_Zone_Management_deleteZoneAlert_description_xpath));
        if (elements.size() != 0) {
            Taponbutton(Constant_settings.Settings_Zone_Management_deleteZoneAlert_description_xpath);
        }
        TaponbuttonaccessabilityID(Constant_settings.Settings_Zone_Management_addZoneIcon_access_id);
    }

    @Then("I Select the zone")
    public void iSelectTheZone() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Select the zone");
        WebDriverWait wait = new WebDriverWait(driver, 50);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(Constant_settings.Settings_Zone_Management_addZoneIcon_Select_button_xpath)));
        TaponbuttonaccessabilityID(Constant_settings.Settings_Zone_Management_addZoneIcon_Select_button_access_id);
    }

    @Then("I SAVE the Zone")
    public void iSAVETheZone() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I SAVE the Zone");
        List<AndroidElement> elements = driver.findElements(By.xpath(Constant_settings.Settings_Zone_Management_ZoneNumber_dialog_saveButton_xpath));
        if (elements.size() != 0) {
            TaponbuttonaccessabilityID(Constant_settings.Settings_Zone_Management_ZoneNumber_dialog_saveButton_access_id);
        }
//        TaponbuttonaccessabilityID(Constant_settings.Settings_Zone_Management_deleteZoneAlert_cancelButton_access_id);
//        List<AndroidElement> elements = driver.findElements(By.xpath(Constant_settings.Settings_Zone_Management_Zone_name_already_present_xpath));
//        if(elements.size()!=0){
//            TaponbuttonaccessabilityID(Constant_settings.Settings_Zone_Management_ZoneNumber_dialog_cancelButton_access_id);
//        }
    }

    @Then("I verify Zone Name can not be empty message is displayed")
    public void iVerifyZoneNameCanNotBeEmptyMessageIsDisplayed() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify Zone Name can not be empty message is displayed");
        List<AndroidElement> elements = driver.findElements(By.xpath(Constant_settings.Settings_Zone_Management_Zone_Name_can_not_be_empty_xpath));
        if (elements.size() != 0) {
            asserttext(Constant_settings.Settings_Zone_Management_Zone_Name_can_not_be_empty_text, Constant_settings.Settings_Zone_Management_Zone_Name_can_not_be_empty_xpath);
        }
    }

    @Then("I verify {string} character message is displayed")
    public void iVerifyCharacterMessageIsDisplayed(String arg0) throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify 10 character message is displayed");
        List<AndroidElement> elements = driver.findElements(By.xpath(Constant_settings.Settings_Zone_Management_Zone_Name_can_not_be_empty_xpath));
        if (elements.size() != 0) {
            asserttext(Constant_settings.Settings_Zone_Management_10_character_text, Constant_settings.Settings_Zone_Management_Zone_Name_can_not_be_empty_xpath);
        }
    }

    @Then("I Tap on Save")
    public void iTapOnSave() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Tap on Save");
        List<AndroidElement> elements = driver.findElements(By.xpath(Constant_settings.Settings_Zone_Management_SAVE_Button_xpath));
        if (elements.size() != 0) {
            Taponbutton(Constant_settings.Settings_Zone_Management_SAVE_Button_xpath);
        } else {
            Taponbutton(Constant_settings.Settings_Zone_Management_CANCEL_Button_xpath);
        }
    }

    @Then("I Enter the New Zone name")
    public void iEnterTheNewZoneName() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Enter the New Zone name");
        WebDriverWait wait = new WebDriverWait(driver, 50);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(Constant_settings.Settings_Zone_Management_new_Zone_xpath)));
        TaponbuttonaccessabilityID(Constant_settings.Settings_Zone_Management_new_Zone_access_id);
        entertextaccessabilityId(Constant_settings.Settings_Zone_Management_NewZone_Room, Constant_settings.Settings_Zone_Management_new_Zone_access_id);
    }

    @Then("I Tap on Logout in Settings")
    public void iTapOnLogoutInSettings() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Tap on Logout in Settings");
        System.out.println("Text comparison is Successful");
        Taponbutton(com.dometic.L1.qa.Pages.Constant_settings.Settings_Logout_xpath);
    }

    @Then("I verify settings screen back button")
    public void iVerifySettingsScreenBackButton() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify settings screen back button");
        Assert.assertTrue(iselementdisplayedaccessabilityId(Constant_settings.Settings_headerBackButtonIcon_access_id));
    }

    @Then("I verify user profile photo is displayed")
    public void iVerifyUserProfilePhotoIsDisplayed() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify user profile photo is displayed");
        Assert.assertTrue(iselementdisplayedaccessabilityId(Constant_settings.Settings_userProfilePhoto_access_id));
    }

    @Then("I verify username is displayed")
    public void iVerifyUsernameIsDisplayed() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify username is displayed");
        Assert.assertTrue(iselementdisplayedaccessabilityId(Constant_settings.Settings_userName_access_id));
    }

    @Then("I verify user email is displayed")
    public void iVerifyUserEmailIsDisplayed() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify user email is displayed");
        Assert.assertTrue(iselementdisplayedaccessabilityId(Constant_settings.Settings_userEmail_access_id));
    }

    @Then("I verify Home text is displayed")
    public void iVerifyHomeTextIsDisplayed() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify Home text is displayed");
        asserttextValidationAccessibility(Constant_settings.Settings_home_text, Constant_settings.Settings_home_text_access_id);
    }

    @Then("I verify Notification Settings text is displayed")
    public void iVerifyNotificationSettingsTextIsDisplayed() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify Notification Settings text is displayed");
        asserttextValidationAccessibility(Constant_settings.Settings_notificationSettings_text, Constant_settings.Settings_notificationSettings_text_access_id);
    }

    @Then("I verify Device Management is displayed")
    public void iVerifyDeviceManagementIsDisplayed() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify Device Management is displayed");
        asserttextValidationAccessibility(Constant_settings.Settings_deviceMangagement_text, Constant_settings.Settings_deviceMangagement_text_access_id);
    }

    @Then("I verify App Settings is displayed")
    public void iVerifyAppSettingsIsDisplayed() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify App Settings is displayed");
        asserttextValidationAccessibility(Constant_settings.Settings_appSettings_text, Constant_settings.Settings_appSettings_text_access_id);
    }

    @Then("I verify Logout is displayed")
    public void iVerifyLogoutIsDisplayed() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify Logout is displayed");
        asserttextValidationAccessibility(Constant_settings.Settings_Logout_text, Constant_settings.Settings_Logout_text_access_id);
    }

    @Then("I verify Version {double} is displayed")
    public void iVerifyVersionIsDisplayed(double arg) throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify Version 1.6 is displayed");
        asserttextValidationAccessibility(Constant_settings.Settings_Version_16_text, Constant_settings.Settings_Version_16_text_access_id);
    }

    @Then("I verify View Edit Account text is displayed")
    public void iVerifyViewEditAccountTextIsDisplayed() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify View/Edit Account text is displayed");
        asserttextValidationAccessibility(Constant_settings.Settings_viewEditButtonText, Constant_settings.Settings_viewEditButtonText_access_id);
    }

    @Then("I Tap on Home in Settings screen")
    public void iTapOnHomeInSettingsScreen() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Tap on Home in Settings screen");
        TaponbuttonaccessabilityID(Constant_settings.Settings_home_text_access_id);
    }

    @Then("I Tap on Notification Settings")
    public void iTapOnNotificationSettings() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Tap on Notification Settings");
        TaponbuttonaccessabilityID(Constant_settings.Settings_notificationSettings_text_access_id);
    }

    @Then("I Tap on Device Management")
    public void iTapOnDeviceManagement() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Tap on Device Management");
        TaponbuttonaccessabilityID(Constant_settings.Settings_deviceMangagement_text_access_id);
    }

    @Then("I Tap on App Settings")
    public void iTapOnAppSettings() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Tap on App Settings");
        TaponbuttonaccessabilityID(Constant_settings.Settings_appSettings_text_access_id);
    }

    @Then("I Tap on Logout in Settings screen")
    public void iTapOnLogoutInSettingsScreen() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Tap on Logout in Settings screen");
        TaponbuttonaccessabilityID(Constant_settings.Settings_Logout_text_access_id);
    }

    @Then("I Tap on View Edit Account link in Settings screen")
    public void iTapOnViewEditAccountLinkInSettingsScreen() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Tap on View Edit Account link in Settings screen");
        TaponbuttonaccessabilityID(Constant_settings.Settings_viewEditButtonText_access_id);
    }

    @Then("I Tap on Profile in Account Setting Screen")
    public void iTapOnProfileInAccountSettingScreen() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Tap on Profile in Account Setting Screen");
        TaponbuttonaccessabilityID(Constant_AccountSettings.accountSettings_Profile_Text_Access_Id);
    }

    @Then("I Verify Profile header text")
    public void iVerifyProfileHeaderText() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Verify Profile header text");
        asserttextValidationAccessibility(Constant_AccountSettings.profile_Header_Text, Constant_AccountSettings.profile_Header_Text_Access_Id);
    }

    @Then("I verify user profile image is displayed")
    public void iVerifyUserProfileImageIsDisplayed() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify user profile image is displayed");
        Assert.assertTrue(iselementdisplayedaccessabilityId(Constant_AccountSettings.profile_UserProfile_photo_Access_Id));
    }

    @Then("I verify Personal Information text is displayed")
    public void iVerifyPersonalInformationTextIsDisplayed() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify Personal Information text is displayed");
        asserttextValidationAccessibility(Constant_AccountSettings.profile_PersonalInfoText, Constant_AccountSettings.profile_PersonalInfoText_Access_Id);
    }

    @Then("I verify Name Label is displayed")
    public void iVerifyNameLabelIsDisplayed() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify Name Label is displayed");
        asserttextValidationAccessibility(Constant_AccountSettings.profile_NameLabel, Constant_AccountSettings.profile_NameLabel_Access_Id);
    }

    @Then("I Verify Name value is displayed")
    public void iVerifyNameValueIsDisplayed() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Verify Name value is displayed");
        Assert.assertTrue(iselementdisplayedaccessabilityId(Constant_AccountSettings.profile_NameValue_Access_Id));
    }

    @Then("I verify E-mail Label is displayed")
    public void iVerifyEMailLabelIsDisplayed() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify E-mail Label is displayed");
        asserttextValidationAccessibility(Constant_AccountSettings.profile_emailLabel, Constant_AccountSettings.profile_emailLabel_Access_Id);
    }

    @Then("I verify E-mail value is displayed")
    public void iVerifyEMailValueIsDisplayed() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify E-mail value is displayed");
        Assert.assertTrue(iselementdisplayedaccessabilityId(Constant_AccountSettings.profile_emailValue_Access_Id));
    }

    @Then("I verify Mobile Label is displayed")
    public void iVerifyMobileLabelIsDisplayed() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify Mobile Label is displayed");
        asserttextValidationAccessibility(Constant_AccountSettings.profile_phoneLabel, Constant_AccountSettings.profile_phoneLabel_Access_Id);
    }

    @Then("I Verify Mobile value is displayed")
    public void iVerifyMobileValueIsDisplayed() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Verify Mobile value is displayed");
        Assert.assertTrue(iselementdisplayedaccessabilityId(Constant_AccountSettings.profile_phoneValue_Access_Id));
    }

    @Then("I verify Address Label is displayed")
    public void iVerifyAddressLabelIsDisplayed() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify Address Label is displayed");
        asserttextValidationAccessibility(Constant_AccountSettings.profile_addressLabel, Constant_AccountSettings.profile_addressLabel_Access_Id);
    }

    @Then("I verify Address value is displayed")
    public void iVerifyAddressValueIsDisplayed() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify Address value is displayed");
        Assert.assertTrue(iselementdisplayedaccessabilityId(Constant_AccountSettings.profile_addressValue_Access_Id));
    }

    @Then("I verify Edit profile text is displayed")
    public void iVerifyEditProfileTextIsDisplayed() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify Edit profile text is displayed");
        asserttextValidationAccessibility(Constant_AccountSettings.profile_EditProfileButton_cardTitle, Constant_AccountSettings.profile_EditProfileButton_cardTitle_Access_Id);
    }

    @Then("I verify Edit profile arrow is displayed")
    public void iVerifyEditProfileArrowIsDisplayed() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify Edit profile arrow is displayed");
        Assert.assertTrue(iselementdisplayedaccessabilityId(Constant_AccountSettings.profile_EditProfileButton_cardIcon_Access_Id));
    }

    @Then("I verify Security text is displayed")
    public void iVerifySecurityTextIsDisplayed() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify Security text is displayed");
        asserttextValidationAccessibility(Constant_AccountSettings.profile_securityText, Constant_AccountSettings.profile_securityText_Access_Id);
    }

    @Then("I verify Password text is displayed")
    public void iVerifyPasswordTextIsDisplayed() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify Password text is displayed");
        asserttextValidationAccessibility(Constant_AccountSettings.profile_resetPasswordText, Constant_AccountSettings.profile_resetPasswordText_Access_Id);
    }

    @Then("I verify Renew text is displayed")
    public void iVerifyRenewTextIsDisplayed() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify Renew text is displayed");
        asserttextValidationAccessibility(Constant_AccountSettings.profile_renew_cardTitle, Constant_AccountSettings.profile_renew_cardTitle_Access_Id);
    }

    @Then("I verify Renew arrow is displayed")
    public void iVerifyRenewArrowIsDisplayed() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify Renew arrow is displayed");
        Assert.assertTrue(iselementdisplayedaccessabilityId(Constant_AccountSettings.profile_renew_cardIcon_Access_Id));
    }

    @Then("I Tap on Edit profile in profile screen")
    public void iTapOnEditProfileInProfileScreen() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Tap on Edit profile in profile screen");
        TaponbuttonaccessabilityID(Constant_AccountSettings.profile_EditProfileButton_cardTitle_Access_Id);
    }

    @Then("I verify Edit profile header text")
    public void iVerifyEditProfileHeaderText() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify Edit profile header text");
        asserttextValidationAccessibility(Constant_AccountSettings.editProfile_TitleText, Constant_AccountSettings.editProfile_TitleText_Access_Id);
    }

    @Then("I verify user profile photo in edit profile screen")
    public void iVerifyUserProfilePhotoInEditProfileScreen() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify user profile photo in edit profile screen");
        Assert.assertTrue(iselementdisplayedaccessabilityId(Constant_AccountSettings.editProfile_Photo_Access_Id));
    }

    @Then("I verify user email value is displayed")
    public void iVerifyUserEmailValueIsDisplayed() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify user email value is displayed");
        Assert.assertTrue(iselementdisplayedaccessabilityId(Constant_AccountSettings.editProfile_EmailValue_Access_Id));
    }

    @Then("I verify Firstname label is displayed")
    public void iVerifyFirstnameLabelIsDisplayed() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify Firstname label is displayed");
        asserttextValidationAccessibility(Constant_AccountSettings.editProfile_firstNameLabel, Constant_AccountSettings.editProfile_firstNameLabel_Access_Id);
    }

    @Then("I verify Firstname Value is displayed")
    public void iVerifyFirstnameValueIsDisplayed() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify Firstname Value is displayed");
        Assert.assertTrue(iselementdisplayedaccessabilityId(Constant_AccountSettings.editProfile_firstNNameValue_Access_Id));
    }

    @Then("I verify Lastname label is displayed")
    public void iVerifyLastnameLabelIsDisplayed() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify Lastname label is displayed");
        asserttextValidationAccessibility(Constant_AccountSettings.editProfile_lastameLabel, Constant_AccountSettings.editProfile_lastameLabel_Access_Id);
    }

    @Then("I verify Lastname Value is displayed")
    public void iVerifyLastnameValueIsDisplayed() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify Lastname Value is displayed");
        Assert.assertTrue(iselementdisplayedaccessabilityId(Constant_AccountSettings.editProfile_lastNameValue_Access_Id));
    }

    @Then("I verify Primary Mobile label is displayed")
    public void iVerifyPrimaryMobileLabelIsDisplayed() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify Primary Mobile label is displayed");
        asserttextValidationAccessibility(Constant_AccountSettings.editProfile_phoneLabel, Constant_AccountSettings.editProfile_phoneLabel_Access_Id);
    }

    @Then("I verify Primary Mobile Value is displayed")
    public void iVerifyPrimaryMobileValueIsDisplayed() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify Primary Mobile Value is displayed");
        Assert.assertTrue(iselementdisplayedaccessabilityId(Constant_AccountSettings.editProfile_phoneValue_Access_Id));
    }

    @Then("I verify Address label is displayed in Edit profile screen")
    public void iVerifyAddressLabelIsDisplayedInEditProfileScreen() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify Address label is displayed in Edit profile screen");
        asserttextValidationAccessibility(Constant_AccountSettings.editProfile_addressLabel, Constant_AccountSettings.editProfile_addressLabel_Access_Id);
    }

    @Then("I verify Address value is displayed in Edit profile screen")
    public void iVerifyAddressValueIsDisplayedInEditProfileScreen() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify Address value is displayed in Edit profile screen");
        Assert.assertTrue(iselementdisplayedaccessabilityId(Constant_AccountSettings.editProfile_addressValue_Access_Id));
    }

    @Then("I verify Save Button is displayed")
    public void iVerifySaveButtonIsDisplayed() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify Save Button is displayed");
        Assert.assertTrue(iselementdisplayedaccessabilityId(Constant_AccountSettings.editProfile_saveButton_Access_Id));
    }

    @Then("I enter an First name in Edit profile screen")
    public void iEnterAnFirstNameInEditProfileScreen() throws InterruptedException, ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I enter an First name in Edit profile screen");
        Thread.sleep(1000);
        TaponbuttonaccessabilityID(Constant_AccountSettings.editProfile_firstNNameValue_Access_Id);
        Thread.sleep(1000);
        cleartextaccessabilityId(Constant_AccountSettings.editProfile_firstNNameValue_Access_Id);
        //  entertext(login_obj.ValidUser,login_obj.Login_Email_Xpath);
        entertextaccessabilityId(Constant_AccountSettings.editProfile_firstNameValue, Constant_AccountSettings.editProfile_firstNNameValue_Access_Id);
        Thread.sleep(1000);
        driver.executeScript("mobile: performEditorAction", ImmutableMap.of("action", "search"));
    }

    @Then("I enter an Last name in Edit profile screen")
    public void iEnterAnLastNameInEditProfileScreen() throws InterruptedException, ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I enter an Last name in Edit profile screen");
        Thread.sleep(1000);
        TaponbuttonaccessabilityID(Constant_AccountSettings.editProfile_lastNameValue_Access_Id);
        Thread.sleep(1000);
        cleartextaccessabilityId(Constant_AccountSettings.editProfile_lastNameValue_Access_Id);
        //  entertext(login_obj.ValidUser,login_obj.Login_Email_Xpath);
        entertextaccessabilityId(Constant_AccountSettings.editProfile_lastameValue, Constant_AccountSettings.editProfile_lastNameValue_Access_Id);
        Thread.sleep(1000);
        driver.executeScript("mobile: performEditorAction", ImmutableMap.of("action", "search"));
    }

    @Then("I enter an Primary Mobile in Edit profile screen")
    public void iEnterAnPrimaryMobileInEditProfileScreen() throws InterruptedException, ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I enter an Primary Mobile in Edit profile screen");
        Thread.sleep(1000);
        TaponbuttonaccessabilityID(Constant_AccountSettings.editProfile_phoneValue_Access_Id);
        Thread.sleep(1000);
        cleartextaccessabilityId(Constant_AccountSettings.editProfile_phoneValue_Access_Id);
        //  entertext(login_obj.ValidUser,login_obj.Login_Email_Xpath);
        entertextaccessabilityId(Constant_AccountSettings.editProfile_phoneValue, Constant_AccountSettings.editProfile_phoneValue_Access_Id);
        Thread.sleep(1000);
        driver.executeScript("mobile: performEditorAction", ImmutableMap.of("action", "search"));
    }

    @Then("I enter an Address in Edit profile screen")
    public void iEnterAnAddressInEditProfileScreen() throws InterruptedException, ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I enter an Address in Edit profile screen");
        Thread.sleep(1000);
        TaponbuttonaccessabilityID(Constant_AccountSettings.editProfile_addressValue_Access_Id);
        Thread.sleep(1000);
        cleartextaccessabilityId(Constant_AccountSettings.editProfile_addressValue_Access_Id);
        //  entertext(login_obj.ValidUser,login_obj.Login_Email_Xpath);
        entertextaccessabilityId(Constant_AccountSettings.editProfile_addressValue, Constant_AccountSettings.editProfile_addressValue_Access_Id);
        Thread.sleep(1000);
        driver.executeScript("mobile: performEditorAction", ImmutableMap.of("action", "search"));
    }

    @Then("I Tap on Save button")
    public void iTapOnSaveButton() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Tap on Save button");
        TaponbuttonaccessabilityID(Constant_AccountSettings.editProfile_saveButton_Access_Id);
        WebDriverWait wait = new WebDriverWait(driver, 300);
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(Constant_Batteries_MTC.mtc_Batteries_title_template_xpath)));
    }

    @Then("I verify App Settings Header text")
    public void iVerifyAppSettingsHeaderText() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify App Settings Header text");
        asserttextValidationAccessibility(Constant_AccountSettings.appSettings_Header_Text, Constant_AccountSettings.appSettings_Header_Text_Access_Id);
    }

    @Then("I verify Language text in App Settings page")
    public void iVerifyLanguageTextInAppSettingsPage() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify Language text in App Settings page");
        asserttextValidationAccessibility(Constant_AccountSettings.appSettings_languageText, Constant_AccountSettings.appSettings_languageText_Access_Id);
    }

    @Then("I verify selected language is displayed")
    public void iVerifySelectedLanguageIsDisplayed() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify selected language is displayed");
        Assert.assertTrue(iselementdisplayedaccessabilityId(Constant_AccountSettings.appSettings_selectedLanguage_Access_Id));
    }

    @Then("I verify celsiusText is displayed")
    public void iVerifyCelsiusTextIsDisplayed() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify celsiusText is displayed");
        Assert.assertTrue(iselementdisplayedaccessabilityId(Constant_AccountSettings.appSettings_celsiusText_Access_Id));
    }

    @Then("I verify fahrenheitText is displayed")
    public void iVerifyFahrenheitTextIsDisplayed() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify fahrenheitText is displayed");
        Assert.assertTrue(iselementdisplayedaccessabilityId(Constant_AccountSettings.appSettings_fahrenheitText_Access_Id));
    }

    @Then("I verify Unit text is displayed")
    public void iVerifyUnitTextIsDisplayed() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify Unit text is displayed");
        asserttextValidationAccessibility(Constant_AccountSettings.appSettings_unitText, Constant_AccountSettings.appSettings_unitText_Access_Id);
    }

    @Then("I verify selected unit text is displayed")
    public void iVerifySelectedUnitTextIsDisplayed() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify selected unit text is displayed");
        Assert.assertTrue(iselementdisplayedaccessabilityId(Constant_AccountSettings.appSettings_selectedUnit_Access_Id));
    }

    @Then("I verify App version text is displayed")
    public void iVerifyAppVersionTextIsDisplayed() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify App version text is displayed");
        asserttextValidationAccessibility(Constant_AccountSettings.appSettings_versionText, Constant_AccountSettings.appSettings_versionText_Access_Id);
    }

    @Then("I verify Temperature text in App Settings page")
    public void iVerifyTemperatureTextInAppSettingsPage() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify Temperature text in App Settings page");
        asserttextValidationAccessibility(Constant_AccountSettings.appSettings_temperatureContainer, Constant_AccountSettings.appSettings_temperatureContainer_Access_Id);
    }

    @Then("I Tap on Language in App Settings page")
    public void iTapOnLanguageInAppSettingsPage() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Tap on Language in App Settings page");
        TaponbuttonaccessabilityID(Constant_AccountSettings.appSettings_languageText_Access_Id);
    }

    @Then("I Tap on Units in App Settings page")
    public void iTapOnUnitsInAppSettingsPage() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Tap on Units in App Settings page");
        TaponbuttonaccessabilityID(Constant_AccountSettings.appSettings_unitText_Access_Id);
    }


    @Then("I enter an Emoji's in First name Field in Edit profile screen")
    public void iEnterAnEmojiSInFirstNameFieldInEditProfileScreen() throws InterruptedException, ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I enter an Emoji's in First name Field in Edit profile screen");
        Thread.sleep(1000);
        TaponbuttonaccessabilityID(Constant_AccountSettings.editProfile_firstNNameValue_Access_Id);
        Thread.sleep(1000);
        cleartextaccessabilityId(Constant_AccountSettings.editProfile_firstNNameValue_Access_Id);
        //  entertext(login_obj.ValidUser,login_obj.Login_Email_Xpath);
        String emojis = Constant_AccountSettings.grinning_face_with_smiling_eyes + Constant_AccountSettings.face_with_tears_of_joy +
                Constant_AccountSettings.smiling_face_with_open_mouth_and_cold_sweat + Constant_AccountSettings.smiling_face_with_open_mouth_and_tightly_closed_eyes +
                Constant_AccountSettings.winking_face;
        entertextaccessabilityId(emojis, Constant_AccountSettings.editProfile_firstNNameValue_Access_Id);
        Thread.sleep(1000);
        driver.executeScript("mobile: performEditorAction", ImmutableMap.of("action", "search"));
    }

    @Then("I enter an Emoji's in Last name Field in Edit profile screen")
    public void iEnterAnEmojiSInLastNameFieldInEditProfileScreen() throws InterruptedException, ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I enter an Emoji's in Last name Field in Edit profile screen");
        Thread.sleep(1000);
        TaponbuttonaccessabilityID(Constant_AccountSettings.editProfile_lastNameValue_Access_Id);
        Thread.sleep(1000);
        cleartextaccessabilityId(Constant_AccountSettings.editProfile_lastNameValue_Access_Id);
        //  entertext(login_obj.ValidUser,login_obj.Login_Email_Xpath);
        String emojis = Constant_AccountSettings.grinning_face_with_smiling_eyes + Constant_AccountSettings.face_with_tears_of_joy +
                Constant_AccountSettings.smiling_face_with_open_mouth_and_cold_sweat + Constant_AccountSettings.smiling_face_with_open_mouth_and_tightly_closed_eyes +
                Constant_AccountSettings.winking_face;
        entertextaccessabilityId(emojis, Constant_AccountSettings.editProfile_lastNameValue_Access_Id);
        Thread.sleep(1000);
        driver.executeScript("mobile: performEditorAction", ImmutableMap.of("action", "search"));

    }

    @Then("I enter an Emoji's in Address field in Edit profile screen")
    public void iEnterAnEmojiSInAddressFieldInEditProfileScreen() throws InterruptedException, ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I enter an Address in Edit profile screen");
        Thread.sleep(1000);
        TaponbuttonaccessabilityID(Constant_AccountSettings.editProfile_addressValue_Access_Id);
        Thread.sleep(1000);
        cleartextaccessabilityId(Constant_AccountSettings.editProfile_addressValue_Access_Id);
        //  entertext(login_obj.ValidUser,login_obj.Login_Email_Xpath);
        String emojis = Constant_AccountSettings.grinning_face_with_smiling_eyes + Constant_AccountSettings.face_with_tears_of_joy +
                Constant_AccountSettings.smiling_face_with_open_mouth_and_cold_sweat + Constant_AccountSettings.smiling_face_with_open_mouth_and_tightly_closed_eyes +
                Constant_AccountSettings.winking_face;
        entertextaccessabilityId(emojis, Constant_AccountSettings.editProfile_addressValue_Access_Id);
        Thread.sleep(1000);
        driver.executeScript("mobile: performEditorAction", ImmutableMap.of("action", "search"));

    }

    @Then("I enter an empty in First name Field in Edit profile screen")
    public void iEnterAnEmptyInFirstNameFieldInEditProfileScreen() throws ClassNotFoundException, InterruptedException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I enter an empty in First name Field in Edit profile screen");
        Thread.sleep(1000);
        TaponbuttonaccessabilityID(Constant_AccountSettings.editProfile_firstNNameValue_Access_Id);
        Thread.sleep(1000);
        cleartextaccessabilityId(Constant_AccountSettings.editProfile_firstNNameValue_Access_Id);
        //  entertext(login_obj.ValidUser,login_obj.Login_Email_Xpath);
        Thread.sleep(1000);
        driver.executeScript("mobile: performEditorAction", ImmutableMap.of("action", "search"));

    }

    @Then("I enter an empty in Last name Field in Edit profile screen")
    public void iEnterAnEmptyInLastNameFieldInEditProfileScreen() throws ClassNotFoundException, InterruptedException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I enter an empty in Last name Field in Edit profile screen");
        Thread.sleep(1000);
        TaponbuttonaccessabilityID(Constant_AccountSettings.editProfile_lastNameValue_Access_Id);
        Thread.sleep(1000);
        cleartextaccessabilityId(Constant_AccountSettings.editProfile_lastNameValue_Access_Id);
        //  entertext(login_obj.ValidUser,login_obj.Login_Email_Xpath);
        Thread.sleep(1000);
        driver.executeScript("mobile: performEditorAction", ImmutableMap.of("action", "search"));

    }

    @Then("I enter an empty in Address field in Edit profile screen")
    public void iEnterAnEmptyInAddressFieldInEditProfileScreen() throws InterruptedException, ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I enter an empty in Address field in Edit profile screen");
        Thread.sleep(1000);
        TaponbuttonaccessabilityID(Constant_AccountSettings.editProfile_addressValue_Access_Id);
        Thread.sleep(1000);
        cleartextaccessabilityId(Constant_AccountSettings.editProfile_addressValue_Access_Id);
        //  entertext(login_obj.ValidUser,login_obj.Login_Email_Xpath);
        Thread.sleep(1000);
        driver.executeScript("mobile: performEditorAction", ImmutableMap.of("action", "search"));

    }

    @Then("I enter an empty in Primary Field Mobile in Edit profile screen")
    public void iEnterAnEmptyINPrimaryFieldMobileInEditProfileScreen() throws InterruptedException, ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I enter an empty in Primary Field Mobile in Edit profile screen");
        Thread.sleep(1000);
        TaponbuttonaccessabilityID(Constant_AccountSettings.editProfile_phoneValue_Access_Id);
        Thread.sleep(1000);
        cleartextaccessabilityId(Constant_AccountSettings.editProfile_phoneValue_Access_Id);
        //  entertext(login_obj.ValidUser,login_obj.Login_Email_Xpath);
        Thread.sleep(1000);
        driver.executeScript("mobile: performEditorAction", ImmutableMap.of("action", "search"));
    }

    @Then("I enter an Special character in First name Field in Edit profile screen")
    public void iEnterAnSpecialCharacterInFirstNameFieldInEditProfileScreen() throws InterruptedException, ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I enter an Special character in First name Field in Edit profile screen");
        Thread.sleep(1000);
        TaponbuttonaccessabilityID(Constant_AccountSettings.editProfile_firstNNameValue_Access_Id);
        Thread.sleep(1000);
        cleartextaccessabilityId(Constant_AccountSettings.editProfile_firstNNameValue_Access_Id);
        //  entertext(login_obj.ValidUser,login_obj.Login_Email_Xpath);
        entertextaccessabilityId(Constant_AccountSettings.editProfile_firstNameValue_SpecialCharacter, Constant_AccountSettings.editProfile_firstNNameValue_Access_Id);
        Thread.sleep(1000);
        driver.executeScript("mobile: performEditorAction", ImmutableMap.of("action", "search"));

    }

    @Then("I enter an Special character in Last name Field in Edit profile screen")
    public void iEnterAnSpecialCharacterInLastNameFieldInEditProfileScreen() throws InterruptedException, ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I enter an Special character in Last name Field in Edit profile screen");
        Thread.sleep(1000);
        TaponbuttonaccessabilityID(Constant_AccountSettings.editProfile_lastNameValue_Access_Id);
        Thread.sleep(1000);
        cleartextaccessabilityId(Constant_AccountSettings.editProfile_lastNameValue_Access_Id);
        //  entertext(login_obj.ValidUser,login_obj.Login_Email_Xpath);
        entertextaccessabilityId(Constant_AccountSettings.editProfile_lastameValue_SpecialCharacter, Constant_AccountSettings.editProfile_lastNameValue_Access_Id);
        Thread.sleep(1000);
        driver.executeScript("mobile: performEditorAction", ImmutableMap.of("action", "search"));

    }

    @Then("I enter an Special character in Address field in Edit profile screen")
    public void iEnterAnSpecialCharacterInAddressFieldInEditProfileScreen() throws ClassNotFoundException, InterruptedException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I enter an Special character in Address field in Edit profile screen");
        Thread.sleep(1000);
        TaponbuttonaccessabilityID(Constant_AccountSettings.editProfile_addressValue_Access_Id);
        Thread.sleep(1000);
        cleartextaccessabilityId(Constant_AccountSettings.editProfile_addressValue_Access_Id);
        //  entertext(login_obj.ValidUser,login_obj.Login_Email_Xpath);
        entertextaccessabilityId(Constant_AccountSettings.editProfile_addressValue_SpecialCharacter, Constant_AccountSettings.editProfile_addressValue_Access_Id);
        Thread.sleep(1000);
        driver.executeScript("mobile: performEditorAction", ImmutableMap.of("action", "search"));

    }

    @Then("I Verify the account setting header")
    public void iVerifyTheAccountSettingHeader() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Verify the account setting header");
        asserttextValidationAccessibility(Constant_AccountSettings.profile_AccountSetting_Header, Constant_AccountSettings.profile_AccountSetting_Header_Access_Id);
    }

    @Then("I verify the account holder photo")
    public void iVerifyTheAccountHolderPhoto() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify the account holder photo");
        Assert.assertTrue(iselementdisplayedaccessabilityId(Constant_AccountSettings.profile_AccountSettings_photo_Access_Id));
    }

    @Then("I verify the user name in account setting")
    public void iVerifyTheUserNameInAccountSetting() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify the user name in account setting");
        Assert.assertTrue(iselementdisplayedaccessabilityId(Constant_AccountSettings.profile_AccountSettings_userNAme_Access_Id));
    }

    @Then("I verify the user mail id")
    public void iVerifyTheUserMailId() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify the user mail id");
        Assert.assertTrue(iselementdisplayedaccessabilityId(Constant_AccountSettings.profile_AccountSettings_mail_id_Access_Id));
    }

    @Then("I Verify the profile text")
    public void iVerifyTheProfileText() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Verify the profile text");
        asserttextValidationAccessibility(Constant_AccountSettings.profile_accountSetting_profile_text, Constant_AccountSettings.profile_accountSetting_profile_text_Access_Id);
    }

    @Then("I Verify the Subscription text")
    public void iVerifyTheSubscriptionText() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Verify the Subscription text");
        asserttextValidationAccessibility(Constant_AccountSettings.profile_AccountSetting_subscription, Constant_AccountSettings.profile_AccountSetting_subscription_Access_Id);
    }

    @Then("I Navigate to the Profile page")
    public void iNavigateToTheProfilePage() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Navigate to the Profile page");
        TaponbuttonaccessabilityID(Constant_AccountSettings.profile_accountSetting_profile_text_Access_Id);
    }

    @Then("I Navigate to Subscription page")
    public void iNavigateToSubscriptionPage() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Navigate to Subscription page");
        TaponbuttonaccessabilityID(Constant_AccountSettings.profile_AccountSetting_subscription_Access_Id);
        System.out.println("1234");
    }

    @Then("I verify the Device Management Header")
    public void iVerifyTheDeviceManagementHeader() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify the Device Management Header");
        asserttextValidationAccessibility(Constant_AccountSettings.Settings_DeviceManagement_header, Constant_AccountSettings.Settings_DeviceManagement_header_accessid);
    }

    @Then("I verify the Device Management Logo")
    public void iVerifyTheDeviceManagementLogo() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify the Device Management Logo");
        Assert.assertTrue(iselementdisplayedaccessabilityId(Constant_AccountSettings.Settings_DeviceManage_MarineDevice_logo_accessid));
    }

    @Then("I verify the Device Management right icon")
    public void iVerifyTheDeviceManagementRightIcon() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify the Device Management right icon");
        Assert.assertTrue(iselementdisplayedaccessabilityId(Constant_AccountSettings.Settings_DeviceManagement_righticon_Access_Id));
    }

    @Then("I verify the Add New Button text")
    public void iVerifyTheAddNewButtonText() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify the Add New Button text");
        asserttextValidationAccessibility(Constant_AccountSettings.Settings_DeviceManage_AddNew_Button, Constant_AccountSettings.Settings_DeviceManage_AddNew_Button_accessid);
    }

    @Then("I Tap on the Add New button")
    public void iTapOnTheAddNewButton() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Tap on the Add New button");
        TaponbuttonaccessabilityID(Constant_AccountSettings.Settings_DeviceManage_AddNew_Button_accessid);
    }

    @Then("I Verify the OnBoarding Header")
    public void iVerifyTheOnBoardingHeader() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Verify the OnBoarding Header");
        asserttextValidationAccessibility(Constant_AccountSettings.Settings_Onboarding_HeaderText, Constant_AccountSettings.Settings_Onboarding_HeaderText_Access_Id);
    }

    @Then("I Verify the close button in Onboarding Page")
    public void iVerifyTheCloseButtonInOnboardingPage() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Verify the close button in Onboarding Page");
        Assert.assertTrue(iselementdisplayedaccessabilityId(Constant_AccountSettings.Settings_Onboarding_close_button_Access_Id));
    }

    @Then("I Verify the Attention image")
    public void iVerifyTheAttentionImage() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Verify the Attention image");
        Assert.assertTrue(iselementdisplayedaccessabilityId(Constant_AccountSettings.Settings_Onboarding_attention_image_accessid));
    }

    @Then("I Verify the Bluetooth Pairing Message")
    public void iVerifyTheBluetoothPairingMessage() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Verify the Bluetooth Pairing Message");
        Assert.assertTrue(iselementdisplayedaccessabilityId(Constant_AccountSettings.Settings_Onboarding_BluetoothPairing_message_access_id));
    }

    @Then("I verify the Search Again Text")
    public void iVerifyTheSearchAgainText() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify the Search Again Text");
        Assert.assertTrue(iselementdisplayedaccessabilityId(Constant_AccountSettings.Settings_Onboarding_SearchAgain_accessid));

    }

    @Then("I Tap on close button")
    public void iTapOnCloseButton() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Tap on close button");
        TaponbuttonaccessabilityID(Constant_AccountSettings.Settings_Onboarding_close_button);
    }

    @Then("I verify if subscription title is displayed")
    public void iVerifyIfSubscriptionTitleIsDisplayed() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify if subscription title is displayed");
        asserttextValidationAccessibility(Constant_AccountSettings.Subscription_title, Constant_AccountSettings.Subscription_title_accessid);
    }

    @Then("I verify if subscription back button is available")
    public void iVerifyIfSubscriptionBackButtonIsAvailable() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify if subscription back button is available");
        Assert.assertTrue(iselementdisplayedaccessabilityId(Constant_AccountSettings.Subscription_backbutton_accessid));
        System.out.println("9876");
    }

    @Then("I verify Back Button displayed in Language Page")
    public void iVerifyBackButtonDisplayedInLanguagePage() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify Back Button displayed in Language Page");
        Assert.assertTrue(iselementdisplayedaccessabilityId(Constant_AccountSettings.appSettings_Back_Button_Access_Id));
    }

    @Then("I verify Language Header Text in Language Page")
    public void iVerifyLanguageHeaderTextInLanguagePage() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify Language Header Text in Language Page");
        asserttextValidationAccessibility(Constant_AccountSettings.appSettings_language_header_TitleText, Constant_AccountSettings.appSettings_language_header_TitleText_Access_Id);
    }

    @Then("I Verify Language English Text in Language Page")
    public void iVerifyLanguageEnglishTextInLanguagePage() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Verify Language English Text in Language Page");
        asserttextValidationAccessibility(Constant_AccountSettings.appSettings_Language_English_CardTitle_Text, Constant_AccountSettings.appSettings_Language_English_CardTitle_Access_Id);
    }

    @Then("I Verify Language German Text in Language Page")
    public void iVerifyLanguageGermanTextInLanguagePage() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Verify Language German Text in Language Page");
        asserttextValidationAccessibility(Constant_AccountSettings.appSettings_Language_German_CardTitle_Text, Constant_AccountSettings.appSettings_Language_German_CardTitle_Access_Id);
    }

    @Then("I Verify Language Spanish \\(US) Text in Language Page")
    public void iVerifyLanguageSpanishUSTextInLanguagePage() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Verify Language Spanish(US) Text in Language Page");
        asserttextValidationAccessibility(Constant_AccountSettings.appSettings_Language_Spanish_CardTitle_Text, Constant_AccountSettings.appSettings_Language_Spanish_CardTitle_Access_Id);
    }

    @Then("I Verify Language French Text in Language Page")
    public void iVerifyLanguageFrenchTextInLanguagePage() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Verify Language French Text in Language Page");
        asserttextValidationAccessibility(Constant_AccountSettings.appSettings_Language_French_CardTitle_Text, Constant_AccountSettings.appSettings_Language_French_CardTitle_Access_Id);
    }

    @Then("I verify Back Button displayed in Units Page")
    public void iVerifyBackButtonDisplayedInUnitsPage() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify Back Button displayed in Units Page");
        Assert.assertTrue(iselementdisplayedaccessabilityId(Constant_AccountSettings.appSettings_Back_Button_Access_Id));
    }

    @Then("I verify Metric Text in Units Page")
    public void iVerifyMetricTextInUnitsPage() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify Metric Text in Units Page");
        asserttextValidationAccessibility(Constant_AccountSettings.appSettings_Unit_Metric_Text, Constant_AccountSettings.appSettings_Unit_Metric_Access_Id);
    }

    @Then("I verify Imperial Text in Units Page")
    public void iVerifyImperialTextInUnitsPage() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify Imperial Text in Units Page");
        asserttextValidationAccessibility(Constant_AccountSettings.appSettings_Unit_Imperial_Text, Constant_AccountSettings.appSettings_Unit_Imperial_Access_Id);
    }

    @Then("I verify Units Header Text in Units Page")
    public void iVerifyUnitsHeaderTextInUnitsPage() throws Throwable {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I verify Units Header Text in Units Page");
        asserttextValidationAccessibility(Constant_AccountSettings.appSettings_Unit_header_TitleText_Text, Constant_AccountSettings.appSettings_Unit_header_TitleText_Access_Id);
    }

    @Then("I Tap on German Language in Language Page")
    public void iTapOnGermanLanguageInLanguagePage() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Tap on German Language in Language Page");
        TaponbuttonaccessabilityID(Constant_AccountSettings.appSettings_Language_German_CardTitle_Access_Id);
    }

    @Then("I Tap on Spanish \\(US) Language in Language Page")
    public void iTapOnSpanishUSLanguageInLanguagePage() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Tap on Spanish(US) Language in Language Page");
        TaponbuttonaccessabilityID(Constant_AccountSettings.appSettings_Language_Spanish_CardTitle_Access_Id);
    }

    @Then("I Tap on French Language in Language Page")
    public void iTapOnFrenchLanguageInLanguagePage() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Tap on French Language in Language Page");
        TaponbuttonaccessabilityID(Constant_AccountSettings.appSettings_Language_French_CardTitle_Access_Id);
    }

    @Then("I Tap on English Language in Language Page")
    public void iTapOnEnglishLanguageInLanguagePage() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Tap on English Language in Language Page");
        TaponbuttonaccessabilityID(Constant_AccountSettings.appSettings_Language_English_CardTitle_Access_Id);
    }

    @Then("I Tap on Imperial Unit in Units Page")
    public void iTapOnImperialUnitInUnitsPage() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Tap on Imperial Unit in Units Page");
        TaponbuttonaccessabilityID(Constant_AccountSettings.appSettings_Unit_Imperial_Access_Id);
    }

    @Then("I Tap on Metric Unit in Units Page")
    public void iTapOnMetricUnitInUnitsPage() throws ClassNotFoundException {
        ScenarioDef.createNode(new GherkinKeyword("Then"), "I Tap on Metric Unit in Units Page");
        TaponbuttonaccessabilityID(Constant_AccountSettings.appSettings_Unit_Metric_Access_Id);
    }
}
