#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const argv = require("minimist")(process.argv.slice(2), { string: ["_"] });
const prompts = require("prompts");

const {
    yellow,
    green,
    cyan,
    blue,
    magenta,
    lightRed,
    red,
    reset,
} = require("kolorist");
