"use strict";

var wol = require("wake_on_lan");

var Service, Characteristic;

module.exports = function(homebridge) {

  Service = homebridge.hap.Service;
  Characteristic = homebridge.hap.Characteristic;

  homebridge.registerAccessory("homebridge-sonytvon", "Sony", Sony);
}

function Sony(log, config) {
  this.log = log;
  this.name = config.name;
  this.mac = config.mac;

  this._service = new Service.Switch(this.name);
  this._service.getCharacteristic(Characteristic.On)
    .on('set', this._setOn.bind(this));
}

Sony.prototype.getServices = function() {
  return [this._service];
}

Sony.prototype._setOn = function(on, callback) {

  if(on){
    wol.wake(this.mac, function(error) {
      if (error) {
        this._service.setCharacteristic(Characteristic.On, false);
        this.log("Error when sending packets", error);
      } else {
        this.log("Packets sent");
        setTimeout(function() {
          this._service.setCharacteristic(Characteristic.On, false);
        }.bind(this), 30000);
      }
    }.bind(this));
  }

  callback();
}
