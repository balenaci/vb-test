'use strict';

const _ = require('lodash')
const semver = require('semver')
const path = require('path')

// const octokit = require('octokit')
module.exports = {
  // Always add the entry to the top of the Changelog, below the header.
  addEntryToChangelog: {
    preset: 'prepend',
    fromLine: 6
  },
  getChangelogDocumentedVersions: {
    preset: 'changelog-headers',
    clean: false
  },
  updateVersion: {
    preset: 'npm',
    clean: false
  }
};