/**
 * Build configuration for the packaging tool. This file will be automatically detected and used
 * to build the different packages inside of Material.
 */
const {join} = require('path');

/** Current version of the project*/
const buildVersion = require('./src/jigsaw/package.json').version;

/** License that will be placed inside of all created bundles. */
const buildLicense = `/**
  * @license RDK Jigsaw v${buildVersion}
  * Copyright (c) 2017 ZTE, Inc. http://rdk.zte.com.cn/jigsaw
  * License: MIT
  */`;

module.exports = {
  projectVersion: buildVersion,
  projectDir: __dirname,
  packagesDir: join(__dirname, 'src'),
  outputDir: join(__dirname, 'dist'),
  licenseBanner: buildLicense
};
