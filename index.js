#!/usr/bin/env node

var colors = require('colors')
var kbd = require("robotjs")

function press(){
    if (process.env.COFFEE_KEY){
        key = process.env.COFFEE_KEY
    } else{
        key = 'alt'
    }
    if (process.env.COFFEE_STOP){
        var today = new Date()
        min = today.getMinutes() + ''
        if (min.legnth == 1){
            min = '0' + min
        }
        hr = today.getHours() + ''
        if (hr.legnth == 1){
            hr = '0' + hr
        }
        console.log(hr + ":" + min)
        if (hr + ":" + min == process.env.COFFEE_STOP){
            console.log('Out of coffee!'.bgRed)
            process.exit()
        }
    }
    kbd.keyTap(key)
}

if (process.env.COFFEE_KEY){
    prompt = 'Pressing \'' + process.env.COFFEE_KEY.inverse + '\''
} else{
    prompt = 'Pressing \'alt\''
}
if (process.env.COFFEE_INTERVAL){
    interval = parseInt(process.env.COFFEE_INTERVAL) * 1000
    prompt = prompt + ' every ' + process.env.COFFEE_INTERVAL.inverse + ' seconds'
} else{
    interval = 30000
    prompt = prompt + ' every 30 seconds'
}
if (process.env.COFFEE_STOP){
    prompt = prompt + ' until ' + process.env.COFFEE_STOP.inverse
} else{
    prompt = prompt + ' until stopped'
}
console.log(prompt)

setInterval(press, interval) 