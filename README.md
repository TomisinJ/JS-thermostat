## Specification:

```
- Thermostat starts at 20 degrees

- You can increase the temperature with an up function

- You can decrease the temperature with a down function

- The minimum temperature is 10 degrees

- If power saving mode is on, the maximum temperature is 25 degrees

- If power saving mode is off, the maximum temperature is 32 degrees

- Power saving mode is on by default but it can also be turned off

- You can reset the temperature to 20 with a reset function

- You can ask about the thermostat's current energy usage: < 18 is low-usage, <= 25 is medium-usage, anything else is high-usage.

(In the challenges where we add an interface, low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.)
```
## User Stories

```
As a user,
So that I can see the temperature,
I want the thermostat to start at 20 degrees
```

```
As a user,
So that I can raise the temperature,
I want to increase the temperature with an up function
```

```
As a user,
So that I do not decrease the temperature too much,
I want the thermostat to have a minimum temperature
```

```
As a user,
So that I can save energy
I want to turn power saving mode on (and have a maximum temperature limit of 25 degrees)
```

```
As a user, 
So that I can regulate the energy use,
When PSM is on the maximum temperature is 25 degrees
```

```
As a user,
So that I can regulate the temperature,
The thermostat can be reset to 20 degrees
```

```
As a user,
So that I can see energy usage,
The thermostat can display current energy usage
```

Controls
- up : thermostat.up()
- down : thermostat.down()
- PSM on : thermostat.switchPowerSavingModeOn()
- PSM off : thermostat.switchPowerSavingModeOff()
- reset : thermostat.resetTemperature()

Displayed Data
- display temperature : thermostat.getCurrentTemperature()

Changing Displayed Data
- PSM on : thermostat.isPowerSavingModeOn()
- Energy usage : thermostat.getEnergyUsage()