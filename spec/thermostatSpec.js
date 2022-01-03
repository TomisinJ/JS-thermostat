'use strict';

describe('Thermostat', () => {
  let thermostat;

  beforeEach(() => {
    thermostat = new Thermostat();
  });

  it('has a stating temperature of 20 degrees', () => {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

});