package com.dometic.MTC.qa.Pages;

public class Constant_Tank_MTC {
    // ---------------------Accesibility_Id-----------------------//
    public static final String mtc_Tank_Title_Access_ID="com.dometicapp:id/setting-selectedLanguage";

    //---------------------------xPath----------------------------//
    public static final String mtc_Tank_Tile_Xpath="//*[@text='Tank']";
    public static final String mtc_Tank_Alerts_Tank_Level_Above_xpath="(//*[@text='Tank Level Above'])[1]";
    public static final String mtc_Tank_Alerts_Set_Latency_xpath="(//*[@text='Set Latency'])[1]";
    public static final String mtc_Tank_Warnings_Tank_Level_Above_xpath="(//*[@text='Tank Level Above'])[2]";
    public static final String mtc_Tank_Warnings_Set_Latency_xpath="(//*[@text='Set Latency'])[2]";
    public static final String mtc_Tank_AlertsText_xpath="//*[@text='Alert']";
    public static final String mtc_Tank_Alerts_toggle_xpath="(//*[@content-desc='alertsSwitch'])[1]";
    public static final String mtc_Tank_Alerts_Status_Text_xpath="(//*[@text='OFF'])[1]";
    public static final String mtc_Tank_WarningsText_xpath="//*[@text='Warning']";
    public static final String mtc_Tank_Warnings_toggle_xpath="(//*[@content-desc='alertsSwitch'])[2]";
    public static final String mtc_Tank_Warnings_Status_Text_xpath="(//*[@text='OFF'])[1]";

    //---------------------------Data----------------------------//
    public static final String mtc_Tank="TANKS";
    public static final String mtc_Tank_toggle_Status="OFF";
    public static final String mtc_Tank_AlertsText="Alert";
    public static final String mtc_Tank_WarningsText="Warning";
    public static final String mtc_Tank_Alerts_Tank_Level_Above="Tank Level Above";
    public static final String mtc_Tank_Alerts_Set_Latency="Set Latency";
}
