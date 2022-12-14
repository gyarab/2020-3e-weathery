# [API docs](https://weathery.svs.gyarab.cz/)

## GET /api/stations
Tento endpoint vám vrátí GPS všech měřících stanic <br>
format dat:
```javascript
{
  "message": "ok",
  "stations": [
     {"gps": "50.0993194_14.3596525"},
     {"gps": "49.7454400_14.0578025"},
  ]
}
```

## GET /api/now/{gps}
vrati aktualni pocasi stanice s temito GPS <br/> 
format dat:
```javascript
{
  "message": "ok",
  "time": "str",                // d-m-y H:M:S
  "temperature": "float",        // C
  "humidity": "float",          // %
  "pressure": "float",           // Pa
  "wind_speed": "float",         // km/h
  "wind_direction": "str",     // directions
  "rain": "float"                // mm/h 
}
```

## GET /api/stats/{gps}?date_from={from}&date_to={to}
vrati zprumerovane data v danem casomev intervalu <br/>
- (interval <= DEN) -> prumer z kazde hodiny 
- (interval <= 3 MESICE) -> prumer z kazdeho dne
- (interval > 3 MESICE) -> prumer z kazedeho tydne

```javascript
{
  "message": "ok", 
  "data": [
    {
      "time": "str",               // d-m-y H:M:S
      "temperature": "float",        // C
      "humidity": "float",           // %
      "pressure": "float",           // Pa
      "wind_speed": "float",         // km/h
      "wind_direction": "str",     // directions
      "rain": "float",               // mm/h
      "average_of": "int"          // sum  
    },
    {
      "time": "str",               // d-m-y H:M:S
      "temperature": "float",        // C
      "humidity": "float",           // %
      "pressure": "float",           // Pa
      "wind_speed": "float",         // km/h
      "wind_direction": "str",     // directions
      "rain": "float",                // mm/h 
      "average_of": "int"          // sum  
    },
    ...
  ]
}
```

## POST /api/station/update
server si pres token overi jaka stanice posila data a ulozi je do databaze pod prislusnou stanici

## POST /api/station/register
server si podle secret_key overi ze stanice je realna a vytvori ji token s kterym se pozdeji stanice prokazuje a dale stanici zapise do databaze
