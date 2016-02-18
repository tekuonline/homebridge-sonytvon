# Turn on Sony TV plugin for Homebridge (beta)
### Turn ON your Sony TV through Siri

###### Installing

To install the plugin, head over to the machine with Homebridge set up and run
```
sudo npm install -g homebridge-sonytvon
```

###### Configuration

To make Homebridge aware of the new plugin, you will have to add it to your configuration usually found in `.homebridge/config.json`. Somewhere inside that file you should see a key named `accessories`. This is where you can add your tv as shown here:

```
"accessories": [
    {
      "accessory": "Sony",
      "name": "Living Room TV",
      "mac": "<mac-address of your TV>",
      "ip": "10.0.1.23"
    } 
]