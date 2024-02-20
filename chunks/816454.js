"use strict";
E.r(_), E.d(_, {
  getWindowId: function() {
    return o
  },
  setupWindowId: function() {
    return I
  },
  getMainWindowId: function() {
    return T
  }
});
var t = E("917351");

function o(e) {
  return e.__DISCORD_WINDOW_ID
}

function I(e) {
  let _ = (0, t.uniqueId)("window-");
  return e.__DISCORD_WINDOW_ID = _, _
}

function T() {
  return o(window)
}