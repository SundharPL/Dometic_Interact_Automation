package com.dometic.MTC.qa.Pages;

public class Constant_Batteries_MTC {

    // ---------------------Accesibility_Id-----------------------//
    public static final String mtc_Climate_Title_Access_ID="com.dometicapp:id/setting-selectedLanguage";
    public static final String mtc_Climate_Tile_Inside_Access_ID="com.dometicapp:id/climate-insideTemp";
    public static final String mtc_Climate_Tile_Outside_Access_ID="com.dometicapp:id/climate-outsideTemp";
    public static final String mtc_Climate_Tile_FanIcon_Access_ID="com.dometicapp:id/climate-fanIcon";
    public static final String mtc_Climate_Tile_FanSpeed_Access_ID="com.dometicapp:id/climate-FanSpeed";
    public static final String mtc_Climate_Tile_AllClimate_toggle_Status_Access_ID="undefined-switchText";
    public static final String mtc_Climate_Tile_AllClimate_toggle_Access_ID="undefined-switchComponent";
    public static final String mtc_Climate_Tile_Power_text_Access_ID="com.dometicapp:id/climate-powerText";
    public static final String mtc_Batteries_Status_Access_ID="com.dometicapp:id/powerScreen-batteryCarousel-batteryStatus";
    public static final String mtc_Batteries_Alerts_Battery_Voltage_BelowText_Apply_Access_ID="com.dometicapp:id/waterHeater-applyText";

    // ---------------------NeededAccesibility_Id-----------------------//
    public static final String mtc_Climate_Tile_AllClimateText_Access_ID="";
    public static final String mtc_Climate_Tile_Power_toggle_Status_Access_ID="";
    public static final String mtc_Climate_Tile_Power_toggle_Access_ID="";

    //---------------------------xPath----------------------------//
    public static final String mtc_Climate_Tile_Title_xpath="//*[@text='CLIMATE']";
    public static final String mtc_Climate_Tile_Inside_xpath="//*[@text='Inside 0°C']";
    public static final String mtc_Climate_Tile_Outside_xpath="//*[@text='Outside _ _°C']";
    public static final String mtc_Climate_Tile_AllClimateText_xpath="//*[@text='All Climate' and @content-desc='undefined-cardTitle']";
    public static final String mtc_Climate_Tile_AllClimate_toggle_Status_xpath="//*[@text='ON' and @content-desc='undefined-switchText']";
    public static final String mtc_Climate_Tile_Zones_Text_xpath="//*[@text='Off/Low/Med/High']";
    public static final String mtc_Batteries_xpath="//*[@text='Batteries']";
    public static final String mtc_Climate_Tile_Power_toggle_Status_xpath="//*[@text='ON']";
    public static final String mtc_Batteries_VoltageGraph_xpath="//*[@text='Voltage Graph']";
    public static final String mtc_Batteries_VoltageGraph_arrow_xpath="(//*[@content-desc='com.dometicapp:id/powerScreen-batteryCarousel-batteryNameCarousel']//following::android.widget.TextView)[2]";
    public static final String mtc_Batteries_VoltageText_xpath="//*[@text='Voltage']";
    public static final String mtc_Batteries_HistoryText_xpath="//*[@text='History']";
    public static final String mtc_Batteries_DAYText_xpath="//*[@text='DAY']";
    public static final String mtc_Batteries_WEEKText_xpath="//*[@text='WEEK']";
    public static final String mtc_Batteries_AlertsText_xpath="//*[@text='Alerts']";
    public static final String mtc_Batteries_Alerts_toggle_xpath="(//*[@content-desc='alertsSwitch'])[1]";
    public static final String mtc_Batteries_Alerts_Status_Text_xpath="(//*[@text='OFF'])[1]";
    public static final String mtc_Batteries_Alerts_Status_On_Text_xpath="(//*[@text='ON'])[1]";
    public static final String mtc_Batteries_MONTHText_xpath="//*[@text='MONTH']";
    public static final String mtc_Batteries_Alerts_Battery_Voltage_BelowText_xpath="(//*[@text='Battery Voltage Below'])[1]";
    public static final String mtc_Batteries_Alerts_Battery_Voltage_BelowText_Apply_xpath="//*[@text='Apply']";
    public static final String mtc_Batteries_Set_LatencyText_xpath="(//*[@text='Set Latency'])[1]";
    public static final String mtc_Batteries_WarningsText_xpath="//*[@text='Warnings']";
    public static final String mtc_Batteries_Warnings_toggle_xpath="(//*[@content-desc='alertsSwitch'])[2]";
    public static final String mtc_Batteries_Warnings_Status_Text_xpath="(//*[@text='OFF'])[1]";
    public static final String mtc_Batteries_Warnings_Status_On_Text_xpath="(//*[@text='ON'])[2]";
    public static final String mtc_Batteries_Warnings_Battery_Voltage_BelowText_xpath="(//*[@text='Battery Voltage Below'])[2]";
    public static final String mtc_Batteries_Warnings_Battery_Voltage_BelowText_Apply_xpath="//*[@text='Apply']";
    public static final String mtc_Batteries_Warnings_Set_LatencyText_xpath="(//*[@text='Set Latency'])[2]";

    //---------------------------Data----------------------------//
    public static final String mtc_Batteries="BATTERIES";
    public static final String mtc_Climate_Tile_Power_toggle_Status="OFF";
    public static final String mtc_Batteries_VoltageGraph_text="Voltage Graph";
    public static final String mtc_Batteries_VoltageText_text="Voltage";
    public static final String mtc_Batteries_HistoryText_text="History";
    public static final String mtc_Batteries_DAYText_text="DAY";
    public static final String mtc_Batteries_WEEKText_text="WEEK";
    public static final String mtc_Batteries_MONTHText_text="MONTH";
    public static final String mtc_Batteries_AlertsText="Alerts";
    public static final String mtc_Batteries_WarningsText="Warnings";
    public static final String mtc_Batteries_Alerts_Battery_Voltage_BelowText="Battery Voltage Below";
    public static final String mtc_Batteries_Alerts_Battery_Voltage_BelowText_Apply="Apply";
    public static final String mtc_Batteries_Set_LatencyText="Set Latency";
}
