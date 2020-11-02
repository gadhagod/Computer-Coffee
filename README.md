# Computer Coffee

You know when you're running some tests on your computer that lasts a while, but if you're computer goes to sleep it will stop running, so you have to sit in front of your computer until it finishes? This problem is now solved with the **Computer Coffee** command line interface! &nbsp;

### Installation

    npm i computer-coffee -g

### Usage

    coffee-drink
With the above command, your computer will have it's <kbd>alt</kbd> key pressed every thirty seconds until the program is stopped. \
If you wish, you can change these settings.

### Settings
By default, <kdb>alt</kbd> is pressed every thirty seconds until you kill the script, but you can change these settings. 

You can set the key repeat delay by setting the enviroment variable `COFFEE_INTERVAL`. 

    export COFFEE_INTERVAL=5
The above command will set the delay to five seconds. \
The delay can't have decimals.

You can set the key to be repeated by setting the enviroment varibale `COFFEE_KEY`.

    export COFFEE_KEY=enter
The above command will have <kbd>enter</kbd> pressed at the interval.

You can set the stop time by setting the enviroment variable `COFFEE_STOP`.

    export COFFEE_STOP=17:36
The above command will allow the computer to sleep at 17:36. \
Time is in military time format.