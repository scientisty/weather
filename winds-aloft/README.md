# Winds Aloft

Published at 6, 12, and 24 hour forecasts. We want the low elevation version. Reno is published by Salt Lake City.

5/2017

This site

* http://www.usairnet.com/cgi-bin/Winds/Aloft.cgi?location=RNO&Submit=Get+Forecast&hour=12&course=azimuth

Pulls data from here

* https://aviationweather.gov/products/nws/saltlakecity?&fint=06&lvl=lo
* https://aviationweather.gov/products/nws/saltlakecity?&fint=12&lvl=lo
* https://aviationweather.gov/products/nws/saltlakecity?&fint=24&lvl=lo

Going through the front door leads to 

https://aviationweather.gov/windtemp/data?region=slc

which links to the same data at

* https://aviationweather.gov/windtemp/data?level=l&fcst=06&region=slc&layout=on
* https://aviationweather.gov/windtemp/data?level=l&fcst=12&region=slc&layout=on
* https://aviationweather.gov/windtemp/data?level=l&fcst=24&region=slc&layout=on

See the windtemp [help](https://aviationweather.gov/windtemp/help) for the [text](https://www.aviationweather.gov/windtemp/help?page=text) product:

Params:

* `level=l` (low (default) or h/hight)
* `fcst={6|12|24}` (default 6)
* `region=all` / gets you [all](https://aviationweather.gov/windtemp/data?level=l&fcst=06&region=all&layout=off) sites, seems unique to this (windtemp/data) interface!

The 6, 12, and 24 hr data headers are:

    FBUS31 KWNO 270202
    FD1US1
    
    FBUS33 KWNO 270202
    FD3US3
    
    FBUS35 KWNO 270202
    FD5US5

but what does that mean?

FBUS31 &rarr; FB is *data type designator* for wind and temperature aloft forecasts, the rest is ? but the US seems to relate to teh 

KWNO &rarr; "originating office"???? from WMO heading?

270202 &rarr; is maybe the time the forecast was made?

FD1US1 &rarr; FD1 is *Product Identifier*, and *Office Identifier*, this is *AWIPS ID*

See [NWS Communications Header Policy Document](http://www.nws.noaa.gov/tg/awips.php) for more info on header structure, as well as [International Codes & Bulletin Heading Practices](http://www.nws.noaa.gov/tg/metcode.php) and [Explanation of Data Designators T1T2A1A2ii CCCC](http://www.wmo.int/pages/prog/www/ois/Operational_Information/Publications/WMO_386/AHLsymbols/AHLsymbols_en.html) (and see other stuff at the [WMO](https://www.wmo.int/pages/index_en.html)). [Weather Communications Codes: A Breathless Overview](http://www.ominous-valve.com/wx_codes.txt) is a nice overview.

http://www.wmo.int/pages/prog/www/WMOCodes.html

A search brought me to:

http://forecast.weather.gov/product.php?site=NWS&issuedby=US1&product=FD1&format=CI&version=1&glossary=1

http://forecast.weather.gov/product.php?site=CAE&issuedby=US1&product=FD1&format=TXT&version=1&glossary=1

Params:

* `site=NWS` seems to refer to the office, or region (e.g. WRH), or NWS for general. 
* `format=TXT` for a plain text version or `CI` for the full site.
* `version=1` is current version, 

Check that these on weather.gov are current! Esp. wrt versions 2+. Aviationweather might be more reliable? Verify once codes understood

Some info here:

https://aviationweather.gov/products/nws/info

And this directive give all the details:

http://www.nws.noaa.gov/directives/sym/pd01008012curr.pdf

## NWS Office Product Listing

Various winds aloft forecasts are listed here along with their *Product Identifier* and links to the NWS *Office Identifier* of offices that offer that product:

[NWS Weather Forecast Office Product Listing](https://forecast.weather.gov/product_types.php?site=NWS)

* FD0 24 Hr Fd Winds Aloft Fcst (45,000 and 53,000 Ft)
    * AK9, HW9, OC9, US9
* **FD1 6 Hour Winds Aloft Forecast** &rarr; correct, 6 hr
    * AK1, CN1, HW1, OC1, US1
* FD2	12 Hour Winds Aloft Forecast
    * Site list not available.
* **FD3 24 Hour Winds Aloft Forecast** &rarr; label wrong, actually 12 hr
    * AK3, CN3, HW3, OC3, US3
* FD4	Winds Aloft Forecast
    * Site list not available.
* **FD5 Winds Aloft Forecast** &rarr; 24 hr
    * AK5, CN5, HW5, OC5, US5 
* FD6 Winds Aloft Forecast
    * Site list not available.
* FD7 Winds Aloft Forecast
    * Site list not available.
* FD8 6 Hour Fd Winds Aloft Fcst (45,000 and 53,000 Ft)
    * AK7, HW7, OC7, US7
* FD9 12 Hr Fd Winds Aloft Fcst (45,000 and 53,000 Ft)
    * AK8, HW8, OC8, US8


>  Wind and temperature aloft forecasts are issued in bulletins identified by the data type designator "FB" in the World Meteorological Organization (WMO)

Actually US refers to CONUS, AK Alaska, HW Hawaii, OC Pacific Sites. It's not clear what CN is!

    Actual Altitude (feet)
    3,000
    6,000
    9,000
    12,000
    
    Pressure Altitude (feet)
    18,000(500hPa)
    24,000(400hPa)
    30,000(300hPa)
    34,000(250hPa)
    39,000(200hPa)

There are 6, 12, and 24 hour forecasts.

Format DDff+TT which is:

wind direction
: tens of degrees, true north

wind speed
: knots, l&v or <5 knots is 9900, see ref for encoding of >100 knots

temperature
: celcius, and +/- for 6,000-24,000 levels, above 24K assumed negative

Note that the NWS regions are:

* Alaska Region
* Central Region
* Eastern Region
* Pacific Region
* Southern Region
* Western Region

NWS has *Local Forecast Offices* and [*Center Weather Serice Units*](http://www.nws.noaa.gov/aviation/pages/CWSU/CWSU.php) ([alt](https://aviationweather.gov/cwamis))

Note, there may be able to get wind forecast data from RAP model!

Review METARs sites - they may be worth getting the list and mapping.

See also this https://rucsoundings.noaa.gov/

There is a RAOB software and it has potentially useful info about where to get data: see [RAOB Data Types](http://raob.com/data_type.php) and [Data Sources](http://raob.com/data_sources.php).




