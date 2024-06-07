"use strict";
n.r(t);
var i, r, s, a, o = n("442837"),
  l = n("570140");
let u = {
  showPopup: !1
};

function d() {
  return u.showPopup = !1, !0
}
class _ extends(a = o.default.Store) {
  initialize() {}
  shouldShowPopup() {
    return u.showPopup
  }
}
s = "AppLauncherStore", (r = "displayName") in(i = _) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s, t.default = new _(l.default, {
  APP_LAUNCHER_SHOW_POPUP: function() {
    return u.showPopup = !0, !0
  },
  APP_LAUNCHER_DISMISS_POPUP: d,
  CONNECTION_OPEN: d,
  LOGOUT: d,
  CHANNEL_SELECT: d,
  APPLICATION_COMMAND_SET_ACTIVE_COMMAND: d,
  APP_LAUNCHER_SET_ACTIVE_COMMAND: d
})