---
title: CSV Column and Query String Reference
description: All columns and query strings supported by BDIA.
---

# CSV Column and Query String Reference

The following columns are supported in the BDIA file format.

Header/Column Name | Query String Parameter Equivalent | Description
--|--|--
`aamlh` | `aamlh` | Adobe Audience Manager location hint.<br>`3`: Hong Kong/Singapore (`apse.demdex.net`)<br>`6`: Europe (`irl1.demdex.net`)<br>`7`: US East (`use.demdex.net`)<br>`8`: Australia (`apse2.demdex.net`)<br>`9`: US West (`usw2.demdex.net`)<br>`11`: Tokyo (`tyo3.demdex.net`)
`browserHeight` | `bh` | Browser height in pixels (For example, 768).
`browserWidth` | `bw` | Browser width in pixels (For example, 1024).
`campaign` | `v0` | The campaign tracking code associated with the page.
`channel` | `ch` | The page title or bread crumb.
`colorDepth` | `c` | Monitor color depth in bits (For example, 24).
`connectionType` | `ct` | Visitor's connection type ("lan" or "modem").
`contextData.key` | `c.[key]` | Key-values pairs are specified in by naming the header "contextData.product" or "contextData.color".
`cookiesEnabled` | `k` | Whether the visitor supports first party session cookies (`Y` or `N`).
`currencyCode` | `cc` | Revenue currency code For example, USD.
`customerID.[customerIDType].id` | `cid.[customerIDType].id` | The customer ID to use. The customerIDType can be any alphanumeric string, but should be considered case sensitive.
`customerID.[customerIDType].authState` | `cid.[customerIDType].as` | The authenticated state of the visitor. Supported values are: `0`, `1`, `2`, `UNKNOWN`, `AUTHENTICATED`, `LOGGED_OUT`, or '' (case insensitive). Two consecutive single quotes ('') causes the value to be omitted from the query string which translates to 0 when the hit is made. Please note the supported authState numeric values denote the following: `0 = UNKNOWN`, `1 = AUTHENTICATED`, `2 = LOGGED_OUT`. The customerIDType can be any alphanumeric string, but should be considered case sensitive.
`customerID.[customerIDType].isMCSeed` | `cid.[customerIDType].ismcseed` | Whether or not this is the seed for the Marketing Cloud Visitor ID. Supported values are: `0`, `1`, `TRUE`, `FALSE`, '' (case insensitive). Using `0`, `FALSE`, or two consecutive single quotes (`''`) causes the value to be omitted from the query string. The customerIDType can be any alphanumeric string, but should be considered case sensitive.
`eVar1` - `eVar250` | `v1` - `v250` | Analytics eVar.
`events` | `events` | A list of Analytics events. Multiple events are separated by a comma in each data row field.
`hier1` - `hier5` | `h1` - `h5` | A hierarchy string.
`ipaddress` | N/A (Can only be supplied via column header) | The visitor's IP address.
`javaEnabled` | `v` | Whether the visitor has Java enabled (`Y` or `N`).
`javaScriptVersion` | `j` | JavaScript version. For example, 1.3.
`language` | N/A (Can only be supplied via column header) | The browser's supported language. For example, "en-us".
`linkName` | `pev2` | Name of link.
`linkType` | `pe` | Type of link (`d`, `e`, or `o`).
`linkURL` | `pev1` | The link's HREF. For custom links, page values are ignored.
`list1` - `list3` | `l1` - `l3` | A delimited list of values that are passed into a variable, then reported as individual line items for reporting.
`pageName` | `pageName` | The Web page name.
`pageType` | `pageType` | The Web page type. This is only used on 404 error pages. Set pageType to "Error Page" for when a 404 error is detected.
`pageURL` | `g` | The Web page URL For example, http://www.example.com/index.html.
`plugins` | `p` | Semicolon separated list of Netscape plug-in names.
`products` | `products` | List of all products on the page. Separate products with a comma. For example: Sports;Ball;1;5.95,Toys; Top;1:1.99.
`prop1` - `prop75` | `c1` - `c75` | Analytics property name.
`purchaseID` | `purchaseID` | Purchase ID number.
`referrer` | `r` | The URL of the page referrer.
`reportSuiteID` | Contained in the URL. See HTTP GET Sample. | Specifies the report suites where you want to submit data. Separate multiple report suite IDs with a comma.
`resolution` | `s` | Monitor resolution For example, 1280x1024.
`server` | `server` | The Web server serving the page.
`state` | `state` | The visitor's U.S. state.
`timestamp` | `ts` | The time and date on which the data was collected.
~~`timezone`~~ | Not supported at this time. | |
`tnta` | `tnta` | Target data payload, for use with A4T integrations
~~`trackingServer`~~ | N/A | *Can only be supplied via column header*
`transactionID` | `xact` | Common value used to tie multi-channel user activities together for reporting purposes. For more information, see the [Data Sources User Guide](https://docs.adobe.com/content/help/en/analytics/import/data-sources/datasrc-home.html).
~~`userAgent`~~ | N/A | *Can only be supplied via column header*
`visitorID` | `vid` | Visitor's Analytics ID. See [Visitor Identification](https://docs.adobe.com/content/help/en/id-service/using/home.html).
`marketingCloudVisitorID` | `mid` | Marketing Cloud ID. See [Visitor Identification and the Marketing Cloud Visitor ID Service](https://docs.adobe.com/content/help/en/id-service/using/home.html).
`zip` | `zip` | The visitor's zip code.


