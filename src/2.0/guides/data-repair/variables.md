---
title: Job definition and variables
description: Specify the variables that you want to repair, and what action to take on them.
---

# Job definiton and variables

Each API call that creates a job or requests server call estimates requires a JSON object containing the variables and actions to take.

## Dimensions

### `campaign`, `entrypage`, `entrypageoriginal`, `sitesections`

* Supported Actions: `delete`, `set`
* `campaign`: See `evar1-evar250` for details on variable expiration, as they also apply to `campaign`.

```json
{
    "variables": {
        "campaign": {
            "action": "delete"
        }
    }
}
```

### `geodma`, `geocity`, `geocountry`, `geolatitude`, `geolongitude`, `georegion`, `geozip`, `ipaddress`, `latitude`, `longitude`, `zip`

* Supported Actions: `delete`

```json
{
    "variables": {
        "zip": {
            "action": "delete"
        }
    }
}
```

### `page`, `pageeventvar1`, `pageeventvar2`

* Supported Actions: `set`
* `pageeventvar1`: The URL of a link tracking hit.
* `pageeventvar2`: The name of a link tracking hit.

```json
{
    "variables": {
        "page": {
            "action": "set",
            "setValue": "page value"
        }
    }
}
```

### `evar1` - `evar250`

* Supported Actions: `delete`, `set`
* An eVar value can exist across multiple hits or visits. See the [FAQ](faq.md) for information around allocation and expiration.

```json
{
    "variables": {
        "evar1": {
            "action": "set",
            "setValue": "new value"
        }
    }
}
```

### `prop1` - `prop75`

* Supported Actions: `delete`, `set`

```json
{
    "variables": {
        "prop1": {
            "action": "delete"
        }
    }
}
```

### `activitymap`

* This special variable includes `clickmappage`, `clickmaplink`, `clickmapregion`, and as well as the context data used to populate these identities
* Supported Actions: `delete`
* As this variable corresponds to multiple entities, no filters are supported.

```json
{
    "variables": {
        "activitymap": {
            "action": "delete"
        }
    }
}
```


### `mobileappid`, `mobilemessagebuttonname`, `mobilemessageid`, `mobilerelaunchcampaigncontent`, `mobilerelaunchcampaignmedium`, `mobilerelaunchcampaignsource`, `mobilerelaunchcampaignterm`, `mobilerelaunchcampaigntrackingcode`

* Supported Actions: `delete`, `set`

```json
{
    "variables": {
        "mobilecampaignmedium": {
            "action": "set",
            "setValue": "new value"
        }
    }
}
```

### `latlon1`, `latlon23`, `latlon45`, `mobileaction`, `pointofinterest`, `pointofinterestdistance`

* Supported Actions: `delete`

```json
{
    "variables": {
        "latlon45": {
            "action": "delete"
        }
    }
}
```

### `videoadname`, `videoadplayername`, `videoadadvertiser`, `videoaudioalbum`, `videoaudioartist`, `videoaudioauthor`, `videoaudiolabel`, `videoaudiopublisher`, `videoaudiostation`, `videoadcampaign`, `videochannel`, `videocontenttype`, `videoepisode`, `videofeedtype`, `videomvpd`, `videoname`, `videonetwork`, `videopath`, `videoplayername`, `videoseason`, `videoshow`, `videoshowtype`, `videostreamtype`

* Supported Actions: `delete`, `set`

```json
{
    "variables": {
        "videoadname": {
            "action": "set",
            "setValue": "new value"
        }
    }
}
```

### `video`, `videoad`

* Supported Actions: `set`

```json
{
    "variables": {
        "video": {
            "action": "set",
            "setValue": "new value"
        }
    }
}
```

## Actions

### `delete`

* All values for the specified variable are deleted for the indicated timeframe
* Supported Filters: `inList`, `containsAtSign`

```json
{
    "variables": {
        "evar1": {
            "action": "delete"
        }
    }
}
```

### `set`

  * Set the variable to a fixed value for the indicated timeframe
  * Supported Filters: `inList`, `isEmpty`, `containsAtSign`

```json
{
    "variables": {
        "evar1": {
            "action": "set",
            "setValue": "new value"
        }
    }
}
```
  
## Filters

### `inList`

  * Limit the action to variables whose current value is in a given list
  * There can be at most 1000 lookup values to match against.
  
```json
{
    "variables": {
        "evar1": {
            "action": "delete",
            "filter": {
                "condition": "inList",
                "matchValues": ["match1", "match2]
            }
        }
    }
}
```

### `isEmpty`

* Limit the action to variables whose current value is empty

```json
{
    "variables": {
        "evar1": {
            "action": "set", 
            "setValue": "new value", 
            "filters": {
                "condition": "isEmpty"
            }
        }
    }
}
```
  
### `containsAtSign`

* Limit the action to variables whose current value contains the character `@`

```json
{
    "variables": {
        "evar1": {
            "action": "delete",
            "filters": {
                "condition": "containsAtSign"
            }
        }
    }
}
```

## Example body

You can perform multiple actions on multiple variables in the same job.

```json
{
  "variables": {
    "activitymap": {
      "action": "delete"
    },
    "prop12": {
      "action": "delete"
    },
    "evar74": {
      "action": "set",
      "setValue": "new value"
    },
    "evar107": {
      "action": "delete",
      "filter": {
        "condition": "inList",
        "matchValues": ["evar value 1", "evar value 2"]
      }
    }
  }
}
```
