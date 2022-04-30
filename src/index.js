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

const cwd = process.cwd();

const frameWorks = [
  {
    name: "javascript",
    colour: yellow,
    variants: [
      {
        name: "javascript",
        display: "JavaScript",
        colour: yellow,
      },
    ],
  },
  {
    name: "typescript",
    colour: blue,
    variants: [
      {
        name: "typescript",
        colour: blue,
        display: "TypeScript",
      },
    ],
  },
];

const templates = frameWorks
  .map(
    (frameWork) =>
      (frameWork.variants && frameWork.variants.map((v) => v.name)) ||
      frameWork.name,
  )
  .reduce((a, b) => a.concat(b), []);

const renameFiles = {
  _gitignore: ".gitignore",
};

async function initialise() {
  let targetDir = argv._[0];
  let template = argv.template || argv.t;
}
