"use strict";
n.r(t), n.d(t, {
  dismissAppLauncherPopup: function() {
    return s
  },
  showAppLauncherPopup: function() {
    return r
  }
});
var i = n("570140");

function r() {
  i.default.dispatch({
    type: "APP_LAUNCHER_SHOW_POPUP"
  })
}

function s() {
  i.default.dispatch({
    type: "APP_LAUNCHER_DISMISS_POPUP"
  })
}