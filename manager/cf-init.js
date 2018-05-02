#!/usr/bin/env node

var Command = require('commander').Command,
    program = require('commander'),
    fs = require('fs-extra'),
    chalk = require('chalk'),
    inquirer = require('inquirer'),
    path = require('path'),
    utils = require('./utils');

var NPMI = require('spawn-npm-install');

program
    // .usage('[path]')
    .description(chalk.yellow('Initialize a new component library.'));

/**
 * Override argv[1] so that usage command is
 * formatted correctly.
 */
process.argv[1] = 'patterns init';

program.parse(process.argv);


/**
 * Automatically output help if no parameters are passed.
 */
if (!process.argv.slice(1).length) {
    program.outputHelp();
}

/**
 * Initialize pattern library.
 */
// var path = program.args[0];
var path = `.${path.sep}`;
if (path) {
    utils.setup(path, function() {

        console.log();
        console.log(chalk.grey('----------------------------------------------------------------'));
        console.log(chalk.green('\u2713 Initializing project...'));
        console.log(chalk.grey('----------------------------------------------------------------'));
        console.log();

        console.log();
        console.log(chalk.grey('----------------------------------------------------------------'));
        console.log(chalk.green('\u2713 Installing dependencies. Please wait...'));
        console.log(chalk.grey('----------------------------------------------------------------'));
        console.log();

        NPMI('live-server', () => {
            console.log();
            console.log(chalk.grey('----------------------------------------------------------------'));
            console.log(chalk.green('\u2713 Component library initialized successfully.'));
            console.log(chalk.grey('----------------------------------------------------------------'));
            console.log();
            console.log(chalk.yellow('To get started add your first component using:'));
            console.log();
            console.log(chalk.yellow('$ cf new [group_name/component_name]'));
            console.log();
            console.log(chalk.yellow('To customise your pattern library locate your data.json file'));
            console.log(chalk.yellow('in ' + path + ' and add your project details.'));
            console.log();
        });
    });
}