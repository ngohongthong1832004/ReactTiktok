const {
  override, useBabelRc,
} = require("customize-cra");
// const path = require("path");

module.exports = override(
  // enable legacy decorators babel plugin
  useBabelRc()
);