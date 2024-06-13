"use strict";
n.r(t), n.d(t, {
  dismissAppLauncher: function() {
    return s
  },
  showAppLauncher: function() {
    return r
  }
});
var i = n("570140");

function r(e) {
  i.default.dispatch({
    type: "APP_LAUNCHER_SHOW",
    entrypoint: e
  })
}

function s() {
  i.default.dispatch({
    type: "APP_LAUNCHER_DISMISS"
  })
}