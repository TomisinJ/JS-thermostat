'use strict';

class Thermostat{

  constructor() {
    this.temperature = 20;
    this.MINIMUM_TEMPERATURE = 10;
    this.powerSavingMode = true;
    this.MAXIMUM_TEMPERATURE_PS_ON = 25;
    this.MAXIMUM_TEMPERATURE_PS_OFF = 32;
    this.DEFAULT_TEMPERATURE = 20;
  };

  getCurrentTemperature() {
    return this.temperature;
  }

  up() {
    if (this.isMaximumTemperature()) {
      return;
    }
    this.temperature += 1;
  }

  down() {
    if (this.isMinimumTemperature()) {
      return;
    }
    this.temperature -= 1;
  }

  isMinimumTemperature() {
    return this.temperature === this.MINIMUM_TEMPERATURE;
  }

  isPowerSavingModeOn() {
    return this.powerSavingMode === true;
  }

  switchPowerSavingModeOff() {
    this.powerSavingMode = false;
  }
  switchPowerSavingModeOn() {
    this.powerSavingMode = true;
  }

  isMaximumTemperature() {
    if (this.isPowerSavingModeOn()) {
      return this.temperature === this.MAXIMUM_TEMPERATURE_PS_ON;
    }
    return this.temperature === this.MAXIMUM_TEMPERATURE_PS_OFF;
  }

  resetTemperature() {
    this.temperature = this.DEFAULT_TEMPERATURE;
  }

};