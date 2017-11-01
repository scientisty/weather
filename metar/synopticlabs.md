## SynopticLabs

* [Mesnonet API](https://synopticlabs.org/api/) is the future
* [Mesonet API Reference](https://synopticlabs.org/api/mesonet/reference/)


## Services

### /stations

Stations can be selected by:

* `stid` (station id)
* `state`
* `county`
* `nwszone`
* `cwa`
* `network`

* `radius`
* `bbox`
* etc.

What is returned:

`output` defaults to `JSON` but can also choose `geoJSON`

The `JSON` output returns `STATION` array and `SUMMARY`

* `ID`
* `MNET_ID`
* `NAME`
* `STID`
* `ELEVATION`
* `LONGITUDED`
* `LATITUDE`
* `STATE`
* `TIMEZONE`
* etc.

The [`geoJSON`](https://synopticlabs.org/api/mesonet/reference/#GeoJSON_Responses) response returns

    {
      "type": "FeatureCollection",
      "features": [
        {
          "geometry" {
            "type": "Point",
            "coordinates": []
          },
          "type": "Feature",
          "properties": {
            ...
          }
        },
        ...
      ]
    }

#### /stations/metadata

#### /stations/timeseries

...

### /networks

### /networktypes

...
